<template>
          <va-card>
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
                  <va-card>
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
                          <span v-b-tooltip.hover title="edit" class="badge badge-primary mr-1" v-on:click="editCPDPoint(props.rowData)">
                            <i class="fa fa-edit"></i></span>
                            <span v-b-tooltip.hover title="edit" class="badge badge-danger mr-1" v-on:click="deleteCPDpoint(props.rowData)">
                              <i class="fa fa-trash"></i></span>
                          </h4>
                    </template>
                  </va-data-table>
                  <br />
                </va-card>
                  </va-card>
                </b-collapse>
                <!-- </div> -->
                <hr>
              </div>
              <div>
                <span>CPD PROGRAM HOURS CALCULATION</span>
                <button v-if="visibleBlockDuration == false" v-b-toggle.collapse-2 type="button" class="float-right  btn-fill btn-md"><i class="fa fa-edit"></i></button>
                <button v-if="visibleBlockDuration == true" v-b-toggle.collapse-2 type="button" class="float-right  btn-fill btn-md"><i class="fa fa-times"></i></button>
                <b-collapse class="mt-4" id="collapse-2" v-model="visibleBlockDuration">
                  <va-card>

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

                  </va-card>
                </b-collapse>
                <hr>
              </div>
              <div>
                <span>RENEWAL CPD POINT CALCULATION </span>
                <button v-if="visibleSessionTimeout == false" v-b-toggle.collapse-3 type="button" class="float-right  btn-fill btn-md"><i class="fa fa-edit"></i></button>
                <button v-if="visibleSessionTimeout == true" v-b-toggle.collapse-3 type="button" class="float-right  btn-fill btn-md"><i class="fa fa-times"></i></button>
                <b-collapse id="collapse-3" style="background-color: #eeeeee;" class="mt-4" v-model="visibleSessionTimeout">
                  <va-card>
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

                  </va-card>
                </b-collapse>
                <hr>
              </div>
              <div>
                <span>WAIVER REASON</span>
                <button v-if="visibleBlockDuration2 == false" v-b-toggle.collapse-4 type="button" class="float-right  btn-fill btn-md"><i class="fa fa-edit"></i></button>
                <button v-if="visibleBlockDuration2 == true" v-b-toggle.collapse-4 type="button" class="float-right  btn-fill btn-md"><i class="fa fa-times"></i></button>
                <b-collapse class="mt-4" id="collapse-4" v-model="visibleBlockDuration2">
                  <va-card>
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

                  </va-card>
                </b-collapse>
                <hr>
              </div>

              <div>
                <span>CPD RULE POINT RENEWAL REQUIREMENT</span>
                <button v-if="visibleBlockDuration3 == false" v-b-toggle.collapse-5 type="button" class="float-right  btn-fill btn-md"><i class="fa fa-edit"></i></button>
                <button v-if="visibleBlockDuration3 == true" v-b-toggle.collapse-5 type="button" class="float-right  btn-fill btn-md"><i class="fa fa-times"></i></button>
                <b-collapse class="mt-4" id="collapse-5" v-model="visibleBlockDuration3">
                  <va-card>
                    <!-- <div class="row">
                      <div class="ml-4 col-md-10">
                        <span class="col mt-3 description">REASON </span>
                        <input type="input" v-model="model.WAIV_REASON" placeholder="ENTER REASON" class=" float-right col-8 form-control form-control-md"/>
                      </div>
                      </div> -->
                    <br><br>
                     <!-- <div class="row">
                      <div class="col-10">
                        <button @click="submitWaiver" type="button" class="float-right btn btn-primary btn-fill btn-md"><i class="fa fa-save" />&nbsp; SAVE</button>
                      </div> 
                    </div> -->
                    <br><br>
                         <va-card class="mt-2">
                           <va-data-table
                              :fields="ruleList"
                              :data="filteredRulePoint"
                              :per-page="parseInt(perPage)"
                                clickable>
                              <template slot="no" slot-scope="row">
                                {{ row.rowIndex + 1 }}
                              </template>

                              <template slot="actions" slot-scope="props">
                                <h4 class="mt-2">
                                <span class="badge badge-primary mr-1" v-on:click="editCPDRule(props.rowData)">
                                  <i class="fa fa-edit"></i></span>
                                  <span class="badge badge-danger mr-1" v-on:click="deleteCPDRule(props.rowData)">
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

                  </va-card>
                </b-collapse>
                <hr>
              </div>

            <div>
                <span>TRAINING MODE</span>
                <button v-if="visibleBlockDuration4 == false" v-b-toggle.collapse-6 type="button" class="float-right  btn-fill btn-md"><i class="fa fa-edit"></i></button>
                <button v-if="visibleBlockDuration4 == true" v-b-toggle.collapse-6 type="button" class="float-right  btn-fill btn-md"><i class="fa fa-times"></i></button>
                <b-collapse class="mt-4" id="collapse-6" v-model="visibleBlockDuration4">
                  <va-card>
                    <div class="row">
                      <div class="ml-4 col-md-10">
                        <span class="col mt-3 description">PROGRAM NAME </span>
                        <input type="input" v-model="model.CPD_SETTING_NAME" placeholder="ENTER PROGRAM NAME" class=" float-right col-8 form-control form-control-md"/>
                      </div>
                      </div>
                      <br>
                      <div class="row">
                      <div class="ml-4 col-md-10">
                        <span class="col mt-3 description">PROGRAM MODE</span>
                        <input type="input" v-model="model.CPD_SETTING_MODE" placeholder="ENTER MODE" class=" float-right col-8 form-control form-control-md"/>
                      </div>
                      </div>
                      <br>
                      <div class="row">
                      <div class="ml-4 col-md-10">
                        <span class="col mt-3 description">PROGRAM INDEX</span>
                        <input type="input" v-model="model.CPD_SETTING_INDEX" placeholder="ENTER INDEX " class=" float-right col-8 form-control form-control-md"/>
                      </div>
                      </div>
                      <br>
                      <div class="row">
                      <div class="ml-4 col-md-10">
                        <span class="col mt-3 description">DESCRIPTION </span>
                        <input type="input" v-model="model.CPD_SETTING_DESCRIPTION" placeholder="ENTER DESCRIPTION" class=" float-right col-8 form-control form-control-md"/>
                      </div>
                      </div>
                      
                    <br><br>
                    <div class="row">
                      <div class="col-10">
                        <button @click="submitTRMode" type="button" class="float-right btn btn-primary btn-fill btn-md"><i class="fa fa-save" />&nbsp; SAVE</button>
                      </div>
                    </div>
                    <br><br>
                         <va-card class="mt-2">
                           <va-data-table
                              :fields="TrModeList"
                              :data="filteredTrMode"
                              :per-page="parseInt(perPage)"
                                clickable>
                              <template slot="no" slot-scope="row">
                                {{ row.rowIndex + 1 }}
                              </template>

                              <template slot="actions" slot-scope="props">
                                <h4 class="mt-2">
                                <span class="badge badge-primary mr-1" v-on:click="editTRMode(props.rowData)">
                                  <i class="fa fa-edit"></i></span>
                                  <span class="badge badge-danger mr-1" v-on:click="deleteTRMode(props.rowData)">
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

                  </va-card>
                </b-collapse>
                <hr>
              </div>
              <div>
                <span>TRAINING PROGRAM TYPE</span>
                <button v-if="visibleBlockDuration5 == false" v-b-toggle.collapse-7 type="button" class="float-right  btn-fill btn-md"><i class="fa fa-edit"></i></button>
                <button v-if="visibleBlockDuration5 == true" v-b-toggle.collapse-7 type="button" class="float-right  btn-fill btn-md"><i class="fa fa-times"></i></button>
                <b-collapse class="mt-4" id="collapse-7" v-model="visibleBlockDuration5">
                  <va-card>
                    <div class="row">
                      <div class="ml-4 col-md-10">
                        <span class="col mt-3 description">PROGRAM NAME </span>
                        <input type="input" v-model="model.CPD_SETTING_NAME" placeholder="ENTER PROGRAM NAME" class=" float-right col-8 form-control form-control-md"/>
                      </div>
                      </div>
                      <br>
                      <div class="row">
                      <div class="ml-4 col-md-10">
                        <span class="col mt-3 description">PROGRAM MODE</span>
                        <input type="input" v-model="model.CPD_SETTING_MODE" placeholder="ENTER MODE" class=" float-right col-8 form-control form-control-md"/>
                      </div>
                      </div>
                      <br>
                      <div class="row">
                      <div class="ml-4 col-md-10">
                        <span class="col mt-3 description">PROGRAM INDEX</span>
                        <input type="input" v-model="model.CPD_SETTING_INDEX" placeholder="ENTER INDEX " class=" float-right col-8 form-control form-control-md"/>
                      </div>
                      </div>
                      <br>
                      <div class="row">
                      <div class="ml-4 col-md-10">
                        <span class="col mt-3 description">DESCRIPTION </span>
                        <input type="input" v-model="model.CPD_SETTING_DESCRIPTION" placeholder="ENTER DESCRIPTION" class=" float-right col-8 form-control form-control-md"/>
                      </div>
                      </div>
                      
                    <br><br>
                    <div class="row">
                      <div class="col-10">
                        <button @click="submitTRType" type="button" class="float-right btn btn-primary btn-fill btn-md"><i class="fa fa-save" />&nbsp; SAVE</button>
                      </div>
                    </div>
                    <br><br>
                         <va-card class="mt-2">
                           <va-data-table
                              :fields="TrTypeList"
                              :data="filteredTrProgram"
                              :per-page="parseInt(perPage)"
                                clickable>
                              <template slot="no" slot-scope="row">
                                {{ row.rowIndex + 1 }}
                              </template>

                              <template slot="actions" slot-scope="props">
                                <h4 class="mt-2">
                                <span class="badge badge-primary mr-1" v-on:click="editTRType(props.rowData)">
                                  <i class="fa fa-edit"></i></span>
                                  <span class="badge badge-danger mr-1" v-on:click="deleteTRType(props.rowData)">
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

                  </va-card>
                </b-collapse>
                <hr>
              </div>

              <div>
                <span>MODULE CODE</span>
                <button v-if="visibleBlockDuration6 == false" v-b-toggle.collapse-8 type="button" class="float-right  btn-fill btn-md"><i class="fa fa-edit"></i></button>
                <button v-if="visibleBlockDuration6 == true" v-b-toggle.collapse-8 type="button" class="float-right  btn-fill btn-md"><i class="fa fa-times"></i></button>
                <b-collapse class="mt-4" id="collapse-8" v-model="visibleBlockDuration6">
                  <va-card>
                      <br>
                      <div class="row">
                      <div class="ml-4 col-md-10">
                        <span class="col mt-3 description">PROGRAM INDEX</span>
                        <input type="input" v-model="model.CPD_SETTING_INDEX" placeholder="ENTER INDEX " class=" float-right col-8 form-control form-control-md"/>
                      </div>
                      </div>
                      <br>
                      <div class="row">
                      <div class="ml-4 col-md-10">
                        <span class="col mt-3 description">PROGRAM NAME </span>
                        <input type="input" v-model="model.CPD_SETTING_NAME" placeholder="ENTER PROGRAM NAME" class=" float-right col-8 form-control form-control-md"/>
                      </div>
                      </div>                      
                    <br><br>
                    <div class="row">
                      <div class="col-10">
                        <button @click="submitModuleCode" type="button" class="float-right btn btn-primary btn-fill btn-md"><i class="fa fa-save" />&nbsp; SAVE</button>
                      </div>
                    </div>
                    <br><br>
                         <va-card class="mt-2">
                           <va-data-table
                              :fields="ModuleCodeList"
                              :data="filteredModuleCode"
                              :per-page="parseInt(perPage)"
                                clickable>
                              <template slot="no" slot-scope="row">
                                {{ row.rowIndex + 1 }}
                              </template>

                              <template slot="actions" slot-scope="props">
                                <h4 class="mt-2">
                                <span class="badge badge-primary mr-1" v-on:click="editModuleCode(props.rowData)">
                                  <i class="fa fa-edit"></i></span>
                                  <span class="badge badge-danger mr-1" v-on:click="deleteModuleCode(props.rowData)">
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

                  </va-card>
                </b-collapse>
                <hr>
              </div>

              <div>
                <span>FINANCIAL PLANNER</span>
                <button v-if="visibleBlockDuration7 == false" v-b-toggle.collapse-9 type="button" class="float-right  btn-fill btn-md"><i class="fa fa-edit"></i></button>
                <button v-if="visibleBlockDuration7 == true" v-b-toggle.collapse-9 type="button" class="float-right  btn-fill btn-md"><i class="fa fa-times"></i></button>
                <b-collapse class="mt-4" id="collapse-9" v-model="visibleBlockDuration7">
                  <va-card>
                      <br>
                      <div class="row">
                      <div class="ml-4 col-md-10">
                        <span class="col mt-3 description">PROGRAM INDEX</span>
                        <input type="input" v-model="model.CPD_SETTING_INDEX" placeholder="ENTER INDEX " class=" float-right col-8 form-control form-control-md"/>
                      </div>
                      </div>
                      <br>
                      <div class="row">
                      <div class="ml-4 col-md-10">
                        <span class="col mt-3 description">DESCRIPTION </span>
                        <input type="input" v-model="model.CPD_SETTING_DESCRIPTION" placeholder="ENTER DESCRIPTION" class=" float-right col-8 form-control form-control-md"/>
                      </div>
                      </div>                      
                    <br><br>
                    <div class="row">
                      <div class="col-10">
                        <button @click="submitFinancialPlanner" type="button" class="float-right btn btn-primary btn-fill btn-md"><i class="fa fa-save" />&nbsp; SAVE</button>
                      </div>
                    </div>
                    <br><br>
                         <va-card class="mt-2">
                           <va-data-table
                              :fields="FinancialPlannerList"
                              :data="filteredFinancialPlanner"
                              :per-page="parseInt(perPage)"
                                clickable>
                              <template slot="no" slot-scope="row">
                                {{ row.rowIndex + 1 }}
                              </template>

                              <template slot="actions" slot-scope="props">
                                <h4 class="mt-2">
                                <span class="badge badge-primary mr-1" v-on:click="editFinancialPlanner(props.rowData)">
                                  <i class="fa fa-edit"></i></span>
                                  <span class="badge badge-danger mr-1" v-on:click="deleteFinancialPlanner(props.rowData)">
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

                  </va-card>
                </b-collapse>
                <hr>
              </div>

              <div>
                <span>QUALIFICATION MODE</span>
                <button v-if="visibleBlockDuration8 == false" v-b-toggle.collapse-10 type="button" class="float-right  btn-fill btn-md"><i class="fa fa-edit"></i></button>
                <button v-if="visibleBlockDuration8 == true" v-b-toggle.collapse-10 type="button" class="float-right  btn-fill btn-md"><i class="fa fa-times"></i></button>
                <b-collapse class="mt-4" id="collapse-10" v-model="visibleBlockDuration8">
                  <va-card>
                      <br>
                      <div class="row">
                      <div class="ml-4 col-md-10">
                        <span class="col mt-3 description">PROGRAM INDEX</span>
                        <input type="input" v-model="model.CPD_SETTING_INDEX" placeholder="ENTER INDEX " class=" float-right col-8 form-control form-control-md"/>
                      </div>
                      </div>
                      <br>
                      <div class="row">
                      <div class="ml-4 col-md-10">
                        <span class="col mt-3 description">DESCRIPTION </span>
                        <input type="input" v-model="model.CPD_SETTING_DESCRIPTION" placeholder="ENTER DESCRIPTION" class=" float-right col-8 form-control form-control-md"/>
                      </div>
                      </div>                      
                    <br><br>
                    <div class="row">
                      <div class="col-10">
                        <button @click="submitQR" type="button" class="float-right btn btn-primary btn-fill btn-md"><i class="fa fa-save" />&nbsp; SAVE</button>
                      </div>
                    </div>
                    <br><br>
                         <va-card class="mt-2">
                           <va-data-table
                              :fields="QRList"
                              :data="filteredQR"
                              :per-page="parseInt(perPage)"
                                clickable>
                              <template slot="no" slot-scope="row">
                                {{ row.rowIndex + 1 }}
                              </template>

                              <template slot="actions" slot-scope="props">
                                <h4 class="mt-2">
                                <span class="badge badge-primary mr-1" v-on:click="editQR(props.rowData)">
                                  <i class="fa fa-edit"></i></span>
                                  <span class="badge badge-danger mr-1" v-on:click="deleteQR(props.rowData)">
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

                  </va-card>
                </b-collapse>
                <hr>
              </div>

              <div>
                <span>CPD POINT CUT OFF DATE</span>
                <button v-if="visibleBlockDuration9 == false" v-b-toggle.collapse-11 type="button" class="float-right  btn-fill btn-md"><i class="fa fa-edit"></i></button>
                <button v-if="visibleBlockDuration9 == true" v-b-toggle.collapse-11 type="button" class="float-right  btn-fill btn-md"><i class="fa fa-times"></i></button>
                <b-collapse class="mt-4" id="collapse-11" v-model="visibleBlockDuration9">
                  <va-card>
                      <br>
                      <div class="row">
                      <div class="ml-4 col-md-10">
                        <span class="col mt-3 description">START DATE</span>
                        <va-date-picker class="float-right col-8 form-control-md"
                      v-model="model.CPD_CUT_OFF_START_DATE"
                    />                      
                    </div>
                      </div>
                      <br>
                      <div class="row">
                      <div class="ml-4 col-md-10">
                        <span class="col mt-3 description">END DATE </span>
                        <va-date-picker
                        class="float-right col-8 form-control-md"
                      v-model="model.CPD_CUT_OFF_END_DATE"
                    /> 
                      </div>
                      </div>                      
                    <br><br>
                    <div class="row">
                      <div class="col-10">
                        <button @click="submitCutOffDate" type="button" class="float-right btn btn-primary btn-fill btn-md"><i class="fa fa-save" />&nbsp; SAVE</button>
                      </div>
                    </div>
                    <br><br>
                         <!-- <va-card class="mt-2">
                           <va-data-table
                              :fields="CutOffList"
                              :data="filteredCutOff"
                              :per-page="parseInt(perPage)"
                                clickable>
                              <template slot="no" slot-scope="row">
                                {{ row.rowIndex + 1 }}
                              </template>

                              <template slot="actions" slot-scope="props">
                                <h4 class="mt-2">
                                <span class="badge badge-primary mr-1" v-on:click="editCutOff(props.rowData)">
                                  <i class="fa fa-edit"></i></span>
                                  <span class="badge badge-danger mr-1" v-on:click="deleteCutOff(props.rowData)">
                                    <i class="fa fa-trash"></i></span>
                                </h4>
                              </template>
                                  </va-data-table>
                          <br />
                        </va-card> -->
                        
                        <div class="row col ml-2 mt-2">
                          <!-- pagination later -->
                
                        </div>
                    
                    
                    <br><br>

                  </va-card>
                </b-collapse>
                <hr>
              </div>

            </div>
            <!-- CPD Point  -->
        <vudal name="simpleModalEditCPDPoint" class="widthModal">
      <div class="header">EDIT CPD POINT <i class="close icon">&times;</i></div>
      <div class="content">
        <vue-form-generator
          :model="model"
          :schema="editCPDPointSchema"
          :options="formOptions" />
      </div>
      <div class="actions"><button  type="button" class="cancel vudal-btn mr-2 btn btn-danger btn-fill btn-md"><i class="fa fa-times" /> &nbsp; CLOSE</button>
        <button @click="updateCPDPointAPI" type="button" class="cancel vudal-btn mr-2 btn btn-primary btn-fill btn-md"><i class="fa fa-edit" /> &nbsp; UPDATE</button>
      </div>
    </vudal>
        <!-- WAIVER REASON -->
         <vudal name="simpleModalEditWaiverReason" class="widthModal">
            <div class="header">EDIT WAIVER REASON<i class="close icon">&times;</i></div>
            <div class="content">
              <vue-form-generator
                :model="model"
                :schema="editWaiverReasonSchema"
                :options="formOptions"/>
            </div>
            <div class="actions">
              <button  type="button" class="cancel vudal-btn mr-2 btn btn-danger btn-fill btn-md"><i class="fa fa-times" /> &nbsp; CLOSE </button>
              <button @click="updateWaiverReasonAPI" type="button" class="cancel vudal-btn mr-2 btn btn-primary btn-fill btn-md"><i class="fa fa-edit" /> &nbsp; UPDATE </button>
            </div>
        </vudal>

        <!-- CPD Rule -->
            <vudal name="simpleModalEditCpdRule" class="widthModal">
      <div class="header">EDIT CPD RULE <i class="close icon">&times;</i></div>
      <div class="content">
        <vue-form-generator
          :model="model"
          :schema="editCPDRuleSchema"
          :options="formOptions" />
      </div>
      <div class="actions"><button  type="button" class="cancel vudal-btn mr-2 btn btn-danger btn-fill btn-md"><i class="fa fa-times" /> &nbsp; CLOSE</button>
        <button @click="updateCPDRuleAPI" type="button" class="cancel vudal-btn mr-2 btn btn-primary btn-fill btn-md"><i class="fa fa-edit" /> &nbsp; UPDATE</button>
      </div>
    </vudal>

          <!-- TR MODE -->
          <vudal name="simpleModalEditTRMode" class="widthModal">
      <div class="header">EDIT TRAINING MODE <i class="close icon">&times;</i></div>
      <div class="content">
        <vue-form-generator
          :model="model"
          :schema="editTRModeSchema"
          :options="formOptions" />
      </div>
      <div class="actions"><button  type="button" class="cancel vudal-btn mr-2 btn btn-danger btn-fill btn-md"><i class="fa fa-times" /> &nbsp; CLOSE</button>
        <button @click="updateTRModeAPI" type="button" class="cancel vudal-btn mr-2 btn btn-primary btn-fill btn-md"><i class="fa fa-edit" /> &nbsp; UPDATE</button>
      </div>
    </vudal>

<!-- --------TR PROGRAM TYPE-------- -->
<vudal name="simpleModalEditTRType" class="widthModal">
      <div class="header">EDIT TRAINING PROGRAM TYPE <i class="close icon">&times;</i></div>
      <div class="content">
        <vue-form-generator
          :model="model"
          :schema="editTRTypeSchema"
          :options="formOptions" />
      </div>
      <div class="actions"><button  type="button" class="cancel vudal-btn mr-2 btn btn-danger btn-fill btn-md"><i class="fa fa-times" /> &nbsp; CLOSE</button>
        <button @click="updateTRTypeAPI" type="button" class="cancel vudal-btn mr-2 btn btn-primary btn-fill btn-md"><i class="fa fa-edit" /> &nbsp; UPDATE</button>
      </div>
    </vudal>
    <!-- --------------------MODULE CODE ------------------ -->
    <vudal name="simpleModalEditModuleCode" class="widthModal">
      <div class="header">EDIT MODULE CODE <i class="close icon">&times;</i></div>
      <div class="content">
        <vue-form-generator
          :model="model"
          :schema="editModuleCodeSchema"
          :options="formOptions" />
      </div>
      <div class="actions"><button  type="button" class="cancel vudal-btn mr-2 btn btn-danger btn-fill btn-md"><i class="fa fa-times" /> &nbsp; CLOSE</button>
        <button @click="updateModuleCodeAPI" type="button" class="cancel vudal-btn mr-2 btn btn-primary btn-fill btn-md"><i class="fa fa-edit" /> &nbsp; UPDATE</button>
      </div>
    </vudal>
    <!-- -----------------Financial Planner------------------ -->
      <vudal name="simpleModalEditFinancialPlanner" class="widthModal">
      <div class="header">EDIT FINANCIAL PLANNER<i class="close icon">&times;</i></div>
      <div class="content">
        <vue-form-generator
          :model="model"
          :schema="editFinancialPlannerSchema"
          :options="formOptions" />
      </div>
      <div class="actions"><button  type="button" class="cancel vudal-btn mr-2 btn btn-danger btn-fill btn-md"><i class="fa fa-times" /> &nbsp; CLOSE</button>
        <button @click="updateFinancialPlannerAPI" type="button" class="cancel vudal-btn mr-2 btn btn-primary btn-fill btn-md"><i class="fa fa-edit" /> &nbsp; UPDATE</button>
      </div>
      </vudal>
      </va-card>
      
</template>

<script>
// eslint-disable-next-line no-unused-vars
import Vue from 'vue'
import Vudal from 'vudal'
import 'vue-form-generator/dist/vfg.css'
import * as servicesModule0 from "../../../app/module0/services02"
import { debounce } from "lodash";
Vue.component("field-vfg-functional-date", VfgFunctionalDate)
import VfgFunctionalDate from "../../component/VfgFunctionalCalendar.vue";
import moment from "moment";
import FullCalendar from "@fullcalendar/vue";
import interactionPlugin from "@fullcalendar/interaction";




export default {

  mounted() {
    this.getAllModulePoint()
    this.getAllWaiverReason()
    this.getAllRenewalCPD()
    this.getAllCPDRule()
    this.getAllTRMode()
    this.getAllTRType()
    this.getAllModuleCode()
    this.getAllFinancialPlanner()
    this.getAllQRMode()
    this.getAllCutOff()
  
  },
  components: { 
    FullCalendar,
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
      visibleBlockDuration4: false,
      visibleBlockDuration5: false,
      visibleBlockDuration6: false,
      visibleBlockDuration7: false,
      visibleBlockDuration8: false,
      visibleBlockDuration9: false,
      visibleSessionTimeout: false, 
      perPage: '6',
      perPageOptions: ['4', '6', '10', '20'],
      ModuleList: [],
      WaiverReasonList: [],
      RenewalCPDList: [],
      RulePointList:[],
      TRModelist:[],
      TRTypelist:[],
      ModuleCodelist:[],
      FinancialPlannerlist:[],
      QRModelist:[],
      CutOffDatelist:[],

      model: {
        // TAB 1
        CPD_PROGRAM_NAME: '',
        CPD_MAX: '',
        CPD_MIN: '',
        WAIV_REASON: '',
        CPD_RULE_POINT: '',
        CPD_SETTING_NAME:'',
        CPD_SETTING_MODE:'',
        CPD_SETTING_INDEX:'',
        CPD_SETTING_DESCRIPTION:'',
        CPD_SETTING_TYPE:'',
        CPD_CUT_OFF_START_DATE:'',
        CPD_CUT_OFF_END_DATE: '',

     
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


      // CPD Rule
      editCPDRuleSchema: {
        groups: [
          {
            styleClasses: 'row',
            fields: [
              {
                type: 'input',
                inputType: 'Text',
                model: 'CPD_RULE_POINT',
                label: 'CPD REQUIREMENT ',
                placeholder: 'ENTER CPD REQUIREMENT POINT ',
                required: true,
                styleClasses: 'col-md-12',
              },
            ],
          },
        ],
      },   
      
      // -----TR Mode----
      editTRModeSchema: {
        groups: [
          {
            styleClasses: 'row',
            fields: [
              {
                type: 'input',
                inputType: 'Text',
                model: 'CPD_SETTING_NAME',
                label: 'PROGRAM NAME ',
                placeholder: 'ENTER PROGRAM NAME',
                required: true,
                styleClasses: 'col-md-12',
              },
              {
                type: 'input',
                inputType: 'Text',
                model: 'CPD_SETTING_MODE',
                label: 'PROGRAM MODE ',
                placeholder: 'ENTER PROGRAM MODE',
                required: true,
                styleClasses: 'col-md-12',
              },
              {
                type: 'input',
                inputType: 'Text',
                model: 'CPD_SETTING_INDEX',
                label: 'INDEX ',
                placeholder: 'ENTER INDEX',
                required: true,
                styleClasses: 'col-md-12',
              },
              {
                type: 'input',
                inputType: 'Text',
                model: 'CPD_SETTING_DESCRIPTION',
                label: 'DESCRIPTION ',
                placeholder: 'ENTER DESCRIPTION',
                required: true,
                styleClasses: 'col-md-12',
              },
            ],
          },
        ],
      },
        // ------TR Program Type----
      editTRTypeSchema: {
        groups: [
          {
            styleClasses: 'row',
            fields: [
              {
                type: 'input',
                inputType: 'Text',
                model: 'CPD_SETTING_NAME',
                label: 'PROGRAM NAME ',
                placeholder: 'ENTER PROGRAM NAME',
                required: true,
                styleClasses: 'col-md-12',
              },
              {
                type: 'input',
                inputType: 'Text',
                model: 'CPD_SETTING_MODE',
                label: 'PROGRAM MODE ',
                placeholder: 'ENTER PROGRAM MODE',
                required: true,
                styleClasses: 'col-md-12',
              },
              {
                type: 'input',
                inputType: 'Text',
                model: 'CPD_SETTING_INDEX',
                label: 'INDEX ',
                placeholder: 'ENTER INDEX',
                required: true,
                styleClasses: 'col-md-12',
              },
              {
                type: 'input',
                inputType: 'Text',
                model: 'CPD_SETTING_DESCRIPTION',
                label: 'DESCRIPTION ',
                placeholder: 'ENTER DESCRIPTION',
                required: true,
                styleClasses: 'col-md-12',
              },
            ],
          },
        ],
      },

      editModuleCodeSchema: {
        groups: [
          {
            styleClasses: 'row',
            fields: [
              {
                type: 'input',
                inputType: 'Text',
                model: 'CPD_SETTING_INDEX',
                label: 'INDEX ',
                placeholder: 'ENTER INDEX',
                required: true,
                styleClasses: 'col-md-12',
              },
              {
                type: 'input',
                inputType: 'Text',
                model: 'CPD_SETTING_NAME',
                label: 'PROGRAM NAME ',
                placeholder: 'ENTER PROGRAM NAME',
                required: true,
                styleClasses: 'col-md-12',
              },
            ],
          },
        ],
      },

      //Financial Program
      editFinancialPlannerSchema: {
        groups: [
          {
            styleClasses: 'row',
            fields: [
              {
                type: 'input',
                inputType: 'Text',
                model: 'CPD_SETTING_INDEX',
                label: 'INDEX ',
                placeholder: 'ENTER INDEX',
                required: true,
                styleClasses: 'col-md-12',
              },
              {
                type: 'input',
                inputType: 'Text',
                model: 'CPD_SETTING_DESCRIPTION',
                label: 'DESCRIPTION ',
                placeholder: 'ENTER DESCRIPTION',
                required: true,
                styleClasses: 'col-md-12',
              },
            ],
          },
        ],
      },
      
      // CUT OFF DATE 
      editCutOffSchema: {
        groups: [
          {
            styleClasses: 'row',
            fields: [
              {
                labels: "START DATE",
                type: "vfg-functional-date",
                placeholder: "ENTER START DATE",
                model: "CPD_CUT_OFF_START_DATE",
                typeable: false,
                noClearButton: true,
                format: "dd-MM-yyyy",
                styleClasses: "col-md-12"
              },
              {
                 labels: "END DATE",
                type: "vfg-functional-date",
                placeholder: "ENTER END DATE",
                model: "CPD_CUT_OFF_END_DATE",
                typeable: false,
                noClearButton: true,
                format: "dd-MM-yyyy",
                styleClasses: "col-md-12"
              },
            ],
          },
        ],
      },
      

    }
  },
methods: {
 
            // ---------------------CPD HOURS-----------

    getAllModulePoint: async function() {
    const response = await servicesModule0.getAllModulePointList();
    this.ModuleList = response;
    },

    async submit () {
            let app = this;
            var param = app.model;
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
      const response = await servicesModule0.getCPDPointById(data.CPD_HOURS_ID)
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
              const response = await servicesModule0.updateWaiverReason(data)
              this.getAllWaiverReason()
            } catch (error) {
              console.log(error)
            }
          },

    async deleteWaiverReason (data) {
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

    async updateCPDRenewalAPI () {
      try {
        const data = new FormData()
        data.append('RENEWAL_MONTH', this.form.RENEWAL_MONTH)
        data.append('RENEWAL_CALC', this.form.RENEWAL_CALC)
        data.append('RENEWAL_REQUIREMENT', this.form.RENEWAL_REQUIREMENT)
        // console.log("data :" + data);
        // eslint-disable-next-line no-unused-vars
        const response = await servicesModule0.updateCPDRenewal(data)
        this.getAllRenewalCPD()
      } catch (error) {
        console.log(error)
      }
    },

    async deleteCPDRenewal (data) {
    // eslint-disable-next-line no-unused-vars
    const response = await servicesModule0.deleteCPDRenewal(data.CPD_RENEWAL_CALC_ID)
    this.getAllRenewalCPD()
    },

    async editCPDRenewal (data) {
    const response = await servicesModule0.getCPDRenewalById(data.CPD_RENEWAL_CALC_ID)
    this.$modals.simpleModalEditWaiverReason.$show()
    this.CPD_RENEWAL_CALC_ID = response.CPD_RENEWAL_CALC_ID
    this.model.RENEWAL_NAME = response.RENEWAL_NAME
    this.model.RENEWAL_CALC = response.RENEWAL_CALC
    this.model.RENEWAL_REQUIREMENT = response.RENEWAL_REQUIREMENT
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


    // CPD RULE

     getAllCPDRule: async function() {
     const response = await servicesModule0.getAllCPDRuleList();
     this.RulePointList = response;
         },
         async editCPDRule (data) {
        const response = await servicesModule0.getCPDRuleById(data.CPD_RULE_CALC_ID)
        this.$modals.simpleModalEditCpdRule.$show()
        this.CPD_RULE_CALC_ID = response.CPD_RULE_CALC_ID
        this.model.CPD_RULE_POINT = response.CPD_RULE_POINT
    },
    async deleteCPDRule (data) {
    // eslint-disable-next-line no-unused-vars
      const response = await servicesModule0.deleteCPDRule(data.CPD_RULE_CALC_ID)
      this.getAllCPDRule()
    },
    async updateCPDRuleAPI () {
      try {
        const data = new FormData()
        data.append('CPD_RULE_CALC_ID', this.CPD_RULE_CALC_ID)
        data.append('CPD_RULE_POINT', this.model.CPD_RULE_POINT)

        // console.log("data :" + data);
        // eslint-disable-next-line no-unused-vars
        const response = await servicesModule0.updateCPDRule(data)
        this.getAllCPDRule()
      } catch (error) {
        console.log(error)
      }
    },

// -----------------TR_MODE--------------
      getAllTRMode: async function() {
          const response = await servicesModule0.getAllTRModeList('TRMODE');
          this.TRModelist = response;
              },
      async submitTRMode (){
                  let app = this;
                  var param = app.model;
                  const data = new FormData()
                  data.append('CPD_SETTING_NAME', this.model.CPD_SETTING_NAME)
                  data.append('CPD_SETTING_MODE', this.model.CPD_SETTING_MODE)
                  data.append('CPD_SETTING_INDEX', this.model.CPD_SETTING_INDEX)
                  data.append('CPD_SETTING_DESCRIPTION', this.model.CPD_SETTING_DESCRIPTION)
                  data.append('CPD_SETTING_TYPE', 'TRMODE')
                  try {
                    // eslint-disable-next-line no-unused-vars
                    const response = await servicesModule0.createTRMode(data)
                    this.getAllTRMode()
                    // this.$modals.simpleModal.$hide()
                  } catch (error) {
                    console.log(error)
                  }
          },
         async editTRMode (data) {
        const response = await servicesModule0.getTRModeById(data.CPD_SETTING_ID)
        this.$modals.simpleModalEditTRMode.$show()
        this.CPD_SETTING_ID = response.CPD_SETTING_ID
        this.model.CPD_SETTING_NAME = response.CPD_SETTING_NAME
        this.model.CPD_SETTING_MODE = response.CPD_SETTING_MODE
        this.model.CPD_SETTING_INDEX = response.CPD_SETTING_INDEX
        this.model.CPD_SETTING_DESCRIPTION = response.CPD_SETTING_DESCRIPTION
    },
        async updateTRModeAPI () {
              try {
                const data = new FormData()
                data.append('CPD_SETTING_NAME', this.model.CPD_SETTING_NAME)
                data.append('CPD_SETTING_MODE', this.model.CPD_SETTING_MODE)
                data.append('CPD_SETTING_INDEX', this.model.CPD_SETTING_INDEX)
                data.append('CPD_SETTING_DESCRIPTION', this.model.CPD_SETTING_DESCRIPTION)

                // console.log("data :" + data);
                // eslint-disable-next-line no-unused-vars
                const response = await servicesModule0.updateTRMode(data)
                this.getAllTRMode()
              } catch (error) {
                console.log(error)
              }
            },


  // ---------------------- TR PROGRAM TYPE --------------
        getAllTRType: async function() {
          const response = await servicesModule0.getAllTRTypeList('TRPROGRAMTYPE');
          this.TRTypelist = response;
              },
      async submitTRType (){
                  let app = this;
                  var param = app.model;
                  const data = new FormData()
                  data.append('CPD_SETTING_NAME', this.model.CPD_SETTING_NAME)
                  data.append('CPD_SETTING_MODE', this.model.CPD_SETTING_MODE)
                  data.append('CPD_SETTING_INDEX', this.model.CPD_SETTING_INDEX)
                  data.append('CPD_SETTING_DESCRIPTION', this.model.CPD_SETTING_DESCRIPTION)
                  data.append('CPD_SETTING_TYPE','TRPROGRAMTYPE')
                  try {
                    // eslint-disable-next-line no-unused-vars
                    const response = await servicesModule0.createTRType(data)
                    this.getAllTRType()
                    // this.$modals.simpleModal.$hide()
                  } catch (error) {
                    console.log(error)
                  }
          },
         async editTRType() {
        const response = await servicesModule0.getTRTypeById(data.CPD_SETTING_ID)
        this.$modals.simpleModalEditTRType.$show()
        this.CPD_SETTING_ID = response.CPD_SETTING_ID
        this.model.CPD_SETTING_NAME = response.CPD_SETTING_NAME
        this.model.CPD_SETTING_MODE = response.CPD_SETTING_MODE
        this.model.CPD_SETTING_INDEX = response.CPD_SETTING_INDEX
        this.model.CPD_SETTING_DESCRIPTION = response.CPD_SETTING_DESCRIPTION
    },
        async updateTRTypeAPI () {
              try {
                const data = new FormData()
                data.append('CPD_SETTING_NAME', this.model.CPD_SETTING_NAME)
                data.append('CPD_SETTING_MODE', this.model.CPD_SETTING_MODE)
                data.append('CPD_SETTING_INDEX', this.model.CPD_SETTING_INDEX)
                data.append('CPD_SETTING_DESCRIPTION', this.model.CPD_SETTING_DESCRIPTION)

                // console.log("data :" + data);
                // eslint-disable-next-line no-unused-vars
                const response = await servicesModule0.updateTRType(data)
                this.getAllTRType()
              } catch (error) {
                console.log(error)
              }
            },

     // ------------------------ Module Code ------------------------

               getAllModuleCode: async function() {
          const response = await servicesModule0.getAllModuleCodeList('MODULECODE');
          this.ModuleCodelist = response;
              },
      async submitModuleCode (){
                  let app = this;
                  var param = app.model;
                  const data = new FormData()
                  data.append('CPD_SETTING_NAME', this.model.CPD_SETTING_NAME)
                  data.append('CPD_SETTING_INDEX', this.model.CPD_SETTING_INDEX)
                  data.append('CPD_SETTING_TYPE','MODULECODE')
                  try {
                    // eslint-disable-next-line no-unused-vars
                    const response = await servicesModule0.createModuleCode(data)
                    this.getAllModuleCode()
                    // this.$modals.simpleModal.$hide()
                  } catch (error) {
                    console.log(error)
                  }
          },
        async editModuleCode() {
        const response = await servicesModule0.getModuleCodeById(data.CPD_SETTING_ID)
        this.$modals.simpleModalEditModuleCode.$show()
        this.CPD_SETTING_ID = response.CPD_SETTING_ID
        this.model.CPD_SETTING_NAME = response.CPD_SETTING_NAME
        this.model.CPD_SETTING_INDEX = response.CPD_SETTING_INDEX
    },
        async updateModuleCodeAPI () {
              try {
                const data = new FormData()
                data.append('CPD_SETTING_NAME', this.model.CPD_SETTING_NAME)
                data.append('CPD_SETTING_INDEX', this.model.CPD_SETTING_INDEX)
                // console.log("data :" + data);
                // eslint-disable-next-line no-unused-vars
                const response = await servicesModule0.updateModuleCode(data)
                this.getAllModuleCode()
              } catch (error) {
                console.log(error)
              }
            },


            // ----------------- Financial Planner -------------
               getAllFinancialPlanner: async function() {
          const response = await servicesModule0.getAllModuleCodeList('FP_CODE');
          this.FinancialPlannerlist = response;
              },
      async submitFinancialPlanner (){
                  let app = this;
                  var param = app.model;
                  const data = new FormData()
                  data.append('CPD_SETTING_INDEX', this.model.CPD_SETTING_INDEX)
                  data.append('CPD_SETTING_DESCRIPTION', this.model.CPD_SETTING_DESCRIPTION)
                  data.append('CPD_SETTING_TYPE','FP_CODE')
                  try {
                    // eslint-disable-next-line no-unused-vars
                    const response = await servicesModule0.createFinancialPlanner(data)
                    this.getAllFinancialPlanner()
                    // this.$modals.simpleModal.$hide()
                  } catch (error) {
                    console.log(error)
                  }
          },
        async editFinancialPlanner() {
        const response = await servicesModule0.getFinancialPlannerById(data.CPD_SETTING_ID)
        this.$modals.simpleModalEditFinancialPlanner.$show()
        this.CPD_SETTING_ID = response.CPD_SETTING_ID
        this.model.CPD_SETTING_INDEX = response.CPD_SETTING_INDEX
        this.model.CPD_SETTING_DESCRIPTION = response.CPD_SETTING_DESCRIPTION
         },
        async updateFinancialPlannerAPI () {
              try {
                const data = new FormData()
                data.append('CPD_SETTING_INDEX', this.model.CPD_SETTING_INDEX)
                data.append('CPD_SETTING_DESCRIPTION', this.model.CPD_SETTING_DESCRIPTION)

                // console.log("data :" + data);
                // eslint-disable-next-line no-unused-vars
                const response = await servicesModule0.updateFinancialPlanner(data)
                this.getAllFinancialPlanner()
              } catch (error) {
                console.log(error)
              }
            },

            // ------------------------------ QR MODE --------------
            getAllQRMode: async function() {
          const response = await servicesModule0.getAllModuleCodeList('QRMODE');
          this.QRModelist = response;
              },
      async submitQR (){
                  let app = this;
                  var param = app.model;
                  const data = new FormData()
                  data.append('CPD_SETTING_INDEX', this.model.CPD_SETTING_INDEX)
                  data.append('CPD_SETTING_DESCRIPTION', this.model.CPD_SETTING_DESCRIPTION)
                  data.append('CPD_SETTING_TYPE','QRMODE')
                  try {
                    // eslint-disable-next-line no-unused-vars
                    const response = await servicesModule0.createQRMode(data)
                    this.getAllQRMode()
                    // this.$modals.simpleModal.$hide()
                  } catch (error) {
                    console.log(error)
                  }
          },
        async editQRMode() {
        const response = await servicesModule0.getQRModeById(data.CPD_SETTING_ID)
        this.$modals.simpleModalEditQRMode.$show()
        this.CPD_SETTING_ID = response.CPD_SETTING_ID
        this.model.CPD_SETTING_DESCRIPTION = response.CPD_SETTING_DESCRIPTION
        this.model.CPD_SETTING_INDEX = response.CPD_SETTING_INDEX
    },
        async updateQRModeAPI () {
              try {
                const data = new FormData()
                data.append('CPD_SETTING_DESCRIPTION', this.model.CPD_SETTING_DESCRIPTION)
                data.append('CPD_SETTING_INDEX', this.model.CPD_SETTING_INDEX)
                // console.log("data :" + data);
                // eslint-disable-next-line no-unused-vars
                const response = await servicesModule0.updateModuleCode(data)
                this.getAllQRMode()
              } catch (error) {
                console.log(error)
              }
            },
            async deleteQR (data) {
              // eslint-disable-next-line no-unused-vars
                const response = await servicesModule0.deleteQR(data.CPD_SETTING_ID)
                this.getAllQRMode()
              },

              // ---------------------- CUT OFF DATE -------------------

               getAllCutOff: async function() {
          const response = await servicesModule0.getAllCutOffList();
          this.CutOffDatelist = response;
              },
      async submitCutOffDate (){
                  let app = this;
                  var param = app.model;
                  const data = new FormData()
                  data.append('CPD_CUT_OFF_START_DATE', moment(this.model.CPD_CUT_OFF_START_DATE).format("YYYY-MM-DD"))
                  data.append('CPD_CUT_OFF_END_DATE', moment(this.model.CPD_CUT_OFF_END_DATE).format("YYYY-MM-DD"))
                  try {
                    // eslint-disable-next-line no-unused-vars
                    const response = await servicesModule0.createCutOffDate(data)
                    this.getAllCutOff()
                    this.CutOffDatelist = response;
                    // this.$modals.simpleModal.$hide()
                  } catch (error) {
                    console.log(error)
                  }
          },
                  //     async editQRMode() {
                  //     const response = await servicesModule0.getQRModeById(data.CPD_SETTING_ID)
                  //     this.$modals.simpleModalEditQRMode.$show()
                  //     this.CPD_SETTING_ID = response.CPD_SETTING_ID
                  //     this.model.CPD_SETTING_DESCRIPTION = response.CPD_SETTING_DESCRIPTION
                  //     this.model.CPD_SETTING_INDEX = response.CPD_SETTING_INDEX
                  // },
        // async updateQRModeAPI () {
        //       try {
        //         const data = new FormData()
        //         data.append('CPD_SETTING_DESCRIPTION', this.model.CPD_SETTING_DESCRIPTION)
        //         data.append('CPD_SETTING_INDEX', this.model.CPD_SETTING_INDEX)
        //         // console.log("data :" + data);
        //         // eslint-disable-next-line no-unused-vars
        //         const response = await servicesModule0.updateModuleCode(data)
        //         this.getAllQRMode()
        //       } catch (error) {
        //         console.log(error)
        //       }
        //     },
            // async deleteQR (data) {
            //   // eslint-disable-next-line no-unused-vars
            //     const response = await servicesModule0.deleteQR(data.CPD_SETTING_ID)
            //     this.getAllQRMode()
            //   },





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
    ruleList () {
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
          name: 'CPD_RULE_TYPE',
          title: 'TYPE ',
        },
        {
          name: 'CPD_RULE_CONDITION',
          title: 'CONDITION',
        },
        {
          name: 'CPD_RULE_POINT',
          title: 'CPD REQUIREMENT',
        },
        {
          name: '__slot:actions',
          title: 'Action',
          dataClass: 'justify-content-center',
          width: '15%',
        },
      ]
    },
    filteredRulePoint () {
      if (!this.term || this.term.length < 1) {
        return this.RulePointList
      }
      return this.RulePointList.filter(item => {
        return item.title.toLowerCase().startsWith(this.term.toLowerCase())
      })
    },

    TrTypeList() {
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
          name: 'CPD_SETTING_NAME',
          title: 'PROGRAM NAME ',
        },
        {
          name: 'CPD_SETTING_MODE',
          title: 'PROGRAM MODE',
        },
        {
          name: 'CPD_SETTING_INDEX',
          title: 'INDEX',
        },
        {
          name: 'CPD_SETTING_DESCRIPTION',
          title: 'DESCRIPTION',
        },
        {
          name: '__slot:actions',
          title: 'Action',
          dataClass: 'justify-content-center',
          width: '15%',
        },
      ]
    },
    filteredTrProgram () {
      if (!this.term || this.term.length < 1) {
        return this.TRTypelist
      }
    },

    TrModeList() {
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
          name: 'CPD_SETTING_NAME',
          title: 'PROGRAM NAME ',
        },
        {
          name: 'CPD_SETTING_MODE',
          title: 'PROGRAM MODE',
        },
        {
          name: 'CPD_SETTING_INDEX',
          title: 'INDEX',
        },
        {
          name: 'CPD_SETTING_DESCRIPTION',
          title: 'DESCRIPTION',
        },
        {
          name: '__slot:actions',
          title: 'Action',
          dataClass: 'justify-content-center',
          width: '15%',
        },
      ]
    },
    filteredTrMode () {
      if (!this.term || this.term.length < 1) {
        return this.TRModelist
      }
    },

    ModuleCodeList() {
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
          name: 'CPD_SETTING_INDEX',
          title: 'INDEX',
        },
        {
          name: 'CPD_SETTING_NAME',
          title: 'PROGRAM NAME ',
        },
        {
          name: '__slot:actions',
          title: 'Action',
          dataClass: 'justify-content-center',
          width: '15%',
        },
      ]
    },
    filteredModuleCode () {
      if (!this.term || this.term.length < 1) {
        return this.ModuleCodelist
      }
    },
    FinancialPlannerList() {
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
          name: 'CPD_SETTING_INDEX',
          title: 'INDEX',
        },
        {
          name: 'CPD_SETTING_DESCRIPTION',
          title: 'DESCRIPTION',
        },
        {
          name: '__slot:actions',
          title: 'Action',
          dataClass: 'justify-content-center',
          width: '15%',
        },
      ]
    },
    filteredFinancialPlanner () {
      if (!this.term || this.term.length < 1) {
        return this.FinancialPlannerlist
      }
    },

    QRList() {
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
          name: 'CPD_SETTING_INDEX',
          title: 'INDEX',
        },
        {
          name: 'CPD_SETTING_DESCRIPTION',
          title: 'DESCRIPTION',
        },
        {
          name: '__slot:actions',
          title: 'Action',
          dataClass: 'justify-content-center',
          width: '15%',
        },
      ]
    },
    filteredQR () {
      if (!this.term || this.term.length < 1) {
        return this.QRModelist
      }
    },

},


}
</script>