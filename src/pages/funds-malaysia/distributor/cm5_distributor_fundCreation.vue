/* eslint-disable no-unused-expressions */
<template>
  <div class="content">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <va-card>
            <h4 slot="header" class="card-title">Fund Creation</h4>
            <br>
            <vue-form-generator
              v-if="newFund == false"
              :model="model"
              :schema="schemaFundList"
              :options="formOptions"
              @model-updated="onModelUpdated"
              ref="dropdownform"
            >
            </vue-form-generator>
            <vue-form-generator
              v-if="newFund == true"
              :model="model"
              :schema="schemaUmbrellaFund"
              :options="formOptions"
              @model-updated="onModelUpdated"
              ref="dropdownform"
            >
            </vue-form-generator>
            <div>

              <br />
              <b-tabs v-if="(newFund == true && model.selectedUmbrellaFund != null && model.selectedFund != null)||(newFund == false && model.mgmtCompany != null && model.selectedUmbrellaFund != null && model.selectedFund != null)" content-class="mt-3" v-on:activate-tab="tabActivated" ref="tabs" v-model="tabModal">
                <b-tab title="Fund Profile" active>
                  <vue-form-generator
                    :model="model"
                    :schema="schemaNewFund"
                    :options="formOptions"
                    @model-updated="onModelUpdated"
                    ref="profileFundForm"
                  >
                  </vue-form-generator>
                  <button
                    v-if="((newFund == true && model.selectedUmbrellaFund != null && model.selectedFund != null)||(newFund == false && model.mgmtCompany != null && model.selectedUmbrellaFund != null && model.selectedFund != null)) && tabIndex == 0"
                    type="submit"
                    class="ml-2 btn btn-primary btn-fill float-right btn-md"
                    @click="$refs.tabs.nextTab()"
                  >
                    Next &nbsp;<i class="fa fa-step-forward" />
                  </button>
                </b-tab>
                <b-tab title="Document">
                  <div style="overflow-x:auto;">
                    <table class="table">
                      <thead>
                        <slot name="columns">
                          <tr>
                            <th></th>
                            <th>Document</th>
                            <th>Choose file</th>
                          </tr>
                        </slot>
                      </thead>
                      <tbody>
                        <tr v-for="(item, index) in photoUploadList" :key="index">
                          <slot :row="item">
                            <td>
                              <va-checkbox
                                class=""
                                v-model="item.selected"
                                disabled="true"
                              ></va-checkbox>
                            </td>
                            <td>
                              <span class="description">{{item.fileName}} &nbsp; <a v-if="item.type == 'file' && item.selected == true"
                                href="https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
                              >View</a>
                              </span>
                            </td>
                            <td v-if="item.type == 'file'">
                              <form enctype="multipart/form-data">
                                <input type="file" accept="application/pdf,application/msword,
  application/vnd.openxmlformats-officedocument.wordprocessingml.document" ref="file" @change="uploadImage(index, item)" :id="'file-input'+index">
                              </form>
                            </td>
                          </slot>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <br/>
                  <div class="float-right">
                    <button
                      type="submit"
                      class="btn btn-primary btn-fill float-right btn-md"
                      @click.prevent="submit"
                    >
                      <i class="fa fa-paper-plane" /> &nbsp; Submit
                    </button>
                    <button
                      type="submit"
                      class="mr-2 btn btn-info btn-fill float-right btn-md"
                      @click.prevent="submit"
                    >
                      <i class="fa fa-pencil-square-o" /> &nbsp; Save as draft
                    </button>
                  </div>
                </b-tab>
              </b-tabs>
            </div>
          </va-card>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.icon-flex,
.icon-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
}
.icon-wrapper {
  border-radius: 50%;
  overflow: hidden;
  border: 1px solid blue;
  font-size: 2rem;
  width: 80px;
  height: 80px;
}
.icon-wrapper i {
  color: blue;
}

.icon-wrapperConsultant {
  display: flex;
  justify-content: center;
  align-items: center;
}

.icon-wrapperConsultant {
  border-radius: 50%;
  overflow: hidden;
  border: 1px solid green;
  font-size: 2rem;
  width: 80px;
  height: 80px;
}
.icon-wrapperConsultant i {
  color: green;
}

.icon-wrapperBoth {
  display: flex;
  justify-content: center;
  align-items: center;
}

.icon-wrapperBoth {
  border-radius: 50%;
  overflow: hidden;
  border: 1px solid #6600ff;
  font-size: 2rem;
  width: 80px;
  height: 80px;
}
.icon-wrapperBoth i {
  color: #6600ff;
}
</style>
<script>
// import Vue from "vue";
import moment from 'moment'
import { debounce } from 'lodash'
import * as servicesModule5 from '../../../app/module5/services03'

export default {
  methods: {
    // tabActivated (newTabIndex, oldTabIndex, event) {
    //   console.log(newTabIndex)
    //   if (this.$refs.profileFundForm.validate()) {
    //     this.tabIndex = newTabIndex
    //     console.log('validate')
    //   } else {
    //     event.preventDefault()
    //     console.log('non validate')
    //   }
    // },

    nextTab () {
      this.tabModal = this.tabs.findIndex(tab => tab === this.$route.hash)
    },

    uploadImage (index, item) {
      item.selected = true
      // if(index == 0){
      //   // console.log(this.$refs.applicantPhoto[0].files[0]);
      // this.applicantPhoto = this.$refs.applicantPhoto[0].files[0];
      // let reader = new FileReader();
      // reader.addEventListener(
      //   "load",
      //   function() {
      //     this.$refs.applicantPhotoDisplay[0].src = reader.result;
      //   }.bind(this),
      //   false
      // );

      // reader.readAsDataURL(this.applicantPhoto);
      // console.log(item.selected);
      // // item.selected = true;
      // }
      // else if(index == 1){
      //   this.file1 = this.$refs.file[0].files[0];
      //   item.selected = true;
      // }else if(index == 2){
      //   this.file2 = this.$refs.file2[0].files[0];
      //   item.selected = true;
      // }else if(index == 3){
      //   this.file3 = this.$refs.file3[0].files[0];
      //   item.selected = true;
      // }else if(index == 4){
      //   this.file4 = this.$refs.file4[0].files[0];
      //   item.selected = true;
      // }
    },
    previous () {
      this.disabledNext = false
      this.filterConsultant = null
      this.filter = null
      if (this.nextValue > 1) {
        this.nextValue--
      }
      if (this.nextValue == 1) {
        this.disabledPrev = true
      }
    },
    next (value) {
      if (value != undefined) {
        this.tabIndex = 0
        this.selectedFund = value
      }

      this.disabledPrev = false
      this.filterConsultant = null
      this.filter = null
      if (this.nextValue < 3) {
        this.nextValue++
      }
      if (this.nextValue == 3) {
        this.disabledNext = true
      }
    },
    validateDivestmentForm () {
      return this.$refs.schemaDivestmentForm.validate()
    },
    saveAsDraft: async function () {
      const response = await this.validateDivestmentForm()
      if (response) {
        this.$router.push('company-detail')
      } else {
      }
    },
    submit: async function () {
      // const response = await this.validateDivestmentForm();
      console.log(JSON.stringify(this.fundList))
      if (this.$refs.RegForm.validate()) {
        const data = new FormData()
        data.append('fimmFundCode', this.model.fimmFundCode)
        data.append('memberFundCode', this.model.memberFundCode)
        data.append('expiryDate', this.model.expiryDate)
        data.append('fundChineseName', this.model.fundChineseName)
        data.append('fundShortName', this.model.fundShortName)
        data.append('fimmFundType', this.model.fimmFundType)
        data.append('fimmFundCategory', this.model.fimmFundCategory)
        data.append('fimmDomicite', this.model.fimmDomicite)
        data.append('fimmCurrencyDenomination', this.model.fimmCurrencyDenomination)
        data.append('subManagerName', this.model.subManagerName)
        data.append('syariahCompliant', this.model.syariahCompliant)
        data.append('annualMgmtStatus', this.model.annualMgmtStatus)
        data.append('declarationFundPerf', this.model.declarationFundPerf)
        data.append('epfStatus', this.model.epfStatus)
        data.append('diclosureDailyNav', this.model.diclosureDailyNav)
        data.append('fundStatus', this.model.fundStatus)
        data.append('fundName', this.model.fundName)
        data.append('anualMgmtFee', this.model.annualMgmtStatus)
        data.append('performanceFee', this.model.performanceFee)
        data.append('ratio', this.model.ratio)
        data.append('launchDate', this.model.launchDate)
        data.append('finYearEnd',this.model.finYearEnd)
        data.append('schemeStructure', this.model.schemaStructure)
        data.append('locFocused', this.model.locFocused)
        data.append('wholeSaleFund', this.model.wholeSaleFund)
        data.append('feederFund', this.model.feederFund)
        data.append('hurdleRate', this.model.hurdleRate)
        data.append('launchPrice', this.model.launchPrice)
        data.append('minSalesCharge', this.model.minSalesCharge)
        try {
          const response = await servicesModule5.createFundProfile
          this.$modals.simplemodal.$hide()
        } catch (error) {
          console.log(error)
        }
      }
    },
    onModelUpdated (newVal, schema) {
      console.log(schema)
      if (schema == 'mgmtCompany') {
        console.log(newVal)
        this.model.selectedUmbrellaFund = null
        this.model.selectedFund = null
        if (newVal != null) {
          this.showumbrellaFund = true
          this.showFundList = false
        } else {
          this.showumbrellaFund = false
          this.showFundList = false
        }
      } else if (schema == 'selectedUmbrellaFund') {
        this.model.selectedFund = null
        if (newVal != null) {
          this.showFundList = true
        } else {
          this.showFundList = false
        }
      } else if (schema == 'selectedFund') {
        if (this.newFund == false) {
          this.model.fundChineseName = 'A.D.Financial Berhad',
          this.model.fundShortName = 'A.D.Financial Berhad',
          this.model.fimmFundType = [{
            name: 'Absolute Return',
            id: '1',
          }]
          this.model.fimmFundCategory = [{
            name: 'Alternatives',
            id: '1',
          }]
          this.model.fimmDomicite = [{
            name: 'Malaysia',
            code: 'MY',
          }]
          this.model.fimmCurrencyDenomination = [{
            name: 'MYR',
            id: '1',
          }]
          this.model.subManagerName = 'Mohd Khairul'
          this.model.syariahCompliant = '1'
          this.model.annualMgmtStatus = '1'
          this.model.declarationFundPerf = '1'
          this.model.epfStatus = '1'
          this.model.diclosureDailyNav = '1'
          this.model.fundName = 'A.D.Financial Berhad'
          this.model.expiryDate = '2022-03-15'
          this.model.anualMgmtFee = [{
            name: '9%',
          }]
          this.model.performanceFee = [{
            name: '9%',
          }]
          this.model.ratio = '20:30'
          this.model.hurdleRate = '22.7%'
          this.model.launchPrice = '1000'
          this.model.minSalesCharge = '10000'
          this.model.launchDate = '2020-12-27'
          this.model.finYearEnd = '2020-12-27'
          this.model.schemeStructure = [{
            name: 'UTF',
            id: '1',
          }]
          this.model.locFocused = [{
            name: 'Local-Focused',
            id: '1',
          }]
          this.model.wholeSaleFund = '1'
          this.model.feederFund = '1'
        }
      }
    },
  },
  data () {
    return {
      newFund: true,
      // existingFund:false,

      showumbrellaFund: false,
      showFundList: false,
      tabIndex: 0,
      tabModal: 0,
      fee: [{
        name: '1%',
      },
      {
        name: '2%',
      },
      {
        name: '3%',
      },
      {
        name: '4%',
      },
      {
        name: '5%',
      },
      {
        name: '6%',
      },
      {
        name: '7%',
      },
      {
        name: '8%',
      },
      {
        name: '9%',
      },
      {
        name: '10%',
      }],
      mgmtComp: [
        {
          no: 1,
          name: 'A.D.Fincancial Sdn. Bhd.',
        },
        {
          no: 2,
          name: 'Affin Bank Berhad',
        },
        {
          no: 3,
          name: 'Affin Hwang Asset Management Berhad',
        },
        {
          no: 4,
          name: 'AIA Pension and Asset Management Sdn. Bhd.',
        },
        {
          no: 5,
          name: 'Manulife Investment Management (M) Berhad',
        },
        {
          no: 6,
          name: 'Principal Asset Management Berhad',
        },
        {
          no: 7,
          name: 'Public Mutual Bank Berhad',
        },
      ],
      photoUploadList: [
        {
          id: '1',
          fileName: "Copy of approval letter from the SC/Fund Lodgement Summary from the SC's LOLA Online Submission System for new fund",
          type: 'file',
          filePath: '',
          selected: false,
        },
        {
          id: '2',
          fileName: 'Two sets pf Prospectus/Information Memorendum/Product Highlight Sheet/Disclosure Document',
          type: 'file',
          filePath: '',
          selected: false,
        },
        {
          id: '3',
          fileName: 'Key Data section of the Prospectus/Information Memorendum/Product Highlight Sheet/Disclosure Document duly registered with the SC',
          type: 'file',
          filePath: '',
          selected: false,
        },
        {
          id: '4',
          fileName: 'For funds approval under the ASEAN CIS, a copy of approval letter from the SC for the appointment of the company as Local Representive',
          type: 'file',
          filePath: '',
          selected: false,
        },
      ],
      fundType: [
        {
          id: '1',
          name: 'sfsfsdf',
          selected: false,
        },
        {
          id: '2',
          name: 'sdfsfsf',
        },
        {
          id: '3',
          name: 'sdfsdf',
        },
      ],
      syariahCompliant: [
        {
          value: '1',
          name: 'Yes',
        },
        {
          value: '2',
          name: 'No',
        },
      ],
      anualMgmtStatus: [
        {
          value: '1',
          name: 'Yes',
        },
        {
          value: '2',
          name: 'No',
        },
      ],
      declarationFundPerf: [
        {
          value: '1',
          name: 'Yes',
        },
        {
          value: '2',
          name: 'No',
        },
      ],
      epfStatus: [
        {
          value: '1',
          name: 'Yes',
        },
        {
          value: '2',
          name: 'No',
        },
      ],
      diclosureDailyNav: [
        {
          value: '1',
          name: 'Yes',
        },
        {
          value: '2',
          name: 'No',
        },
      ],
      feederFund: [
        {
          value: '1',
          name: 'Yes',
        },
        {
          value: '2',
          name: 'No',
        },
      ],
      fields: [
        // A virtual column that doesn't exist in items
        { key: 'index', label: 'No' },
        // A column that needs custom formatting
        { key: 'fundName', label: 'Fund Name' },
        { key: 'actions', label: '' },
      ],
      umbrellaList: [
        {
          id: '0',
          name: 'None',
        },
        {
          id: '1',
          name: 'Advantage Global Equity Volatility Focused',
          selected: false,
        },
        {
          id: '2',
          name: 'Amaustralia',
          selected: false,
        },
        {
          id: '3',
          name: 'Amchina A-Shares',
          selected: false,
        },

      ],
      fundList: [
        {
          id: '0',
          name: 'None',
          selected: false,
        },
        {
          id: '1',
          name: 'EASTSPRING INVESTMENTS TARGET INCOME 12',
          selected: false,
        },
        {
          id: '2',
          name: 'AFFIN HWANG FLEXIBLE MATURITY INCOME 20',
          selected: false,
        },
        {
          id: '3',
          name: 'AFFIN HWANG SHARIAH GOLD TRACKER',
          selected: false,
        },
      ],
      fundDomicite: [
        {
          name: 'Afghanistan',
          code: 'AF',
        },
        {
          name: 'Åland Islands',
          code: 'AX',
        },
        {
          name: 'Albania',
          code: 'AL',
        },
        {
          name: 'Algeria',
          code: 'DZ',
        },
        {
          name: 'American Samoa',
          code: 'AS',
        },
        {
          name: 'AndorrA',
          code: 'AD',
        },
        {
          name: 'Angola',
          code: 'AO',
        },
        {
          name: 'Anguilla',
          code: 'AI',
        },
        {
          name: 'Antarctica',
          code: 'AQ',
        },
        {
          name: 'Antigua and Barbuda',
          code: 'AG',
        },
        {
          name: 'Argentina',
          code: 'AR',
        },
        {
          name: 'Armenia',
          code: 'AM',
        },
        {
          name: 'Aruba',
          code: 'AW',
        },
        {
          name: 'Australia',
          code: 'AU',
        },
        {
          name: 'Austria',
          code: 'AT',
        },
        {
          name: 'Azerbaijan',
          code: 'AZ',
        },
        {
          name: 'Bahamas',
          code: 'BS',
        },
        {
          name: 'Bahrain',
          code: 'BH',
        },
        {
          name: 'Bangladesh',
          code: 'BD',
        },
        {
          name: 'Barbados',
          code: 'BB',
        },
        {
          name: 'Belarus',
          code: 'BY',
        },
        {
          name: 'Belgium',
          code: 'BE',
        },
        {
          name: 'Belize',
          code: 'BZ',
        },
        {
          name: 'Benin',
          code: 'BJ',
        },
        {
          name: 'Bermuda',
          code: 'BM',
        },
        {
          name: 'Bhutan',
          code: 'BT',
        },
        {
          name: 'Bolivia',
          code: 'BO',
        },
        {
          name: 'Bosnia and Herzegovina',
          code: 'BA',
        },
        {
          name: 'Botswana',
          code: 'BW',
        },
        {
          name: 'Bouvet Island',
          code: 'BV',
        },
        {
          name: 'Brazil',
          code: 'BR',
        },
        {
          name: 'British Indian Ocean Territory',
          code: 'IO',
        },
        {
          name: 'Brunei Darussalam',
          code: 'BN',
        },
        {
          name: 'Bulgaria',
          code: 'BG',
        },
        {
          name: 'Burkina Faso',
          code: 'BF',
        },
        {
          name: 'Burundi',
          code: 'BI',
        },
        {
          name: 'Cambodia',
          code: 'KH',
        },
        {
          name: 'Cameroon',
          code: 'CM',
        },
        {
          name: 'Canada',
          code: 'CA',
        },
        {
          name: 'Cape Verde',
          code: 'CV',
        },
        {
          name: 'Cayman Islands',
          code: 'KY',
        },
        {
          name: 'Central African Republic',
          code: 'CF',
        },
        {
          name: 'Chad',
          code: 'TD',
        },
        {
          name: 'Chile',
          code: 'CL',
        },
        {
          name: 'China',
          code: 'CN',
        },
        {
          name: 'Christmas Island',
          code: 'CX',
        },
        {
          name: 'Cocos (Keeling) Islands',
          code: 'CC',
        },
        {
          name: 'Colombia',
          code: 'CO',
        },
        {
          name: 'Comoros',
          code: 'KM',
        },
        {
          name: 'Congo',
          code: 'CG',
        },
        {
          name: 'Congo, The Democratic Republic of the',
          code: 'CD',
        },
        {
          name: 'Cook Islands',
          code: 'CK',
        },
        {
          name: 'Costa Rica',
          code: 'CR',
        },
        {
          name: 'Cote D"Ivoire',
          code: 'CI',
        },
        {
          name: 'Croatia',
          code: 'HR',
        },
        {
          name: 'Cuba',
          code: 'CU',
        },
        {
          name: 'Cyprus',
          code: 'CY',
        },
        {
          name: 'Czech Republic',
          code: 'CZ',
        },
        {
          name: 'Denmark',
          code: 'DK',
        },
        {
          name: 'Djibouti',
          code: 'DJ',
        },
        {
          name: 'Dominica',
          code: 'DM',
        },
        {
          name: 'Dominican Republic',
          code: 'DO',
        },
        {
          name: 'Ecuador',
          code: 'EC',
        },
        {
          name: 'Egypt',
          code: 'EG',
        },
        {
          name: 'El Salvador',
          code: 'SV',
        },
        {
          name: 'Equatorial Guinea',
          code: 'GQ',
        },
        {
          name: 'Eritrea',
          code: 'ER',
        },
        {
          name: 'Estonia',
          code: 'EE',
        },
        {
          name: 'Ethiopia',
          code: 'ET',
        },
        {
          name: 'Falkland Islands (Malvinas)',
          code: 'FK',
        },
        {
          name: 'Faroe Islands',
          code: 'FO',
        },
        {
          name: 'Fiji',
          code: 'FJ',
        },
        {
          name: 'Finland',
          code: 'FI',
        },
        {
          name: 'France',
          code: 'FR',
        },
        {
          name: 'French Guiana',
          code: 'GF',
        },
        {
          name: 'French Polynesia',
          code: 'PF',
        },
        {
          name: 'French Southern Territories',
          code: 'TF',
        },
        {
          name: 'Gabon',
          code: 'GA',
        },
        {
          name: 'Gambia',
          code: 'GM',
        },
        {
          name: 'Georgia',
          code: 'GE',
        },
        {
          name: 'Germany',
          code: 'DE',
        },
        {
          name: 'Ghana',
          code: 'GH',
        },
        {
          name: 'Gibraltar',
          code: 'GI',
        },
        {
          name: 'Greece',
          code: 'GR',
        },
        {
          name: 'Greenland',
          code: 'GL',
        },
        {
          name: 'Grenada',
          code: 'GD',
        },
        {
          name: 'Guadeloupe',
          code: 'GP',
        },
        {
          name: 'Guam',
          code: 'GU',
        },
        {
          name: 'Guatemala',
          code: 'GT',
        },
        {
          name: 'Guernsey',
          code: 'GG',
        },
        {
          name: 'Guinea',
          code: 'GN',
        },
        {
          name: 'Guinea-Bissau',
          code: 'GW',
        },
        {
          name: 'Guyana',
          code: 'GY',
        },
        {
          name: 'Haiti',
          code: 'HT',
        },
        {
          name: 'Heard Island and Mcdonald Islands',
          code: 'HM',
        },
        {
          name: 'Holy See (Vatican City State)',
          code: 'VA',
        },
        {
          name: 'Honduras',
          code: 'HN',
        },
        {
          name: 'Hong Kong',
          code: 'HK',
        },
        {
          name: 'Hungary',
          code: 'HU',
        },
        {
          name: 'Iceland',
          code: 'IS',
        },
        {
          name: 'India',
          code: 'IN',
        },
        {
          name: 'Indonesia',
          code: 'ID',
        },
        {
          name: 'Iran, Islamic Republic Of',
          code: 'IR',
        },
        {
          name: 'Iraq',
          code: 'IQ',
        },
        {
          name: 'Ireland',
          code: 'IE',
        },
        {
          name: 'Isle of Man',
          code: 'IM',
        },
        {
          name: 'Israel',
          code: 'IL',
        },
        {
          name: 'Italy',
          code: 'IT',
        },
        {
          name: 'Jamaica',
          code: 'JM',
        },
        {
          name: 'Japan',
          code: 'JP',
        },
        {
          name: 'Jersey',
          code: 'JE',
        },
        {
          name: 'Jordan',
          code: 'JO',
        },
        {
          name: 'Kazakhstan',
          code: 'KZ',
        },
        {
          name: 'Kenya',
          code: 'KE',
        },
        {
          name: 'Kiribati',
          code: 'KI',
        },
        {
          name: 'Korea, Democratic People"S Republic of',
          code: 'KP',
        },
        {
          name: 'Korea, Republic of',
          code: 'KR',
        },
        {
          name: 'Kuwait',
          code: 'KW',
        },
        {
          name: 'Kyrgyzstan',
          code: 'KG',
        },
        {
          name: 'Lao People"S Democratic Republic',
          code: 'LA',
        },
        {
          name: 'Latvia',
          code: 'LV',
        },
        {
          name: 'Lebanon',
          code: 'LB',
        },
        {
          name: 'Lesotho',
          code: 'LS',
        },
        {
          name: 'Liberia',
          code: 'LR',
        },
        {
          name: 'Libyan Arab Jamahiriya',
          code: 'LY',
        },
        {
          name: 'Liechtenstein',
          code: 'LI',
        },
        {
          name: 'Lithuania',
          code: 'LT',
        },
        {
          name: 'Luxembourg',
          code: 'LU',
        },
        {
          name: 'Macao',
          code: 'MO',
        },
        {
          name: 'Macedonia, The Former Yugoslav Republic of',
          code: 'MK',
        },
        {
          name: 'Madagascar',
          code: 'MG',
        },
        {
          name: 'Malawi',
          code: 'MW',
        },
        {
          name: 'Malaysia',
          code: 'MY',
        },
        {
          name: 'Maldives',
          code: 'MV',
        },
        {
          name: 'Mali',
          code: 'ML',
        },
        {
          name: 'Malta',
          code: 'MT',
        },
        {
          name: 'Marshall Islands',
          code: 'MH',
        },
        {
          name: 'Martinique',
          code: 'MQ',
        },
        {
          name: 'Mauritania',
          code: 'MR',
        },
        {
          name: 'Mauritius',
          code: 'MU',
        },
        {
          name: 'Mayotte',
          code: 'YT',
        },
        {
          name: 'Mexico',
          code: 'MX',
        },
        {
          name: 'Micronesia, Federated States of',
          code: 'FM',
        },
        {
          name: 'Moldova, Republic of',
          code: 'MD',
        },
        {
          name: 'Monaco',
          code: 'MC',
        },
        {
          name: 'Mongolia',
          code: 'MN',
        },
        {
          name: 'Montserrat',
          code: 'MS',
        },
      ],

      fundCategory: [
        {
          name: 'Alternatives',
          id: '1',
        },
      ],
      schemaStructure: [
        {
          name: 'UTF',
          id: '1',
        },
      ],

      localFocused: [
        {
          name: 'Local-Focused',
          id: '1',
        },
      ],

      currencyDenomination: [
        {
          name: 'MYR',
          id: '1',
        },
      ],

      model: {
        mgmtCompany: null,
        selectedFund: null,
        selectedUmbrellaFund: null,
        fimmFundCode: 1001,
        memberFundCode: 1001,
        expiryDate: '',
        fundChineseName: '',
        fundShortName: '',
        fimmFundType: '',
        fimmFundCategory: '',
        fimmDomicite: '',
        fimmCurrencyDenomination: '',
        subManagerName: '',
        syariahCompliant: '',
        annualMgmtStatus: '',
        declarationFundPerf: '',
        epfStatus: '',
        diclosureDailyNav: '',
        fundStatus: 'New',
        fundName: '',
        anualMgmtFee: '',
        performanceFee: '',
        ratio: '',
        launchDate: null,
        finYearEnd: null,
        schemeStructure: '',
        locFocused: '',
        wholeSaleFund: '',
        feederFund: '',
        hurdleRate: '',
        launchPrice: '',
        minSalesCharge: '',
      },

      schemaUmbrellaFund: {
        groups: [
          {
            styleClasses: 'row',
            fields: [
              {
                type: 'vueMultiSelect',
                model: 'selectedUmbrellaFund',
                label: 'Umbrella Fund',
                placeholder: 'Select Umbrella Fund',
                required: true,
                validator: 'required',
                styleClasses: 'col-md-12',
                selectOptions: {
                  multiple: false,
                  key: 'name',
                  label: 'name',
                  searchable: true,
                },
                values: (model, schema) => {
                  return this.umbrellaList
                },
              },

              {
                type: 'vueMultiSelect',
                model: 'selectedFund',
                label: 'Select Fund',
                placeholder: 'Select Fund',
                required: true,
                validator: 'required',
                styleClasses: 'col-md-12',
                selectOptions: {
                  multiple: false,
                  key: 'name',
                  label: 'name',
                  searchable: true,
                },
                values: (model, schema) => {
                  return this.fundList
                },
                visible: (model, field, form) => {
                  return this.showFundList
                },
              },
            ],
          },
        ],
      },

      schemaFundList: {
        groups: [
          {
            styleClasses: 'row',
            fields: [
              {
                type: 'vueMultiSelect',
                model: 'mgmtCompany',
                label: 'Management Company',
                placeholder: 'Select Management Company',
                required: true,
                validator: 'required',
                styleClasses: 'col-md-12',
                selectOptions: {
                  multiple: false,
                  key: 'name',
                  label: 'name',
                  searchable: true,
                },
                values: (model, schema) => {
                  return this.mgmtComp
                },
                //     visible: (model, field, form) => {
                //       return this.newFund
                // }
              },
              {
                type: 'vueMultiSelect',
                model: 'selectedUmbrellaFund',
                label: 'Umbrella Fund',
                placeholder: 'Select Umbrella Fund',
                required: true,
                validator: 'required',
                styleClasses: 'col-md-12',
                selectOptions: {
                  multiple: false,
                  key: 'name',
                  label: 'name',
                  searchable: true,
                },
                values: (model, schema) => {
                  return this.umbrellaList
                },
                visible: (model, field, form) => {
                  return this.showumbrellaFund
                },
              },
              {
                type: 'vueMultiSelect',
                model: 'selectedFund',
                label: 'Select Fund',
                placeholder: 'Select Fund',
                required: true,
                validator: 'required',
                styleClasses: 'col-md-12',
                selectOptions: {
                  multiple: false,
                  key: 'name',
                  label: 'name',
                  searchable: true,
                },
                values: (model, schema) => {
                  return this.fundList
                },
                visible: (model, field, form) => {
                  return this.showFundList
                },
              },
            ],
          },
        ],
      },

      schemaNewFund: {
        groups: [
          {
            styleClasses: 'row',
            fields: [
              {
                type: 'input',
                inputType: 'text',
                label: 'FiMM Fund Code',
                model: 'fimmFundCode',
                disabled: true,
                styleClasses: 'col-md-6',
              },
              {
                type: 'input',
                inputType: 'text',
                label: 'Member Fund Code',
                model: 'memberFundCode',
                placeholder: 'Enter member fund code',
                disabled: true,
                styleClasses: 'col',
              },
              {
                type: 'input',
                inputType: 'text',
                label: 'Fund Chinese Name (Traditional)',
                model: 'fundChineseName',
                placeholder: 'Enter fund chinese name',
                required: true,
                validator: 'string',
                styleClasses: 'col-md-12',
              },
              {
                type: 'input',
                inputType: 'text',
                label: 'Fund Short Name',
                model: 'fundShortName',
                placeholder: 'Enter fund short name',
                required: true,
                validator: 'string',
                styleClasses: 'col-md-12',
              },
              {
                type: 'vueMultiSelect',
                model: 'fimmFundType',
                label: 'FiMM Fund Type',
                placeholder: 'Select FiMM fund type',
                required: true,
                validator: 'required',
                styleClasses: 'col-md-4',
                selectOptions: {
                  multiple: false,
                  key: 'name',
                  label: 'name',
                  searchable: false,
                },
                values: (model, schema) => {
                  return this.fundType
                },
              },
              {
                type: 'vueMultiSelect',
                model: 'fimmFundCategory',
                label: 'FiMM Fund Category',
                placeholder: 'Select FiMM fund type',
                required: true,
                validator: 'required',
                styleClasses: 'col-md-4',
                selectOptions: {
                  multiple: false,
                  key: 'name',
                  label: 'name',
                  searchable: false,
                },
                values: (model, schema) => {
                  return this.fundCategory
                },
              },
              {
                type: 'vueMultiSelect',
                model: 'fimmDomicite',
                label: 'Fund Domicile',
                placeholder: 'Select domicile',
                required: true,
                validator: 'required',
                styleClasses: 'col',
                selectOptions: {
                  multiple: false,
                  key: 'name',
                  label: 'name',
                  searchable: true,
                },
                values: (model, schema) => {
                  return this.fundDomicite
                },
              },
              {
                labels: 'Fund Expiry Date',
                type: 'vfg-functional-date',
                placeholder: 'Expiry Date',
                model: 'expiryDate',
                noLabel: true,
                noClearButton: true,
                formatted: 'DD/MM/YYYY',
                styleClasses: 'col-md-6',
                required: true,
                validator: 'string',
              },
              {
                type: 'vueMultiSelect',
                model: 'fimmCurrencyDenomination',
                label: 'FiMM Currency Denomination',
                placeholder: 'Select FiMM currency denomination',
                required: true,
                validator: 'required',
                styleClasses: 'col-md-6',
                selectOptions: {
                  multiple: false,
                  key: 'name',
                  label: 'name',
                  searchable: false,
                },
                values: (model, schema) => {
                  return this.currencyDenomination
                },
              },
              {
                type: 'input',
                inputType: 'text',
                label: 'Sub Manager Name',
                model: 'subManagerName',
                required: true,
                validator: 'string',
                styleClasses: 'col-md-12',
              },
              {
                type: 'radios',
                label: 'Syariah Compliant',
                model: 'syariahCompliant',
                required: true,
                validator: 'string',
                styleClasses: 'col-md-2 display-inline',
                values: () => {
                  return this.syariahCompliant
                },
              },
              {
                type: 'radios',
                label: 'Annual Management Status',
                model: 'annualMgmtStatus',
                required: true,
                validator: 'string',
                styleClasses: 'col-md-3 display-inline',
                values: () => {
                  return this.anualMgmtStatus
                },
              },
              {
                type: 'radios',
                label: 'Declaration of Fund Performance',
                model: 'declarationFundPerf',
                required: true,
                validator: 'string',
                styleClasses: 'col-md-3 display-inline',
                values: () => {
                  return this.declarationFundPerf
                },
              },
              {
                type: 'radios',
                label: 'EPF Status',
                model: 'epfStatus',
                required: true,
                validator: 'string',
                styleClasses: 'col display-inline',
                values: () => {
                  return this.epfStatus
                },
              },
              {
                type: 'radios',
                label: 'Disclosure of Daily NAV in the newspaper',
                model: 'diclosureDailyNav',
                required: true,
                validator: 'string',
                styleClasses: 'col-md-6 display-inline',
                values: () => {
                  return this.diclosureDailyNav
                },
              },
              {
                type: 'input',
                inputType: 'text',
                label: 'Fund Status',
                model: 'fundStatus',
                disabled: true,
                styleClasses: 'col',
              },
              {
                type: 'input',
                inputType: 'text',
                label: 'Fund Name',
                model: 'fundName',
                placeholder: 'Enter fund name',
                required: true,
                validator: 'string',
                styleClasses: 'col-md-12',
              },
              {
                type: 'vueMultiSelect',
                model: 'anualMgmtFee',
                label: 'Annual Management Fee',
                placeholder: 'Select annual management fee',
                required: true,
                validator: 'required',
                styleClasses: 'col-md-6',
                selectOptions: {
                  multiple: false,
                  key: 'name',
                  label: 'name',
                  searchable: false,
                },
                values: (model, schema) => {
                  return this.fee
                },
              },
              {
                type: 'vueMultiSelect',
                model: 'performanceFee',
                label: 'Performance Fee',
                placeholder: 'Select performance fee',
                required: true,
                validator: 'required',
                styleClasses: 'col-md-6',
                selectOptions: {
                  multiple: false,
                  key: 'name',
                  label: 'name',
                  searchable: false,
                },
                values: (model, schema) => {
                  return this.fee
                },
              },
              {
                type: 'input',
                inputType: 'text',
                label: 'Ratio',
                model: 'ratio',
                placeholder: 'e.g 20:80 with UTMC portion comes first',
                required: true,
                validator: 'string',
                styleClasses: 'col-md-6',
              },
              {
                type: 'input',
                inputType: 'text',
                label: 'Hurdle Rate',
                model: 'hurdleRate',
                placeholder: 'e.g x.xx%',
                required: true,
                validator: 'string',
                styleClasses: 'col',
              },
              {
                type: 'input',
                inputType: 'text',
                label: 'Launch Price per unit',
                model: 'launchPrice',
                placeholder: 'e.g x.xxxx',
                required: true,
                validator: 'string',
                styleClasses: 'col-md-6',
              },
              {
                labels: 'Launch Date',
                type: 'vfg-functional-date',
                placeholder: 'Launch Date',
                model: 'launchDate',
                noLabel: true,
                noClearButton: true,
                formatted: 'DD/MM/YYYY',
                styleClasses: 'col',
                required: true,
                validator: 'string',
              },
              {
                labels: 'Financial Year End',
                type: 'vfg-functional-date',
                placeholder: 'Financial Year End',
                model: 'finYearEnd',
                noLabel: true,
                noClearButton: true,
                formatted: 'DD/MM/YYYY',
                styleClasses: 'col-md-6',
                required: true,
                validator: 'string',
              },
              {
                type: 'input',
                inputType: 'text',
                label: 'Minimum Sales Charge',
                model: 'minSalesCharge',
                placeholder: 'e.g x.xx%',
                required: true,
                validator: 'string',
                styleClasses: 'col',
              },

              {
                type: 'vueMultiSelect',
                model: 'schemeStructure',
                label: 'Scheme Structure',
                placeholder: 'Select scheme structure',
                required: true,
                validator: 'required',
                styleClasses: 'col-md-6',
                selectOptions: {
                  multiple: false,
                  key: 'name',
                  label: 'name',
                  searchable: false,
                },
                values: (model, schema) => {
                  return this.schemaStructure
                },
              },
              {
                type: 'vueMultiSelect',
                model: 'locFocused',
                label: 'Foreign / Local Focused',
                placeholder: 'Select foreign / local focused',
                required: true,
                validator: 'required',
                styleClasses: 'col',
                selectOptions: {
                  multiple: false,
                  key: 'name',
                  label: 'name',
                  searchable: false,
                },
                values: (model, schema) => {
                  return this.localFocused
                },
              },
              {
                type: 'radios',
                label: 'Wholesale Fund',
                model: 'wholeSaleFund',
                required: true,
                validator: 'string',
                styleClasses: 'col-md-6 display-inline',
                values: () => {
                  return this.syariahCompliant
                },
              },
              {
                type: 'radios',
                label: 'Feeder Fund',
                model: 'feederFund',
                required: true,
                validator: 'string',
                styleClasses: 'col display-inline',
                values: () => {
                  return this.feederFund
                },
              },
            ],
          },
        ],
      },

      formOptions: {
        // validationErrorClass: "has-error",
        // validationSuccessClass: "has-`success`",
        validateAfterChanged: true,
      },
    }
  },
}
</script>
