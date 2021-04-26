<template>
  <div class="content">
    <div class="container-fluid">
      <div class="card-body">
        <div class="row justify-content-center">
          <div class="col-lg-12">
            <va-card
              class="strpied-tabled-with-hover"
              body-classes="table-full-width table-responsive"
            >
              <h4 slot="header" >Cessation Request Form</h4>
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
                <div class="content">
                  <div v-if="currentTab === 'tab1'">
                    <div class="ml-4">
                      <table class="table table-striped">
                        <tbody>
                          <tr>
                            <td style="width: 20%">Cessation Date</td>
                            <td style="width: 1%">:</td>
                            <td>20-12-2020</td>
                          </tr>

                          <tr>
                            <td style="width: 20%">Reason Of Withdrawal</td>
                            <td style="width: 1%">:</td>
                            <td>Merger and acquisition</td>
                          </tr>

                          <tr>
                            <td style="width: 20%">
                              name of the distributor involved in the merger and
                              acquisition
                            </td>
                            <td style="width: 1%">:</td>
                            <td>Manulife Investment Management (M) Berhad</td>
                          </tr>

                          <tr>
                            <td style="width: 20%">Legal Day One (1)</td>
                            <td style="width: 1%">:</td>
                            <td>21-12-2020</td>
                          </tr>

                        </tbody>
                      </table>
                      <vue-form-generator
                        :model="modelApproval"
                        :schema="applicationtypeschemaApproval"
                        :options="formOptions"
                        @model-updated="onModelUpdated"
                        ref="statusFormApproval"
                      >
                      </vue-form-generator>
                    </div>
                  </div>
                  <div v-if="currentTab === 'tab2'">
                    <div class="ml-4">
                      <table class="table table-striped">
                        <tr>
                          <th>No</th>
                          <th>Document</th>
                          <th>Remarks</th>
                        </tr>
                        <tbody>
                          <tr>
                            <td style="width: 2%">1</td>
                            <td style="width: 50%">
                              Notification letter to FIMM
                              <a
                                href="https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
                                target="_blank"
                                class="row"
                              >view</a
                              >
                            </td>
                            <td style="width: 40%">
                              <vue-form-generator
                                :model="model"
                                :schema="applicationtypeschema"
                                :options="formOptions"
                                @model-updated="onModelUpdated"
                                ref="statusForm"
                              >
                              </vue-form-generator>
                            </td>
                          </tr>
                          <tr>
                            <td style="width: 2%">2</td>
                            <td style="width: 50%">
                              Court Vesting Order(for merger and acquisition
                              only)
                              <a
                                href="https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
                                target="_blank"
                                class="row"
                              >view</a
                              >
                            </td>
                            <td style="width: 40%">
                              <vue-form-generator
                                :model="model"
                                :schema="applicationtypeschema"
                                :options="formOptions"
                                @model-updated="onModelUpdated"
                                ref="statusForm"
                              >
                              </vue-form-generator>
                            </td>
                          </tr>
                          <tr>
                            <td style="width: 2%">3</td>
                            <td style="width: 50%">
                              A copy of Form 13 (for merger and acquisition
                              only)
                              <a
                                href="https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
                                target="_blank"
                                class="row"
                              >view</a
                              >
                            </td>
                            <td style="width: 40%">
                              <vue-form-generator
                                :model="model"
                                :schema="applicationtypeschema"
                                :options="formOptions"
                                @model-updated="onModelUpdated"
                                ref="statusForm"
                              >
                              </vue-form-generator>
                            </td>
                          </tr>

                          <tr>
                            <td style="width: 2%">4</td>
                            <td style="width: 50%">
                              A copy of Form 18 from Securities Commission (for
                              CMSL Holder, if applicable) &nbsp;
                              <a
                                href="https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
                                target="_blank"
                                class="row"
                              >view</a
                              >
                            </td>
                            <td style="width: 40%">
                              <vue-form-generator
                                :model="model"
                                :schema="applicationtypeschema"
                                :options="formOptions"
                                @model-updated="onModelUpdated"
                                ref="statusForm"
                              >
                              </vue-form-generator>
                            </td>
                          </tr>

                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </va-card>
          </div>
        </div>
      </div>
    </div>

    <div class="container-fluid">
      <div class="card-body">
        <div class="row justify-content-center">
          <div class="col-lg-12">
            <card
              class="strpied-tabled-with-hover"
              body-classes="table-full-width table-responsive"
            >
              <form class="ml-3">

                <button
                  type="submit"
                  class="btn btn-primary btn-fill float-left btn-md"
                >
                  <i class="fa fa-step-backward" /> &nbsp; Back
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
                    type="submit"
                    class="mr-2 btn btn-warning btn-fill btn-md"
                    @click.prevent="submit"
                  >
                    <i class="fa fa-reply" /> &nbsp; return
                  </button>
                  <button
                    @click="submit"
                    type="button"
                    class="ml-2 btn btn-success btn-fill btn-md"
                  >
                    <i class="fa fa-paper-plane" /> &nbsp; Approve
                  </button>
                </div>
              </form>
            </card>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Vudal from 'vudal'
import 'vue-form-generator/dist/vfg.css'
import Tabs from 'vue-tabs-with-active-line'
import * as servicesModule0 from "../../../app/module0/services"
const TABS = [
  {
    title: 'Details Information',
    value: 'tab1',
  },
  {
    title: 'Document Upload',
    value: 'tab2',
  },

]
export default {
  components: {
    Tabs,
  },

  data () {
    return {
      tabs: TABS,
      currentTab: 'tab1',

      model: {
        remark: '',
        // TAB 5: payment information

        referenceNo: '456765678',
        transactionType: 'Online Transaction',
        transactionDate: '20-10-2020',
        accountType: 'Saving Account',
        beneficiaryName: 'Federation of Investment Managers Malaysia',
        beneficiaryBank: 'Maybank',
        beneficiaryAccNo: '234567876567',
        receipientRef: 'A.D Financial Sdn Bhd',
        otherPaymentDetails: '',
        amount: 'RM 5,000.00',
      },
      applicationtypeschema: {
        groups: [
          {
            styleClasses: 'row',
            fields: [
              {
                type: 'textArea',
                model: 'Remark',
                max: 500,
                rows: 2,
                required: false,
                validator: 'string',
              },

            ],
          },
        ],
      },
      applicationtypeschemaApproval: {
        groups: [
          {
            styleClasses: 'row',
            fields: [
              {
                type: 'textArea',
                label: 'Remarks/ Comments',
                model: 'Remark',
                hint: 'Max 500 characters',
                max: 500,
                rows: 4,
                required: false,
                validator: 'string',
                styleClasses: 'width: 100%',
              },

            ],
          },
        ],
      },

      Tab5Schema: {
        fields: [
          {
            type: 'input',
            inputType: 'text',
            label: 'Reference No',
            model: 'referenceNo',
            disabled: true,
          },
          {
            type: 'input',
            inputType: 'text',
            label: 'Transaction Date',
            model: 'transactionDate',
            styleClasses: 'col-md-5',
            disabled: true,
          },
          {
            type: 'input',
            inputType: 'text',
            label: 'Transaction Type',
            model: 'transactionType',
            styleClasses: 'col-md-10',
            disabled: true,
          },
          {
            type: 'input',
            inputType: 'text',
            label: 'Account Type',
            model: 'accountType',
            styleClasses: 'col-md-10',
            disabled: true,
          },
          {
            type: 'input',
            inputType: 'text',
            label: 'Beneficiary Name',
            model: 'beneficiaryName',
            styleClasses: 'col-md-10',
            disabled: true,
          },
          {
            type: 'input',
            inputType: 'text',
            label: 'Beneficiary Bank',
            model: 'beneficiaryBank',
            styleClasses: 'col-md-5',
            disabled: true,
          },
          {
            type: 'input',
            inputType: 'text',
            label: 'Beneficiary Account No',
            model: 'beneficiaryAccNo',
            styleClasses: 'col-md-5',
            disabled: true,
          },
          {
            type: 'input',
            inputType: 'text',
            label: 'Receipient Reference',
            model: 'receipientRef',
            styleClasses: 'col-md-5',
            disabled: true,
          },
          {
            type: 'input',
            inputType: 'text',
            label: 'Other Payment Details',
            model: 'otherPaymentDetails',
            styleClasses: 'col-md-5',
            disabled: true,
          },
          {
            type: 'input',
            inputType: 'text',
            label: 'Amount',
            model: 'amount',
            styleClasses: 'col-md-5',
            disabled: true,
          },
        ],
      },
      formOptions: {
        // validateAfterLoad: false,
        validateAfterChanged: true,
        // validateAsync: true,
      },
    }
  },

  methods: {
    saveAsDraft () {},
    validatestatusForm () {
      return this.$refs.statusForm.validate()
    },
    submit: async function () {
      const response = await this.validatestatusForm()
      if (response) {
        //
      } else {
      }
    },
    handleClick (newTab) {
      this.currentTab = newTab
    }, // end tab
    handleClick2 (newTab) {
      this.currentTab2 = newTab
    },
    handleClickcessation (newTab) {
      this.currentTabcessation = newTab
    },
    onModelUpdated (newVal, schema) {
      console.log(newVal)

      if (schema == 'status') {
        this.model.applicationType = newVal
        if (newVal == '2') {
          this.visibledatesuspension = true
        } else this.visibledatesuspension = true
      }
    },
  },
}
</script>

<style lang="scss">
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

    &__active {
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
      margin-left: 0;
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

.content {
  margin-top: 30px;
  font-size: 20px;
}

.inline {
  display: inline-flex;
  float: right;
}
</style>