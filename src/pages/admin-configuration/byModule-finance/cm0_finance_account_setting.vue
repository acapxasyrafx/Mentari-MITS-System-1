/* eslint-disable no-unused-expressions */
<template>
  <va-card>
    <!-- Country -->
   <!-- <vudal name="simpleModalEditCountry " class="widthModal">
      <div class="header">Edit Country<i class="close icon">&times;</i></div>
      <div class="content">
        <vue-form-generator
          :model="model"
          :schema="editCountrySchema"
          :options="formOptions" />
      </div>
      <div class="actions">
        <button  type="button" class="cancel vudal-btn mr-2 btn btn-danger btn-fill btn-md"><i class="fa fa-times" /> &nbsp; Close </button>
        <button @click="updateCountryAPI" type="button" class="cancel vudal-btn mr-2 btn btn-primary btn-fill btn-md"><i class="fa fa-edit" /> &nbsp; Update </button>
      </div>
   </vudal> -->
<!-- State -->
<!-- <vudal name="simpleModalEditState" class="widthModal">
      <div class="header">Edit State<i class="close icon">&times;</i></div>
      <div class="content">
        <vue-form-generator
          :model="model"
          :schema="editStateSchema"
          :options="formOptions" />
      </div>
      <div class="actions">
        <button  type="button" class="cancel vudal-btn mr-2 btn btn-danger btn-fill btn-md"><i class="fa fa-times" /> &nbsp; Close </button>
        <button @click="updateStateAPI" type="button" class="cancel vudal-btn mr-2 btn btn-primary btn-fill btn-md"><i class="fa fa-edit" /> &nbsp; Update </button>
      </div>
   </vudal> -->

    <h4 slot="header" class="card-title">FINANCE SETTING</h4>
    <br />
    <div>
      <tabs
        :tabs="tabs"
        :currentTab="currentTab"
        :wrapper-class="'default-tabs'"
        :tab-class="'default-tabs__item'"
        :tab-active-class="'default-tabs__item_active'"
        :line-class="'default-tabs__active-line'"
        @onClick="handleClick"
      />
      <!-- <div class="content"> -->
      <div v-if="currentTab === 'tab1'">
        <div class="ml-5">
          <br />
          <vue-form-generator
            :model="model"
            :schema="Tab1Schema"
            :options="formOptions"
            ref="Tab1Form"
          >
          </vue-form-generator>
          <br />
          <div class="text-center">
            <button
              @click="addAccCode"
              type="button"
              class="btn btn-warning btn-fill btn-md"
            >
              <i class="fa fa-plus" /> &nbsp; ADD PARAMETER
            </button>
          </div>
          <br />
          <h4>LIST O ACCOUNT CODE</h4>
          <!-- list -->
          <va-card class="mt-2">
            <va-data-table
              :fields="AccCodefields"
              :data="filteredDataAccCode"
              :per-page="parseInt(perPage)"
            clickable>
              <template slot="no" slot-scope="row">
                {{ row.rowIndex + 1 }}
              </template>

              <template slot="actions" slot-scope="props">
                <h4 class="mt-2">
                  <span class="badge badge-danger mr-1" v-on:click="deleteAccCode(props.rowData)">
                    <i class="fa fa-trash"></i></span>
                </h4>
              </template>
            </va-data-table>
            <br />
            <!-- <div class="float-left">
              <button
                
                type="button"
                class="btn btn-primary btn-fill btn-md"
              >
                <i class="fa fa-upload" /> &nbsp; Bulk Upload
              </button>
            </div> -->
          </va-card>
        </div>
      </div>

      <!-- State --> 
      <div v-if="currentTab === 'tab2'">
        <div class="ml-5">
          <br />
          <vue-form-generator
            :model="model"
            :schema="Tab2Schema"
            :options="formOptions"
            ref="Tab2Form"
          >
          </vue-form-generator>
          <br />
          <div class="text-center">
            <button
              @click="addGLCode"
              type="button"
              class="btn btn-warning btn-fill btn-md"
            >
              <i class="fa fa-plus" /> &nbsp; ADD PARAMETER
            </button>
          </div>
          <br />

          <h4>LIST OF COST CENTER</h4>
			  <va-card class="mt-2">
				<va-data-table
				  :fields="GlCodeFields"
				  :data="filteredDataGlCode"
				  :per-page="parseInt(perPage)"
				clickable>
				  <template slot="no" slot-scope="row">
					{{ row.rowIndex + 1 }}
				  </template>
				  <template slot="actions" slot-scope="props">
					<h4 class="mt-1">
					  <span class="badge badge-danger mr-1" v-on:click="deleteGLCode(props.rowData)">
						<i class="fa fa-trash"></i
						></span>
					</h4>
				  </template>
				</va-data-table>
            <div class="float-left">
              <button
                
                type="button"
                class="btn btn-primary btn-fill btn-md"
              >
                <i class="fa fa-upload" /> &nbsp; Bulk Upload
              </button>
            </div>
          </va-card>
        </div>
        <br />
        <h4>List of Cost Center</h4>
        <br />
        <vue-form-generator
          :model="model"
          :schema="dpmtFilterSchema"
          :options="formOptions"
          ref="dpmtForm">
        </vue-form-generator>

        <va-card class="mt-2">
          <va-data-table
            :fields="departmentFields"
            :data="dpmtFilteredData"
            :per-page="parseInt(perPage)"
            clickable>

            <template slot="no" slot-scope="row">
              {{ row.rowIndex + 1 }}
            </template>

            <template slot="actions" slot-scope="props">
              <h4 class="mt-1">

                <span v-b-tooltip.hover title="edit" v-on:click="editDepartment(props.rowData)" class="badge badge-primary mr-2">
                  <i class="fa fa-edit"></i></span>
                <span v-b-tooltip.hover title="delete" v-on:click="deleteDepartment(props.rowData)" class="badge badge-danger mr-1">
                  <i class="fa fa-trash"></i></span>

              </h4>
            </template>
          </va-data-table>
        </va-card>

      </div>

      <!-- </div> -->
    </div>
  </va-card>
</template>
<script>
// eslint-disable-next-line no-unused-vars
import Vue from 'vue'
import 'vue-form-generator/dist/vfg.css'
import Vudal from 'vudal'
import * as servicesModule0 from "../../../app/module0/services02"
import Tabs from 'vue-tabs-with-active-line'
const TABS = [
  { title: 'Setting 1 : ACCOUNT CODE', value: 'tab1' },
  { title: 'Setting 2 : CODE SETTING', value: 'tab2' },
]

export default {

  mounted() {
    this.getAllAccCode()
    this.getAllAccGLCode()

  },
  components: {
    Tabs,
    Vudal,
  },

  computed: {
    AccCodefields () {
      return [
        {
          name: '__slot:marker',
          width: '30px',
          dataClass: 'text-center',
        },
        {
          name: '__slot:no',
          title: 'No',
        },
        {
          name: 'ACC_CODE',
          title: 'ACCOUNT CODE',
        },
        {
          name: 'ACC_NAME',
          title: 'ACCOUNT NAME',
        },
        {
          name: '__slot:actions',
          title: 'Action',
          dataClass: 'justify-content-center',
          width: '15%',
        },
      ]
    },
    filteredDataAccCode() {
      if (!this.term || this.term.length < 1) {
        return this.AccCodeList
      }

      return this.AccCodeList.filter(item => {
        return item.title.toLowerCase().startsWith(this.term.toLowerCase())
      })
    },
    GlCodeFields () {
      return [
        {
          name: '__slot:marker',
          width: '30px',
          dataClass: 'text-center',
        },
        {
          name: '__slot:no',
          title: 'No',
        },
        {
          name: 'FINANCE_ACC_CODE_ID',
          title: 'ACCOUNT CODE',
        },
        {
          name: 'DIST_ID',
          title: 'DISTRIBUTOR NAME',
        },
        {
          name: 'GL_CODE',
          title: 'CODE',
        },
        {
          name: '__slot:actions',
          title: 'Action',
          dataClass: 'justify-content-center',
          width: '15%',
        },
      ]
    },
    filteredDataGlCode() {
      if (!this.term || this.term.length < 1) {
        return this.GlCodeList
      }

      return this.GlCodeList.filter(item => {
        return item.title.toLowerCase().startsWith(this.term.toLowerCase())
      })
    },

  },
  

  data () {
    return {
      term: null,
      perPage: '6',
      tabs: TABS,
      currentTab: 'tab1',
      AccCodeList: [],
      GlCodeList: [],

    
      model: {
        // TAB 1
        ACC_CODE: '' ,
        ACC_NAME: '' , 
        FINANCE_ACC_CODE_ID: '' ,
        DIST_ID: '',
        GL_CODE: '',
        distSelection: '',
        AccCodeID: '',
     
      },

      formOptions: {
        validateAfterChanged: true,
      },

      Tab1Schema: {
        groups: [
          {
            styleClasses: 'row mt-2',
            fields: [
              {
                type: 'input',
                inputType: 'Text',
                model: 'ACC_CODE',
                label: 'ACCOUNT CODE',
                placeholder: 'ENTER ACCOUNT CODE',
                required: true,
                styleClasses: 'col-md-6',
              },
              {
                type: 'input',
                inputType: 'text',
                model: 'ACC_NAME',
                label: 'ACCOUNT NAME',
                placeholder: 'ENTER ACCOUNT NAME',
                styleClasses: 'col-md-6',
              
              },
              {
                type: 'input',
                inputType: 'Text',
                model: 'editAccountName',
                label: 'Account Name',
                placeholder: 'Enter Account Name',
                required: true,
                styleClasses: 'col-md-12'
              }
            ]
          }
        ]
      },
      Tab2Schema: {
        groups: [
          {
            styleClasses: 'row mt-2',
            fields: [
              {
                type: 'vueMultiSelect',
                inputType: 'Text',
                model: 'AccCodeID',
                label: 'ACCOUNT CODE',
                placeholder: 'ENTER ACCOUNT CODE',
                selectOptions: { multiple: false, key: 'FINANCE_ACC_CODE_ID', label: 'ACC_CODE', searchable: true },
                values: (model, schema) => { return this.AccCodeList },
                required: true,
                styleClasses: 'col-md-4',
                
              },
              {
                type: 'vueMultiSelect',
                inputType: 'Text',
                model: 'distSelection',
                label: 'DISTRIBUTOR NAME',
                placeholder: 'ENTER DISTRIBUTOR NAME',
                selectOptions: { multiple: false, key: 'DIST_ID', label: 'DIST_NAME', searchable: true },
                values: (model, schema) => { return this.AccCodeList },
                required: true,
                styleClasses: 'col-md-4',
                
              },
              {
                type: 'input',
                inputType: 'text',
                model: 'GL_CODE',
                label: 'CODE',
                placeholder: 'ENTER CODE',
                styleClasses: 'col-md-4',
                
              },
              {
                type: 'input',
                inputType: 'Text',
                model: 'DPMT_NAME',
                label: 'Department Name',
                placeholder: 'Enter department',
                required: true,
                styleClasses: 'col-md-12',
                validator: 'required',
              }
            ]
          }
        ]
      },
      // Tab3Schema: {
      //   groups: [
      //     {
      //       styleClasses: 'row mt-2',
      //       fields: [
      //         {
      //           type: 'vueMultiSelect',
      //           inputType: 'Text',
      //           model: 'STATE_NAME',
      //           label: 'State Name ',
      //           placeholder: 'Enter State Name',
      //           selectOptions: { multiple: false, key: 'SETTING_GENERAL_ID', label: 'SET_PARAM', searchable: true },
      //           values: (model, schema) => { return this.CountryList },
      //           required: true,
      //           styleClasses: 'col-md-4',
      //           hint: 'e.g. Malaysia ',
      //         },
      //         {
      //           type: 'input',
      //           inputType: 'text',
      //           model: 'SET_CITY_NAME',
      //           label: 'City Name',
      //           placeholder: 'Enter City Name',
      //           styleClasses: 'col-md-4',
      //           hint: 'e.g. Gombak ',
      //         },
      //         {
      //           type: 'input',
      //           inputType: 'text',
      //           model: 'POSTCODE_NO',
      //           label: 'Postcode Number',
      //           placeholder: 'Enter Postcode Number',
      //           styleClasses: 'col-md-4',
      //           hint: 'e.g. 68100 ',
      //         },
      //       ],
      //     },
      //   ],
      // },
      
    

    }
  },

  methods: {
    handleClick (newTab) { this.currentTab = newTab }, // end tab
    back () { this.$router.go(-1) }, // end tab
 
    //ACC CODE

    getAllAccCode: async function() {
    const response = await servicesModule0.getAllAccCodeList();
    this.AccCodeList = response;
    },

    async addAccCode () {
    if (this.$refs.Tab1Form.validate()) {
      const data = new FormData()
      data.append('ACC_CODE', this.model.ACC_CODE)
	  data.append('ACC_NAME', this.model.ACC_NAME)
      try {
        // eslint-disable-next-line no-unused-vars
        const response = await servicesModule0.createAccCode(data)
        this.getAllAccCode()
      } catch (error) {
        console.log(error)
      }
    }
    },

    async deleteAccCode(data) {
    // eslint-disable-next-line no-unused-vars
    const response = await servicesModule0.deleteAccCode(data.FINANCE_ACC_CODE_ID)
    this.getAllAccCode()
    },

    // async editCountry (data) {
    // const response = await servicesModule0.getSettingGeneralById(data.SETTING_GENERAL_ID)
    // this.$modals.simpleModalEditCountry.$show()
    // this.SETTING_GENERAL_ID = response.SETTING_GENERAL_ID
    // this.model.SET_PARAM = response.SET_PARAM
	  // this.model.SET_CODE = response.SET_CODE
    // },

    // async updateCountryAPI () {
    //   try {
    //     const data = new FormData()
    //     data.append('SETTING_GENERAL_ID', this.SETTING_GENERAL_ID)
    //     data.append('SET_PARAM', this.model.SET_PARAM)
		//     data.append('SET_CODE', this.model.SET_CODE)
    //     // console.log("data :" + data);
    //     // eslint-disable-next-line no-unused-vars
    //     const response = await servicesModule0.updateCountry(data)
    //     this.getAllCountry()
    //   } catch (error) {
    //     console.log(error)
    //   }
    // },
  // ----------------- Code Setting---------------

  getAllAccGLCode: async function() {
    const response = await servicesModule0.getAllGlCodeList();
    this.GlCodeList = response;
    },
    async addGLCode () {
    if (this.$refs.Tab2Form.validate()) {
      const data = new FormData()
      data.append('FINANCE_ACC_CODE_ID', this.model.FINANCE_ACC_CODE_ID)
	  data.append('DIST_ID', this.model.distSelection.DIST_ID)
    data.append('GL_CODE', this.model.GL_CODE)
      try {
        // eslint-disable-next-line no-unused-vars
        const response = await servicesModule0.createGLCode(data)
        this.getAllAccGLCode()
        this.model.distSelection = ''
        this.model.AccCodeID = ''
      } catch (error) {
        console.log(error)
      }
    }
    },
    async deleteGLCode(data) {
    // eslint-disable-next-line no-unused-vars
    const response = await servicesModule0.deleteGLCode(data.FINANCE_ACC_GLCODE_ID)
    this.getAllAccCode()
    },



    

  }


}
</script>

