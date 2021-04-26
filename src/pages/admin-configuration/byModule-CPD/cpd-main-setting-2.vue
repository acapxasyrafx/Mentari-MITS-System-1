<template>
          <!-- 1 -->
          <va-card class=" ml-4 col-lg-10">
             <!-- CPD Point  -->
            <vudal name="simpleModalEditCPDPoint " class="widthModal">
            <div class="header">EDIT CPD POINT<i class="close icon">&times;</i></div>
            <div class="content">
              <vue-form-generator
                :model="model"
                :schema="editCPDPointSchema"
                :options="formOptions" />
            </div>
            <div class="actions">
              <button  type="button" class="cancel vudal-btn mr-2 btn btn-danger btn-fill btn-md"><i class="fa fa-times" /> &nbsp; Close </button>
              <button @click="updateCPDPointAPI" type="button" class="cancel vudal-btn mr-2 btn btn-primary btn-fill btn-md"><i class="fa fa-edit" /> &nbsp; Update </button>
            </div>
        </vudal>
        <!-- WAIVER REASON -->
         <vudal name="simpleModalEditWaiverReason " class="widthModal">
            <div class="header">EDIT WAIVER REASON<i class="close icon">&times;</i></div>
            <div class="content">
              <vue-form-generator
                :model="model"
                :schema="editWaiverReasonSchema"
                :options="formOptions" />
            </div>
            <div class="actions">
              <button  type="button" class="cancel vudal-btn mr-2 btn btn-danger btn-fill btn-md"><i class="fa fa-times" /> &nbsp; Close </button>
              <button @click="updateWaiverReasonAPI" type="button" class="cancel vudal-btn mr-2 btn btn-primary btn-fill btn-md"><i class="fa fa-edit" /> &nbsp; Update </button>
            </div>
        </vudal>
                <div class="col-lg-10">
                <h4 slot="header">SETTING BY MODULE</h4>
                </div>
                <br>
                <br>
            <h5><i class="fa fa-bank"></i>&nbsp;&nbsp; <b>CONTINUING PROFESSIONAL DEVELOPMENT (CPD)</b></h5>
            <hr>

            <div class="ml-5">
              <div>
                <span>FIVE MODULE CPD CALCULATION</span>
                <button v-if="visibleLogin == false" v-b-toggle.collapse-1 type="button" class="float-right  btn-fill btn-md"><i class="fa fa-edit"></i></button>
                <button v-if="visibleLogin == true" v-b-toggle.collapse-1 type="button" class="float-right  btn-fill btn-md"><i class="fa fa-times"></i></button>
                <!-- <div v-for="(item, index) in fivemo  dule" :key="index"></div> -->
                <b-collapse v-model="visibleLogin" class="mt-4" id="collapse-1">
                  <b-card style="background-color: #eeeeee;">
                    <div class="row">
                        <div class="ml-4 col-md-10">
                        <span class="col mt-3 description">MODULE NAME </span>
                        <input type="input" v-model="model.CPD_PROGRAM_NAME" placeholder="ENTER MODULE NAME" class=" float-right col-8 form-control form-control-md"/>
                      </div>
                    </div>
                    <br>
                    <div class="row">
                       <div class="ml-4 col-md-10">
                        <span class="col mt-3 description">CPD POINT</span>
                        <input type="input" v-model="model.CPD_MAX" placeholder="ENTER MAXIMUM POINT" class=" float-right col-4 form-control form-control-md"/>
                        <input type="input" v-model="model.CPD_MIN" placeholder="ENTER MINIMUM POINT" class=" float-right col-4 form-control form-control-md"/>

                      </div>
                    </div>
                    <br><br>
                    <div class="row">
                      <div class="col-10">
                        <button @click="submit" type="button" class="float-right btn btn-primary btn-fill btn-md"><i class="fa fa-save" />&nbsp; SAVE</button>
                      </div>
                    </div>

                    <br><br>
                    <va-card class="mt-2">
                      <va-data-table
                        :fields="fivemod"
                        :data="filteredFiveMod"
                        :per-page="parseInt(perPage)"
                      clickable>
                        <template slot="no" slot-scope="row">
                          {{ row.rowIndex + 1 }}
                        </template>

                        <template slot="actions" slot-scope="props">
                          <h4 class="mt-2">
                          <span class="badge badge-primary mr-1" v-on:click="editCPDPoint(props.rowData)">
                            <i class="fa fa-edit"></i></span>
                            <span class="badge badge-danger mr-1" v-on:click="deleteCPDpoint(props.rowData)">
                              <i class="fa fa-trash"></i></span>
                          </h4>
                    </template>
                  </va-data-table>
                  <br />
                </va-card>
                  </b-card>
                </b-collapse>
                <!-- </div> -->
                <hr>
              </div>
              <div>
                <span>CPD PROGRAM HOURS CALCULATION</span>
                <button v-if="visibleBlockDuration == false" v-b-toggle.collapse-2 type="button" class="float-right  btn-fill btn-md"><i class="fa fa-edit"></i></button>
                <button v-if="visibleBlockDuration == true" v-b-toggle.collapse-2 type="button" class="float-right  btn-fill btn-md"><i class="fa fa-times"></i></button>
                <b-collapse class="mt-4" id="collapse-2" v-model="visibleBlockDuration">
                  <b-card style="background-color: #eeeeee;">

                    <div class="row">
                      <div class="ml-4 col-md-10">
                        <span class="col mt-3 description">MODULE NAME </span>
                        <input type="input" v-model="model.CPD_PROGRAM_NAME" placeholder="ENTER MODULE NAME" class=" float-right col-8 form-control form-control-md"/>
                      </div>
                    </div>
                    <br>
                    <div class="row">
                      <div class="ml-4 col-md-10">
                        <span class="col mt-3 description">CPD POINT</span>
                        <input type="input" v-model="model.CPD_MAX" placeholder="ENTER MAXIMUM POINT" class=" float-right col-4 form-control form-control-md"/>
                        <input type="input" v-model="model.CPD_MIN" placeholder="Enter MINIMUM POINT" class=" float-right col-4 form-control form-control-md"/>

                      </div>
                    </div>
                    <br><br>
                    <div class="row">
                      <div class="col-10">
                        <button @click="submitCPDProgram" type="button" class="float-right btn btn-primary btn-fill btn-md "><i class="fa fa-save" />&nbsp; SAVE</button>
                      </div>
                    </div>
                    <br><br>
                    <va-card>
                                <va-data-table
                        :fields="fivemod"
                        :data="filteredFiveMod"
                        :per-page="parseInt(perPage)"
                      clickable>
                        <template slot="no" slot-scope="row">
                          {{ row.rowIndex + 1 }}
                        </template>

                        <template slot="actions" slot-scope="props">
                          <h4 class="mt-2">
                          <span class="badge badge-primary mr-1" v-on:click="editCPDPoint(props.rowData)">
                            <i class="fa fa-edit"></i></span>
                            <span class="badge badge-danger mr-1" v-on:click="deleteCPDpoint(props.rowData)">
                              <i class="fa fa-trash"></i></span>
                          </h4>
                              </template>
                            </va-data-table>
                            <br />
                    </va-card>
                    <br><br>

                  </b-card>
                </b-collapse>
                <hr>
              </div>
              <div>
                <span>RENEWAL CPD POINT CALCULATION </span>
                <button v-if="visibleSessionTimeout == false" v-b-toggle.collapse-3 type="button" class="float-right  btn-fill btn-md"><i class="fa fa-edit"></i></button>
                <button v-if="visibleSessionTimeout == true" v-b-toggle.collapse-3 type="button" class="float-right  btn-fill btn-md"><i class="fa fa-times"></i></button>
                <b-collapse id="collapse-3" style="background-color: #eeeeee;" class="mt-4" v-model="visibleSessionTimeout">
                  <b-card style="background-color: #eeeeee;">
                    <div class="row">
                      <div class="ml-4 col-md-10">
                        <span class="col mt-3 description">JOINT MONTH</span>
                        <input type="input" v-model="form.RENEWAL_MONTH" placeholder="ENTER MONTH" class=" float-right col-8 form-control form-control-md"/>
                      </div>
                    </div>
                    <br>
                    <div class="row">
                      <div class="ml-4 col-md-10">
                        <span class="col mt-3 description">CPD CALCULATION</span>
                        <input type="input" v-model="form.RENEWAL_CALC" placeholder="Enter CPD Calculation" class=" float-right col-8 form-control form-control-md"/>
                      </div>
                    </div>
                    <br>
                    <div class="row">
                      <div class="ml-4 col-md-10">
                        <span class="col mt-3 description">CPD REQUIREMENT</span>
                        <input type="input" v-model="form.RENEWAL_REQUIREMENT" placeholder="Enter CPD Requirement" class=" float-right col-8 form-control form-control-md"/>
                      </div>
                    </div>

                    <br><br>
                    <div class="row">
                      <div class="col-10  ">
                        <button @click="submitRenewal" type="button" class="float-right btn btn-primary btn-fill btn-md"><i class="fa fa-save" />&nbsp; SAVE</button>
                      </div>
                    </div>
                    <br><br>
                     <va-card class="mt-2">
                        <va-data-table
                          :fields="renewalCPD"
                          :data="filteredRenewalCPD"
                          :per-page="parseInt(perPage)"
                        clickable>
                          <template slot="no" slot-scope="row">
                            {{ row.rowIndex + 1 }}
                          </template>

                          <template slot="actions" slot-scope="props">
                            <h4 class="mt-2">
                            <span class="badge badge-primary mr-1" v-on:click="editCPDRenewal(props.rowData)">
                              <i class="fa fa-edit"></i></span>
                              <span class="badge badge-danger mr-1" v-on:click="deleteCPDRenewal(props.rowData)">
                                <i class="fa fa-trash"></i></span>
                            </h4>
                                </template>
                              </va-data-table>
                              <br />
                            </va-card>
                    <br><br>

                  </b-card>
                </b-collapse>
                <hr>
              </div>
              <div>
                <span>WAIVER REASON</span>
                <button v-if="visibleBlockDuration2 == false" v-b-toggle.collapse-4 type="button" class="float-right  btn-fill btn-md"><i class="fa fa-edit"></i></button>
                <button v-if="visibleBlockDuration2 == true" v-b-toggle.collapse-4 type="button" class="float-right  btn-fill btn-md"><i class="fa fa-times"></i></button>
                <b-collapse class="mt-4" id="collapse-4" v-model="visibleBlockDuration2">
                  <b-card style="background-color: #eeeeee;">
                    <div class="row">
                      <div class="ml-4 col-md-10">
                        <span class="col mt-3 description">REASON </span>
                        <input type="input" v-model="model.WAIV_REASON" placeholder="ENTER REASON" class=" float-right col-8 form-control form-control-md"/>
                      </div>
                      </div>
                    <br><br>
                    <div class="row">
                      <div class="col-10">
                        <button @click="submitWaiver" type="button" class="float-right btn btn-primary btn-fill btn-md"><i class="fa fa-save" />&nbsp; SAVE</button>
                      </div>
                    </div>
                    <br><br>
                         <va-card class="mt-2">
                           <va-data-table
                              :fields="waiverList"
                              :data="filteredWaiver"
                              :per-page="parseInt(perPage)"
                                clickable>
                              <template slot="no" slot-scope="row">
                                {{ row.rowIndex + 1 }}
                              </template>

                              <template slot="actions" slot-scope="props">
                                <h4 class="mt-2">
                                <span class="badge badge-primary mr-1" v-on:click="editWaiverReason(props.rowData)">
                                  <i class="fa fa-edit"></i></span>
                                  <span class="badge badge-danger mr-1" v-on:click="deleteWaiverReason(props.rowData)">
                                    <i class="fa fa-trash"></i></span>
                                </h4>
                              </template>
                          </va-data-table>
                  <br />
                </va-card>
                        
                        <div class="row col ml-2 mt-2">
                          <!-- pagination later -->
                
                        </div>
                    
                    
                    <br><br>

                  </b-card>
                </b-collapse>
                <hr>
              </div>

              <div>
                <span>CPD RULE POINT RENEWAL REQUIREMENT</span>
                <button v-if="visibleBlockDuration3 == false" v-b-toggle.collapse-4 type="button" class="float-right  btn-fill btn-md"><i class="fa fa-edit"></i></button>
                <button v-if="visibleBlockDuration3 == true" v-b-toggle.collapse-4 type="button" class="float-right  btn-fill btn-md"><i class="fa fa-times"></i></button>
                <b-collapse class="mt-4" id="collapse-4" v-model="visibleBlockDuration3">
                  <b-card style="background-color: #eeeeee;">
                    <div class="row">
                      <div class="ml-4 col-md-10">
                        <span class="col mt-3 description">REASON </span>
                        <input type="input" v-model="model.WAIV_REASON" placeholder="ENTER REASON" class=" float-right col-8 form-control form-control-md"/>
                      </div>
                      </div>
                    <br><br>
                    <div class="row">
                      <div class="col-10">
                        <button @click="submitWaiver" type="button" class="float-right btn btn-primary btn-fill btn-md"><i class="fa fa-save" />&nbsp; SAVE</button>
                      </div>
                    </div>
                    <br><br>
                         <va-card class="mt-2">
                           <va-data-table
                              :fields="waiverList"
                              :data="filteredWaiver"
                              :per-page="parseInt(perPage)"
                                clickable>
                              <template slot="no" slot-scope="row">
                                {{ row.rowIndex + 1 }}
                              </template>

                              <template slot="actions" slot-scope="props">
                                <h4 class="mt-2">
                                <span class="badge badge-primary mr-1" v-on:click="editWaiverReason(props.rowData)">
                                  <i class="fa fa-edit"></i></span>
                                  <span class="badge badge-danger mr-1" v-on:click="deleteWaiverReason(props.rowData)">
                                    <i class="fa fa-trash"></i></span>
                                </h4>
                              </template>
                          </va-data-table>
                  <br />
                </va-card>
                        
                        <div class="row col ml-2 mt-2">
                          <!-- pagination later -->
                
                        </div>
                    
                    
                    <br><br>

                  </b-card>
                </b-collapse>
                <hr>
              </div>
            </div>
          </va-card>
        
  
</template>

<script>
// eslint-disable-next-line no-unused-vars
import Vue from 'vue'
import 'vue-form-generator/dist/vfg.css'
import Vudal from 'vudal'
import * as servicesModule0 from "../../../app/module0/services02"


export default {

  mounted() {
    this.getAllModulePoint()
    this.getAllWaiverReason()
    this.getAllRenewalCPD()
  
  },
  components: { 
    Vudal
  },
  // DATA SCHEMA
  data () {
    return {
      term: null,
      visibleLogin: false,
      visibleBlockDuration: false,
      visibleBlockDuration2: false,
      visibleBlockDuration3: false,
      visibleSessionTimeout: false, 
      perPage: '6',
      perPageOptions: ['4', '6', '10', '20'],
      ModuleList: [],
      WaiverReasonList: [],
      RenewalCPDList: [],

      model: {
        // TAB 1
        CPD_PROGRAM_NAME: '',
        CPD_MAX: '',
        CPD_MIN: '',

        WAIV_REASON: '',
     
      },

      form:{
        RENEWAL_MONTH: '',
        RENEWAL_CALC: '',
        RENEWAL_REQUIREMENT: '', 


      },

      formOptions: {
        validateAfterChanged: true,
      },
//5 Module CPD Calculation	  

      editCPDPointSchema: {
        groups: [
          {
            styleClasses: 'row',
            fields: [
              {
                type: 'input',
                inputType: 'Text',
                model: 'CPD_PROGRAM_NAME',
                label: 'MODULE NAME ',
                placeholder: 'ENTER MODULE NAME',
                required: true,
                styleClasses: 'col-md-12',
              },
              {
                type: 'input',
                inputType: 'Text',
                model: 'CPD_MAX',
                label: 'CPD MAXIMUM',
                placeholder: 'ENTER MAX POINT',
                required: true,
                styleClasses: 'col-md-12',
              },
              {
                type: 'input',
                inputType: 'Text',
                model: 'CPD_MIN',
                label: 'CPD MINIMUM',
                placeholder: 'ENTER MIN POINT',
                required: true,
                styleClasses: 'col-md-12',
              },
            ],
          },
        ],
      },

//Waiver

      editWaiverReasonSchema: {
        groups: [
          {
            styleClasses: 'row',
            fields: [
              {
                type: 'input',
                inputType: 'Text',
                model: 'WAIV_REASON',
                label: 'REASON ',
                placeholder: 'ENTER MODULE NAME',
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


    getAllModulePoint: async function() {
    const response = await servicesModule0.getAllModulePointList();
    this.ModuleList = response;
    },

    async submit () {
    let app = this;
            var param = app.form;
            const data = new FormData()
            data.append('CPD_PROGRAM_NAME', this.model.CPD_PROGRAM_NAME)
            data.append('CPD_MAX', this.model.CPD_MAX)
            data.append('CPD_MIN', this.model.CPD_MIN)
            try {
              // eslint-disable-next-line no-unused-vars
              const response = await servicesModule0.createCPDPoint(data)
               this.getAllModulePoint()
              // this.$modals.simpleModal.$hide()
            } catch (error) {
              console.log(error)
            }
  },
  async updateCPDPointAPI () {
      try {
        const data = new FormData()
        data.append('CPD_HOURS_ID', this.CPD_HOURS_ID)
        data.append('CPD_PROGRAM_NAME', this.model.CPD_PROGRAM_NAME)
		    data.append('CPD_MAX', this.model.CPD_MAX)
        data.append('CPD_MIN', this.model.CPD_MIN)
        // console.log("data :" + data);
        // eslint-disable-next-line no-unused-vars
        const response = await servicesModule0.updateCPDPoint(data)
        this.getAllModulePoint()
      } catch (error) {
        console.log(error)
      }
    },
    async deleteCPDPoint (data) {
    // eslint-disable-next-line no-unused-vars
    const response = await servicesModule0.deleteCPDPoint (data.CPD_MODULE_POINT_ID)
    this.getAllModulePoint()
    },

    async editCPDPoint (data) {
    const response = await servicesModule0.getCPDPointById(data.CPD_MODULE_POINT_ID)
    this.$modals.simpleModalEditCPDPoint.$show()
    this.CPD_HOURS_ID = response.CPD_HOURS_ID
    this.model.CPD_PROGRAM_NAME = response.CPD_PROGRAM_NAME
	  this.model.CPD_MIN = response.CPD_MIN
    this.model.CPD_MAX = response.CPD_MAX
    },

// Waiver Java

getAllWaiverReason: async function() {
    const response = await servicesModule0.getAllWaiverReasonList();
    this.WaiverReasonList = response;
    },

async submitWaiver () {
    let app = this;
            var param = app.model;
            const data = new FormData()
            data.append('WAIV_REASON', this.model.WAIV_REASON)
            try {
              // eslint-disable-next-line no-unused-vars
              const response = await servicesModule0.createWaiverReason(data)
               this.getAllWaiverReason()
              // this.$modals.simpleModal.$hide()
            } catch (error) {
              console.log(error)
            }
  },
  async updateWaiverReasonAPI () {
      try {
        const data = new FormData()
        data.append('CPD_WAIVER_REASON_ID', this.CPD_WAIVER_REASON_ID)
        data.append('WAIV_REASON', this.model.WAIV_REASON)
        // console.log("data :" + data);
        // eslint-disable-next-line no-unused-vars
        const response = await servicesModule0.updateWaiverReason(data)
        this.getAllWaiverReason()
      } catch (error) {
        console.log(error)
      }
    },

    async deleteCPDPoint (data) {
    // eslint-disable-next-line no-unused-vars
    const response = await servicesModule0.deleteWaiverReason(data.CPD_WAIVER_REASON_ID)
    this.getAllWaiverReason()
    },

    async editWaiverReason (data) {
    const response = await servicesModule0.getWaiverReasonById(data.CPD_WAIVER_REASON_ID)
    this.$modals.simpleModalEditWaiverReason.$show()
    this.CPD_WAIVER_REASON_ID = response.CPD_WAIVER_REASON_ID
    this.model.WAIV_REASON = response.WAIV_REASON
    },

    // RENEWAL CPD POINT 

        getAllRenewalCPD: async function() {
            const response = await servicesModule0.getAllRenewalCPDList();
            this.RenewalCPDList = response;
         },


        async submitRenewal (){
            let app = this;
            var param = app.form;
            const data = new FormData()
            data.append('RENEWAL_MONTH', this.form.RENEWAL_MONTH)
            data.append('RENEWAL_CALC', this.form.RENEWAL_CALC)
            data.append('RENEWAL_REQUIREMENT', this.form.RENEWAL_REQUIREMENT)
            try {
              // eslint-disable-next-line no-unused-vars
              const response = await servicesModule0.createRenewalCPD(data)
               this.getAllRenewalCPD()
              // this.$modals.simpleModal.$hide()
            } catch (error) {
              console.log(error)
            }
    },

    // CPD PROGRAM HOURS CALC
     async submitCPDProgram (){
            let app = this;
            var param = app.form;
            const data = new FormData()
            data.append('CPD_PROGRAM_NAME', this.model.CPD_PROGRAM_NAME)
            data.append('CPD_MAX', this.model.CPD_MAX)
            data.append('CPD_MIN', this.model.CPD_MIN)
            try {
              // eslint-disable-next-line no-unused-vars
              const response = await servicesModule0.createCPDPoint(data)
               this.getAllModulePoint()
              // this.$modals.simpleModal.$hide()
            } catch (error) {
              console.log(error)
            }
    },

  },
computed: {

        fivemod () {
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
                  name: 'CPD_PROGRAM_NAME',
                  title: 'MODULE ',
                },
                {
                  name: 'CPD_MIN',
                  title: 'CPD MINIMUM',
                },
                {
                  name: 'CPD_MAX',
                  title: 'CPD MAXIMUM',
                },
                {
                  name: '__slot:actions',
                  title: 'Action',
                  dataClass: 'justify-content-center',
                  width: '15%',
                },
              ]
            },
            filteredFiveMod () {
              if (!this.term || this.term.length < 1) {
                return this.ModuleList
              }
              return this.ModuleList.filter(item => {
                return item.title.toLowerCase().startsWith(this.term.toLowerCase())
              })
            },

           waiverList () {
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
          name: 'WAIV_REASON',
          title: 'REASON ',
        },
        {
          name: '__slot:actions',
          title: 'Action',
          dataClass: 'justify-content-center',
          width: '15%',
        },
      ]
    },
    filteredWaiver () {
      if (!this.term || this.term.length < 1) {
        return this.WaiverReasonList
      }
      return this.WaiverReasonList.filter(item => {
        return item.title.toLowerCase().startsWith(this.term.toLowerCase())
      })
    },

     renewalCPD () {
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
          name: 'RENEWAL_MONTH',
          title: 'MONTH ',
        },
        {
          name: 'RENEWAL_CALC',
          title: 'CPD CALCULATION',
        },
        {
          name: 'RENEWAL_REQUIREMENT',
          title: 'CPD REQUIREMENT ',
        },
        {
          name: '__slot:actions',
          title: 'Action',
          dataClass: 'justify-content-center',
          width: '15%',
        },
      ]
    },
    filteredRenewalCPD () {
      if (!this.term || this.term.length < 1) {
        return this.RenewalCPDList
      }
      return this.RenewalCPDList.filter(item => {
        return item.title.toLowerCase().startsWith(this.term.toLowerCase())
      })
    },

},


}
</script>