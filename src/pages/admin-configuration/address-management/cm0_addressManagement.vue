/* eslint-disable no-unused-expressions */
<template>
  <va-card>
    <!-- Country -->
    <vudal name="simpleModalEditCountry " class="widthModal">
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
    </vudal>
    <!-- State -->
    <vudal name="simpleModalEditState" class="widthModal">
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
    </vudal>

    <h4 slot="header" class="card-title">Address Setting</h4>
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
              @click="addCountry"
              type="button"
              class="btn btn-warning btn-fill btn-md"
            >
              <i class="fa fa-plus" /> &nbsp; Add Parameter
            </button>
          </div>
          <br />
          <h4>List of Country</h4>
          <!-- list -->
          <va-card class="mt-2">
            <va-data-table
              :fields="countryfields"
              :data="filteredDataCountry"
              :per-page="parseInt(perPage)"
              clickable>
              <template slot="no" slot-scope="row">
                {{ row.rowIndex + 1 }}
              </template>

              <template slot="actions" slot-scope="props">
                <h4 class="mt-2">
                  <span class="badge badge-primary mr-1" v-on:click="editCountry(props.rowData)">
                    <i class="fa fa-edit"></i></span>
                  <span class="badge badge-danger mr-1" v-on:click="deleteCountry(props.rowData)">
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
              @click="addState"
              type="button"
              class="btn btn-warning btn-fill btn-md"
            >
              <i class="fa fa-plus" /> &nbsp; Add Parameter
            </button>
          </div>
          <br />

          <h4>List of State</h4>
          <va-card class="mt-2">
            <va-data-table
              :fields="statefields"
              :data="filteredDataState"
              :per-page="parseInt(perPage)"
              clickable>
              <template slot="no" slot-scope="row">
                {{ row.rowIndex + 1 }}
              </template>
              <template slot="actions" slot-scope="props">
                <h4 class="mt-1">
                  <span class="badge badge-primary mr-1" v-on:click="editState(props.rowData)">
                    <i class="fa fa-edit"></i
                    ></span>
                  <span class="badge badge-danger mr-1" v-on:click="deleteState(props.rowData)">
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
      </div>

      <!-- Postcode -->

      <div v-if="currentTab === 'tab3'">
        <div class="ml-5">
          <br />
          <vue-form-generator
            :model="model"
            :schema="Tab3Schema"
            :options="formOptions"
            ref="Tab3Form"
          >
          </vue-form-generator>
          <br />
          <div class="text-center">
            <button
              @click="addPostcode"
              type="button"
              class="btn btn-warning btn-fill btn-md"
            >
              <i class="fa fa-plus" /> &nbsp; Add Parameter
            </button>
          </div>
          <br />

          <h4>List of Postcode</h4>
          <va-card class="mt-2">
            <va-data-table
              :fields="postcodefields"
              :data="filteredDataPostcode"
              :per-page="parseInt(perPage)"
            >
              <template slot="no" slot-scope="row">
                {{ row.rowIndex + 1 }}
              </template>
              <template slot="actions" slot-scope="">
                <h4 class="mt-2">
                  <span class="badge badge-primary mr-1"
                  ><i class="fa fa-edit"></i
                  ></span>
                  <span class="badge badge-danger mr-1">
                    <i class="fa fa-trash"></i
                    ></span>
                </h4>
              </template>
            </va-data-table>
            <br />
            <div class="float-left">
              <excelUpload 
                v-model="bulkData" 
                titleButton='Bulk Upload' 
                titleId='1' 
                @uploaded="excelData">
              </excelUpload>
            </div>
          </va-card>
        </div>
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
import * as servicesModule0 from '../../../app/module0/services'
import Tabs from 'vue-tabs-with-active-line'
const TABS = [
  { title: 'Setting 1 : Country', value: 'tab1' },
  { title: 'Setting 2 : State', value: 'tab2' },
  { title: 'Setting 3 : Postcode', value: 'tab3' },
]
export default {

  mounted () {
    this.getAllCountry()
    this.getAllState()
  },
  components: {
    Tabs,
    Vudal,
  },

  computed: {
    countryfields () {
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
          name: 'SET_PARAM',
          title: 'Country Name',
        },
        {
          name: 'SET_CODE',
          title: 'Country Code',
        },
        {
          name: '__slot:actions',
          title: 'Action',
          dataClass: 'justify-content-center',
          width: '15%',
        },
      ]
    },
    filteredDataCountry () {
      if (!this.term || this.term.length < 1) {
        return this.CountryList
      }

      return this.CountryList.filter(item => {
        return item.title.toLowerCase().startsWith(this.term.toLowerCase())
      })
    },

    statefields () {
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
          name: 'SET_VALUE',
          title: 'Country Name',
        },
        {
          name: 'SET_PARAM',
          title: 'State Name',
        },
        {
          name: '__slot:actions',
          title: 'Action',
          dataClass: 'justify-content-center',
          width: '15%',
        },
      ]
    },
    filteredDataState () {
      if (!this.term || this.term.length < 1) {
        return this.StateList
      }

      return this.StateList.filter(item => {
        return item.title.toLowerCase().startsWith(this.term.toLowerCase())
      })
    },

  },

  data () {
    return {
      term: null,
      perPage: '6',
      perPageOptions: ['4', '6', '10', '20'],
      tabs: TABS,
      currentTab: 'tab1',
      CountryList: [],
      StateList: [],
      bulkData: null,

      model: {
        // TAB 1
        SET_PARAM: '',
        SET_CODE: '',

        STATE_NAME: '',

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
                model: 'SET_PARAM',
                label: 'Country Name',
                placeholder: 'Enter country Name',
                required: true,
                styleClasses: 'col-md-8',
                hint: 'e.g. Malaysia ',
              },
              {
                type: 'input',
                inputType: 'text',
                model: 'SET_CODE',
                label: 'Country Code',
                placeholder: 'Enter country code',
                styleClasses: 'col-md-2',
                hint: 'e.g. +06 ',
              },
            ],
          },
        ],
      },

      Tab2Schema: {
        groups: [
          {
            styleClasses: 'row mt-2',
            fields: [
              {
                type: 'vueMultiSelect',
                inputType: 'Text',
                model: 'SET_PARAM',
                label: 'Country Name',
                placeholder: 'Enter country Name',
                selectOptions: { multiple: false, key: 'SETTING_GENERAL_ID', label: 'SET_PARAM', searchable: true },
                values: (model, schema) => { return this.CountryList },
                required: true,
                styleClasses: 'col-md-4',
                hint: 'e.g. Malaysia ',
              },
              {
                type: 'input',
                inputType: 'text',
                model: 'STATE_NAME',
                label: 'State Name',
                placeholder: 'Enter State Name',
                styleClasses: 'col-md-4',
                hint: 'e.g. Selangor ',
              },
            ],
          },
        ],
      },
      Tab3Schema: {
        groups: [
          {
            styleClasses: 'row mt-2',
            fields: [
              {
                type: 'vueMultiSelect',
                inputType: 'Text',
                model: 'STATE_NAME',
                label: 'State Name ',
                placeholder: 'Enter State Name',
                selectOptions: { multiple: false, key: 'SETTING_GENERAL_ID', label: 'SET_PARAM', searchable: true },
                values: (model, schema) => { return this.CountryList },
                required: true,
                styleClasses: 'col-md-4',
                hint: 'e.g. Malaysia ',
              },
              {
                type: 'input',
                inputType: 'text',
                model: 'SET_CITY_NAME',
                label: 'City Name',
                placeholder: 'Enter City Name',
                styleClasses: 'col-md-4',
                hint: 'e.g. Gombak ',
              },
              {
                type: 'input',
                inputType: 'text',
                model: 'POSTCODE_NO',
                label: 'Postcode Number',
                placeholder: 'Enter Postcode Number',
                styleClasses: 'col-md-4',
                hint: 'e.g. 68100 ',
              },
            ],
          },
        ],
      },
      editCountrySchema: {
        groups: [
          {
            styleClasses: 'row',
            fields: [
              {
                type: 'input',
                inputType: 'Text',
                model: 'SET_PARAM',
                label: 'Country Name ',
                placeholder: 'Enter Country Name',
                required: true,
                styleClasses: 'col-md-12',
              },
            ],
          },
        ],
      },
      editStateSchema: {
        groups: [
          {
            styleClasses: 'row',
            fields: [
              {
                type: 'input',
                inputType: 'Text',
                model: 'STATE_NAME',
                label: 'State Name ',
                placeholder: 'Enter State Name',
                required: true,
                styleClasses: 'col-md-12',
              },
            ],
          },
        ],
      },

    }
  },

  methods: {
    excelData(variable) {
        alert('data :')
        alert(variable)
    },
    handleClick (newTab) { this.currentTab = newTab }, // end tab
    back () { this.$router.go(-1) }, // end tab

    // Add Country

    getAllCountry: async function () {
      const response = await servicesModule0.getAllSettingGeneralList('COUNTRY')
      this.CountryList = response
    },

    async addCountry () {
      if (this.$refs.Tab1Form.validate()) {
        const data = new FormData()
        data.append('SET_PARAM', this.model.SET_PARAM)
	  data.append('SET_CODE', this.model.SET_CODE)
        data.append('SET_TYPE', 'COUNTRY')
        try {
        // eslint-disable-next-line no-unused-vars
          const response = await servicesModule0.createSettingGeneral(data)
          this.getAllCountry()
        } catch (error) {
          console.log(error)
        }
      }
    },

    async deleteCountry (data) {
    // eslint-disable-next-line no-unused-vars
      const response = await servicesModule0.deleteSettingGeneral(data.SETTING_GENERAL_ID)
      this.getAllCountry()
    },

    async editCountry (data) {
      const response = await servicesModule0.getSettingGeneralById(data.SETTING_GENERAL_ID)
      this.$modals.simpleModalEditCountry.$show()
      this.SETTING_GENERAL_ID = response.SETTING_GENERAL_ID
      this.model.SET_PARAM = response.SET_PARAM
	  this.model.SET_CODE = response.SET_CODE
    },

    async updateCountryAPI () {
      try {
        const data = new FormData()
        data.append('SETTING_GENERAL_ID', this.SETTING_GENERAL_ID)
        data.append('SET_PARAM', this.model.SET_PARAM)
		    data.append('SET_CODE', this.model.SET_CODE)
        // console.log("data :" + data);
        // eslint-disable-next-line no-unused-vars
        const response = await servicesModule0.updateCountry(data)
        this.getAllCountry()
      } catch (error) {
        console.log(error)
      }
    },
    // State
    async addState () {
      if (this.$refs.Tab2Form.validate()) {
        const data = new FormData()
        data.append('SET_PARAM', this.model.STATE_NAME)
        data.append('SET_VALUE', this.model.SET_PARAM.SET_PARAM)
        data.append('SET_TYPE', 'STATE')
        try {
        // eslint-disable-next-line no-unused-vars
          const response = await servicesModule0.createSettingGeneral(data)
          this.getAllState()
        } catch (error) {
          console.log(error)
        }
      }
    },
    getAllState: async function () {
      const response = await servicesModule0.getAllSettingGeneralList('STATE')
      this.StateList = response
    },

    async deleteState (data) {
    // eslint-disable-next-line no-unused-vars
      const response = await servicesModule0.deleteSettingGeneral(data.SETTING_GENERAL_ID)
      this.getAllState()
    },

    async editState (data) {
    // eslint-disable-next-line no-unused-vars
      const response = await servicesModule0.getSettingGeneralById(data.SETTING_GENERAL_ID)
      this.$modals.simpleModalEditState.$show()
      this.SETTING_GENERAL_ID = response.SETTING_GENERAL_ID
      this.model.STATE_NAME = response.SET_PARAM
    },

    async updateStateAPI () {
      try {
        const data = new FormData()
        data.append('SETTING_GENERAL_ID', this.SETTING_GENERAL_ID)
        data.append('SET_PARAM', this.model.STATE_NAME)

        // console.log("data :" + data);
        // eslint-disable-next-line no-unused-vars
        const response = await servicesModule0.updateSettingGeneral(data)
        this.getAllState()
      } catch (error) {
        console.log(error)
      }
    },

  },

}

</script>
