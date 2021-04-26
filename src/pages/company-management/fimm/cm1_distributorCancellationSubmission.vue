<template>
  <va-card>
    <div class="row">
      <h4 slot="header" class="card-title">Suspension Submission</h4>
      <br />
      <br />
    </div>
    <va-card>
      <div class="ml-3">
        <vue-form-generator
          :model="model"
          :schema="submissionSchema"
          :options="formOptions"
          ref="submissionForm"
        >
        </vue-form-generator>
      </div>
      <br />
      <div id="app" class="ml-3 col-md-11">
        <VueFileAgent
          ref="vueFileAgent"
          :theme="'list'"
          :multiple="true"
          :deletable="true"
          :meta="true"
          :linkable="true"
          :accept="'.pdf,.doc,.docx,.ods'"
          :maxSize="'10MB'"
          :helpText="'Choose document'"
          :errorText="{
            type: 'Invalid file type. Only pdf or doc, docx or ods Allowed',
            size: 'Files should not exceed 10MB in size',
          }"
          @select="filesSelected($event)"
          @beforedelete="onBeforeDelete($event)"
          @delete="fileDeleted($event)"
          v-model="fileRecords"
        ></VueFileAgent>
      </div>
    </va-card>
    <br />
    <va-card>
      <div class="ml-3 col-md-12">

        Distributor Profile
        <span v-if="visibleProfile == false">: <b>Distributor Name</b></span>
        <button
          v-if="visibleProfile == true"
          v-b-toggle.collapse-1
          type="button"
          class="float-right btn-fill btn-md"
        >
          <i class="fa fa-eye-slash"></i>
        </button>
        <button
          v-if="visibleProfile == false"
          v-b-toggle.collapse-1
          type="button"
          class="float-right btn-fill btn-md"
        >
          <i class="fa fa-eye"></i>
        </button>

        <hr />
        <b-collapse id="collapse-1" class="mt-2" v-model="visibleProfile">
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
            <div class="content">
              <div v-if="currentTab === 'tab1'">
                <br />
                <table class="table table-striped">
                  <tbody>
                    <tr>
                      <td style="width: 20%">Company Name</td>
                      <td style="width: 1%">:</td>
                      <td>A.D.Fincancial Sdn. Bhd.</td>
                    </tr>
                    <tr>
                      <td>Company Registration No</td>
                      <td>:</td>
                      <td>871180-W</td>
                    </tr>
                    <tr>
                      <td>New Company Registration No</td>
                      <td>:</td>
                      <td>871180-W</td>
                    </tr>
                    <tr>
                      <td>Address</td>
                      <td>:</td>
                      <td>3, Jalan Dato Abdul Aziz, Seksyen 14</td>
                    </tr>
                    <tr>
                      <td>Postcode</td>
                      <td>:</td>
                      <td>46100</td>
                    </tr>
                    <tr>
                      <td>City</td>
                      <td>:</td>
                      <td>Petaling Jaya</td>
                    </tr>
                    <tr>
                      <td>State</td>
                      <td>:</td>
                      <td>Selangor</td>
                    </tr>
                    <tr>
                      <td>Country</td>
                      <td>:</td>
                      <td>Malaysia</td>
                    </tr>
                    <tr>
                      <td>Telephone Number</td>
                      <td>:</td>
                      <td>0379568833</td>
                    </tr>
                    <tr>
                      <td>Fax Number</td>
                      <td>:</td>
                      <td>0379568853</td>
                    </tr>
                    <tr>
                      <td>Email</td>
                      <td>:</td>
                      <td>info@adfinance.my</td>
                    </tr>
                    <tr>
                      <td>Application Type</td>
                      <td>:</td>
                      <td>Member</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div v-if="currentTab === 'tab2'">
                <div class="ml-4">
                  <br />
                  <button
                    v-b-toggle.collapse-1
                    type="button"
                    class="btn btn-warning btn-fill btn-md"
                  >
                    Authorised Representative &nbsp;
                    <i class="fa fa-caret-square-o-down" />
                  </button>
                      &nbsp;
                  <button
                    v-b-toggle.collapse-2
                    type="button"
                    class="btn btn-warning btn-fill btn-md"
                  >
                    Alternate Authorised Representative &nbsp;
                    <i class="fa fa-caret-square-o-down" />
                  </button>
                  <br />
                  <b-collapse id="collapse-1" class="mt-2">
                    <br />
                    <h4>Authorised Representative (AR)</h4>
                    <table class="table table-striped">
                      <tbody>
                        <tr>
                          <td style="width: 20%">Name</td>
                          <td style="width: 1%">:</td>
                          <td>Mr. Muhammad Ali Bin Mokhtar</td>
                        </tr>
                        <tr>
                          <td>Citizenship</td>
                          <td>:</td>
                          <td>Malaysian</td>
                        </tr>
                        <tr>
                          <td>NRIC No</td>
                          <td>:</td>
                          <td>770907-14-7887</td>
                        </tr>
                        <tr>
                          <td>Position</td>
                          <td>:</td>
                          <td>Sr Manager</td>
                        </tr>

                        <tr>
                          <td>Address</td>
                          <td>:</td>
                          <td>
                            No 53,Jalan Kajang Perdan 2/5,Taman Kajang
                            Perdana
                          </td>
                        </tr>
                        <tr>
                          <td>Postcode</td>
                          <td>:</td>
                          <td>53000</td>
                        </tr>
                        <tr>
                          <td>City</td>
                          <td>:</td>
                          <td>Kajang</td>
                        </tr>
                        <tr>
                          <td>State</td>
                          <td>:</td>
                          <td>Selangor</td>
                        </tr>
                        <tr>
                          <td>Country</td>
                          <td>:</td>
                          <td>Malaysia</td>
                        </tr>
                        <tr>
                          <td>Telephone Number</td>
                          <td>:</td>
                          <td>0146328970</td>
                        </tr>
                        <tr>
                          <td>Fax Number</td>
                          <td>:</td>
                          <td>-</td>
                        </tr>
                        <tr>
                          <td>Email</td>
                          <td>:</td>
                          <td>ali@adfinance.my</td>
                        </tr>
                      </tbody>
                    </table>
                  </b-collapse>

                  <b-collapse id="collapse-2" class="mt-2">
                    <br />
                    <h4>Alternative Representative (AAR)</h4>
                    <table class="table table-striped">
                      <tbody>
                        <tr>
                          <td style="width: 20%">Name</td>
                          <td style="width: 1%">:</td>
                          <td>Mrs. Kelly Smith</td>
                        </tr>
                        <tr>
                          <td>Citizenship</td>
                          <td>:</td>
                          <td>Non-Malaysian</td>
                        </tr>
                        <tr>
                          <td>Passport No</td>
                          <td>:</td>
                          <td>A123456</td>
                        </tr>
                        <tr>
                          <td>Passport Expiry Date</td>
                          <td>:</td>
                          <td>20/11/2025</td>
                        </tr>
                        <tr>
                          <td>Position</td>
                          <td>:</td>
                          <td>Sr Manager</td>
                        </tr>

                        <tr>
                          <td>Address</td>
                          <td>:</td>
                          <td>
                            No 53,Jalan Kajang Perdan 2/5,Taman Kajang
                            Perdana
                          </td>
                        </tr>
                        <tr>
                          <td>Postcode</td>
                          <td>:</td>
                          <td>53000</td>
                        </tr>
                        <tr>
                          <td>City</td>
                          <td>:</td>
                          <td>Kajang</td>
                        </tr>
                        <tr>
                          <td>State</td>
                          <td>:</td>
                          <td>Selangor</td>
                        </tr>
                        <tr>
                          <td>Country</td>
                          <td>:</td>
                          <td>Malaysia</td>
                        </tr>
                        <tr>
                          <td>Telephone Number</td>
                          <td>:</td>
                          <td>0146328970</td>
                        </tr>
                        <tr>
                          <td>Fax Number</td>
                          <td>:</td>
                          <td>-</td>
                        </tr>
                        <tr>
                          <td>Email</td>
                          <td>:</td>
                          <td>kelly@adfinance.my</td>
                        </tr>
                      </tbody>
                    </table>
                  </b-collapse>
                </div>
              </div>
              <div v-if="currentTab === 'tab3'">
                <div class="ml-4">
                  <br />
                  <button
                    v-b-toggle.collapse-1
                    type="button"
                    class="btn btn-warning btn-fill btn-md"
                  >
                    CEO Profile &nbsp;
                    <i class="fa fa-caret-square-o-down" />
                  </button>
                      &nbsp;
                  <button
                    v-b-toggle.collapse-2
                    type="button"
                    class="btn btn-warning btn-fill btn-md"
                  >
                    Director Details &nbsp;
                    <i class="fa fa-caret-square-o-down" />
                  </button>
                  <br />
                  <b-collapse id="collapse-1" class="mt-2">
                    <br />
                    <h4>CEO Profile</h4>
                    <table class="table table-striped">
                      <tbody>
                        <tr>
                          <td style="width: 20%">Name</td>
                          <td style="width: 1%">:</td>
                          <td>Mr. Ali Bin Mokhtar</td>
                        </tr>
                        <tr>
                          <td>Citizenship</td>
                          <td>:</td>
                          <td>Malaysian</td>
                        </tr>
                        <tr>
                          <td>NRIC No</td>
                          <td>:</td>
                          <td>770907-14-7887</td>
                        </tr>
                        <tr>
                          <td>Position</td>
                          <td>:</td>
                          <td>Chief Executive Officer (CEO)</td>
                        </tr>

                        <tr>
                          <td>Address</td>
                          <td>:</td>
                          <td>
                            No 53,Jalan Kajang Perdan 2/5,Taman Kajang
                            Perdana
                          </td>
                        </tr>
                        <tr>
                          <td>Postcode</td>
                          <td>:</td>
                          <td>53000</td>
                        </tr>
                        <tr>
                          <td>City</td>
                          <td>:</td>
                          <td>Kajang</td>
                        </tr>
                        <tr>
                          <td>State</td>
                          <td>:</td>
                          <td>Selangor</td>
                        </tr>
                        <tr>
                          <td>Country</td>
                          <td>:</td>
                          <td>Malaysia</td>
                        </tr>
                        <tr>
                          <td>Telephone Number</td>
                          <td>:</td>
                          <td>0146328970</td>
                        </tr>
                        <tr>
                          <td>Fax Number</td>
                          <td>:</td>
                          <td>-</td>
                        </tr>
                        <tr>
                          <td>Email</td>
                          <td>:</td>
                          <td>ali@adfinance.my</td>
                        </tr>
                      </tbody>
                    </table>
                  </b-collapse>
                  <b-collapse id="collapse-2" class="mt-2">
                    <br />
                    <h4>Director Details</h4>
                    <table class="table">
                      <tbody>
                        <tr style="background-color: lightgrey">
                          <th>No</th>
                          <th>Name</th>
                          <th>NRIC No</th>
                          <th>Effective Date</th>
                          <th>End Date</th>
                        </tr>
                        <tr>
                          <td style="width: 10%">1</td>
                          <td style="width: 30%">
                            Dr Haslinda Binti Haji Azmi
                          </td>
                          <td style="width: 20%">560807-10-3345</td>
                          <td style="width: 20%">20/01/2018</td>
                          <td style="width: 20%">20/01/2025</td>
                        </tr>
                        <tr>
                          <td>2</td>
                          <td>Dato Hashim Binti Dato Harun</td>
                          <td>570807-10-3345</td>
                          <td>01/01/2019</td>
                          <td>20/01/2023</td>
                        </tr>
                      </tbody>
                    </table>
                  </b-collapse>
                </div>
              </div>
              <div v-if="currentTab === 'tab4'">
                <div class="ml-4">
                  <br />
                  <h4>Contact Person</h4>
                  <table class="table table-striped">
                    <tbody>
                      <tr>
                        <td style="width: 20%">Name</td>
                        <td style="width: 1%">:</td>
                        <td>Mr. Najwan Bin Sudi</td>
                      </tr>
                      <tr>
                        <td>Citizenship</td>
                        <td>:</td>
                        <td>Malaysian</td>
                      </tr>
                      <tr>
                        <td>NRIC No</td>
                        <td>:</td>
                        <td>870907-04-7887</td>
                      </tr>
                      <tr>
                        <td>Position</td>
                        <td>:</td>
                        <td>Manager</td>
                      </tr>

                      <tr>
                        <td>Address</td>
                        <td>:</td>
                        <td>
                          No 53,Jalan Kajang Perdan 2/5,Taman Kajang Perdana
                        </td>
                      </tr>
                      <tr>
                        <td>Postcode</td>
                        <td>:</td>
                        <td>53000</td>
                      </tr>
                      <tr>
                        <td>City</td>
                        <td>:</td>
                        <td>Kajang</td>
                      </tr>
                      <tr>
                        <td>State</td>
                        <td>:</td>
                        <td>Selangor</td>
                      </tr>
                      <tr>
                        <td>Country</td>
                        <td>:</td>
                        <td>Malaysia</td>
                      </tr>
                      <tr>
                        <td>Telephone Number</td>
                        <td>:</td>
                        <td>0146328970</td>
                      </tr>
                      <tr>
                        <td>Fax Number</td>
                        <td>:</td>
                        <td>-</td>
                      </tr>
                      <tr>
                        <td>Email</td>
                        <td>:</td>
                        <td>najwan@adfinance.my</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </b-collapse>

      </div>
    </va-card>
    <br />
    <br />
    <button
      @click="back"
      type="button"
      class="btn btn-primary btn-fill btn-md"
    >
      <i class="fa fa-step-backward" /> &nbsp; Previous
    </button>
    <div class="float-right">
      <button
        @click="saveAsDraft"
        type="button"
        class="mr-2 btn btn-info btn-fill btn-md"
      >
        <i class="fa fa-pencil-square-o" /> &nbsp; Save as draft
      </button>
      <button
        @click="submit"
        type="button"
        class="ml-1 btn btn-success btn-fill btn-md"
      >
        <i class="fa fa-paper-plane" /> &nbsp; Submit
      </button>
    </div>
  </va-card>
</template>

<script>
import 'vue-form-generator/dist/vfg.css'
// import * as servicesModule1 from '../../../app/module3/services01'

const TABS = [
  {
    title: 'Company Profile',
    value: 'tab1',
  },
  {
    title: 'Authorised Representative',
    value: 'tab2',
  },
  {
    title: 'CEO & Director',
    value: 'tab3',
  },
  {
    title: 'Additional Information',
    value: 'tab4',
  },
]

export default {

  mounted () {
  },
  components: {},

  methods: {

    handleClick (newTab) {
      this.currentTab = newTab
    }, // end tab
    back () {
      this.$router.go(-1)
    }, // back button

    saveAsDraft () {},
    validatestatusForm () {
      return this.$refs.submissionForm.validate()
    },

    validateEntryForm () {
      return this.$refs.submissionForm.validate()
    },
    submit: async function () {
      const response = await this.validateEntryForm()
      if (response) {
        //
      } else {
      }
    },

    deleteUploadedFile: function (fileRecord) {
      this.$refs.vueFileAgent.deleteUpload(
        this.uploadUrl,
        this.uploadHeaders,
        fileRecord,
      )
    },
    filesSelected: function (fileRecordsNewlySelected) {
      console.log('selected')
      var validFileRecords = fileRecordsNewlySelected.filter(
        (fileRecord) => !fileRecord.error,
      )
      this.fileRecordsForUpload = this.fileRecordsForUpload.concat(
        validFileRecords,
      )
      console.log(fileRecordsNewlySelected)
    },
    onBeforeDelete: function (fileRecord) {
      var i = this.fileRecordsForUpload.indexOf(fileRecord)
      if (i !== -1) {
        // queued file, not yet uploaded. Just remove from the arrays
        this.fileRecordsForUpload.splice(i, 1)
        var k = this.fileRecords.indexOf(fileRecord)
        if (k !== -1) this.fileRecords.splice(k, 1)
      } else {
        if (confirm('Are you sure you want to delete?')) {
          this.$refs.vueFileAgent.deleteFileRecord(fileRecord) // will trigger 'delete' event
        }
      }
    },
    fileDeleted: function (fileRecord) {
      var i = this.fileRecordsForUpload.indexOf(fileRecord)
      if (i !== -1) {
        this.fileRecordsForUpload.splice(i, 1)
      } else {
        this.deleteUploadedFile(fileRecord)
      }
    },
  },

  computed: {},

  data () {
    return {
      tabs: TABS,
      currentTab: 'tab1',
      classificationList: [],
      fileRecords: [],
      visibleProfile: true,

      model: {
        classification: '',
        startDate: null,
        endDate: null,
        reason: '',
        remark: '',
        fileUpload: '',
      },

      submissionSchema: {
        fields: [
          {
            type: 'input',
            inputType: 'date',
            model: 'startDate',
            label: 'Start Date',
            styleClasses: 'col-md-3',
          },
          {
            type: 'input',
            inputType: 'date',
            model: 'endDate',
            label: 'End Date',
            styleClasses: 'col-md-3',
          },
          {
            type: 'textArea',

            model: 'reason',
            label: 'Reason',
            hint: 'Max 1000 characters',
            max: 1000,
            placeholder: 'Enter Reason',
            rows: 5,
            validator: 'string',
            styleClasses: 'col-md-12',
          },

          {
            type: 'textArea',
            model: 'remark',
            label: 'Remark',
            hint: 'Max 1000 characters',
            max: 1000,
            placeholder: 'Enter Remark',
            rows: 5,
            validator: 'string',
            styleClasses: 'col-md-12',
          },
        ],
      },

      formOptions: {
        validateAfterChanged: true,
      },
    }
  },
}
</script>
<style lang="scss">
.va-data-table__pagination {
  margin-top: 1rem;
  display: -webkit-box;
  display: -ms-flexbox;
  display: inherit;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: flex-end;
}

.content {
  margin-top: 30px;
  font-size: 20px;
}
.inline {
  display: inline-flex;
  float: right;
}
.default-tabs {
  position: relative;
  margin: 0 auto;
  &__item {
    display: inline-block;
    margin: 0 5px;
    padding: 10px;
    padding-bottom: 8px;
    font-size: 16px;
    letter-spacing: 0.8px;
    color: gray;
    text-decoration: none;
    border: none;
    background-color: transparent;
    border-bottom: 2px solid transparent;
    cursor: pointer;
    transition: all 0.25s;
    &_active {
      color: black;
    }
    &:hover {
      border-bottom: 2px solid gray;
      color: black;
    }
    &:focus {
      outline: none;
      border-bottom: 2px solid gray;
      color: black;
    }
    &:first-child {
      margin-left: 20px;
    }
    &:last-child {
      margin-right: 0;
    }
  }
  &__active-line {
    position: absolute;
    bottom: 0;
    left: 0;
    height: 2px;
    background-color: black;
    transition: transform 0.4s ease, width 0.4s ease;
  }
}
</style>
