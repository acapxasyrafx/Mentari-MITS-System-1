/* eslint-disable no-debugger, no-console */
<template>
  <div class="">
    <div class="">
      <vudal name="simpleModal" class="widthModal">
        <div class="header">
          <i class="close icon">&times;</i>
          <br />
        </div>
        <div>
          <va-card>
            <div>
              <horizontal-scroll>
                <va-button-toggle
                  :round="false"
                  outline
                  v-model="tabValue"
                  :options="options"
                  color="danger"
                />
              </horizontal-scroll>
            </div>
            <br />
            <div v-if="tabValue === 1" class="tabcontent">
              <table class="table">
                <tbody>
                  <tr>
                    <td style="width: 20%;"><b>Distributor Name</b></td>
                    <td style="width: 2%;">:</td>
                    <td>{{ model.DIST_NAME }}</td>
                  </tr>
                  <tr>
                    <td style="width: 20%;"><b>Registration Number</b></td>
                    <td style="width: 2%;">:</td>
                    <td>{{ model.DIST_REGI_NUM1 }}</td>
                  </tr>
                  <tr>
                    <td style="width: 20%;"><b>New Registration Number</b></td>
                    <td style="width: 2%;">:</td>
                    <td>{{ model.DIST_REGI_NUM2 }}</td>
                  </tr>
                  <tr>
                    <td style="width: 20%;"><b>Date of Incorporation</b></td>
                    <td style="width: 2%;">:</td>
                    <td>
                      {{ model.DIST_DATE_INCORP }}
                    </td>
                  </tr>
                  <tr>
                    <td style="width: 20%;"><b>Type of Setup</b></td>
                    <td style="width: 2%;">:</td>
                    <td v-if="model.DIST_TYPE_SETUP == 1">
                      Public Limited Company / Berhad
                    </td>
                    <td v-if="model.DIST_TYPE_SETUP == 2">
                      Private Limited Company / Sendirian Berhad
                    </td>
                  </tr>
                  <tr>
                    <td v-if="model.DIST_TYPE_SETUP == 1" style="width: 20%;">
                      <b>SSM Form 8</b>
                    </td>
                    <td v-if="model.DIST_TYPE_SETUP == 2" style="width: 20%;">
                      <b>SSM Form 9</b>
                    </td>
                    <td style="width: 2%;">:</td>
                    <td>}</td>
                  </tr>
                  <tr>
                    <td style="width: 20%;"><b>Address</b></td>
                    <td style="width: 2%;">:</td>
                    <td>
                      {{ model.DIST_ADDR_1 }} {{ model.DIST_ADDR_2 }}
                      {{ model.DIST_ADDR_3 }}
                    </td>
                  </tr>
                  <tr>
                    <td style="width: 20%;"><b>Country</b></td>
                    <td style="width: 2%;">:</td>
                    <td>{{ model.DIST_COUNTRY.SET_PARAM }}</td>
                  </tr>
                  <tr>
                    <td style="width: 20%;"><b>State</b></td>
                    <td style="width: 2%;">:</td>
                    <td v-if="model.DIST_COUNTRY.SET_CODE == 'MY'">
                      {{ model.DIST_STATE.SET_PARAM }}
                    </td>
                    <td v-if="model.DIST_COUNTRY.SET_CODE != 'MY'">
                      {{ model.DIST_STATE }}
                    </td>
                  </tr>
                  <tr>
                    <td style="width: 20%;"><b>City</b></td>
                    <td style="width: 2%;">:</td>
                    <td v-if="model.DIST_COUNTRY.SET_CODE == 'MY'">
                      {{ model.DIST_CITY.SET_CITY_NAME }}
                    </td>
                    <td v-if="model.DIST_COUNTRY.SET_CODE != 'MY'">
                      {{ model.DIST_CITY }}
                    </td>
                  </tr>
                  <tr>
                    <td style="width: 20%;"><b>Postal</b></td>
                    <td style="width: 2%;">:</td>
                    <td v-if="model.DIST_COUNTRY.SET_CODE == 'MY'">
                      {{ model.DIST_POSTAL.POSTCODE_NO }}
                    </td>
                    <td v-if="model.DIST_COUNTRY.SET_CODE != 'MY'">
                      {{ model.DIST_POSTAL }}
                    </td>
                  </tr>
                  <tr>
                    <td style="width: 20%;"><b>Office Phone Number</b></td>
                    <td style="width: 2%;">:</td>
                    <td>
                      0{{
                        model.DIST_PHONE_NUMBER.substring(0, 1) +
                          "-" +
                          model.DIST_PHONE_NUMBER.substring(1, 10)
                      }}
                    </td>
                  </tr>
                  <tr>
                    <td style="width: 20%;"><b>Extension Number</b></td>
                    <td style="width: 2%;">:</td>
                    <td>{{ model.DIST_PHONE_EXTENSION }}</td>
                  </tr>
                  <tr>
                    <td style="width: 20%;"><b>Fax Number</b></td>
                    <td style="width: 2%;">:</td>
                    <td>{{ model.DIST_FAX_NUMBER }}</td>
                  </tr>
                  <tr>
                    <td style="width: 20%;"><b>Mobile Phone Number</b></td>
                    <td style="width: 2%;">:</td>
                    <td>{{ model.DIST_MOBILE_NUMBER }}</td>
                  </tr>
                  <tr>
                    <td style="width: 20%;"><b>Email Address</b></td>
                    <td style="width: 2%;">:</td>
                    <td>{{ model.DIST_EMAIL }}</td>
                  </tr>
                  <tr>
                    <td style="width: 20%;"><b>Company Website URL</b></td>
                    <td style="width: 2%;">:</td>
                    <td>{{ model.DIST_COMPANY_WEBSITE }}</td>
                  </tr>
                  <tr>
                    <td style="width: 20%;"><b>Application Type</b></td>
                    <td style="width: 2%;">:</td>
                    <td>{{ model.applicationType.DIST_TYPE_NAME }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div v-if="tabValue === 2" class="tabcontent">
              <table class="table">
                <tbody>
                  <tr>
                    <td style="width: 20%;">
                      <b>Financial Status (Total Paid-Up Capital (RM))</b>
                    </td>
                    <td style="width: 2%;">:</td>
                    <td>RM {{ model.DIST_PAID_UP_CAPITAL }}</td>
                  </tr>
                  <tr>
                    <td style="width: 20%;"><b>Type of Structure</b></td>
                    <td style="width: 2%;">:</td>
                    <td v-if="model.DIST_TYPE_STRUCTURE == 1">
                      Single-Tier
                    </td>
                    <td v-if="model.DIST_TYPE_STRUCTURE == 2">
                      Multi-Tier
                    </td>
                  </tr>
                  <tr>
                    <td style="width: 20%;"><b>Marketing Approach</b></td>
                    <td style="width: 2%;">:</td>
                    <td v-if="model.DIST_MARKETING_APPROACH == 1">
                      Direct
                    </td>
                    <td v-if="model.DIST_MARKETING_APPROACH == 2">
                      Nominee
                    </td>
                  </tr>
                  <tr>
                    <td style="width: 20%;">
                      <b>Proposed number of Distribution Points</b>
                    </td>
                    <td style="width: 2%;">:</td>
                    <td>{{ model.DIST_NUM_DIST_POINT }}</td>
                  </tr>
                  <tr>
                    <td style="width: 20%;">
                      <b>Proposed number of Consultants</b>
                    </td>
                    <td style="width: 2%;">:</td>
                    <td>{{ model.DIST_NUM_CONSULTANT }}</td>
                  </tr>
                  <tr>
                    <td style="width: 20%;"><b>Indemnity of Insurance</b></td>
                    <td style="width: 2%;">:</td>
                    <td>{{ model.DIST_INSURANCE }}</td>
                  </tr>
                  <tr>
                    <td style="width: 20%;"><b>Expired Date</b></td>
                    <td style="width: 2%;">:</td>
                    <td>{{ model.DIST_DATE_INCORP }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div v-if="tabValue === 3" class="tabcontent">
              <h4>CEO Profile</h4>
              <table class="table">
                <tbody>
                  <tr>
                    <td style="width: 20%;"><b>Name</b></td>
                    <td style="width: 2%;">:</td>
                    <td>
                      {{ model.CEO_REPR_SALUTATION.USER_SAL_NAME }}
                      {{ model.CEO_REPR_NAME }}
                    </td>
                  </tr>
                  <tr>
                    <td style="width: 20%;"><b>Position</b></td>
                    <td style="width: 2%;">:</td>
                    <td>{{ model.CEO_REPR_POSITION }}</td>
                  </tr>
                  <tr v-if="model.CEO_REPR_CITIZEN == 1">
                    <td style="width: 20%;"><b>NRIC No</b></td>
                    <td style="width: 2%;">:</td>
                    <td>{{ model.CEO_REPR_NRIC }}</td>
                  </tr>
                  <tr v-if="model.CEO_REPR_CITIZEN == 2">
                    <td style="width: 20%;"><b>Passport No</b></td>
                    <td style="width: 2%;">:</td>
                    <td>{{ model.CEO_REPR_PASS_NUM }}</td>
                  </tr>
                  <tr v-if="model.CEO_REPR_CITIZEN == 2">
                    <td style="width: 20%;"><b>Passport Expiry Date</b></td>
                    <td style="width: 2%;">:</td>
                    <td>{{ model.CEO_REPR_PASS_EXP }}</td>
                  </tr>
                  <tr>
                    <td style="width: 20%;"><b>Office Phone Number</b></td>
                    <td style="width: 2%;">:</td>
                    <td v-if="model.CEO_REPR_TELEPHONE != null">
                      0{{
                        model.CEO_REPR_TELEPHONE.substring(0, 1) +
                          "-" +
                          model.CEO_REPR_TELEPHONE.substring(1, 10)
                      }}
                    </td>
                    <td v-if="model.CEO_REPR_TELEPHONE == null"></td>
                  </tr>
                  <tr>
                    <td style="width: 20%;"><b>Extension Number</b></td>
                    <td style="width: 2%;">:</td>
                    <td>{{ model.CEO_REPR_PHONE_EXTENSION }}</td>
                  </tr>
                  <tr>
                    <td style="width: 20%;"><b>Mobile Phone Number</b></td>
                    <td style="width: 2%;">:</td>
                    <td v-if="model.CEO_REPR_MOBILE_NUMBER != null">
                      01{{
                        model.CEO_REPR_MOBILE_NUMBER.substring(0, 1) +
                          "-" +
                          model.CEO_REPR_MOBILE_NUMBER.substring(1, 11)
                      }}
                    </td>
                    <td v-if="model.CEO_REPR_MOBILE_NUMBER == null"></td>
                  </tr>
                </tbody>
              </table>
              <br />
              <h4>List of Director</h4>
              <va-card>
                <va-data-table :fields="fields" :data="filteredData">
                  <!-- A virtual column -->
                  <template slot="no" slot-scope="row">
                    {{ row.rowIndex + 1 }}
                  </template>
                </va-data-table>
              </va-card>
            </div>
            <div v-if="tabValue === 4" class="tabcontent">
              <h4>Authorised Representative</h4>
              <table class="table">
                <tbody>
                  <tr>
                    <td style="width: 20%;"><b>Name</b></td>
                    <td style="width: 2%;">:</td>
                    <td>
                      {{ model.AR_REPR_SALUTATION.USER_SAL_NAME }}
                      {{ model.AR_REPR_NAME }}
                    </td>
                  </tr>
                  <tr>
                    <td style="width: 20%;"><b>Position</b></td>
                    <td style="width: 2%;">:</td>
                    <td>{{ model.AR_REPR_POSITION }}</td>
                  </tr>
                  <tr v-if="model.AR_REPR_CITIZEN == 1">
                    <td style="width: 20%;"><b>NRIC No</b></td>
                    <td style="width: 2%;">:</td>
                    <td>{{ model.AR_REPR_NRIC }}</td>
                  </tr>
                  <tr v-if="model.AR_REPR_CITIZEN == 2">
                    <td style="width: 20%;"><b>Passport No</b></td>
                    <td style="width: 2%;">:</td>
                    <td>{{ model.AR_REPR_PASS_NUM }}</td>
                  </tr>
                  <tr v-if="model.AR_REPR_CITIZEN == 2">
                    <td style="width: 20%;"><b>Passport Expiry Date</b></td>
                    <td style="width: 2%;">:</td>
                    <td>{{ model.AR_REPR_PASS_EXP }}</td>
                  </tr>
                  <tr>
                    <td style="width: 20%;"><b>Office Phone Number</b></td>
                    <td style="width: 2%;">:</td>
                    <td v-if="model.AR_REPR_TELEPHONE != null">
                      0{{
                        model.AR_REPR_TELEPHONE.substring(0, 1) +
                          "-" +
                          model.AR_REPR_TELEPHONE.substring(1, 10)
                      }}
                    </td>
                    <td v-if="model.AR_REPR_TELEPHONE == null"></td>
                  </tr>
                  <tr>
                    <td style="width: 20%;"><b>Extension Number</b></td>
                    <td style="width: 2%;">:</td>
                    <td>{{ model.AR_REPR_PHONE_EXTENSION }}</td>
                  </tr>
                  <tr>
                    <td style="width: 20%;"><b>Mobile Phone Number</b></td>
                    <td style="width: 2%;">:</td>
                    <td v-if="model.AR_REPR_MOBILE_NUMBER != null">
                      01{{
                        model.AR_REPR_MOBILE_NUMBER.substring(0, 1) +
                          "-" +
                          model.AR_REPR_MOBILE_NUMBER.substring(1, 11)
                      }}
                    </td>
                    <td v-if="model.AR_REPR_MOBILE_NUMBER == null"></td>
                  </tr>
                  <tr>
                    <td style="width: 20%;"><b>Email</b></td>
                    <td style="width: 2%;">:</td>
                    <td>{{ model.AR_REPR_EMAIL }}</td>
                  </tr>
                </tbody>
              </table>
              <br />
              <h4>Alternate Authorised Representative</h4>
              <table class="table">
                <tbody>
                  <tr>
                    <td style="width: 20%;"><b>Name</b></td>
                    <td style="width: 2%;">:</td>
                    <td>
                      {{ model.AAR_REPR_SALUTATION.USER_SAL_NAME }}
                      {{ model.AAR_REPR_NAME }}
                    </td>
                  </tr>
                  <tr>
                    <td style="width: 20%;"><b>Position</b></td>
                    <td style="width: 2%;">:</td>
                    <td>{{ model.AAR_REPR_POSITION }}</td>
                  </tr>
                  <tr v-if="model.AAR_REPR_CITIZEN == 1">
                    <td style="width: 20%;"><b>NRIC No</b></td>
                    <td style="width: 2%;">:</td>
                    <td>{{ model.AAR_REPR_NRIC }}</td>
                  </tr>
                  <tr v-if="model.AAR_REPR_CITIZEN == 2">
                    <td style="width: 20%;"><b>Passport No</b></td>
                    <td style="width: 2%;">:</td>
                    <td>{{ model.AAR_REPR_PASS_NUM }}</td>
                  </tr>
                  <tr v-if="model.AAR_REPR_CITIZEN == 2">
                    <td style="width: 20%;"><b>Passport Expiry Date</b></td>
                    <td style="width: 2%;">:</td>
                    <td>{{ model.AAR_REPR_PASS_EXP }}</td>
                  </tr>
                  <tr>
                    <td style="width: 20%;"><b>Office Phone Number</b></td>
                    <td style="width: 2%;">:</td>
                    <td v-if="model.AAR_REPR_TELEPHONE != null">
                      0{{
                        model.AAR_REPR_TELEPHONE.substring(0, 1) +
                          "-" +
                          model.AAR_REPR_TELEPHONE.substring(1, 10)
                      }}
                    </td>
                    <td v-if="model.AAR_REPR_TELEPHONE == null"></td>
                  </tr>
                  <tr>
                    <td style="width: 20%;"><b>Extension Number</b></td>
                    <td style="width: 2%;">:</td>
                    <td>{{ model.AAR_REPR_PHONE_EXTENSION }}</td>
                  </tr>
                  <tr>
                    <td style="width: 20%;"><b>Mobile Phone Number</b></td>
                    <td style="width: 2%;">:</td>
                    <td v-if="model.AAR_REPR_MOBILE_NUMBER != null">
                      01{{
                        model.AAR_REPR_MOBILE_NUMBER.substring(0, 1) +
                          "-" +
                          model.AAR_REPR_MOBILE_NUMBER.substring(1, 11)
                      }}
                    </td>
                    <td v-if="model.AAR_REPR_MOBILE_NUMBER == null"></td>
                  </tr>
                  <tr>
                    <td style="width: 20%;"><b>Email</b></td>
                    <td style="width: 2%;">:</td>
                    <td>{{ model.AAR_REPR_EMAIL }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div v-if="tabValue === 5" class="tabcontent">
              <h4>Head of Department, Compliance Department</h4>
              <table class="table">
                <tbody>
                  <tr>
                    <td style="width: 20%;"><b>Name</b></td>
                    <td style="width: 2%;">:</td>
                    <td>
                      {{ model.COMPL_SALUTATION.USER_SAL_NAME }}
                      {{ model.COMPL_NAME }}
                    </td>
                  </tr>
                  <tr>
                    <td style="width: 20%;"><b>Office Phone Number</b></td>
                    <td style="width: 2%;">:</td>
                    <td v-if="model.COMPL_TELEPHONE != null">
                      0{{
                        model.COMPL_TELEPHONE.substring(0, 1) +
                          "-" +
                          model.COMPL_TELEPHONE.substring(1, 10)
                      }}
                    </td>
                    <td v-if="model.COMPL_TELEPHONE == null"></td>
                  </tr>
                  <tr>
                    <td style="width: 20%;"><b>Extension Number</b></td>
                    <td style="width: 2%;">:</td>
                    <td>{{ model.COMPL_PHONE_EXTENSION }}</td>
                  </tr>
                  <tr>
                    <td style="width: 20%;"><b>Mobile Phone Number</b></td>
                    <td style="width: 2%;">:</td>
                    <td v-if="model.COMPL_MOBILE_NUMBER != null">
                      01{{
                        model.COMPL_MOBILE_NUMBER.substring(0, 1) +
                          "-" +
                          model.COMPL_MOBILE_NUMBER.substring(1, 11)
                      }}
                    </td>
                    <td v-if="model.COMPL_MOBILE_NUMBER == null"></td>
                  </tr>
                  <tr>
                    <td style="width: 20%;"><b>Email</b></td>
                    <td style="width: 2%;">:</td>
                    <td>{{ model.AAR_REPR_EMAIL }}</td>
                  </tr>
                </tbody>
              </table>
              <br />
              <h4>Head of Department UTS Distributor, Operation Department</h4>
              <table class="table">
                <tbody>
                  <tr>
                    <td style="width: 20%;"><b>Name</b></td>
                    <td style="width: 2%;">:</td>
                    <td>
                      {{ model.UTS_SALUTATION.USER_SAL_NAME }}
                      {{ model.UTS_NAME }}
                    </td>
                  </tr>
                  <tr>
                    <td style="width: 20%;"><b>Office Phone Number</b></td>
                    <td style="width: 2%;">:</td>
                    <td v-if="model.UTS_TELEPHONE != null">
                      0{{
                        model.UTS_TELEPHONE.substring(0, 1) +
                          "-" +
                          model.UTS_TELEPHONE.substring(1, 10)
                      }}
                    </td>
                    <td v-if="model.UTS_TELEPHONE == null"></td>
                  </tr>
                  <tr>
                    <td style="width: 20%;"><b>Extension Number</b></td>
                    <td style="width: 2%;">:</td>
                    <td>{{ model.UTS_PHONE_EXTENSION }}</td>
                  </tr>
                  <tr>
                    <td style="width: 20%;"><b>Mobile Phone Number</b></td>
                    <td style="width: 2%;">:</td>
                    <td v-if="model.UTS_MOBILE_NUMBER != null">
                      01{{
                        model.UTS_MOBILE_NUMBER.substring(0, 1) +
                          "-" +
                          model.UTS_MOBILE_NUMBER.substring(1, 11)
                      }}
                    </td>
                    <td v-if="model.UTS_MOBILE_NUMBER == null"></td>
                  </tr>
                  <tr>
                    <td style="width: 20%;"><b>Email</b></td>
                    <td style="width: 2%;">:</td>
                    <td>{{ model.UTS_EMAIL }}</td>
                  </tr>
                </tbody>
              </table>
              <br />
              <h4>Head of Department PRS Distributor, Operation Department</h4>
              <table class="table">
                <tbody>
                  <tr>
                    <td style="width: 20%;"><b>Name</b></td>
                    <td style="width: 2%;">:</td>
                    <td>
                      {{ model.PRS_SALUTATION.USER_SAL_NAME }}
                      {{ model.UTS_NAME }}
                    </td>
                  </tr>
                  <tr>
                    <td style="width: 20%;"><b>Office Phone Number</b></td>
                    <td style="width: 2%;">:</td>
                    <td v-if="model.PRS_TELEPHONE != null">
                      0{{
                        model.PRS_TELEPHONE.substring(0, 1) +
                          "-" +
                          model.PRS_TELEPHONE.substring(1, 10)
                      }}
                    </td>
                    <td v-if="model.PRS_TELEPHONE == null"></td>
                  </tr>
                  <tr>
                    <td style="width: 20%;"><b>Extension Number</b></td>
                    <td style="width: 2%;">:</td>
                    <td>{{ model.PRS_PHONE_EXTENSION }}</td>
                  </tr>
                  <tr>
                    <td style="width: 20%;"><b>Mobile Phone Number</b></td>
                    <td style="width: 2%;">:</td>
                    <td v-if="model.PRS_MOBILE_NUMBER != null">
                      01{{
                        model.PRS_MOBILE_NUMBER.substring(0, 1) +
                          "-" +
                          model.PRS_MOBILE_NUMBER.substring(1, 11)
                      }}
                    </td>
                    <td v-if="model.PRS_MOBILE_NUMBER == null"></td>
                  </tr>
                  <tr>
                    <td style="width: 20%;"><b>Email</b></td>
                    <td style="width: 2%;">:</td>
                    <td>{{ model.PRS_EMAIL }}</td>
                  </tr>
                </tbody>
              </table>
              <br />
              <h4>Head of Department, Training Department</h4>
              <table class="table">
                <tbody>
                  <tr>
                    <td style="width: 20%;"><b>Name</b></td>
                    <td style="width: 2%;">:</td>
                    <td>
                      {{ model.TRAIN_SALUTATION.USER_SAL_NAME }}
                      {{ model.TRAIN_NAME }}
                    </td>
                  </tr>
                  <tr>
                    <td style="width: 20%;"><b>Office Phone Number</b></td>
                    <td style="width: 2%;">:</td>
                    <td v-if="model.TRAIN_TELEPHONE != null">
                      0{{
                        model.TRAIN_TELEPHONE.substring(0, 1) +
                          "-" +
                          model.TRAIN_TELEPHONE.substring(1, 10)
                      }}
                    </td>
                    <td v-if="model.TRAIN_TELEPHONE == null"></td>
                  </tr>
                  <tr>
                    <td style="width: 20%;"><b>Extension Number</b></td>
                    <td style="width: 2%;">:</td>
                    <td>{{ model.TRAIN_PHONE_EXTENSION }}</td>
                  </tr>
                  <tr>
                    <td style="width: 20%;"><b>Mobile Phone Number</b></td>
                    <td style="width: 2%;">:</td>
                    <td v-if="model.TRAIN_MOBILE_NUMBER != null">
                      01{{
                        model.TRAIN_MOBILE_NUMBER.substring(0, 1) +
                          "-" +
                          model.TRAIN_MOBILE_NUMBER.substring(1, 11)
                      }}
                    </td>
                    <td v-if="model.TRAIN_MOBILE_NUMBER == null"></td>
                  </tr>
                  <tr>
                    <td style="width: 20%;"><b>Email</b></td>
                    <td style="width: 2%;">:</td>
                    <td>{{ model.TRAIN_EMAIL }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div v-if="tabValue === 6" class="tabcontent">
              <table class="table">
                <tbody>
                  <tr>
                    <td style="width: 20%;"><b>Reference Number</b></td>
                    <td style="width: 2%;">:</td>
                    <td>
                      {{ model.DIST_TRANS_REF }}
                    </td>
                  </tr>
                  <tr>
                    <td style="width: 20%;"><b>Transaction Date</b></td>
                    <td style="width: 2%;">:</td>
                    <td>
                      {{ model.DIST_TRANS_DATE }}
                    </td>
                  </tr>
                  <tr>
                    <td style="width: 20%;"><b>Transaction Type</b></td>
                    <td style="width: 2%;">:</td>
                    <td>
                      {{ model.DIST_TRANS_TYPE.name }}
                    </td>
                  </tr>
                  <tr>
                    <td style="width: 20%;"><b>Amount</b></td>
                    <td style="width: 2%;">:</td>
                    <td>{{ model.DIST_ACC_AMOUNT }}</td>
                  </tr>
                  <tr>
                    <td style="width: 20%;"><b>Receipt</b></td>
                    <td style="width: 2%;">:</td>
                    <td></td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div v-if="tabValue === 7" class="tabcontent">
              <b-table
                hover
                :items="uploadFileItems"
                :fields="uploadedFileFields"
                responsive="sm"
              >
                <template #cell(actions)="data">
                  <base-checkbox
                    class=""
                    v-model="data.item.selected"
                    disabled="true"
                  ></base-checkbox>
                </template>
                <template #cell()="data">
                  <span class="description">{{ data.value }}</span> &nbsp;
                </template>
                <template #cell(file)="data">
                  <a
                    target="blank"
                    v-if="data.item.selected == true"
                    href="https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
                    >View</a
                  >
                </template>
              </b-table>
            </div>
            <div v-if="tabValue === 8" class="tabcontent"></div>
            <!-- <b-tabs content-class="mt-3">
              <b-tab title="Details Information"> </b-tab>
              <b-tab title="AR and AAR">
                <table class="table">
                  <tbody>
                    <tr>
                      <td style="width: 20%;"><b>Name</b></td>
                      <td style="width: 2%;">:</td>
                      <td>
                        {{ model.AR_REPR_SALUTATION.name }}
                        {{ model.AR_REPR_NAME }}
                      </td>
                    </tr>
                    <tr>
                      <td style="width: 20%;"><b>Position</b></td>
                      <td style="width: 2%;">:</td>
                      <td>{{ model.AR_REPR_POSITION }}</td>
                    </tr>
                    <tr v-if="model.AR_REPR_CITIZEN == '1'">
                      <td style="width: 20%;"><b>NRIC No</b></td>
                      <td style="width: 2%;">:</td>
                      <td>{{ model.AR_REPR_NRIC }}</td>
                    </tr>
                    <tr v-if="model.AR_REPR_CITIZEN == '2'">
                      <td style="width: 20%;"><b>Passport No</b></td>
                      <td style="width: 2%;">:</td>
                      <td>{{ model.AR_REPR_PASS_NUM }}</td>
                    </tr>
                    <tr v-if="model.AR_REPR_CITIZEN == '2'">
                      <td style="width: 20%;"><b>Passport Expiry Date</b></td>
                      <td style="width: 2%;">:</td>
                      <td>{{ model.AR_REPR_PASS_EXP }}</td>
                    </tr>
                    <tr>
                      <td style="width: 20%;"><b>Telephone Number</b></td>
                      <td style="width: 2%;">:</td>
                      <td>03-7956 8853</td>
                    </tr>
                    <tr>
                      <td style="width: 20%;"><b>Email</b></td>
                      <td style="width: 2%;">:</td>
                      <td>{{ model.AR_REPR_EMAIL }}</td>
                    </tr>
                  </tbody>
                </table>
              </b-tab>
              <b-tab title="Alternate Authorised Representative">
                <table class="table">
                  <tbody>
                    <tr>
                      <td style="width: 20%;"><b>Name</b></td>
                      <td style="width: 2%;">:</td>
                      <td>
                        {{ model.AAR_REPR_SALUTATION.name }}
                        {{ model.AAR_REPR_NAME }}
                      </td>
                    </tr>
                    <tr>
                      <td style="width: 20%;"><b>Position</b></td>
                      <td style="width: 2%;">:</td>
                      <td>{{ model.AAR_REPR_POSITION }}</td>
                    </tr>
                    <tr v-if="model.AAR_REPR_CITIZEN == '1'">
                      <td style="width: 20%;"><b>NRIC No</b></td>
                      <td style="width: 2%;">:</td>
                      <td>{{ model.AAR_REPR_NRIC }}</td>
                    </tr>
                    <tr v-if="model.AAR_REPR_CITIZEN == '2'">
                      <td style="width: 20%;"><b>Passport No</b></td>
                      <td style="width: 2%;">:</td>
                      <td>{{ model.AAR_REPR_PASS_NUM }}</td>
                    </tr>
                    <tr v-if="model.AAR_REPR_CITIZEN == '2'">
                      <td style="width: 20%;"><b>Passport Expiry Date</b></td>
                      <td style="width: 2%;">:</td>
                      <td>{{ model.AAR_REPR_PASS_EXP }}</td>
                    </tr>
                    <tr>
                      <td style="width: 20%;"><b>Telephone Number</b></td>
                      <td style="width: 2%;">:</td>
                      <td>03-7956 8853</td>
                    </tr>
                    <tr>
                      <td style="width: 20%;"><b>Email</b></td>
                      <td style="width: 2%;">:</td>
                      <td>{{ model.AAR_REPR_EMAIL }}</td>
                    </tr>
                  </tbody>
                </table>
              </b-tab>
              <b-tab title="CEO and Director">
                <h4>CEO Profile</h4>
                <table class="table">
                  <tbody>
                    <tr>
                      <td style="width: 20%;"><b>Name</b></td>
                      <td style="width: 2%;">:</td>
                      <td>
                        {{ model.CEO_REPR_SALUTATION.name }}
                        {{ model.CEO_REPR_NAME }}
                      </td>
                    </tr>
                    <tr>
                      <td style="width: 20%;"><b>Position</b></td>
                      <td style="width: 2%;">:</td>
                      <td>{{ model.CEO_REPR_POSITION }}</td>
                    </tr>
                    <tr v-if="model.CEO_REPR_CITIZEN == '1'">
                      <td style="width: 20%;"><b>NRIC No</b></td>
                      <td style="width: 2%;">:</td>
                      <td>{{ model.CEO_REPR_NRIC }}</td>
                    </tr>
                    <tr v-if="model.CEO_REPR_CITIZEN == '2'">
                      <td style="width: 20%;"><b>Passport No</b></td>
                      <td style="width: 2%;">:</td>
                      <td>{{ model.CEO_REPR_PASS_NUM }}</td>
                    </tr>
                    <tr v-if="model.CEO_REPR_CITIZEN == '2'">
                      <td style="width: 20%;"><b>Passport Expiry Date</b></td>
                      <td style="width: 2%;">:</td>
                      <td>{{ model.CEO_REPR_PASS_EXP }}</td>
                    </tr>
                    <tr>
                      <td style="width: 20%;"><b>Telephone Number</b></td>
                      <td style="width: 2%;">:</td>
                      <td>03-7956 8853</td>
                    </tr>
                    <tr>
                      <td style="width: 20%;"><b>Email</b></td>
                      <td style="width: 2%;">:</td>
                      <td>{{ model.CEO_REPR_EMAIL }}</td>
                    </tr>
                  </tbody>
                </table>
                <h4>List of Director</h4>
                <card>
                  <b-table
                    hover
                    :items="directorList"
                    :fields="fieldsDirList"
                    :current-page="currentPage"
                    responsive="md"
                  >
                    <template #cell(index)="data">
                      {{ data.index + 1 }}
                    </template>
                    <template #cell(name)="data">
                      {{ data.item.DIR_firstName }}
                      {{ data.item.DIR_middleName }}
                      {{ data.item.DIR_LastName }}
                    </template>
                    <template #cell()="data">
                      <span class="description">{{ data.value }}</span>
                    </template>
                  </b-table>
                </card>
              </b-tab>
              <b-tab title="Additional Information">
                <h4>Contact Person</h4>
                <table v-if="contactPersonValue == '3'" class="table">
                  <tbody>
                    <tr>
                      <td style="width: 20%;"><b>Name</b></td>
                      <td style="width: 2%;">:</td>
                      <td>
                        {{ model.CEO_REPR_SALUTATION.USER_SAL_NAME }}
                        {{ model.CEO_REPR_NAME }}
                      </td>
                    </tr>
                    <tr>
                      <td style="width: 20%;"><b>Position</b></td>
                      <td style="width: 2%;">:</td>
                      <td>{{ model.CEO_REPR_POSITION }}</td>
                    </tr>
                    <tr v-if="model.CEO_REPR_CITIZEN == '1'">
                      <td style="width: 20%;"><b>NRIC No</b></td>
                      <td style="width: 2%;">:</td>
                      <td>{{ model.CEO_REPR_NRIC }}</td>
                    </tr>
                    <tr v-if="model.CEO_REPR_CITIZEN == '2'">
                      <td style="width: 20%;"><b>Passport No</b></td>
                      <td style="width: 2%;">:</td>
                      <td>{{ model.CEO_REPR_PASS_NUM }}</td>
                    </tr>
                    <tr v-if="model.CEO_REPR_CITIZEN == '2'">
                      <td style="width: 20%;"><b>Passport Expiry Date</b></td>
                      <td style="width: 2%;">:</td>
                      <td>{{ model.CEO_REPR_PASS_EXP }}</td>
                    </tr>
                    <tr>
                      <td style="width: 20%;"><b>Telephone Number</b></td>
                      <td style="width: 2%;">:</td>
                      <td>03-7956 8853</td>
                    </tr>
                    <tr>
                      <td style="width: 20%;"><b>Email</b></td>
                      <td style="width: 2%;">:</td>
                      <td>{{ model.CEO_REPR_EMAIL }}</td>
                    </tr>
                  </tbody>
                </table>
                <table v-if="contactPersonValue == '1'" class="table">
                  <tbody>
                    <tr>
                      <td style="width: 20%;"><b>Name</b></td>
                      <td style="width: 2%;">:</td>
                      <td>
                        {{ model.AR_REPR_SALUTATION.USER_SAL_NAME }}
                        {{ model.AR_REPR_NAME }}
                      </td>
                    </tr>
                    <tr>
                      <td style="width: 20%;"><b>Position</b></td>
                      <td style="width: 2%;">:</td>
                      <td>{{ model.AR_REPR_POSITION }}</td>
                    </tr>
                    <tr v-if="model.AR_REPR_CITIZEN == '1'">
                      <td style="width: 20%;"><b>NRIC No</b></td>
                      <td style="width: 2%;">:</td>
                      <td>{{ model.AR_REPR_NRIC }}</td>
                    </tr>
                    <tr v-if="model.AR_REPR_CITIZEN == '2'">
                      <td style="width: 20%;"><b>Passport No</b></td>
                      <td style="width: 2%;">:</td>
                      <td>{{ model.AR_REPR_PASS_NUM }}</td>
                    </tr>
                    <tr v-if="model.AR_REPR_CITIZEN == '2'">
                      <td style="width: 20%;"><b>Passport Expiry Date</b></td>
                      <td style="width: 2%;">:</td>
                      <td>{{ model.AR_REPR_PASS_EXP }}</td>
                    </tr>
                    <tr>
                      <td style="width: 20%;"><b>Telephone Number</b></td>
                      <td style="width: 2%;">:</td>
                      <td>03-7956 8853</td>
                    </tr>
                    <tr>
                      <td style="width: 20%;"><b>Email</b></td>
                      <td style="width: 2%;">:</td>
                      <td>{{ model.AR_REPR_EMAIL }}</td>
                    </tr>
                  </tbody>
                </table>

                <table v-if="contactPersonValue == '2'" class="table">
                  <tbody>
                    <tr>
                      <td style="width: 20%;"><b>Name</b></td>
                      <td style="width: 2%;">:</td>
                      <td>
                        {{ model.AAR_REPR_SALUTATION.USER_SAL_NAME }}
                        {{ model.AAR_REPR_NAME }}
                      </td>
                    </tr>
                    <tr>
                      <td style="width: 20%;"><b>Position</b></td>
                      <td style="width: 2%;">:</td>
                      <td>{{ model.AAR_REPR_POSITION }}</td>
                    </tr>
                    <tr v-if="model.AAR_REPR_CITIZEN == '1'">
                      <td style="width: 20%;"><b>NRIC No</b></td>
                      <td style="width: 2%;">:</td>
                      <td>{{ model.AAR_REPR_NRIC }}</td>
                    </tr>
                    <tr v-if="model.AAR_REPR_CITIZEN == '2'">
                      <td style="width: 20%;"><b>Passport No</b></td>
                      <td style="width: 2%;">:</td>
                      <td>{{ model.AAR_REPR_PASS_NUM }}</td>
                    </tr>
                    <tr v-if="model.AAR_REPR_CITIZEN == '2'">
                      <td style="width: 20%;"><b>Passport Expiry Date</b></td>
                      <td style="width: 2%;">:</td>
                      <td>{{ model.AAR_REPR_PASS_EXP }}</td>
                    </tr>
                    <tr>
                      <td style="width: 20%;"><b>Telephone Number</b></td>
                      <td style="width: 2%;">:</td>
                      <td>03-7956 8853</td>
                    </tr>
                    <tr>
                      <td style="width: 20%;"><b>Email</b></td>
                      <td style="width: 2%;">:</td>
                      <td>{{ model.AAR_REPR_EMAIL }}</td>
                    </tr>
                  </tbody>
                </table>
              </b-tab>
              <b-tab title="Payment Detail">
                <table class="table">
                  <tbody>
                    <tr>
                      <td style="width: 20%;"><b>Reference No</b></td>
                      <td style="width: 2%;">:</td>
                      <td>{{ model.DIST_TRANS_REF }}</td>
                    </tr>
                    <tr>
                      <td style="width: 20%;"><b>Transaction Type</b></td>
                      <td style="width: 2%;">:</td>
                      <td>{{ model.DIST_TRANS_TYPE.name }}</td>
                    </tr>
                    <tr>
                      <td style="width: 20%;"><b>Transaction Date</b></td>
                      <td style="width: 2%;">:</td>
                      <td>{{ model.DIST_TRANS_DATE }}</td>
                    </tr>
                    <tr>
                      <td style="width: 20%;"><b>Amount</b></td>
                      <td style="width: 2%;">:</td>
                      <td>{{ model.DIST_ACC_AMOUNT }}</td>
                    </tr>
                    <tr>
                      <td style="width: 20%;"><b>Uploaded Receipt</b></td>
                      <td style="width: 2%;">:</td>
                      <td>
                        <a
                          target="blank"
                          href="https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
                          class="row"
                          >Document 1.pdf</a
                        >
                      </td>
                    </tr>
                  </tbody>
                </table>
              </b-tab>
              <b-tab title="Uploaded Document">
                <b-table
                  hover
                  :items="uploadFileItems"
                  :fields="uploadedFileFields"
                  responsive="sm"
                >
                  <template #cell(actions)="data">
                    <base-checkbox
                      class=""
                      v-model="data.item.selected"
                      disabled="true"
                    ></base-checkbox>
                  </template>
                  <template #cell()="data">
                    <span class="description">{{ data.value }}</span> &nbsp;
                  </template>
                  <template #cell(file)="data">
                    <a
                      target="blank"
                      v-if="data.item.selected == true"
                      href="https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
                      >View</a
                    >
                  </template>
                </b-table>
              </b-tab>
              <b-tab title="Proposal"> </b-tab>
            </b-tabs> -->
          </va-card>
        </div>
        <div class="actions">
          <div class="cancel vudal-btn">Close</div>
        </div>
      </vudal>
      <vudal name="simpleModalEdit" class="widthModal">
        <div class="header">
          Edit Director Info
          <i class="close icon">&times;</i>
          <br />
        </div>
        <div class="content">
          <vue-form-generator
            :model="model"
            :schema="editDirectorSchema"
            :options="formOptions"
          />
        </div>
        <div class="actions">
          <button
            type="button"
            class="cancel vudal-btn mr-2 btn btn-danger btn-fill btn-md"
          >
            <i class="fa fa-times" /> &nbsp; Close
          </button>
          <button
            type="button"
            class="cancel vudal-btn mr-2 btn btn-primary btn-fill btn-md"
          >
            <i class="fa fa-edit" /> &nbsp; Edit
          </button>
        </div>
      </vudal>
      <br />
      <div class="row">
        <div class="col-12">
          <va-card>
            <form-wizard
              @on-complete="onComplete"
              color="#FF5050"
              error-color="#a94442"
              finish-button-text="Submit"
              ref="wizardForm"
            >
              <h3 slot="title"></h3>
              <tab-content
                icon="fa fa-university"
                title="1. Create Distributor Profile"
              >
                <br />
                <vue-form-generator
                  :model="model"
                  :schema="firstTabSchema"
                  :options="formOptions"
                  ref="firstTabForm"
                  @model-updated="onModelUpdated"
                >
                </vue-form-generator>
              </tab-content>
              <tab-content icon="fa fa-navicon" title="2. Details information">
                <br />
                <vue-form-generator
                  :model="model"
                  :schema="firstTabAddSchema"
                  :options="formOptions"
                  ref="detailInfoForm"
                  @model-updated="onModelUpdated"
                >
                </vue-form-generator>
              </tab-content>

              <tab-content icon="fa fa-user" title="3. CEO and Director">
                <br />
                <vue-form-generator
                  :model="model"
                  :schema="thirdTabSchemaCEO"
                  :options="formOptions"
                  ref="thirdTabFormCEO"
                  @model-updated="onModelUpdated"
                >
                </vue-form-generator>
                <br />
                <vue-form-generator
                  :model="model"
                  :schema="thirdTabSchemaDIR"
                  :options="formOptions"
                  ref="thirdTabFormDIR"
                >
                </vue-form-generator>
                <br />
                <div class="text-center">
                  <button
                    @click="addDirector"
                    type="button"
                    class="btn btn-warning btn-fill btn-md"
                  >
                    <i class="fa fa-plus" /> &nbsp; Add
                  </button>
                </div>
                <br />
                <va-card>
                  <va-data-table :fields="fields" :data="filteredData">
                    <!-- A virtual column -->
                    <template slot="no" slot-scope="row">
                      {{ row.rowIndex + 1 }}
                    </template>
                    <template slot="actions" slot-scope="props">
                      <h4 class="mt-2">
                        <span
                          @click="deleteDir(props)"
                          class="badge badge-danger mr-1"
                        >
                          <i class="fa fa-trash"></i
                        ></span>
                        <span
                          @click="editDirector(props.rowData)"
                          class="badge badge-primary mr-1"
                        >
                          <i class="fa fa-edit"></i
                        ></span>
                      </h4>
                    </template>
                  </va-data-table>
                </va-card>
              </tab-content>
              <tab-content icon="fa fa-user-circle-o" title="4. AR and AAR">
                <br />
                <vue-form-generator
                  :model="model"
                  :schema="secondTabSchema"
                  :options="formOptions"
                  ref="ARForm"
                  @model-updated="onModelUpdated"
                >
                </vue-form-generator>

                <br /><br /><br />
              </tab-content>
              <tab-content icon="fa fa-info" title="5. Additional Information">
                <br />
                <vue-form-generator
                  :model="model"
                  :schema="AISchema1"
                  :options="formOptions"
                  ref="AIForm1"
                  @model-updated="onModelUpdated"
                >
                </vue-form-generator>
                <br />
                <vue-form-generator
                  :model="model"
                  :schema="AISchema2"
                  :options="formOptions"
                  ref="AIForm2"
                  @model-updated="onModelUpdated"
                >
                </vue-form-generator>
                <br />
                <vue-form-generator
                  :model="model"
                  :schema="AISchema3"
                  :options="formOptions"
                  ref="AIForm3"
                  @model-updated="onModelUpdated"
                >
                </vue-form-generator>
                <br />
                <vue-form-generator
                  :model="model"
                  :schema="AISchema4"
                  :options="formOptions"
                  ref="AIForm4"
                  @model-updated="onModelUpdated"
                >
                </vue-form-generator>
              </tab-content>
              <tab-content
                icon="fa fa-usd"
                title="6. Payment Detail"
                :before-change="validateFifthTab"
              >
                <br />
                <vue-form-generator
                  :model="model"
                  :schema="fifthTabSchema"
                  :options="formOptions"
                  ref="fifthTabForm"
                  @model-updated="onModelUpdated"
                >
                </vue-form-generator>
                <!-- <br />
                <label>Upload Receipt</label><br />
                <input
                  type="file"
                  accept="application/pdf,application/msword,
                    application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                  @change="uploadFile()"
                  ref="file"
                  id="file-input2"
                /> -->
                <br />
                <br />
                <p class="ml-4">
                  <a
                    v-if="showView"
                    href="https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
                    target="blank"
                    class="row"
                    >View File</a
                  >
                </p>
                <br />
                <br />
              </tab-content>
              <tab-content icon="fa fa-file-text" title="7. Upload Document">
                <div>
                  <div class="table-sm col-ml-2">
                    <b-table
                      hover
                      :items="uploadFileItems"
                      :fields="uploadFileFields"
                      responsive="sm"
                    >
                      <!-- A virtual column -->
                      <template #cell(actions)="data">
                        <!-- {{data.index}} -->
                        <base-checkbox
                          class=""
                          v-model="data.item.selected"
                          disabled="true"
                        ></base-checkbox>
                      </template>
                      <template #cell()="data">
                        <span class="description">{{ data.value }}</span> &nbsp;
                        <a
                          target="blank"
                          v-if="data.item.selected == true"
                          href="https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
                          >View</a
                        >
                      </template>
                      <template #cell(chooseFile)="data">
                        <form
                          v-if="data.item.type == 'file'"
                          enctype="multipart/form-data"
                        >
                          <input
                            type="file"
                            accept="application/pdf,application/msword,
  application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                            ref="files"
                            @change="uploadImage(data.item)"
                            :id="'file-input' + data.index"
                          />
                        </form>

                        <form
                          v-if="data.item.type == 'photo'"
                          enctype="multipart/form-data"
                        >
                          <div v-if="applicantPhoto">
                            <img
                              src
                              ref="applicantPhotoDisplay"
                              class="w-150px"
                            />
                          </div>
                          <br v-if="applicantPhoto" />
                          <input
                            type="file"
                            accept="image/*"
                            ref="applicantPhoto"
                            @change="uploadImage(data.item)"
                            :id="'file-input' + data.index"
                          />
                        </form>
                      </template>
                    </b-table>
                  </div>
                </div>
              </tab-content>
              <tab-content icon="fa fa-file-pdf-o" title="8. Proposal">
                <br />
                <h4 class="card-title">
                  Part 1 :Governance on marketing and distribution activities
                </h4>
                <br />
                <div style="overflow-x: auto;">
                  <div class="table-sm col-ml-2">
                    <b-table
                      hover
                      :items="uploadFileItems1"
                      :fields="uploadFileFields"
                      responsive="sm"
                    >
                      <!-- A virtual column -->
                      <template #cell(actions)="data">
                        <!-- {{data.index}} -->
                        <base-checkbox
                          class=""
                          v-model="data.item.selected"
                          disabled="true"
                        ></base-checkbox>
                      </template>
                      <template #cell()="data">
                        <span class="description">{{ data.value }}</span> &nbsp;
                        <a
                          target="blank"
                          v-if="data.item.selected == true"
                          href="https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
                          >View</a
                        >
                      </template>
                      <template #cell(chooseFile)="data">
                        <form
                          v-if="data.item.type == 'file'"
                          enctype="multipart/form-data"
                        >
                          <input
                            type="file"
                            accept="application/pdf,application/msword,
  application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                            ref="files"
                            @change="uploadImage(data.item)"
                            :id="'file-input' + data.index"
                          />
                        </form>

                        <form
                          v-if="data.item.type == 'photo'"
                          enctype="multipart/form-data"
                        >
                          <div v-if="applicantPhoto">
                            <img
                              src
                              ref="applicantPhotoDisplay"
                              class="w-150px"
                            />
                          </div>
                          <br v-if="applicantPhoto" />
                          <input
                            type="file"
                            accept="image/*"
                            ref="applicantPhoto"
                            @change="uploadImage(data.item)"
                            :id="'file-input' + data.index"
                          />
                        </form>
                      </template>
                    </b-table>
                  </div>
                </div>
                <br />
                <h4 class="card-title">Part 2 :Management of Unitholders</h4>
                <br />
                <div style="overflow-x: auto;">
                  <div class="table-sm col-ml-2">
                    <b-table
                      hover
                      :items="uploadFileItems2"
                      :fields="uploadFileFields"
                      responsive="sm"
                    >
                      <!-- A virtual column -->
                      <template #cell(actions)="data">
                        <!-- {{data.index}} -->
                        <base-checkbox
                          class=""
                          v-model="data.item.selected"
                          disabled="true"
                        ></base-checkbox>
                      </template>
                      <template #cell()="data">
                        <span class="description">{{ data.value }}</span> &nbsp;
                        <a
                          target="blank"
                          v-if="data.item.selected == true"
                          href="https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
                          >View</a
                        >
                      </template>
                      <template #cell(chooseFile)="data">
                        <form
                          v-if="data.item.type == 'file'"
                          enctype="multipart/form-data"
                        >
                          <input
                            type="file"
                            accept="application/pdf,application/msword,
  application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                            ref="files"
                            @change="uploadImage(data.item)"
                            :id="'file-input' + data.index"
                          />
                        </form>

                        <form
                          v-if="data.item.type == 'photo'"
                          enctype="multipart/form-data"
                        >
                          <div v-if="applicantPhoto">
                            <img
                              src
                              ref="applicantPhotoDisplay"
                              class="w-150px"
                            />
                          </div>
                          <br v-if="applicantPhoto" />
                          <input
                            type="file"
                            accept="image/*"
                            ref="applicantPhoto"
                            @change="uploadImage(data.item)"
                            :id="'file-input' + data.index"
                          />
                        </form>
                      </template>
                    </b-table>
                  </div>
                </div>
                <br />
                <h4 class="card-title">Part 3 :Management of Consultants</h4>
                <br />
                <div style="overflow-x: auto;">
                  <div class="table-sm col-ml-2">
                    <b-table
                      hover
                      :items="uploadFileItems3"
                      :fields="uploadFileFields"
                      responsive="sm"
                    >
                      <!-- A virtual column -->
                      <template #cell(actions)="data">
                        <!-- {{data.index}} -->
                        <base-checkbox
                          class=""
                          v-model="data.item.selected"
                          disabled="true"
                        ></base-checkbox>
                      </template>
                      <template #cell()="data">
                        <span class="description">{{ data.value }}</span> &nbsp;
                        <a
                          target="blank"
                          v-if="data.item.selected == true"
                          href="https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
                          >View</a
                        >
                      </template>
                      <template #cell(chooseFile)="data">
                        <form
                          v-if="data.item.type == 'file'"
                          enctype="multipart/form-data"
                        >
                          <input
                            type="file"
                            accept="application/pdf,application/msword,
  application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                            ref="files"
                            @change="uploadImage(data.item)"
                            :id="'file-input' + data.index"
                          />
                        </form>

                        <form
                          v-if="data.item.type == 'photo'"
                          enctype="multipart/form-data"
                        >
                          <div v-if="applicantPhoto">
                            <img
                              src
                              ref="applicantPhotoDisplay"
                              class="w-150px"
                            />
                          </div>
                          <br v-if="applicantPhoto" />
                          <input
                            type="file"
                            accept="image/*"
                            ref="applicantPhoto"
                            @change="uploadImage(data.item)"
                            :id="'file-input' + data.index"
                          />
                        </form>
                      </template>
                    </b-table>
                  </div>
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <vue-form-generator
                    :model="model"
                    :schema="declarationSchema"
                    :options="formOptions"
                  >
                  </vue-form-generator>
                </div>
              </tab-content>
              <template
                slot="footer"
                slot-scope="{ activeTabIndex, isLastStep, nextTab, prevTab }"
              >
                <div class="float-left">
                  <button
                    v-if="activeTabIndex > 0"
                    @click="prevTab"
                    type="button"
                    class="btn btn-primary btn-fill btn-md"
                  >
                    <i class="fa fa-step-backward" /> &nbsp; Previous
                  </button>
                </div>
                <div class="float-right">
                  <button
                    :disabled="model.DIST_PUBLISH_STATUS"
                    @click="submit(1)"
                    type="button"
                    class="btn btn-info btn-fill btn-md"
                  >
                    <i class="fa fa-edit" /> &nbsp;Save as Draft
                  </button>
                  <button
                    v-if="isLastStep"
                    @click="showmodal"
                    type="button"
                    class="ml-2 btn btn-warning btn-fill btn-md"
                  >
                    <i class="fa fa-play-circle" /> &nbsp;Preview
                  </button>
                  <button
                    v-if="!isLastStep"
                    @click="nextTab"
                    type="button"
                    class="ml-2 btn btn-primary btn-fill btn-md"
                  >
                    Next &nbsp; <i class="fa fa-step-forward" />
                  </button>
                  <button
                    :disabled="model.DIST_PUBLISH_STATUS"
                    v-if="isLastStep"
                    @click="submitDistributor"
                    type="button"
                    class="ml-2 btn btn-primary btn-fill btn-md"
                  >
                    Submit
                  </button>
                </div>
              </template>
            </form-wizard>
          </va-card>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Multiselect from "vue-multiselect";
import Vudal from "vudal";
import VueFormGenerator from "vue-form-generator";
import "vue-form-generator/dist/vfg-core.css";
import VueFormWizard from "vue-form-wizard";
import "vue-form-wizard/dist/vue-form-wizard.min.css";
import Vue from "vue";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";

// Import Bootstrap an BootstrapVue CSS files (order is important)
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import HorizontalScroll from "vue-horizontal-scroll";
import "vue-horizontal-scroll/dist/vue-horizontal-scroll.css";
import * as services06Module0 from "../../../app/module0/services06";
import * as services06Module1 from "../../../app/module1/services06";
import moment from "moment";

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);
Vue.use(VueFormGenerator);
Vue.use(VueFormWizard);
Vue.component(Vudal);
// register globally
Vue.component("multiselect", Multiselect);
export default {
  // watch: {
  //   directorList(value) {
  //     alert(JSON.stringify(value));
  //   },
  // },
  watch: {
    directorList: {
      handler(newValue, oldValue) {
        newValue.forEach(item => {
          item.DIR_NAME = "adasdasd";
        });
      },
      deep: true
    }
  },
  computed: {
    fields() {
      return [
        {
          name: "__slot:marker",
          width: "30px",
          dataClass: "text-center"
        },
        {
          name: "__slot:no",
          title: "No"
          // width: "30px"
          // height: "45px"
          // dataClass: "text-center"
        },
        {
          name: "DIR_NAME_DISPLAY",
          title: "Name",
          width: "40%"
        },
        // {
        //   name: "EVENT_CONTENT",
        //   title: "Event Content"
        //   // width: "30%"
        // },
        {
          name: "DIR_NRIC",
          title: "NRIC No"
          // width: "40%"
        },
        {
          name: "DIR_DATE_EFFECTIVE_DISPLAY",
          title: "Effective Date"
          // width: "40%"
        },
        {
          name: "DIR_DATE_END_DISPLAY",
          title: "End Date"
          // width: "40%"
        },
        {
          name: "__slot:actions",
          title: "Action"
          // dataClass: "float-right"
        }
      ];
    },
    filteredData() {
      return this.directorList;
    }
  },
  components: {
    Vudal,
    HorizontalScroll
  },
  mounted() {
    // this.$refs.wizard.maxStep = 5;
    // this.$refs.wizard.navigateToTab(5)
    this.getUserSalutation();
    this.getDefaultCountry();
    this.getApplicationType();
    this.getCountry();
    this.getDistributorById();

    //active all tab
    //var wizard = this.$refs.wizardForm;
    // wizard.activateAll();
  },
  props: {
    value: File
  },
  data() {
    return {
      tempArray: [],
      deletedDir: [],
      updateDistributor: false,
      uploadFileOject: "",
      fileRecords: [],
      // fileRecordsForUpload: [],
      uploadUrl: "https://www.mocky.io/v2/5d4fb20b3000005c111099e3",
      uploadHeaders: {
        "X-Test-Header": "vue-file-agent"
      },
      state: [],
      country: [],
      options: [
        { label: "Distributor Profile", value: 1 },
        { label: "Details Information", value: 2 },
        { label: "CEO and Director", value: 3 },
        { label: "AR and AAR", value: 4 },
        { label: "Additional Information", value: 5 },
        { label: "Payment Detail", value: 6 },
        { label: "Uploaded Document", value: 7 },
        { label: "Proposal", value: 8 }
      ],
      tabValue: 1,
      activePage: 4,
      activetab: 1,
      applicantPhoto: "",
      show: false,
      show_second: false,
      show_third: false,
      modalClass: "modal-90per",
      uploadedFileFields: [
        {
          key: "actions",
          label: ""
        },
        // A column that needs custom formatting
        {
          key: "fileName",
          label: "Document"
        },
        {
          key: "file",
          label: "Action"
        }
      ],
      uploadFileFields: [
        // A virtual column that doesn't exist in items
        {
          key: "actions",
          label: ""
        },
        // A column that needs custom formatting
        {
          key: "fileName",
          label: "Document"
        },
        {
          key: "chooseFile",
          label: "Choose File"
        }
      ],

      uploadFileItems: [
        {
          id: "1",
          fileName: "Distributor Logo",
          type: "photo",
          filePath: "",
          selected: false
        },
        {
          id: "2",
          fileName:
            "Board of Directors' Resolution approving the appointment of the AR",
          type: "file",
          filePath: "",
          selected: false
        },
        {
          id: "3",
          fileName:
            " Certified true copy of relevant CMSL and approval that verify the eligibility of the applicant (if applicable)",
          type: "file",
          filePath: "",
          selected: false
        },
        {
          id: "4",
          fileName: "Payment of application and annual fees",
          type: "file",
          filePath: "",
          selected: false
        }
      ],
      uploadFileItems1: [
        {
          id: "1",
          fileName: "Policy governing Sales Conduct / Activities ",
          type: "file",
          filePath: "",
          selected: false
        },
        {
          id: "2",
          fileName: "Policy on promotional Materials ",
          type: "file",
          filePath: "",
          selected: false
        },
        {
          id: "3",
          fileName: "Policy on Unitholder’s Rights and Protection ",
          type: "file",
          filePath: "",
          selected: false
        },
        {
          id: "4",
          fileName: "Conflict of Interest Management",
          type: "file",
          filePath: "",
          selected: false
        },
        {
          id: "5",
          fileName: "Conflict of Interest Management",
          type: "file",
          filePath: "",
          selected: false
        },
        {
          id: "6",
          fileName: "Risk Management ",
          type: "file",
          filePath: "",
          selected: false
        },
        {
          id: "7",
          fileName: "Complaint Handling and Disciplinary matrix ",
          type: "file",
          filePath: "",
          selected: false
        },
        {
          id: "8",
          fileName:
            "Other Policies – upload related policy available (i.e. AMLCFT, PDPA, etc.) ",
          type: "file",
          filePath: "",
          selected: false
        }
      ],
      uploadFileItems2: [
        {
          id: "1",
          fileName: "Unitholder’s KYC process, records and system ",
          type: "file",
          filePath: "",
          selected: false
        },
        {
          id: "2",
          fileName:
            "Redemption process - upload related policy (checking, verification & turnaround)",
          type: "file",
          filePath: "",
          selected: false
        },
        {
          id: "3",
          fileName: "Switching process ",
          type: "file",
          filePath: "",
          selected: false
        },
        {
          id: "4",
          fileName: "Transfer process & policy ",
          type: "file",
          filePath: "",
          selected: false
        },
        {
          id: "5",
          fileName: "Reconciliation of subscriptions/ redemptions/ transfers",
          type: "file",
          filePath: "",
          selected: false
        },
        {
          id: "6",
          fileName: "Management of Statements to investors",
          type: "file",
          filePath: "",
          selected: false
        }
      ],
      uploadFileItems3: [
        {
          id: "1",
          fileName: "Recruitment of Consultants ",
          type: "file",
          filePath: "",
          selected: false
        },
        {
          id: "2",
          fileName: "Promotion of Consultants ",
          type: "file",
          filePath: "",
          selected: false
        },
        {
          id: "3",
          fileName: "Consultant Record Management and Maintenance System",
          type: "file",
          filePath: "",
          selected: false
        },
        {
          id: "4",
          fileName: "Termination of Consultants ",
          type: "file",
          filePath: "",
          selected: false
        },
        {
          id: "5",
          fileName: "Training & CPD Record Management ",
          type: "file",
          filePath: "",
          selected: false
        },
        {
          id: "6",
          fileName: "Apprenticeship Management / Management of agency",
          type: "file",
          filePath: "",
          selected: false
        }
      ],
      currentPage: 1,
      filter: null,
      directorList: [],
      fieldsDirList: [
        {
          key: "index",
          label: "No"
        },
        // A column that needs custom formatting
        {
          key: "name",
          label: "Name"
        },
        {
          key: "DIR_icNo",
          label: "IC No."
        },
        {
          key: "DIR_effectiveDate",
          label: "Effective Date"
        },
        {
          key: "DIR_endDate",
          label: "End Date"
        }
      ],
      showView: false,
      contactPersonValue: null,
      visibleIc: true,
      visiblePassport: false,
      visibleIcAAR: true,
      visiblePassportAAR: false,
      visiblePassportCEO: false,
      visibleIcCEO: true,
      visiblePassportOther: false,
      visibleIcOther: true,
      // transType:[
      //   {
      //     name: "Malaysian",
      //     value: "1",
      //     selected: true
      //   },
      // ],
      citizenship: [
        {
          name: "Malaysian",
          value: 1,
          selected: true
        },
        {
          name: "Non Malaysian",
          value: 2
        }
      ],
      postcode: [],
      city: [],
      states: "",
      applicationType: [
        // {
        //   name: "Member",
        //   value: "1"
        // },
        // {
        //   name: "IUTA",
        //   value: "2"
        // },
        // {
        //   name: "CUTA",
        //   value: "3"
        // }
      ],
      setupType: [
        { value: 1, name: "Public Limited Company / Berhad " },
        { value: 2, name: "Private Limited Company / Sendirian Berhad " }
      ],
      salutations: [],
      icTypes: [
        {
          name: "New NRIC",
          value: "1"
        },
        {
          name: "Old NRIC",
          value: "2"
        },
        {
          name: "Passport",
          value: "3"
        }
      ],
      contactPerson: [
        {
          name: "Authorised Representative(s)",
          value: "1"
        },
        {
          name: "Alternate Authorised Representative(s)",
          value: "2"
        },
        {
          name: "CEO",
          value: "3"
        },
        {
          name: "Other",
          value: "4"
        }
      ],
      bank: [
        {
          name: "Maybank",
          code: "27"
        },
        {
          name: "CIMB Bank",
          code: "35"
        },
        {
          name: "RHB Bank",
          code: "18"
        },
        {
          name: "Bank Islam",
          code: "45"
        },
        {
          name: "Bank Muamalat",
          code: "41"
        },
        {
          name: "Bank Rakyat",
          code: "02"
        },
        {
          name: "Bank Simpanan Nasional",
          code: "10"
        },
        {
          name: "Citibank",
          code: "17"
        },
        {
          name: "Hong Leong Bank",
          code: "24"
        },
        {
          name: "HSBC Bank",
          code: "22"
        },
        {
          name: "OCBC Bank",
          code: "29"
        },
        {
          name: "Public Bank",
          code: "33"
        },
        {
          name: "Affin Bank",
          code: "32"
        },
        {
          name: "AmBank",
          code: "08"
        },
        {
          name: "Agro Bank",
          code: "49"
        },
        {
          name: "Alliance Bank",
          code: "12"
        },
        {
          name: "Al-Rajhi Bank",
          code: "53"
        },
        {
          name: "Bank of China",
          code: "42"
        },
        {
          name: "Bank of America",
          code: "07"
        },
        {
          name: "Bank of Tokyo-Mitsubishi UFJ",
          code: "52"
        },
        {
          name: "BNP Paribas",
          code: "60"
        },
        {
          name: "Deutsche Bank",
          code: "19"
        },
        {
          name: "Industrial & Commercial Bank of China",
          code: "59"
        },
        {
          name: "JP Morgan Chase Bank",
          code: "48"
        },
        {
          name: "Kuwait Finance House",
          code: "47"
        },
        {
          name: "Mizuho Bank",
          code: "73"
        },
        {
          name: "Standard Chartered Bank",
          code: "14"
        },
        {
          name: "Sumitomo Mitsui Banking Corporation",
          code: "51"
        },
        {
          name: "The Royal Bank of Scotland",
          code: "46"
        },
        {
          name: "United Overseas Bank",
          code: "26"
        }
      ],
      transType: [
        {
          name: "ONLINE TRANSACTION",
          value: 1
        },
        {
          name: "CASH DEPOSITE",
          value: 2
        }
      ],
      department: [],
      compType: [
        { id: "1", name: "UTMC", selected: false },
        { id: "2", name: "IUTA", selected: false },
        { id: "3", name: "CUTA", selected: false },
        { id: "4", name: "IUTA", selected: false },
        { id: "5", name: "CPRA", selected: false },
        { id: "6", name: "PRP", selected: false }
      ],
      structureType: [
        { value: 1, name: "Single-tier" },
        { value: 2, name: "Multi-tier" }
      ],
      approachType: [
        { value: 1, name: "Direct" },
        { value: 2, name: "Nominee" }
      ],
      model: {
        show1: true,
        //* *Particulars of Applicant (Corporate)*/
        fileRecordsForUpload: "",
        DIST_PUBLISH_STATUS: "",
        companyLogo: "",
        DISTRIBUTOR_ID: "",
        DIST_NAME: "",
        DIST_REGI_NUM1: "",
        DIST_REGI_NUM2: "",
        DIST_DATE_INCORP: "",
        DIST_TYPE_SETUP: "1",
        DIST_PHONE_NUMBER: "",
        DIST_PHONE_EXTENSION: null,
        DIST_MOBILE_NUMBER: "",
        DIST_EMAIL: "",
        DIST_FAX_NUMBER: "",
        DIST_COMPANY_WEBSITE: "",

        DIST_ADDR_1: "",
        DIST_ADDR_2: "",
        DIST_ADDR_3: "",
        DIST_POSTAL: "",
        DIST_COUNTRY: "",
        DIST_CITY: "",
        DIST_STATE: "",
        applicationType: null,

        DIST_PAID_UP_CAPITAL: "",
        DIST_TYPE_STRUCTURE: 1,
        DIST_MARKETING_APPROACH: 1,
        DIST_NUM_DIST_POINT: "",
        DIST_NUM_CONSULTANT: "",
        DIST_INSURANCE: "",
        DIST_DATE_INCORP: null,

        //* *Authorised Representative(s) */
        AR_REPR_SALUTATION: "",
        AR_REPR_NAME: "",
        AR_REPR_POSITION: "",
        AR_REPR_NRIC: "",
        AR_REPR_PASS_NUM: "",
        AR_REPR_PASS_EXP: null,
        AR_REPR_CITIZEN: "1",
        AR_REPR_TELEPHONE: "",
        AR_REPR_PHONE_EXTENSION: "",
        AR_REPR_MOBILE_NUMBER: "",
        AR_REPR_EMAIL: "",
        //* *Alternate Authorised Representative(s) */
        AAR_REPR_SALUTATION: "",
        AAR_REPR_NAME: "",
        AAR_REPR_POSITION: "",
        AAR_REPR_NRIC: "",
        AAR_REPR_PASS_NUM: "",
        AAR_REPR_PASS_EXP: null,
        AAR_REPR_CITIZEN: "1",
        AAR_REPR_TELEPHONE: "",
        AAR_REPR_PHONE_EXTENSION: "",
        AAR_REPR_MOBILE_NUMBER: "",
        AAR_REPR_EMAIL: "",
        //* *Login Info Authorised Representative(s) */
        LI_AR_memberId: "",
        LI_AR_password: "",
        LI_AR_confirmPassword: "",
        //* *Login Info Alternate Authorised Representative(s) */
        LI_AAR_memberId: "",
        LI_AAR_password: "",
        LI_AAR_confirmPassword: "",
        //* *Additional Information */
        COMPL_SALUTATION: "",
        COMPL_NAME: "",
        COMPL_TELEPHONE: "",
        COMPL_PHONE_EXTENSION: "",
        COMPL_EMAIL: "",
        COMPL_MOBILE_NUMBER: "",

        UTS_SALUTATION: "",
        UTS_NAME: "",
        UTS_TELEPHONE: "",
        UTS_PHONE_EXTENSION: "",
        UTS_EMAIL: "",
        UTS_MOBILE_NUMBER: "",

        PRS_SALUTATION: "",
        PRS_NAME: "",
        PRS_TELEPHONE: "",
        PRS_PHONE_EXTENSION: "",
        PRS_EMAIL: "",
        PRS_MOBILE_NUMBER: "",

        TRAIN_SALUTATION: "",
        TRAIN_NAME: "",
        TRAIN_TELEPHONE: "",
        TRAIN_PHONE_EXTENSION: "",
        TRAIN_EMAIL: "",
        TRAIN_MOBILE_NUMBER: "",

        //* *Director detail */
        DIST_DIR_ID: "",
        DIR_SALUTATION: "",
        DIR_NAME: "",
        DIR_NRIC: "",
        DIR_DATE_EFFECTIVE: "",
        DIR_DATE_END: "",

        EDIT_DIST_DIR_ID: "",
        EDIT_DIR_SALUTATION: "",
        EDIT_DIR_NAME: "",
        EDIT_DIR_NRIC: "",
        EDIT_DIR_DATE_EFFECTIVE: "",
        EDIT_DIR_DATE_END: "",

        //* * Ceo Detail */
        CEO_isRepresentative: false,
        CEO_REPR_SALUTATION: "",
        CEO_REPR_NAME: "",
        CEO_REPR_POSITION: "",
        CEO_REPR_NRIC: "",
        CEO_REPR_PASS_NUM: "",
        CEO_REPR_PASS_EXP: null,
        CEO_REPR_CITIZEN: 1,
        CEO_REPR_TELEPHONE: "",
        CEO_REPR_PHONE_EXTENSION: "",
        CEO_REPR_MOBILE_NUMBER: "",
        CEO_REPR_EMAIL: "",

        //* * Other Detail */
        Other_salutation: "",
        Other_firstName: "",
        Other_middleName: "",
        Other_LastName: "",
        Other_position: "",
        Other_icNo: "",
        Other_passport: "",
        Other_passportExpiryDate: null,
        Other_citizenship: "1",
        Other_address: "",
        Other_address2: "",
        Other_postcode: "",
        Other_country: "",
        Other_city: "",
        Other_state: "",
        Other_telNo: "",
        Other_faxNo: "",
        Other_email: "",

        //* * payment detail */
        DIST_TRANS_REF: "",
        DIST_TRANS_DATE: null,
        DIST_TRANS_TYPE: "",
        DIST_ACC_AMOUNT: ""
      },
      formOptions: {
        // validationErrorClass: "has-error",
        // validationSuccessClass: "has-`success`",
        validateAfterChanged: true
      },
      firstTabSchema: {
        groups: [
          {
            styleClasses: "row",
            // legend: "Create Company Profile",
            fields: [
              {
                type: "input",
                inputType: "text",
                label: "Distributor Name",
                model: "DIST_NAME",
                placeholder: "Enter distributor name",
                required: true,
                validator: "string",
                styleClasses: "col-md-12"
              },
              {
                labels: "Upload Company Logo",
                model: "companyLogo",
                type: "vfg-custom-upload",
                // placeholder: "Enter NRIC Number",
                styleClasses: "col-md-2"
              },

              {
                type: "input",
                inputType: "text",
                label: "Registration Number",
                model: "DIST_REGI_NUM1",
                placeholder: "Enter distributor registration number",
                // required: true,
                // validator: "string",
                styleClasses: "col-md-4"
              },
              {
                type: "input",
                inputType: "text",
                label: "New Registration Number",
                model: "DIST_REGI_NUM2",
                placeholder: "Enter new distributor registration number",
                // required: true,
                // validator: "string",
                styleClasses: "col-md-3"
              },
              // {
              //   type: "input",
              //   inputType: "date",
              //   label: "Date of Incorporation ",
              //   model: "incorporationDate",
              //   placeholder: "Enter date",
              //   required: true,
              //   styleClasses: "col-md-4"
              // },
              {
                labels: "Date of Incorporation",
                type: "vfg-functional-date",
                placeholder: "Enter date",
                model: "DIST_DATE_INCORP",
                noLabel: true,
                format: "dd-MM-yyyy",
                styleClasses: "col-md-3",
                required: true,
                validator: "required"
              },
              {
                type: "radios",
                label: "Type of Setup",
                model: "DIST_TYPE_SETUP",
                required: true,
                validator: "required",
                styleClasses: "col-md-12 display-inline",
                values: () => {
                  return this.setupType;
                }
              },
              {
                labels: "Upload SSM Form 8",
                text: "Choose a File",
                model: "fileRecordsForUpload",
                type: "vfg-custom-file",
                styleClasses: "col-md-12",
                visible: (model, field, form) => {
                  return model.DIST_TYPE_SETUP == "1";
                }
              },
              {
                labels: "Upload SSM Form 9",
                text: "Choose a File",
                model: "fileRecordsForUpload",
                type: "vfg-custom-file",
                styleClasses: "col-md-12",
                visible: (model, field, form) => {
                  return model.DIST_TYPE_SETUP == "2";
                }
              },
              {
                type: "vueMultiSelect",
                model: "DIST_COUNTRY",
                label: "Country",
                placeholder: "Enter Your Country",
                required: true,
                validator: "required",
                styleClasses: "col-md-6",
                selectOptions: {
                  multiple: false,
                  key: "SET_PARAM",
                  label: "SET_PARAM",
                  searchable: true
                },
                values: (model, schema) => {
                  return this.country;
                }
              },
              {
                label: "State",
                type: "input",
                inputType: "text",
                model: "DIST_STATE",
                placeholder: "Enter Your State",
                styleClasses: "col-md-6",
                required: true,
                validator: "required",
                visible: (model, field, form) => {
                  return model.DIST_COUNTRY.SET_CODE != "MY";
                }
              },
              {
                type: "vueMultiSelect",
                model: "DIST_STATE",
                label: "State",
                placeholder: "Select Your state",
                required: true,
                validator: "required",
                styleClasses: "col-md-6",
                selectOptions: {
                  multiple: false,
                  key: "SET_PARAM",
                  label: "SET_PARAM",
                  searchable: true
                },
                visible: (model, field, form) => {
                  return model.DIST_COUNTRY.SET_CODE == "MY";
                },
                values: (model, schema) => {
                  return this.state;
                }
              },
              {
                type: "vueMultiSelect",
                model: "DIST_CITY",
                label: "City",
                placeholder: "Enter Your City",
                required: true,
                validator: "required",
                styleClasses: "col-md-6",
                selectOptions: {
                  multiple: false,
                  key: "SET_CITY_NAME",
                  label: "SET_CITY_NAME",
                  searchable: true
                },
                visible: (model, field, form) => {
                  return model.DIST_COUNTRY.SET_CODE == "MY";
                },
                values: (model, schema) => {
                  return this.city;
                }
              },
              {
                label: "City",
                type: "input",
                inputType: "text",
                model: "DIST_CITY",
                placeholder: "Enter Your City",
                styleClasses: "col-md-6",
                required: true,
                validator: "required",
                visible: (model, field, form) => {
                  return model.DIST_COUNTRY.SET_CODE != "MY";
                }
              },
              {
                label: "Postcode",
                type: "input",
                inputType: "text",
                model: "DIST_POSTAL",
                placeholder: "Enter Your Postcode",
                styleClasses: "col-md-6",
                required: true,
                validator: "required",
                visible: (model, field, form) => {
                  return model.DIST_COUNTRY.SET_CODE != "MY";
                }
              },
              {
                type: "vueMultiSelect",
                model: "DIST_POSTAL",
                label: "Postcode",
                placeholder: "Enter Your Postcode",
                required: true,
                validator: "required",
                styleClasses: "col-md-6",
                visible: (model, field, form) => {
                  return model.DIST_COUNTRY.SET_CODE == "MY";
                },
                selectOptions: {
                  multiple: false,
                  key: "POSTCODE_NO",
                  label: "POSTCODE_NO",
                  searchable: true
                },
                values: (model, schema) => {
                  return this.postcode;
                }
              },

              {
                type: "input",
                inputType: "text",
                label: "Address",
                model: "DIST_ADDR_1",
                placeholder: "Enter street address",
                hint: "Street Address",
                required: true,
                validator: "string",
                styleClasses: "col-md-12"
              },
              {
                type: "input",
                inputType: "text",
                model: "DIST_ADDR_2",
                placeholder: "Enter street address",
                hint: "Street Address line 2",
                styleClasses: "col-md-12"
              },
              {
                type: "input",
                inputType: "text",
                model: "DIST_ADDR_3",
                placeholder: "Enter street address",
                hint: "Street Address line 3",
                styleClasses: "col-md-12"
              },
              {
                labels: "Office Phone Number",
                model: "DIST_PHONE_NUMBER",
                type: "vfg-the-mask",
                placeholder: "Enter office phone number",
                // mask: "######-##-####",
                mask: "0#-########",
                styleClasses: "col-md-6",
                required: true,
                validator: "string"
              },
              {
                type: "input",
                inputType: "number",
                label: "Extension Number",
                model: "DIST_PHONE_EXTENSION",
                placeholder: "Enter extension number",
                required: true,
                validator: "number",
                styleClasses: "col-md-6"
              },
              {
                type: "input",
                inputType: "number",
                label: "Fax Number",
                model: "DIST_FAX_NUMBER",
                placeholder: "Enter fax number",
                required: true,
                validator: "number",
                styleClasses: "col-md-6"
              },
              {
                labels: "Mobile Phone Number",
                model: "DIST_MOBILE_NUMBER",
                type: "vfg-the-mask",
                placeholder: "Enter telephone number",
                // mask: "######-##-####",
                mask: "01#-########",
                styleClasses: "col-md-6",
                required: true,
                validator: "string"
              },
              {
                type: "input",
                inputType: "email",
                label: "Email Address",
                model: "DIST_EMAIL",
                placeholder: "Enter email address",
                required: true,
                validator: "string",
                styleClasses: "col-md-6"
              },
              {
                type: "input",
                inputType: "email",
                label: "Company Website URL",
                model: "DIST_COMPANY_WEBSITE",
                placeholder: "Enter company website",
                required: true,
                validator: "string",
                styleClasses: "col-md-6"
              },
              {
                type: "vueMultiSelect",
                model: "applicationType",
                label: "Application Type",
                placeholder: "Select application type",
                required: true,
                validator: "required",
                styleClasses: "col-md-12",
                selectOptions: {
                  multiple: false,
                  key: "DIST_TYPE_NAME",
                  label: "DIST_TYPE_NAME",
                  searchable: true
                },
                values: (model, schema) => {
                  return this.applicationType;
                }
              }
            ]
          }
        ]
      },
      firstTabAddSchema: {
        groups: [
          {
            styleClasses: "row",
            fields: [
              {
                type: "input",
                inputType: "text",
                label: "Financial Status (Total Paid-Up Capital (RM))",
                model: "DIST_PAID_UP_CAPITAL",
                placeholder: "Enter Paid-Up Capital (RM)",
                required: true,
                validator: "string",
                styleClasses: "col-md-12"
              },
              {
                type: "radios",
                label: "Type of Structure",
                model: "DIST_TYPE_STRUCTURE",
                required: true,
                validator: "required",
                styleClasses: "col-md-8 display-inline",
                values: () => {
                  return this.structureType;
                }
              },
              {
                type: "radios",
                label: "Marketing Approach",
                model: "DIST_MARKETING_APPROACH",
                required: true,
                validator: "required",
                styleClasses: "col-md-8 display-inline",
                values: () => {
                  return this.approachType;
                }
              },
              {
                type: "input",
                inputType: "text",
                label: "Proposed number of Distribution Points ",
                model: "DIST_NUM_DIST_POINT",
                placeholder: "Enter Proposed number of Distribution Points",
                required: true,
                validator: "string",
                styleClasses: "col-md-6"
              },
              {
                type: "input",
                inputType: "text",
                label: "Proposed number of Consultants ",
                model: "DIST_NUM_CONSULTANT",
                placeholder: "Enter Proposed number of Consultants",
                required: true,
                validator: "string",
                styleClasses: "col-md-6"
              },
              {
                type: "input",
                inputType: "text",
                label: "Indemnity of Insurance",
                model: "DIST_INSURANCE",
                placeholder: "Enter Indemnity of Insurance",
                required: true,
                validator: "string",
                styleClasses: "col-md-6"
              },
              {
                labels: "Expired Date",
                type: "vfg-functional-date",
                placeholder: "Enter date",
                model: "DIST_DATE_INCORP",
                noLabel: true,
                format: "dd-MM-yyyy",
                styleClasses: "col-md-6",
                required: true,
                validator: "required"
              }
            ]
          }
        ]
      },
      secondTabSchema: {
        groups: [
          {
            styleClasses: "row",
            legend: "A. Authorised Representative",
            fields: [
              {
                type: "vueMultiSelect",
                model: "AR_REPR_SALUTATION",
                label: "Salutation",
                placeholder: "Enter Your Salutation",
                required: true,
                validator: "required",
                styleClasses: "col-md-3",
                selectOptions: {
                  multiple: false,
                  key: "USER_SAL_NAME",
                  label: "USER_SAL_NAME",
                  searchable: true
                },
                values: (model, schema) => {
                  return this.salutations;
                }
              },
              {
                type: "input",
                inputType: "text",
                label: "Name (As per NRIC)",
                model: "AR_REPR_NAME",
                placeholder: "Please enter name",
                required: true,
                validator: "string",
                styleClasses: "col-md-9"
              },
              // {
              //   type: "input",
              //   inputType: "text",
              //   label: "Middle Name",
              //   model: "middleName",
              //   placeholder: "Please enter name",
              //   required: true,
              //   validator: "string",
              //   styleClasses: "col-md-4"
              // },
              // {
              //   type: "input",
              //   inputType: "text",
              //   label: "Last Name",
              //   model: "LastName",
              //   placeholder: "Please enter name",
              //   required: true,
              //   validator: "string",
              //   styleClasses: "col-md-4"
              // },
              {
                type: "input",
                inputType: "text",
                label: "Position",
                model: "AR_REPR_POSITION",
                placeholder: "Enter position",
                required: true,
                validator: "string",
                styleClasses: "col-md-12"
              },
              {
                type: "radios",
                label: "Citizenship",
                model: "AR_REPR_CITIZEN",
                values: () => {
                  return this.citizenship;
                },
                styleClasses: "col-md-3 display-inline"
              },
              {
                labels: "NRIC Number",
                model: "AR_REPR_NRIC",
                type: "vfg-the-mask",
                placeholder: "Enter NRIC Number",
                mask: "######-##-####",
                styleClasses: "col-md-9",
                required: true,
                validator: ["string", this.validateIC],
                visible: (model, field, form) => {
                  return model.AR_REPR_CITIZEN == "1";
                }
              },
              {
                type: "input",
                inputType: "text",
                label: "Passport No.",
                model: "AR_REPR_PASS_NUM",
                placeholder: "Enter Passport No.",
                required: true,
                validator: "string",
                styleClasses: "col-md-5",
                visible: (model, field, form) => {
                  return model.AR_REPR_CITIZEN == "2";
                }
              },
              {
                labels: "Passport Expiry Date",
                type: "vfg-functional-date",
                placeholder: "Passport Expiry Date",
                model: "AR_REPR_PASS_EXP",
                noLabel: true,
                noClearButton: true,
                format: "dd-MM-yyyy",
                styleClasses: "col-md-4",
                visible: (model, field, form) => {
                  return model.AR_citizenship == "2";
                },
                required: true,
                validator: ["required", this.validateExpiryDate]
              },
              {
                labels: "Office Phone Number",
                model: "AR_REPR_TELEPHONE",
                type: "vfg-the-mask",
                placeholder: "Enter office phone number",
                // mask: "######-##-####",
                mask: "0#-########",
                styleClasses: "col-md-6",
                required: true,
                validator: "string"
              },
              {
                type: "input",
                inputType: "number",
                label: "Extension Number",
                model: "AR_REPR_PHONE_EXTENSION",
                placeholder: "Enter extension number",
                required: true,
                validator: "number",
                styleClasses: "col-md-6"
              },
              {
                labels: "Mobile Phone Number",
                model: "AR_REPR_MOBILE_NUMBER",
                type: "vfg-the-mask",
                placeholder: "Enter mobile phone number",
                // mask: "######-##-####",
                mask: "01#-########",
                styleClasses: "col-md-6",
                required: true,
                validator: "string"
              },
              {
                type: "input",
                inputType: "email",
                label: "Email Address",
                model: "AR_REPR_EMAIL",
                placeholder: "Enter email address",
                required: true,
                validator: "string",
                styleClasses: "col-md-6"
              },
              {
                labels:
                  "Upload Board of Directors' Resolution approving the appointment of the AR",
                text: "Choose a File",
                model: "fileRecordsForUpload",
                type: "vfg-custom-file",
                styleClasses: "col-md-12"
              }
            ]
          },
          {
            styleClasses: "row",
            legend: "B. Alternate Authorised Representative",
            fields: [
              {
                type: "vueMultiSelect",
                model: "AAR_REPR_SALUTATION",
                label: "Salutation",
                placeholder: "Enter Your Salutation",
                required: true,
                validator: "required",
                styleClasses: "col-md-3",
                selectOptions: {
                  multiple: false,
                  key: "USER_SAL_NAME",
                  label: "USER_SAL_NAME",
                  searchable: true
                },
                values: (model, schema) => {
                  return this.salutations;
                }
              },
              {
                type: "input",
                inputType: "text",
                label: "Name (As per NRIC)",
                model: "AAR_REPR_NAME",
                placeholder: "Please enter name",
                required: true,
                validator: "string",
                styleClasses: "col-md-9"
              },
              // {
              //   type: "input",
              //   inputType: "text",
              //   label: "Middle Name",
              //   model: "AAR_middleName",
              //   placeholder: "Please enter name",
              //   required: true,
              //   validator: "string",
              //   styleClasses: "col-md-4"
              // },
              // {
              //   type: "input",
              //   inputType: "text",
              //   label: "Last Name",
              //   model: "AAR_LastName",
              //   placeholder: "Please enter name",
              //   required: true,
              //   validator: "string",
              //   styleClasses: "col-md-4"
              // },
              {
                type: "input",
                inputType: "text",
                label: "Position",
                model: "AAR_REPR_POSITION",
                placeholder: "Enter position",
                required: true,
                validator: "string",
                styleClasses: "col-md-12"
              },
              {
                type: "radios",
                label: "Citizenship",
                model: "AAR_REPR_CITIZEN",
                values: () => {
                  return this.citizenship;
                },
                styleClasses: "col-md-3 display-inline"
              },
              {
                labels: "NRIC Number",
                model: "AAR_REPR_NRIC",
                type: "vfg-the-mask",
                placeholder: "Enter NRIC Number",
                mask: "######-##-####",
                styleClasses: "col-md-9",
                required: true,
                validator: ["string", this.validateIC],
                visible: (model, field, form) => {
                  return model.AAR_REPR_CITIZEN == "1";
                }
              },
              {
                type: "input",
                inputType: "text",
                label: "Passport No.",
                model: "AAR_REPR_PASS_NUM",
                placeholder: "Enter Passport No.",
                required: true,
                validator: "string",
                styleClasses: "col-md-5",
                visible: (model, field, form) => {
                  return model.AAR_REPR_CITIZEN == "2";
                }
              },
              {
                labels: "Passport Expiry Date",
                type: "vfg-functional-date",
                placeholder: "Passport Expiry Date",
                model: "AAR_REPR_PASS_EXP",
                noLabel: true,
                noClearButton: true,
                format: "dd-MM-yyyy",
                styleClasses: "col-md-4",
                visible: (model, field, form) => {
                  return model.AAR_REPR_CITIZEN == "2";
                },
                required: true,
                validator: ["required", this.validateExpiryDate]
              },
              {
                labels: "Office Phone Number",
                model: "AAR_REPR_TELEPHONE",
                type: "vfg-the-mask",
                placeholder: "Enter office phone number",
                // mask: "######-##-####",
                mask: "0#-########",
                styleClasses: "col-md-6",
                required: true,
                validator: "string"
              },
              {
                type: "input",
                inputType: "number",
                label: "Extension Number",
                model: "AAR_REPR_PHONE_EXTENSION",
                placeholder: "Enter extension number",
                required: true,
                validator: "number",
                styleClasses: "col-md-6"
              },
              {
                labels: "Mobile Phone Number",
                model: "AAR_REPR_MOBILE_NUMBER",
                type: "vfg-the-mask",
                placeholder: "Enter telephone number",
                // mask: "######-##-####",
                mask: "01#-########",
                styleClasses: "col-md-6",
                required: true,
                validator: "string"
              },
              {
                type: "input",
                inputType: "email",
                label: "Email Address",
                model: "AAR_REPR_EMAIL",
                placeholder: "Enter email address",
                required: true,
                validator: "string",
                styleClasses: "col-md-6"
              }
            ]
          }
        ]
      },
      editDirectorSchema: {
        groups: [
          {
            styleClasses: "row mt-2",
            fields: [
              {
                type: "vueMultiSelect",
                model: "EDIT_DIR_SALUTATION",
                label: "Salutation",
                placeholder: "Enter Your Salutation",
                required: true,
                validator: "required",
                styleClasses: "col-md-3",
                selectOptions: {
                  multiple: false,
                  key: "USER_SAL_NAME",
                  label: "USER_SAL_NAME",
                  searchable: true
                },
                values: (model, schema) => {
                  return this.salutations;
                }
              },
              {
                type: "input",
                inputType: "text",
                label: "Name",
                model: "EDIT_DIR_NAME",
                placeholder: "Please enter name",
                required: true,
                validator: "string",
                styleClasses: "col-md-9"
              },
              {
                labels: "NRIC Number",
                model: "EDIT_DIR_NRIC",
                type: "vfg-the-mask",
                placeholder: "Enter NRIC No.",
                mask: "######-##-####",
                required: true,
                validator: ["required", this.validateIC],
                styleClasses: "col-md-12",
                max: 12
              },
              {
                labels: "Effective Date",
                type: "vfg-functional-date",
                placeholder: "Select effective date",
                model: "EDIT_DIR_DATE_EFFECTIVE",
                noLabel: true,
                noClearButton: true,
                format: "dd-MM-yyyy",
                styleClasses: "col-md-6",
                required: true,
                validator: "required"
              },
              {
                labels: "End Date",
                type: "vfg-functional-date",
                placeholder: "Select End Date",
                model: "EDIT_DIR_DATE_END",
                noLabel: true,
                noClearButton: true,
                format: "dd-MM-yyyy",
                styleClasses: "col-md-6",
                required: true,
                validator: "required"
              }
            ]
          }
        ]
      },
      thirdTabSchemaDIR: {
        groups: [
          {
            styleClasses: "row mt-2",
            legend: "Director Details",
            fields: [
              {
                type: "vueMultiSelect",
                model: "DIR_SALUTATION",
                label: "Salutation",
                placeholder: "Enter Your Salutation",
                required: true,
                validator: "required",
                styleClasses: "col-md-3",
                selectOptions: {
                  multiple: false,
                  key: "USER_SAL_NAME",
                  label: "USER_SAL_NAME",
                  searchable: true
                },
                values: (model, schema) => {
                  return this.salutations;
                }
              },
              {
                type: "input",
                inputType: "text",
                label: "Name",
                model: "DIR_NAME",
                placeholder: "Please enter name",
                required: true,
                validator: "string",
                styleClasses: "col-md-9"
              },
              {
                labels: "NRIC Number",
                model: "DIR_NRIC",
                type: "vfg-the-mask",
                placeholder: "Enter NRIC No.",
                mask: "######-##-####",
                required: true,
                validator: ["required", this.validateIC],
                styleClasses: "col-md-12",
                max: 12
              },
              {
                labels: "Effective Date",
                type: "vfg-functional-date",
                placeholder: "Select effective date",
                model: "DIR_DATE_EFFECTIVE",
                noLabel: true,
                noClearButton: true,
                format: "dd-MM-yyyy",
                styleClasses: "col-md-6",
                required: true,
                validator: "required"
              },
              {
                labels: "End Date",
                type: "vfg-functional-date",
                placeholder: "Select End Date",
                model: "DIR_DATE_END",
                noLabel: true,
                noClearButton: true,
                format: "dd-MM-yyyy",
                styleClasses: "col-md-6",
                required: true,
                validator: "required"
              }
            ]
          }
        ]
      },
      thirdTabSchemaCEO: {
        groups: [
          {
            styleClasses: "row",
            legend: "CEO Profile",
            fields: [
              {
                type: "vueMultiSelect",
                model: "CEO_REPR_SALUTATION",
                label: "Salutation",
                placeholder: "Enter Your Salutation",
                required: true,
                validator: "required",
                styleClasses: "col-md-3",
                selectOptions: {
                  multiple: false,
                  key: "USER_SAL_NAME",
                  label: "USER_SAL_NAME",
                  searchable: true
                },
                values: (model, schema) => {
                  return this.salutations;
                }
              },
              {
                type: "input",
                inputType: "text",
                label: "Name",
                model: "CEO_REPR_NAME",
                placeholder: "Please enter name",
                required: true,
                validator: "string",
                styleClasses: "col-md-9"
              },
              {
                type: "input",
                inputType: "text",
                label: "Position",
                model: "CEO_REPR_POSITION",
                placeholder: "Enter position",
                required: true,
                validator: "string",
                styleClasses: "col-md-12"
              },
              {
                type: "radios",
                label: "Citizenship",
                model: "CEO_REPR_CITIZEN",
                values: () => {
                  return this.citizenship;
                },
                styleClasses: "col-md-3 display-inline",
                required: true,
                validator: "required"
              },
              {
                type: "input",
                inputType: "text",
                label: "NRIC No",
                model: "CEO_REPR_NRIC",
                placeholder: "Enter NRIC No.",
                required: true,
                validator: ["string", this.validateIC],
                styleClasses: "col-md-9",
                visible: (model, field, form) => {
                  return model.CEO_REPR_CITIZEN == 1;
                }
              },
              {
                type: "input",
                inputType: "text",
                label: "Passport No.",
                model: "CEO_REPR_PASS_NUM",
                placeholder: "Enter Passport No.",
                required: true,
                validator: "string",
                styleClasses: "col-md-5",
                visible: (model, field, form) => {
                  return model.CEO_REPR_CITIZEN == 2;
                }
              },
              {
                labels: "Passport Expiry Date",
                type: "vfg-functional-date",
                placeholder: "Passport Expiry Date",
                model: "CEO_REPR_PASS_EXP",
                noLabel: true,
                noClearButton: true,
                format: "dd-MM-yyyy",
                styleClasses: "col-md-4",
                visible: (model, field, form) => {
                  return model.CEO_REPR_CITIZEN == 2;
                },
                required: true,
                validator: "required"
              },
              {
                labels: "Office Phone Number",
                model: "CEO_REPR_TELEPHONE",
                type: "vfg-the-mask",
                placeholder: "Enter office phone number",
                // mask: "######-##-####",
                mask: "0#-########",
                styleClasses: "col-md-6",
                required: true,
                validator: "string"
              },
              {
                type: "input",
                inputType: "number",
                label: "Extension Number",
                model: "CEO_REPR_PHONE_EXTENSION",
                placeholder: "Enter extension number",
                required: true,
                validator: "number",
                styleClasses: "col-md-6"
              },
              {
                labels: "Mobile Phone Number",
                model: "CEO_REPR_MOBILE_NUMBER",
                type: "vfg-the-mask",
                placeholder: "Enter telephone number",
                // mask: "######-##-####",
                mask: "01#-########",
                styleClasses: "col-md-6",
                required: true,
                validator: "string"
              },
              // {
              //   type: "input",
              //   inputType: "text",
              //   label: "Telephone Number",
              //   model: "CEO_telNo",
              //   placeholder: "Enter telephone number",
              //   required: true,
              //   validator: "string",
              //   styleClasses: "col-md-6"
              // },
              {
                type: "input",
                inputType: "email",
                label: "Email Address",
                model: "CEO_REPR_EMAIL",
                placeholder: "Enter email address",
                required: true,
                validator: "string",
                styleClasses: "col-md-6"
              },
              {
                labels: "",
                model: "CEO_isRepresentative",
                type: "vfg-custom-checkbox",
                placeholder: "Enter telephone number",
                styleClasses: "col-md-6",
                required: true,
                validator: "required"
              }
            ]
          }
        ]
      },
      fourthTabSchema: {
        groups: [
          {
            styleClasses: "row",
            fields: [
              {
                type: "vueMultiSelect",
                model: "AI_contactPerson",
                label: "Contact Person",
                placeholder: "Choose Contact Person",
                required: true,
                validator: "required",
                styleClasses: "col-md-6",
                selectOptions: {
                  multiple: false,
                  key: "name",
                  label: "name",
                  searchable: false
                },
                values: (model, schema) => {
                  return this.contactPerson;
                },
                // eslint-disable-next-line no-dupe-keys
                styleClasses: "col-md-6"
              }
            ]
          }
        ]
      },

      ARSchema: {
        groups: [
          {
            styleClasses: "row",
            legend: "Authorised Representative",
            fields: [
              {
                type: "vueMultiSelect",
                model: "salutation",
                label: "Salutation",
                placeholder: "Enter Your Salutation",
                disabled: true,
                styleClasses: "col-md-12",
                selectOptions: {
                  multiple: false,
                  key: "USER_SAL_NAME",
                  label: "USER_SAL_NAME",
                  searchable: true
                },
                values: (model, schema) => {
                  return this.salutations;
                }
              },
              {
                type: "input",
                inputType: "text",
                label: "First Name",
                model: "firstName",
                placeholder: "Please enter name",
                disabled: true,
                styleClasses: "col-md-4"
              },
              {
                type: "input",
                inputType: "text",
                label: "Middle Name",
                model: "middleName",
                placeholder: "Please enter name",
                disabled: true,
                styleClasses: "col-md-4"
              },
              {
                type: "input",
                inputType: "text",
                label: "Last Name",
                model: "LastName",
                placeholder: "Please enter name",
                disabled: true,
                styleClasses: "col-md-4"
              },
              {
                type: "input",
                inputType: "text",
                label: "Position",
                model: "position",
                placeholder: "Enter position",
                disabled: true,
                styleClasses: "col-md-12"
              },
              {
                type: "input",
                inputType: "text",
                label: "NRIC No",
                model: "AR_icNo",
                placeholder: "Enter NRIC No.",
                disabled: true,
                styleClasses: "col-md-9",
                visible: (model, field, form) => {
                  return this.visibleIc;
                }
              },
              {
                type: "input",
                inputType: "text",
                label: "Passport No.",
                model: "AR_passport",
                placeholder: "Enter Passport No.",
                disabled: true,
                styleClasses: "col-md-6",
                visible: (model, field, form) => {
                  return this.visiblePassport;
                }
              },
              {
                labels: "Passport Expiry Date",
                type: "vfg-functional-date",
                placeholder: "Passport Expiry Date",
                model: "passportExpiryDate",
                noLabel: true,
                noClearButton: true,
                formatted: "DD/MM/YYYY",
                styleClasses: "col-md-6",
                visible: (model, field, form) => {
                  return this.visiblePassport;
                },
                required: true,
                validator: "string",
                disabled: true
              },
              {
                type: "input",
                inputType: "text",
                label: "Telephone Number",
                model: "AR_telNo",
                placeholder: "Enter telephone number",
                disabled: true,
                styleClasses: "col-md-6"
              },
              {
                type: "input",
                inputType: "email",
                label: "Email Address",
                model: "AR_email",
                placeholder: "Enter email address",
                disabled: true,
                styleClasses: "col-md-6"
              }
            ]
          }
        ]
      },

      AARSchema: {
        groups: [
          {
            styleClasses: "row",
            legend: "Alternate Authorised Representative",
            fields: [
              {
                type: "vueMultiSelect",
                model: "AAR_salutation",
                label: "Salutation",
                placeholder: "Enter Your Salutation",
                disabled: true,
                styleClasses: "col-md-12",
                selectOptions: {
                  multiple: false,
                  key: "USER_SAL_NAME",
                  label: "USER_SAL_NAME",
                  searchable: true
                },
                values: (model, schema) => {
                  return this.salutations;
                }
              },
              {
                type: "input",
                inputType: "text",
                label: "First Name",
                model: "AAR_firstName",
                placeholder: "Please enter name",
                disabled: true,
                styleClasses: "col-md-4"
              },
              {
                type: "input",
                inputType: "text",
                label: "Middle Name",
                model: "AAR_middleName",
                placeholder: "Please enter name",
                disabled: true,
                styleClasses: "col-md-4"
              },
              {
                type: "input",
                inputType: "text",
                label: "Last Name",
                model: "AAR_LastName",
                placeholder: "Please enter name",
                disabled: true,
                styleClasses: "col-md-4"
              },
              {
                type: "input",
                inputType: "text",
                label: "Position",
                model: "AAR_position",
                placeholder: "Enter position",
                disabled: true,
                styleClasses: "col-md-12"
              },
              {
                type: "input",
                inputType: "text",
                label: "NRIC No",
                model: "AAR_icNo",
                placeholder: "Enter NRIC No.",
                disabled: true,
                styleClasses: "col-md-9",
                visible: (model, field, form) => {
                  return this.visibleIcAAR;
                }
              },
              {
                type: "input",
                inputType: "text",
                label: "Passport No.",
                model: "AAR_passport",
                placeholder: "Enter Passport No.",
                disabled: true,
                styleClasses: "col-md-5",
                visible: (model, field, form) => {
                  return this.visiblePassportAAR;
                }
              },
              {
                labels: "Passport Expiry Date",
                type: "vfg-functional-date",
                placeholder: "Passport Expiry Date",
                model: "AAR_passportExpiryDate",
                noLabel: true,
                noClearButton: true,
                formatted: "DD/MM/YYYY",
                styleClasses: "col-md-4",
                visible: (model, field, form) => {
                  return this.visiblePassportAAR;
                },
                required: true,
                disabled: true,
                validator: "string"
              },
              {
                type: "input",
                inputType: "number",
                label: "Telephone Number",
                model: "AAR_telNo",
                placeholder: "Enter telephone number",
                disabled: true,
                styleClasses: "col-md-6"
              },
              {
                type: "input",
                inputType: "email",
                label: "Email Address",
                model: "AAR_email",
                placeholder: "Enter email address",
                disabled: true,
                styleClasses: "col-md-6"
              }
            ]
          }
        ]
      },

      AISchema1: {
        groups: [
          {
            styleClasses: "row",
            legend: "Head of Department, Compliance Department",
            fields: [
              {
                type: "vueMultiSelect",
                model: "COMPL_SALUTATION",
                label: "Salutation",
                placeholder: "Enter Your Salutation",
                required: true,
                validator: "required",
                styleClasses: "col-md-3",
                selectOptions: {
                  multiple: false,
                  key: "USER_SAL_NAME",
                  label: "USER_SAL_NAME",
                  searchable: true
                },
                values: (model, schema) => {
                  return this.salutations;
                }
              },
              {
                type: "input",
                inputType: "text",
                label: "Name",
                model: "COMPL_NAME",
                placeholder: "Please enter name",
                required: true,
                validator: "string",
                styleClasses: "col-md-9"
              },
              {
                labels: "Office Phone Number",
                model: "COMPL_TELEPHONE",
                type: "vfg-the-mask",
                placeholder: "Enter office phone number",
                // mask: "######-##-####",
                mask: "0#-########",
                styleClasses: "col-md-6",
                required: true,
                validator: "string"
              },
              {
                type: "input",
                inputType: "text",
                label: "Extension Number",
                model: "COMPL_PHONE_EXTENSION",
                placeholder: "Enter telephone number",
                required: true,
                validator: "string",
                styleClasses: "col-md-6"
              },
              {
                type: "input",
                inputType: "text",
                label: "Email Address",
                model: "COMPL_EMAIL",
                placeholder: "Enter telephone number",
                required: true,
                validator: "string",
                styleClasses: "col-md-6"
              },
              {
                labels: "Mobile Phone Number",
                model: "COMPL_MOBILE_NUMBER",
                type: "vfg-the-mask",
                placeholder: "Enter telephone number",
                // mask: "######-##-####",
                mask: "01#-########",
                styleClasses: "col-md-6",
                required: true,
                validator: "string"
              }
            ]
          }
        ]
      },

      AISchema2: {
        groups: [
          {
            styleClasses: "row",
            legend: "Head of Department UTS Distributor & Operation Department",
            fields: [
              {
                type: "vueMultiSelect",
                model: "UTS_SALUTATION",
                label: "Salutation",
                placeholder: "Enter Your Salutation",
                required: true,
                validator: "required",
                styleClasses: "col-md-3",
                selectOptions: {
                  multiple: false,
                  key: "USER_SAL_NAME",
                  label: "USER_SAL_NAME",
                  searchable: true
                },
                values: (model, schema) => {
                  return this.salutations;
                }
              },
              {
                type: "input",
                inputType: "text",
                label: "Name",
                model: "UTS_NAME",
                placeholder: "Please enter name",
                required: true,
                validator: "string",
                styleClasses: "col-md-9"
              },
              // {
              //   type: "input",
              //   inputType: "text",
              //   label: "Position",
              //   model: "AI_position",
              //   placeholder: "Enter position",
              //   required: true,
              //   validator: "string",
              //   styleClasses: "col-md-12"
              // },
              // {
              //   type: "radios",
              //   label: "Citizenship",
              //   model: "AI_citizenship",
              //   values: () => {
              //     return this.citizenship;
              //   },
              //   styleClasses: "col-md-3 display-inline"
              // },
              // {
              //   type: "input",
              //   inputType: "text",
              //   label: "NRIC No",
              //   model: "AI_icNo",
              //   placeholder: "Enter NRIC No.",
              //   required: true,
              //   validator: ["string", this.validateIC],
              //   styleClasses: "col-md-9",
              //   visible: (model, field, form) => {
              //     return this.visibleIcOther;
              //   }
              // },
              // {
              //   type: "input",
              //   inputType: "text",
              //   label: "Passport No.",
              //   model: "Other_passport",
              //   placeholder: "Enter Passport No.",
              //   required: true,
              //   validator: "string",
              //   styleClasses: "col-md-5",
              //   visible: (model, field, form) => {
              //     return this.visiblePassportOther;
              //   }
              // },
              // {
              //   labels: "Passport Expiry Date",
              //   type: "vfg-functional-date",
              //   placeholder: "Passport Expiry Date",
              //   model: "Other_passportExpiryDate",
              //   noLabel: true,
              //   noClearButton: true,
              //   formatted: "DD/MM/YYYY",
              //   styleClasses: "col-md-4",
              //   visible: (model, field, form) => {
              //     return this.visiblePassportOther;
              //   },
              //   required: true,
              //   validator: "string"
              // },
              {
                labels: "Office Phone Number",
                model: "UTS_TELEPHONE",
                type: "vfg-the-mask",
                placeholder: "Enter office phone number",
                // mask: "######-##-####",
                mask: "0#-########",
                styleClasses: "col-md-6",
                required: true,
                validator: "string"
              },
              {
                type: "input",
                inputType: "text",
                label: "Extension Number",
                model: "UTS_PHONE_EXTENSION",
                placeholder: "Enter telephone number",
                required: true,
                validator: "string",
                styleClasses: "col-md-6"
              },
              {
                type: "input",
                inputType: "text",
                label: "Email Address",
                model: "UTS_EMAIL",
                placeholder: "Enter telephone number",
                required: true,
                validator: "string",
                styleClasses: "col-md-6"
              },
              {
                labels: "Mobile Phone Number",
                model: "UTS_MOBILE_NUMBER",
                type: "vfg-the-mask",
                placeholder: "Enter telephone number",
                // mask: "######-##-####",
                mask: "01#-########",
                styleClasses: "col-md-6",
                required: true,
                validator: "string"
              }
              // {
              //   type: "input",
              //   inputType: "text",
              //   label: "Fax Number",
              //   model: "Other_faxNo",
              //   placeholder: "Enter fax number",
              //   required: true,
              //   validator: "string",
              //   styleClasses: "col-md-6"
              // },
              // {
              //   type: "input",
              //   inputType: "email",
              //   label: "Email Address",
              //   model: "Other_email",
              //   placeholder: "Enter email address",
              //   required: true,
              //   validator: "string",
              //   styleClasses: "col-md-6"
              // }
            ]
          }
        ]
      },

      AISchema3: {
        groups: [
          {
            styleClasses: "row",
            legend: "Head of Department PRS Distributor & Operation Department",
            fields: [
              {
                type: "vueMultiSelect",
                model: "PRS_SALUTATION",
                label: "Salutation",
                placeholder: "Enter Your Salutation",
                required: true,
                validator: "required",
                styleClasses: "col-md-3",
                selectOptions: {
                  multiple: false,
                  key: "USER_SAL_NAME",
                  label: "USER_SAL_NAME",
                  searchable: true
                },
                values: (model, schema) => {
                  return this.salutations;
                }
              },
              {
                type: "input",
                inputType: "text",
                label: "Name",
                model: "PRS_NAME",
                placeholder: "Please enter name",
                required: true,
                validator: "string",
                styleClasses: "col-md-9"
              },
              // {
              //   type: "input",
              //   inputType: "text",
              //   label: "Position",
              //   model: "AI_position",
              //   placeholder: "Enter position",
              //   required: true,
              //   validator: "string",
              //   styleClasses: "col-md-12"
              // },
              // {
              //   type: "radios",
              //   label: "Citizenship",
              //   model: "AI_citizenship",
              //   values: () => {
              //     return this.citizenship;
              //   },
              //   styleClasses: "col-md-3 display-inline"
              // },
              // {
              //   type: "input",
              //   inputType: "text",
              //   label: "NRIC No",
              //   model: "AI_icNo",
              //   placeholder: "Enter NRIC No.",
              //   required: true,
              //   validator: ["string", this.validateIC],
              //   styleClasses: "col-md-9",
              //   visible: (model, field, form) => {
              //     return this.visibleIcOther;
              //   }
              // },
              // {
              //   type: "input",
              //   inputType: "text",
              //   label: "Passport No.",
              //   model: "Other_passport",
              //   placeholder: "Enter Passport No.",
              //   required: true,
              //   validator: "string",
              //   styleClasses: "col-md-5",
              //   visible: (model, field, form) => {
              //     return this.visiblePassportOther;
              //   }
              // },
              // {
              //   labels: "Passport Expiry Date",
              //   type: "vfg-functional-date",
              //   placeholder: "Passport Expiry Date",
              //   model: "Other_passportExpiryDate",
              //   noLabel: true,
              //   noClearButton: true,
              //   formatted: "DD/MM/YYYY",
              //   styleClasses: "col-md-4",
              //   visible: (model, field, form) => {
              //     return this.visiblePassportOther;
              //   },
              //   required: true,
              //   validator: "string"
              // },
              {
                labels: "Office Phone Number",
                model: "PRS_TELEPHONE",
                type: "vfg-the-mask",
                placeholder: "Enter office phone number",
                // mask: "######-##-####",
                mask: "0#-########",
                styleClasses: "col-md-6",
                required: true,
                validator: "string"
              },
              {
                type: "input",
                inputType: "text",
                label: "Extension Number",
                model: "PRS_PHONE_EXTENSION",
                placeholder: "Enter telephone number",
                required: true,
                validator: "string",
                styleClasses: "col-md-6"
              },
              {
                type: "input",
                inputType: "text",
                label: "Email Address",
                model: "PRS_EMAIL",
                placeholder: "Enter telephone number",
                required: true,
                validator: "string",
                styleClasses: "col-md-6"
              },
              {
                labels: "Mobile Phone Number",
                model: "PRS_MOBILE_NUMBER",
                type: "vfg-the-mask",
                placeholder: "Enter telephone number",
                // mask: "######-##-####",
                mask: "01#-########",
                styleClasses: "col-md-6",
                required: true,
                validator: "string"
              }
              // {
              //   type: "input",
              //   inputType: "text",
              //   label: "Fax Number",
              //   model: "Other_faxNo",
              //   placeholder: "Enter fax number",
              //   required: true,
              //   validator: "string",
              //   styleClasses: "col-md-6"
              // },
              // {
              //   type: "input",
              //   inputType: "email",
              //   label: "Email Address",
              //   model: "Other_email",
              //   placeholder: "Enter email address",
              //   required: true,
              //   validator: "string",
              //   styleClasses: "col-md-6"
              // }
            ]
          }
        ]
      },

      AISchema4: {
        groups: [
          {
            styleClasses: "row",
            legend: "Head of Department, Training Department",
            fields: [
              {
                type: "vueMultiSelect",
                model: "TRAIN_SALUTATION",
                label: "Salutation",
                placeholder: "Enter Your Salutation",
                required: true,
                validator: "required",
                styleClasses: "col-md-3",
                selectOptions: {
                  multiple: false,
                  key: "USER_SAL_NAME",
                  label: "USER_SAL_NAME",
                  searchable: true
                },
                values: (model, schema) => {
                  return this.salutations;
                }
              },
              {
                type: "input",
                inputType: "text",
                label: "Name",
                model: "TRAIN_NAME",
                placeholder: "Please enter name",
                required: true,
                validator: "string",
                styleClasses: "col-md-9"
              },
              {
                labels: "Office Phone Number",
                model: "TRAIN_TELEPHONE",
                type: "vfg-the-mask",
                placeholder: "Enter office phone number",
                // mask: "######-##-####",
                mask: "0#-########",
                styleClasses: "col-md-6",
                required: true,
                validator: "string"
              },
              {
                type: "input",
                inputType: "text",
                label: "Extension Number",
                model: "TRAIN_PHONE_EXTENSION",
                placeholder: "Enter telephone number",
                required: true,
                validator: "string",
                styleClasses: "col-md-6"
              },
              {
                type: "input",
                inputType: "text",
                label: "Email Address",
                model: "TRAIN_EMAIL",
                placeholder: "Enter telephone number",
                required: true,
                validator: "string",
                styleClasses: "col-md-6"
              },
              {
                labels: "Mobile Phone Number",
                model: "TRAIN_MOBILE_NUMBER",
                type: "vfg-the-mask",
                placeholder: "Enter telephone number",
                // mask: "######-##-####",
                mask: "01#-########",
                styleClasses: "col-md-6",
                required: true,
                validator: "string"
              }
            ]
          }
        ]
      },

      fifthTabSchema: {
        groups: [
          {
            styleClasses: "row",
            fields: [
              {
                type: "input",
                inputType: "text",
                label: "Reference No",
                model: "DIST_TRANS_REF",
                required: true,
                validator: "string",
                styleClasses: "col-md-6"
              },
              {
                labels: "Transaction Date",
                type: "vfg-functional-date",
                placeholder: "Enter date",
                model: "DIST_TRANS_DATE",
                noLabel: true,
                format: "dd-MM-yyyy",
                styleClasses: "col-md-6",
                required: true,
                validator: "required"
              },
              {
                type: "vueMultiSelect",
                model: "DIST_TRANS_TYPE",
                label: "Transaction Type",
                placeholder: "Choose transaction type",
                required: true,
                validator: "required",
                styleClasses: "col-md-6",
                selectOptions: {
                  multiple: false,
                  key: "name",
                  label: "name",
                  searchable: true
                },
                values: (model, schema) => {
                  return this.transType;
                }
              },
              {
                type: "input",
                inputType: "text",
                label: "Amount",
                model: "DIST_ACC_AMOUNT",
                placeholder: "RM",
                required: true,
                validator: "string",
                styleClasses: "col-md-6"
              },
              {
                labels: "Upload Receipt",
                text: "Choose a File",
                model: "fileRecordsForUpload",
                type: "vfg-custom-file",
                styleClasses: "col-md-12"
              }
            ]
          }
        ]
      },

      declarationSchema: {
        groups: [
          {
            styleClasses: ["row col"],
            legend: "",
            fields: [
              {
                type: "checkbox",
                model: "AI_term1",
                default: false,
                // required: true,
                // validator: "required",
                styleClasses: "col-sm-1 mt-1"
              },
              {
                type: "label",
                label:
                  "We agree to abide by the applicable Terms and Conditions  of use for this system and relevant laws and rules issued by FIMM.",
                // validator: "required",
                styleClasses: "col-sm-11"
              }
            ]
          },
          {
            styleClasses: ["row col"],
            legend: "",
            fields: [
              {
                type: "checkbox",
                model: "AI_term2",
                default: false,
                // required: true,
                // validator: "required",
                styleClasses: "col-sm-1 mt-1"
              },
              {
                type: "label",
                label:
                  "We hereby confirm that the information given herein and in any other document provided by us for purposes of our application and registration with FIMM is true and accurate.",
                // validator: "required",
                styleClasses: "col-sm-11"
              }
            ]
          },
          {
            styleClasses: ["row col"],
            legend: "",
            fields: [
              {
                type: "checkbox",
                model: "AI_term3",
                default: false,
                required: true,
                // validator: "required",
                styleClasses: "col-sm-1 mt-1"
              },
              {
                type: "label",
                label:
                  "Further, we hereby confirm and under take to ensure that, pursuant to the Personal Data Protection Act 2010, we have the consent of our officers, employees and unit trust consultants for the disclosure to and use by FIMM of their personal data.",
                // validator: "required",
                styleClasses: "col-sm-11"
              }
            ]
          }
        ]
      }
    };
  },
  methods: {
    // deleteUploadedFile: function(fileRecord) {
    //   this.$refs.vueFileAgent.deleteUpload(
    //     this.uploadUrl,
    //     this.uploadHeaders,
    //     fileRecord
    //   );
    // },
    // filesSelected: function(fileRecordsNewlySelected) {
    //   var validFileRecords = fileRecordsNewlySelected.filter(
    //     fileRecord => !fileRecord.error
    //   );
    //   this.fileRecordsForUpload = this.fileRecordsForUpload.concat(
    //     validFileRecords
    //   );
    //   //this.uploadFileName = this.fileRecordsForUpload[0].file.name;
    //   this.uploadFileOject = this.fileRecordsForUpload[0].file;
    //   console.log(this.fileRecordsForUpload[0].file);
    // },

    // onBeforeDelete: function(fileRecord) {
    //   var i = this.fileRecordsForUpload.indexOf(fileRecord);
    //   if (i !== -1) {
    //     // queued file, not yet uploaded. Just remove from the arrays
    //     this.fileRecordsForUpload.splice(i, 1);
    //     var k = this.fileRecords.indexOf(fileRecord);
    //     if (k !== -1) this.fileRecords.splice(k, 1);
    //   } else {
    //     this.$refs.vueFileAgent.deleteFileRecord(fileRecord);
    //     // if (confirm("Are you sure you want to delete?")) {
    //     //   this.$refs.vueFileAgent.deleteFileRecord(fileRecord); // will trigger 'delete' event
    //     // }
    //   }
    // },
    // fileDeleted: function(fileRecord) {
    //   var i = this.fileRecordsForUpload.indexOf(fileRecord);
    //   if (i !== -1) {
    //     this.fileRecordsForUpload.splice(i, 1);
    //   } else {
    //     this.deleteUploadedFile(fileRecord);
    //   }
    // },
    async submitDistributor() {
      if (!this.$refs.firstTabForm.validate()) {
        if (!this.$refs.detailInfoForm.validate()) {
          if (!this.$refs.thirdTabFormCEO.validate()) {
            if (!this.$refs.ARForm.validate()) {
              if (!this.$refs.ARForm.validate()) {
                if (!this.$refs.ARForm.validate()) {
                  if (!this.$refs.AIForm1.validate()) {
                    if (!this.$refs.AIForm1.validate()) {
                      if (!this.$refs.AIForm2.validate()) {
                        if (!this.$refs.AIForm3.validate()) {
                          if (!this.$refs.fifthTabForm.validate()) {
                            if (!this.$refs.detailInfoForm.validate()) {
                            } else {
                              //alert("submit");
                              this.submit(2);
                            }
                          } else {
                            alert("submit");
                            this.submit(2);
                          }
                        } else {
                          alert("submit");
                          this.submit(2);
                        }
                      } else {
                        alert("submit");
                        this.submit(2);
                      }
                    } else {
                      alert("submit");
                      this.submit(2);
                    }
                  } else {
                    alert("submit");
                    this.submit(2);
                  }
                } else {
                  alert("submit");
                  this.submit(2);
                }
              } else {
                alert("submit");
                this.submit(2);
              }
            } else {
              alert("submit");
              this.submit(2);
            }
          } else {
            alert("submit");
            this.submit(2);
          }
        } else {
          alert("submit");
          this.submit(2);
        }
      } else {
        alert("submit");
        this.submit(2);
      }
    },
    editDirector(data) {
      //alert(JSON.stringify(data));
      //this.model.EDIT_DIR_SALUTATION = {USER_SAL_NAME:data.USER_SAL_NAME, USER_SAL_ID: data.USER_SAL_ID};
      //this.$modals.simpleModalEdit.$show();
      //this.directorList = [];
      //this.tempArray = this.directorList;

      this.directorList.forEach(element => {
        element.DIR_NAME = "nama";
      });
      // alert(JSON.stringify(this.tempArray));
      // this.directorList = this.tempArray;
      //alert(JSON.stringify(this.directorList));
      // data.DIR_NAME = "kaskjdsfhs";
    },
    async deleteDir(data) {
      if (data.rowData.DIST_DIR_ID != "") {
        this.deletedDir.unshift(data.rowData);
      }
      this.directorList.splice(data.rowIndex, 1);
    },
    async getDistributorById() {
      const user = localStorage.getItem("user");
      const response = await services06Module1.getDistributorById(
        JSON.parse(user).user_id
      );
      if (response == null) {
        this.updateDistributor = false;
      } else {
        this.model.DIST_PUBLISH_STATUS = response.DIST_PUBLISH_STATUS;
        this.model.DIST_NAME = response.DIST_NAME;
        this.model.DISTRIBUTOR_ID = response.DISTRIBUTOR_ID;
        this.model.DIST_NAME = response.DIST_NAME;
        this.model.DIST_REGI_NUM1 = response.DIST_REGI_NUM1;
        this.model.DIST_REGI_NUM2 = response.DIST_REGI_NUM2;
        this.model.DIST_DATE_INCORP = response.DIST_DATE_INCORP;
        this.model.DIST_TYPE_SETUP = response.DIST_TYPE_SETUP;
        this.model.DIST_PHONE_NUMBER = response.DIST_PHONE_NUMBER;
        this.model.DIST_PHONE_EXTENSION = response.DIST_PHONE_EXTENSION;
        this.model.DIST_MOBILE_NUMBER = response.DIST_MOBILE_NUMBER;
        this.model.DIST_EMAIL = response.DIST_EMAIL;
        this.model.DIST_FAX_NUMBER = response.DIST_FAX_NUMBER;
        this.model.DIST_COMPANY_WEBSITE = response.DIST_COMPANY_WEBSITE;
        this.model.DIST_ADDR_1 = response.DIST_ADDR_1;
        this.model.DIST_ADDR_2 = response.DIST_ADDR_2;
        this.model.DIST_ADDR_3 = response.DIST_ADDR_3;
        this.model.DIST_COUNTRY = {
          SETTING_GENERAL_ID: response.COUNTRY_ID,
          SET_CODE: response.SET_CODE_COUNTRY,
          SET_PARAM: response.SET_PARAM_COUNTRY
        };
        if (response.DIST_TYPE != null) {
          this.model.applicationType = {
            DISTRIBUTOR_TYPE_ID: response.DISTRIBUTOR_TYPE_ID,
            DIST_TYPE_NAME: response.DIST_TYPE_NAME
          };
        }
        if (this.model.DIST_COUNTRY.SET_CODE == "MY") {
          if (response.SET_PARAM_STATE != null) {
            this.model.DIST_STATE = {
              SETTING_GENERAL_ID: response.STATE_ID,
              SET_PARAM: response.SET_PARAM_STATE
            };
            this.getCity(response.STATE_ID);
          }
          if (response.SET_CITY_NAME != null) {
            this.model.DIST_CITY = {
              SETTING_CITY_ID: response.SETTING_CITY_ID,
              SET_CITY_NAME: response.SET_CITY_NAME
            };
            this.getPostcode(response.SETTING_CITY_ID);
          }
          if (response.POSTCODE_NO != null) {
            this.model.DIST_POSTAL = {
              SETTING_POSTCODE_ID: response.SETTING_POSTCODE_ID,
              POSTCODE_NO: response.POSTCODE_NO
            };
          }
        } else {
          this.model.DIST_STATE = response.DIST_STATE2;
          this.model.DIST_CITY = response.DIST_CITY2;
          this.model.DIST_POSTAL = response.DIST_POSTAL2;
        }
        this.model.DIST_TYPE_STRUCTURE = response.DIST_TYPE_STRUCTURE;
        this.model.DIST_MARKETING_APPROACH = response.DIST_MARKETING_APPROACH;
        this.model.DIST_PAID_UP_CAPITAL = response.DIST_PAID_UP_CAPITAL;
        this.model.DIST_NUM_DIST_POINT = response.DIST_NUM_DIST_POINT;
        this.model.DIST_NUM_CONSULTANT = response.DIST_NUM_CONSULTANT;
        this.model.DIST_INSURANCE = response.DIST_INSURANCE;

        response.DATAREPR.forEach(element => {
          if (element.REPR_TYPE === "CEO") {
            if (element.USER_SAL_NAME != null) {
              this.model.CEO_REPR_SALUTATION = {
                USER_SAL_ID: element.USER_SAL_ID,
                USER_SAL_NAME: element.USER_SAL_NAME
              };
            }
            this.model.CEO_REPR_NAME = element.REPR_NAME;
            this.model.CEO_REPR_POSITION = element.REPR_POSITION;
            this.model.CEO_REPR_CITIZEN = element.REPR_CITIZEN;
            this.model.CEO_REPR_NRIC = element.REPR_NRIC;
            this.model.CEO_REPR_PASS_NUM = element.REPR_PASS_NUM;
            this.model.CEO_REPR_PASS_EXP = element.REPR_PASS_EXP;
            this.model.CEO_REPR_TELEPHONE = element.REPR_TELEPHONE;
            this.model.CEO_REPR_PHONE_EXTENSION = element.REPR_PHONE_EXTENSION;
            this.model.CEO_REPR_MOBILE_NUMBER = element.REPR_MOBILE_NUMBER;
            this.model.CEO_REPR_EMAIL = element.REPR_EMAIL;
          } else if (element.REPR_TYPE == "AR") {
            if (element.USER_SAL_NAME != null) {
              this.model.AR_REPR_SALUTATION = {
                USER_SAL_ID: element.USER_SAL_ID,
                USER_SAL_NAME: element.USER_SAL_NAME
              };
            }
            this.model.AR_REPR_NAME = element.REPR_NAME;
            this.model.AR_REPR_POSITION = element.REPR_POSITION;
            this.model.AR_REPR_CITIZEN = element.REPR_CITIZEN;
            this.model.AR_REPR_NRIC = element.REPR_NRIC;
            this.model.AR_REPR_PASS_NUM = element.REPR_PASS_NUM;
            this.model.AR_REPR_PASS_EXP = element.REPR_PASS_EXP;
            this.model.AR_REPR_TELEPHONE = element.REPR_TELEPHONE;
            this.model.AR_REPR_PHONE_EXTENSION = element.REPR_PHONE_EXTENSION;
            this.model.AR_REPR_MOBILE_NUMBER = element.REPR_MOBILE_NUMBER;
            this.model.AR_REPR_EMAIL = element.REPR_EMAIL;
          } else if (element.REPR_TYPE == "AAR") {
            if (element.USER_SAL_NAME != null) {
              this.model.AAR_REPR_SALUTATION = {
                USER_SAL_ID: element.USER_SAL_ID,
                USER_SAL_NAME: element.USER_SAL_NAME
              };
            }
            this.model.AAR_REPR_NAME = element.REPR_NAME;
            this.model.AAR_REPR_POSITION = element.REPR_POSITION;
            this.model.AAR_REPR_CITIZEN = element.REPR_CITIZEN;
            this.model.AAR_REPR_NRIC = element.REPR_NRIC;
            this.model.AAR_REPR_PASS_NUM = element.REPR_PASS_NUM;
            this.model.AAR_REPR_PASS_EXP = element.REPR_PASS_EXP;
            this.model.AAR_REPR_TELEPHONE = element.REPR_TELEPHONE;
            this.model.AAR_REPR_PHONE_EXTENSION = element.REPR_PHONE_EXTENSION;
            this.model.AAR_REPR_MOBILE_NUMBER = element.REPR_MOBILE_NUMBER;
            this.model.AAR_REPR_EMAIL = element.REPR_EMAIL;
          }
        });

        response.DATAAI.forEach(element => {
          if (element.ADD_TYPE == "HOD_COMPL") {
            if (element.USER_SAL_NAME != null) {
              this.model.COMPL_SALUTATION = {
                USER_SAL_ID: element.USER_SAL_ID,
                USER_SAL_NAME: element.USER_SAL_NAME
              };
            }
            this.model.COMPL_NAME = element.ADD_NAME;
            this.model.COMPL_TELEPHONE = element.ADD_TELEPHONE;
            this.model.COMPL_PHONE_EXTENSION = element.ADD_PHONE_EXTENSION;
            this.model.COMPL_EMAIL = element.ADD_EMAIL;
            this.model.COMPL_MOBILE_NUMBER = element.ADD_MOBILE_NUMBER;
          } else if (element.ADD_TYPE == "HOD_PRS") {
            if (element.USER_SAL_NAME != null) {
              this.model.PRS_SALUTATION = {
                USER_SAL_ID: element.USER_SAL_ID,
                USER_SAL_NAME: element.USER_SAL_NAME
              };
            }
            this.model.PRS_NAME = element.ADD_NAME;
            this.model.PRS_TELEPHONE = element.ADD_TELEPHONE;
            this.model.PRS_PHONE_EXTENSION = element.ADD_PHONE_EXTENSION;
            this.model.PRS_EMAIL = element.ADD_EMAIL;
            this.model.PRS_MOBILE_NUMBER = element.ADD_MOBILE_NUMBER;
          } else if (element.ADD_TYPE == "HOD_UTS") {
            if (element.USER_SAL_NAME != null) {
              this.model.UTS_SALUTATION = {
                USER_SAL_ID: element.USER_SAL_ID,
                USER_SAL_NAME: element.USER_SAL_NAME
              };
            }
            this.model.UTS_NAME = element.ADD_NAME;
            this.model.UTS_TELEPHONE = element.ADD_TELEPHONE;
            this.model.UTS_PHONE_EXTENSION = element.ADD_PHONE_EXTENSION;
            this.model.UTS_EMAIL = element.ADD_EMAIL;
            this.model.UTS_MOBILE_NUMBER = element.ADD_MOBILE_NUMBER;
          } else if (element.ADD_TYPE == "HOD_TRAIN") {
            if (element.USER_SAL_NAME != null) {
              this.model.TRAIN_SALUTATION = {
                USER_SAL_ID: element.USER_SAL_ID,
                USER_SAL_NAME: element.USER_SAL_NAME
              };
            }
            this.model.TRAIN_NAME = element.ADD_NAME;
            this.model.TRAIN_TELEPHONE = element.ADD_TELEPHONE;
            this.model.TRAIN_PHONE_EXTENSION = element.ADD_PHONE_EXTENSION;
            this.model.TRAIN_EMAIL = element.ADD_EMAIL;
            this.model.TRAIN_MOBILE_NUMBER = element.ADD_MOBILE_NUMBER;
          }
        });
        this.model.DIST_TRANS_REF = response.DIST_TRANS_REF;
        this.model.DIST_TRANS_DATE = response.DIST_TRANS_DATE;
        this.model.DIST_ACC_AMOUNT = response.DIST_ACC_AMOUNT;
        if (response.DIST_TRANS_TYPE == 1) {
          this.model.DIST_TRANS_TYPE = { name: "ONLINE TRANSACTION", value: 1 };
        } else if (response.DIST_TRANS_TYPE == 2) {
          this.model.DIST_TRANS_TYPE = { name: "CASH DEPOSITE", value: 2 };
        }
        this.directorList = response.DATADIR;

        this.updateDistributor = true;
      }
    },
    async getUserSalutation() {
      const response = await services06Module1.getUserSalutation();
      this.salutations = response;
    },
    validateExpiryDate(value) {
      console.log("value : " + value);
      if (value != null) {
        const today = new Date();
        const date =
          today.getFullYear() +
          "-" +
          (today.getMonth() + 1) +
          "-" +
          today.getDate();
        const time =
          today.getHours() +
          ":" +
          today.getMinutes() +
          ":" +
          today.getSeconds() +
          " GMT";
        const dateTime = date + " " + time;

        const unixTimeNow = Date.parse(dateTime);
        console.log(unixTimeNow);

        //date expiry
        const expiryDate = value;
        const dateExpiry =
          expiryDate.getFullYear() +
          "-" +
          (expiryDate.getMonth() + 1) +
          "-" +
          expiryDate.getDate();
        const timeExpiry =
          expiryDate.getHours() +
          ":" +
          expiryDate.getMinutes() +
          ":" +
          expiryDate.getSeconds() +
          " GMT";
        const dateTimeExpiry = dateExpiry + " " + timeExpiry;
        const unixTimeExpiryDate = Date.parse(dateTimeExpiry);
        console.log(unixTimeExpiryDate);

        //compare
        if (unixTimeExpiryDate < unixTimeNow) {
          console.log("expired");
          return ["Expired"];
        } else {
          console.log("not expired");
          // return ["Expired"];
        }
      } else {
        console.log("ssdfdsf");
      }
    },
    async getApplicationType() {
      console.log("app type");
      const response = await services06Module0.getApplicationType();
      this.applicationType = response;
    },
    async getCountry() {
      const response = await services06Module0.getSettingGeneral("COUNTRY");
      this.country = response;
      this.getState(this.country.SETTING_GENERAL_ID);
    },
    async getCity(data) {
      const response = await services06Module0.getCity(data);
      this.city = response;
    },
    async getPostcode(data) {
      const response = await services06Module0.getPostcode(data);
      this.postcode = response;
    },
    async getState(id) {
      const data = {
        SETTING_GENERAL_ID: id,
        SET_TYPE: "STATE"
      };
      const response = await services06Module0.getStateById(data);
      this.state = response;
    },
    async getDefaultCountry() {
      try {
        const response = await services06Module0.getDefaultCountry();
        this.model.DIST_COUNTRY = response;
      } catch (error) {
        console.log(error);
      }
    },
    async submit(status) {
      const user = localStorage.getItem("user");
      const data = new FormData();
      data.append("USER_ID", JSON.parse(user).user_id);
      data.append("DIST_NAME", this.model.DIST_NAME ?? "");
      data.append("DIST_REGI_NUM1", this.model.DIST_REGI_NUM1 ?? "");
      data.append("DIST_REGI_NUM2", this.model.DIST_REGI_NUM2 ?? "");
      this.model.DIST_DATE_INCORP != null
        ? data.append(
            "DIST_DATE_INCORP",
            moment(this.model.DIST_DATE_INCORP).format("YYYY-MM-DD")
          )
        : null;
      data.append("DIST_TYPE_SETUP", this.model.DIST_TYPE_SETUP ?? "");
      data.append(
        "DIST_PHONE_NUMBER",
        this.model.DIST_PHONE_NUMBER != null ? this.model.DIST_PHONE_NUMBER : ""
      );
      data.append(
        "DIST_PHONE_EXTENSION",
        this.model.DIST_PHONE_EXTENSION ?? ""
      );
      data.append("DIST_FAX_NUMBER", this.model.DIST_FAX_NUMBER ?? "");
      data.append(
        "DIST_MOBILE_NUMBER",
        this.model.DIST_MOBILE_NUMBER != null
          ? "01" + this.model.DIST_MOBILE_NUMBER
          : ""
      );
      data.append("DIST_EMAIL", this.model.DIST_EMAIL ?? "");
      data.append(
        "DIST_COMPANY_WEBSITE",
        this.model.DIST_COMPANY_WEBSITE ?? ""
      );

      data.append("DIST_COUNTRY", this.model.DIST_COUNTRY.SETTING_GENERAL_ID);
      data.append("COUNTRY_CODE", this.model.DIST_COUNTRY.SET_CODE);
      this.model.DIST_COUNTRY.SET_CODE == "MY"
        ? this.model.DIST_STATE.SET_PARAM != undefined
          ? data.append("DIST_STATE", this.model.DIST_STATE.SETTING_GENERAL_ID)
          : null
        : data.append("DIST_STATE", this.model.DIST_STATE ?? "");
      this.model.DIST_COUNTRY.SET_CODE == "MY"
        ? this.model.DIST_CITY.SET_CITY_NAME != undefined
          ? data.append("DIST_CITY", this.model.DIST_CITY.SETTING_CITY_ID)
          : null
        : data.append("DIST_CITY", this.model.DIST_CITY ?? "");
      this.model.DIST_COUNTRY.SET_CODE == "MY"
        ? this.model.DIST_POSTAL.POSTCODE_NO != undefined
          ? data.append(
              "DIST_POSTAL",
              this.model.DIST_POSTAL.SETTING_POSTCODE_ID
            )
          : null
        : data.append("DIST_POSTAL", this.model.DIST_POSTAL ?? "");
      data.append("DIST_ADDR_1", this.model.DIST_ADDR_1 ?? "");
      data.append("DIST_ADDR_2", this.model.DIST_ADDR_2 ?? "");
      data.append("DIST_ADDR_3", this.model.DIST_ADDR_3 ?? "");

      this.model.applicationType != null
        ? data.append(
            "DIST_TYPE",
            this.model.applicationType.DISTRIBUTOR_TYPE_ID
          )
        : null;

      data.append(
        "DIST_PAID_UP_CAPITAL",
        this.model.DIST_PAID_UP_CAPITAL ?? ""
      );
      data.append("DIST_TYPE_STRUCTURE", this.model.DIST_TYPE_STRUCTURE ?? "");
      data.append(
        "DIST_MARKETING_APPROACH",
        this.model.DIST_MARKETING_APPROACH ?? ""
      );
      data.append("DIST_NUM_DIST_POINT", this.model.DIST_NUM_DIST_POINT ?? "");
      data.append("DIST_NUM_CONSULTANT", this.model.DIST_NUM_CONSULTANT ?? "");
      data.append("DIST_INSURANCE", this.model.DIST_INSURANCE ?? "");
      this.model.DIST_EXPIRED_DATE != null
        ? data.append(
            "DIST_EXPIRED_DATE",
            moment(this.model.DIST_EXPIRED_DATE).format("YYYY-MM-DD")
          )
        : null;

      data.append("CEO_REPR_TYPE", "CEO");
      this.model.CEO_REPR_SALUTATION != ""
        ? data.append(
            "CEO_REPR_SALUTATION",
            this.model.CEO_REPR_SALUTATION.USER_SAL_ID
          )
        : null;
      data.append("CEO_REPR_NAME", this.model.CEO_REPR_NAME ?? "");
      data.append("CEO_REPR_POSITION", this.model.CEO_REPR_POSITION ?? "");
      data.append("CEO_REPR_NRIC", this.model.CEO_REPR_NRIC ?? "");
      data.append("CEO_REPR_PASS_NUM", this.model.CEO_REPR_PASS_NUM ?? "");
      this.model.CEO_REPR_PASS_EXP != null
        ? data.append(
            "CEO_REPR_PASS_EXP",
            moment(this.model.CEO_REPR_PASS_EXP).format("YYYY-MM-DD")
          )
        : null;
      data.append("CEO_REPR_CITIZEN", this.model.CEO_REPR_CITIZEN ?? "");
      data.append(
        "CEO_REPR_TELEPHONE",
        "0" + this.model.CEO_REPR_MOBILE_NUMBER != null
          ? this.model.CEO_REPR_TELEPHONE
          : ""
      );
      data.append(
        "CEO_REPR_PHONE_EXTENSION",
        this.model.CEO_REPR_PHONE_EXTENSION ?? ""
      );
      data.append(
        "CEO_REPR_MOBILE_NUMBER",
        this.model.CEO_REPR_MOBILE_NUMBER != null
          ? "01" + this.model.CEO_REPR_MOBILE_NUMBER
          : ""
      );
      data.append("CEO_REPR_EMAIL", this.model.CEO_REPR_EMAIL ?? "");

      //** director list */
      data.append("DIR_LIST", JSON.stringify(this.directorList));

      //** AR */
      data.append("AR_REPR_TYPE", "AR");
      this.model.AR_REPR_SALUTATION != ""
        ? data.append(
            "AR_REPR_SALUTATION",
            this.model.AR_REPR_SALUTATION.USER_SAL_ID
          )
        : null;
      data.append("AR_REPR_NAME", this.model.AR_REPR_NAME ?? "");
      data.append("AR_REPR_POSITION", this.model.AR_REPR_POSITION ?? "");
      data.append("AR_REPR_NRIC", this.model.AR_REPR_NRIC ?? "");
      data.append("AR_REPR_PASS_NUM", this.model.AR_REPR_PASS_NUM ?? "");
      this.model.AR_REPR_PASS_EXP != null
        ? data.append(
            "AR_REPR_PASS_EXP",
            moment(this.model.AR_REPR_PASS_EXP).format("YYYY-MM-DD")
          )
        : null;
      data.append("AR_REPR_CITIZEN", this.model.AR_REPR_CITIZEN ?? "");
      data.append("AR_REPR_TELEPHONE", this.model.AR_REPR_TELEPHONE ?? "");
      data.append(
        "AR_REPR_PHONE_EXTENSION",
        this.model.AR_REPR_PHONE_EXTENSION ?? ""
      );
      data.append(
        "AR_REPR_MOBILE_NUMBER",
        this.model.AR_REPR_MOBILE_NUMBER ?? ""
      );
      data.append("AR_REPR_EMAIL", this.model.AR_REPR_EMAIL ?? "");

      // //** AAR */
      data.append("AAR_REPR_TYPE", "AAR");
      this.model.AAR_REPR_SALUTATION != ""
        ? data.append(
            "AAR_REPR_SALUTATION",
            this.model.AAR_REPR_SALUTATION.USER_SAL_ID
          )
        : null;
      data.append("AAR_REPR_NAME", this.model.AAR_REPR_NAME ?? "");
      data.append("AAR_REPR_POSITION", this.model.AAR_REPR_POSITION ?? "");
      data.append("AAR_REPR_NRIC", this.model.AAR_REPR_NRIC ?? "");
      data.append("AAR_REPR_PASS_NUM", this.model.AAR_REPR_PASS_NUM ?? "");
      this.model.AAR_REPR_PASS_EXP != null
        ? data.append(
            "AAR_REPR_PASS_EXP",
            moment(this.model.AAR_REPR_PASS_EXP).format("YYYY-MM-DD")
          )
        : null;
      data.append("AAR_REPR_CITIZEN", this.model.AAR_REPR_CITIZEN ?? "");
      data.append("AAR_REPR_TELEPHONE", this.model.AAR_REPR_TELEPHONE ?? "");
      data.append(
        "AAR_REPR_PHONE_EXTENSION",
        this.model.AAR_REPR_PHONE_EXTENSION ?? ""
      );
      data.append(
        "AAR_REPR_MOBILE_NUMBER",
        this.model.AAR_REPR_MOBILE_NUMBER ?? ""
      );
      data.append("AAR_REPR_EMAIL", this.model.AAR_REPR_EMAIL ?? "");
      //** HOD_COMPL */
      data.append("COMPL_TYPE", "HOD_COMPL");
      this.model.COMPL_SALUTATION != ""
        ? data.append(
            "COMPL_SALUTATION",
            this.model.COMPL_SALUTATION.USER_SAL_ID
          )
        : null;
      data.append("COMPL_NAME", this.model.COMPL_NAME ?? "");
      data.append("COMPL_TELEPHONE", this.model.COMPL_TELEPHONE ?? "");
      data.append(
        "COMPL_PHONE_EXTENSION",
        this.model.COMPL_PHONE_EXTENSION ?? ""
      );
      data.append("COMPL_EMAIL", this.model.COMPL_EMAIL ?? "");
      data.append("COMPL_MOBILE_NUMBER", this.model.COMPL_MOBILE_NUMBER ?? "");

      // //** HOD_UTS */
      data.append("UTS_TYPE", "HOD_UTS");
      this.model.UTS_SALUTATION != ""
        ? data.append("UTS_SALUTATION", this.model.UTS_SALUTATION.USER_SAL_ID)
        : null;
      data.append("UTS_NAME", this.model.UTS_NAME ?? "");
      data.append("UTS_TELEPHONE", this.model.UTS_TELEPHONE ?? "");
      data.append("UTS_PHONE_EXTENSION", this.model.UTS_PHONE_EXTENSION ?? "");
      data.append("UTS_EMAIL", this.model.UTS_EMAIL ?? "");
      data.append("UTS_MOBILE_NUMBER", this.model.UTS_MOBILE_NUMBER ?? "");

      // //** HOD_PRS */
      data.append("PRS_TYPE", "HOD_PRS");
      this.model.PRS_SALUTATION != ""
        ? data.append("PRS_SALUTATION", this.model.PRS_SALUTATION.USER_SAL_ID)
        : null;
      data.append("PRS_NAME", this.model.PRS_NAME ?? "");
      data.append("PRS_TELEPHONE", this.model.PRS_TELEPHONE ?? "");
      data.append("PRS_PHONE_EXTENSION", this.model.PRS_PHONE_EXTENSION ?? "");
      data.append("PRS_EMAIL", this.model.PRS_EMAIL ?? "");
      alert(this.model.PRS_MOBILE_NUMBER);
      data.append(
        "PRS_MOBILE_NUMBER",
        this.model.PRS_MOBILE_NUMBER != null ||
          this.model.PRS_MOBILE_NUMBER != ""
          ? "01" + this.model.PRS_MOBILE_NUMBER
          : ""
      );

      // //** HOD_TRAIN */
      data.append("TRAIN_TYPE", "HOD_TRAIN");
      this.model.TRAIN_SALUTATION != ""
        ? data.append(
            "TRAIN_SALUTATION",
            this.model.TRAIN_SALUTATION.USER_SAL_ID
          )
        : null;
      data.append("TRAIN_NAME", this.model.TRAIN_NAME ?? "");
      data.append("TRAIN_TELEPHONE", this.model.TRAIN_TELEPHONE ?? "");
      data.append(
        "TRAIN_PHONE_EXTENSION",
        this.model.TRAIN_PHONE_EXTENSION ?? ""
      );
      data.append("TRAIN_EMAIL", this.model.TRAIN_EMAIL ?? "");
      data.append("TRAIN_MOBILE_NUMBER", this.model.TRAIN_MOBILE_NUMBER ?? "");

      //** PAYMENT DETAIL */
      data.append("DIST_TRANS_REF", this.model.DIST_TRANS_REF ?? "");
      this.model.DIST_TRANS_DATE != null
        ? data.append(
            "DIST_TRANS_DATE",
            moment(this.model.DIST_TRANS_DATE).format("YYYY-MM-DD")
          )
        : null;
      data.append("DIST_TRANS_TYPE", this.model.DIST_TRANS_TYPE.value ?? "");
      data.append("DIST_ACC_AMOUNT", this.model.DIST_ACC_AMOUNT ?? "");
      data.append("DIST_PUBLISH_STATUS", status);
      if (status == 1) {
        const approvalLevel = await services06Module0.getApprovalLevel(
          "NEW DISTIBUTOR - A(1)(a)",
          1
        );
        data.append("APPR_LIST", JSON.stringify(approvalLevel));
      }
      try {
        if (this.updateDistributor == false) {
          const response = await services06Module1.createDistributorProfile(
            data
          );
          this.getDistributorById();
        } else {
          data.append("DELETED_DIR", JSON.stringify(this.deletedDir));
          data.append("DISTRIBUTOR_ID", this.model.DISTRIBUTOR_ID);
          data.append("_method", "PUT");
          const response = await services06Module1.updateDistributorProfile(
            data
          );
          this.getDistributorById();
        }
      } catch (error) {
        console.log(error);
      }
    },
    showmodal() {
      this.$modals.simpleModal.$show();
    },
    uploadImage(item) {
      item.selected = true;
      if (item.type === "photo") {
        console.log(this.$refs.applicantPhoto.files[0]);
        this.applicantPhoto = this.$refs.applicantPhoto.files[0];
        const reader = new FileReader();
        reader.addEventListener(
          "load",
          function() {
            this.$refs.applicantPhotoDisplay.src = reader.result;
          }.bind(this),
          false
        );

        reader.readAsDataURL(this.applicantPhoto);
        console.log(item.selected);
        // item.selected = true;
      }
    },
    uploadFile() {
      // console.log(this.$refs.file.files[0]);
      if (this.$refs.file.files[0] !== undefined) {
        this.showView = true;
      } else {
        this.showView = false;
      }
    },

    addDirector() {
      if (this.$refs.thirdTabFormDIR.validate()) {
        var directorInfo = {
          DIST_DIR_ID: "",
          DIR_SALUTATION: this.model.DIR_SALUTATION.USER_SAL_ID,
          USER_SAL_NAME: this.model.DIR_SALUTATION.USER_SAL_NAME,
          DIR_NAME: this.model.DIR_NAME,
          DIR_NAME_DISPLAY:
            this.model.DIR_SALUTATION.USER_SAL_NAME + " " + this.model.DIR_NAME,
          DIR_NRIC:
            this.model.DIR_NRIC.substring(0, 6) +
            "-" +
            this.model.DIR_NRIC.substring(6, 8) +
            "-" +
            this.model.DIR_NRIC.substring(8, 12), //this.model.DIR_icNo,
          DIR_DATE_EFFECTIVE: moment(this.model.DIR_DATE_EFFECTIVE).format(
            "YYYY-MM-DD"
          ),
          DIR_DATE_END: moment(this.model.DIR_DATE_END).format("YYYY-MM-DD"),
          DIR_DATE_EFFECTIVE_DISPLAY: moment(
            this.model.DIR_DATE_EFFECTIVE
          ).format("DD-MM-YYYY"),
          DIR_DATE_END_DISPLAY: moment(this.model.DIR_DATE_END).format(
            "DD-MM-YYYY"
          )
        };
        this.directorList.unshift(directorInfo);
        console.log(JSON.stringify(this.directorList));
        (this.model.DIR_NAME = ""),
          (this.model.DIR_NRIC = ""),
          (this.model.DIR_DATE_EFFECTIVE = ""),
          (this.model.DIR_DATE_END = "");
      }
    },
    validateIC(value) {
      //* * must contain letter only (lowercase and uppercase) */
      const expression1 = /^[0-9]+$/;
      // let expression2 = /^[a-zA-Z]*[A-Z]+[a-zA-Z]*$/;
      // //** must contain at least one uppercase letter, one lower case letter and one number */
      // let expression4 = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])([a-zA-Z0-9]+)$/;
      // //** must contain at least one uppercase letter, one lower case letter, one number and one character */
      // let expression5 = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*?[#?!@$%^&*-])([a-zA-Z0-9#?!@$%^&*-]+)$/;
      // //** must contain at least one uppercase letter, one lower case letter, one number and one character with minimum length*/
      // let expression6 = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*?[#?!@$%^&*-])([a-zA-Z0-9#?!@$%^&*-]+).{8}$/;

      console.log(expression1.test(value));
      if (!expression1.test(value)) {
        // this.passwordStrength = "";
        return ["Ic must contain number only"];
      }
    },
    onModelUpdated(newVal, schema) {
      console.log("modell : ");

      console.log(newVal);
      if (schema === "AR_citizenship") {
        if (newVal === 1) {
          this.visiblePassport = false;
          this.visibleIc = true;
        } else {
          this.visiblePassport = true;
          this.visibleIc = false;
        }
      } else if (schema === "AAR_citizenship") {
        if (newVal === 1) {
          this.visiblePassportAAR = false;
          this.visibleIcAAR = true;
        } else {
          this.visiblePassportAAR = true;
          this.visibleIcAAR = false;
        }
      } else if (schema === "AI_contactPerson") {
        console.log("valuee :" + newVal);
        if (newVal != null) {
          this.contactPersonValue = newVal.value;
        } else {
          this.contactPersonValue = null;
        }
      } else if (schema === "CEO_REPR_CITIZEN") {
        if (newVal === 1) {
          this.visiblePassportCEO = false;
          this.visibleIcCEO = true;
        } else {
          this.visiblePassportCEO = true;
          this.visibleIcCEO = false;
        }
      } else if (schema === "Other_citizenship") {
        if (newVal === 1) {
          this.visiblePassportOther = false;
          this.visibleIcOther = true;
        } else {
          this.visiblePassportOther = true;
          this.visibleIcOther = false;
        }
      } else if (schema === "DIST_COUNTRY") {
        this.model.DIST_POSTAL = null;
        this.city = [];
        this.model.DIST_CITY = null;
        this.model.DIST_STATE = null;
        if (newVal.SET_CODE === "MY") {
          // this.getPostcode();
          // this.getState(newVal.SETTING_GENERAL_ID);
        }
      } else if (schema === "DIST_POSTAL") {
        // this.model.city = null;
        //  this.model.state = null;
        if (this.model.DIST_COUNTRY.SET_CODE === "MY") {
          this.getCity(this.model.DIST_POSTAL.SETTING_CITY_ID);
        }
      } else if (schema === "DIST_CITY") {
        if (this.model.DIST_COUNTRY.SET_CODE === "MY") {
          this.getPostcode(this.model.DIST_CITY.SETTING_CITY_ID);
        }
      } else if (schema === "DIST_STATE") {
        //this.model.city = null;
        if (this.model.DIST_COUNTRY.SET_CODE === "MY") {
          this.getCity(this.model.DIST_STATE.SETTING_GENERAL_ID);
        }
      } else if (schema == "fileRecordsForUpload") {
        console.log("custom upload");
        console.log(this.model.fileRecordsForUpload);
      } else if (schema == "CEO_isRepresentative") {
        console.log(newVal);
        if (newVal == true) {
          (this.model.AR_REPR_SALUTATION = this.model.CEO_REPR_SALUTATION),
            (this.model.AR_REPR_NAME = this.model.CEO_REPR_NAME),
            (this.model.AR_REPR_POSITION = this.model.CEO_REPR_POSITION),
            (this.model.AR_REPR_NRIC = this.model.CEO_REPR_NRIC),
            (this.model.AR_REPR_PASS_NUM = this.model.CEO_REPR_PASS_NUM),
            (this.model.AR_REPR_PASS_EXP = this.model.CEO_REPR_PASS_EXP),
            (this.model.AR_REPR_CITIZEN = this.model.CEO_REPR_CITIZEN),
            (this.model.AR_REPR_TELEPHONE = this.model.CEO_REPR_TELEPHONE),
            (this.model.AR_REPR_PHONE_EXTENSION = this.model.CEO_REPR_PHONE_EXTENSION),
            (this.model.AR_REPR_MOBILE_NUMBER = this.model.CEO_REPR_MOBILE_NUMBER),
            (this.model.AR_REPR_EMAIL = this.model.CEO_REPR_EMAIL);
        }
      }
    },
    handleFileChange(e) {
      this.$emit("input", e.target.files[0]);
      this.fileName1 = e.target.files[0].name;
      console.log(e.target.files[0].name);
      // if (this.$refs.fileName1.files[0]) {
      //   console.log(this.$refs.fileName1.files[0].name);
      //   this.model.fileName1 = this.$refs.fileName1.files[0].name;
      // }
      // if (this.$refs.fileName2.files[0]) {
      //   console.log(this.$refs.fileName2.files[0].name);
      //   this.model.fileName2 = this.$refs.fileName2.files[0].name;
      // }
      // if (this.$refs.fileName3.files[0]) {
      //   console.log(this.$refs.fileName3.files[0].name);
      //   this.model.fileName3 = this.$refs.fileName3.files[0].name;
      // }
      // if (this.$refs.fileName4.files[0]) {
      //   console.log(this.$refs.fileName4.files[0].name);
      //   this.model.fileName4 = this.$refs.fileName4.files[0].name;
      // }
    },
    onComplete() {
      alert(JSON.stringify(this.model));
      // this.$router.push("/admin/director-details");
    },
    validatePassword(value) {
      //* * must contain letter only (lowercase and uppercase) */
      const expression1 = /^[a-zA-Z]+$/;
      // eslint-disable-next-line no-unused-vars
      const expression2 = /^[a-zA-Z]*[A-Z]+[a-zA-Z]*$/;
      //* * must contain at least one uppercase letter, one lower case letter and one number */
      // eslint-disable-next-line no-unused-vars
      const expression4 = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])([a-zA-Z0-9]+)$/;
      //* * must contain at least one uppercase letter, one lower case letter, one number and one character */
      // eslint-disable-next-line no-unused-vars
      const expression5 = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*?[#?!@$%^&*-])([a-zA-Z0-9#?!@$%^&*-]+)$/;
      //* * must contain at least one uppercase letter, one lower case letter, one number and one character with minimum length*/
      // eslint-disable-next-line no-unused-vars
      const expression6 = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*?[#?!@$%^&*-])([a-zA-Z0-9#?!@$%^&*-]+).{8}$/;

      console.log(expression1.test(value));
      if (!expression1.test(value)) {
        this.passwordStrength = "";
        return ["Password must contain letter only"];
      }
    },
    isEqualTo(value, field, model) {
      // eslint-disable-next-line no-undef
      if (!_.has(field, "equals")) return ["Confirm password is required"];
      // eslint-disable-next-line no-undef
      const a = _.get(model, _.get(field, "equals"));
      const b = value;
      // eslint-disable-next-line no-undef
      if (_.isEqual(a, b)) return [];
      return ["Password do not match"];
    },
    validateFirstTab() {
      return this.$refs.firstTabForm.validate();
    },
    validateFirstAddTab() {
      return this.$refs.firstAddTabForm.validate();
    },
    validateSecondTab: function() {
      return this.$refs.secondTabForm.validate();
    },
    validateThirdTab: function() {
      if (this.$refs.thirdTabFormCEO.validate()) {
        if (this.directorList.length == 0) {
          console.log("no director");
          return false;
        } else {
          return true;
        }
      } else {
        return false;
      }
      // return this.$refs.thirdTabFormCEO.validate();
    },
    validateFourthTab() {
      return this.$refs.fourthTabForm.validate();
    },
    validateFifthTab() {
      return this.$refs.fifthTabForm.validate();
    }
  }
};
</script>
<!-- New step!
     Add Multiselect CSS. Can be added as a static asset or inside a component. -->
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>

<style lang="scss">
.display-inline label {
  display: inline !important;
  padding: 5px;
}
.app-layout__main {
  background: #e8e8e8;
}
.container {
  max-width: 620px;
  min-width: 420px;
  margin: 40px auto;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 0.9em;
  color: #888;
}

/* Style the tabs */
.tabs {
  overflow: hidden;
  margin-left: 20px;
  margin-bottom: -2px; // hide bottom border
}

.tabs ul {
  list-style-type: none;
  margin-left: 20px;
}

.tabs a {
  float: left;
  cursor: pointer;
  padding: 12px 24px;
  transition: background-color 0.2s;
  border: 1px solid #ccc;
  border-right: none;
  background-color: #f1f1f1;
  border-radius: 10px 10px 0 0;
  font-weight: bold;
}
.tabs a:last-child {
  border-right: 1px solid #ccc;
}

/* Change background color of tabs on hover */
.tabs a:hover {
  background-color: #aaa;
  color: #fff;
}

/* Styling for active tab */
.tabs a.active {
  background-color: #fff;
  color: #484848;
  border-bottom: 2px solid #fff;
  cursor: default;
}

/* Style the tab content */
.tabcontent {
  padding: 30px;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 3px 3px 6px #e1e1e1;
}
</style>
<style scoped>
.widthModal {
  width: 80%;
}
.width {
  width: 100%;
}
.widthName {
  width: 5%;
}
</style>
