<template>
  <va-card>
    <div class="row">
      <h4 slot="header" class="card-title">List Of Fund Lodgement</h4>
      <br />
      <div class="col float-right">
        <div class="float-right">
          <h5>
            <b-badge v-b-toggle.collapse-1 class="mr-1" variant="secondary"
            ><i class="fa fa-search"></i
            ></b-badge>
            <span
              v-b-tooltip.hover
              title="create"
              v-on:click="create"
              class="badge badge-primary"
            >
              <i class="fa fa-plus"></i
              ></span>
          </h5>
        </div>
      </div>
    </div>
    <!-- advanced search form -->
    <b-collapse id="collapse-1" class="mt-2">
      <b-card>
        <vue-form-generator
          :model="model"
          :schema="advancedSearchSchema"
          ref="advancedSearchForm"
        >
        </vue-form-generator>
        <br />
        <button
          @click="filterfundRecord"
          type="button"
          class="ml-2 btn btn-sm btn-primary"
        >
          Search
        </button>
        <button
          @click.prevent="reset"
          type="button"
          class="ml-2 btn btn-sm btn-danger"
        >
          Reset
        </button>
      </b-card>
    </b-collapse>

    <br />
    <div class="float-right">
      <va-input
        :value="term"
        :placeholder="$t('Search')"
        @input="search"
        removable
      >
        <va-icon name="fa fa-search" slot="prepend" />
      </va-input>
    </div>

    <!-- list table-->
    <va-card class="mt-5 col-12">
      <va-data-table
        :fields="caRecordFields"
        :data="caRecordFilteredData"
        no-data-label="No data found"
        :per-page="parseInt(perPage)"
        :datacount="caRecordCount"
        :dataperpage="parseInt(perPage)"
        clickable
      >
        <template slot="no" slot-scope="row">
          {{ row.rowIndex + 1 }}
        </template>
        <template slot="actions" slot-scope="props">
          <h5 class="mt-1">
            <span
              @click="editDetail(row)"
              class="badge badge-info mr-1"
            >
              <i class="fa fa-edit"></i>
            </span>
          </h5>
        </template>
      </va-data-table>

      <br />
      <br />
      <br />
      <!-- <button
        @click="back"
        type="button"
        class="btn btn-primary btn-fill btn-md"
      >
        <i class="fa fa-step-backward" /> &nbsp; Previous
      </button> -->
    </va-card>
  </va-card>
</template>

<script>
import 'vue-form-generator/dist/vfg.css'
import { debounce } from 'lodash'
import * as servicesModule3 from '../../../app/module5/services03'

export default {
  mounted () {
    this.getAllClassification()
    this.getAllCaRecord()
  },
  components: {},

  methods: {
    // searh
    search: debounce(function (term) {
      this.term = term
      console.log(this.term)
    }, 400),

    // advanceSearch
    getAllClassification: async function () {
      const response = await servicesModule3.getAllClassification()
      this.classificationList = response
    },
    async filterCaRecord () {
      try {
        const response = await servicesModule3.filterFundProfileList(
          this.model.modelFilter,
        )
        if (response != 'error') {
          this.FundProfileList = response
        }
      } catch (error) {}
    },

    handleClick (newTab) {
      this.currentTab = newTab
    }, // end tab
    back () {
      this.$router.go(-1)
    }, // back button

    // getAllRecord
    getAllFundProfile: async function () {
      const response = await servicesModule3.getAllFundProfile()
      this.FundProfileList = response
      this.fundprofileRecordCount = this.FundProfileList.length
    },
    async viewRecord () {},
    async addRecord () {},
  },

  computed: {
    caRecordFields () {
      return [
        {
          name: '__slot:no',
          title: 'NO',
        },
        {
          name: 'SUBMISSION_DATE',
          title: 'SUBMISSION DATE',
          sortField: 'SUBMISSION DATE   ',
        },
        {
          name: 'MEMBER_FUND_CODE',
          title: 'MEMBER FUND CODE',
          sortField: 'MEMBER_FUND_CODE',
        },
        {
          name: 'FUND_NAME',
          title: 'FUND NAME',
          sortField: 'FUND_NAME',
        },
        {
          name: 'EXPECTED_CONTRIBUTION_DATE',
          title: 'EXPECTED CONTRIBUTION DATE',
          sortField: 'EXPECTED CONTRIBUTION DATE',
        },
        {
          name: 'CONTRACT_EFFECTIVE_DATE',
          title: 'CONTRACT EFFECTIVE DATE',
          sortField: 'CONTRACT_EFFECTIVE_DATE',
        },
        {
          name: 'LAUNCH_DATE',
          title: 'LAUNCH DATE',
          sortField: 'LAUNCH_DATE',
        },
        // {
        //   name: 'LAUNCH_DATE',
        //   title: 'LAUNCH DATE',
        //   sortField: 'LAUNCH DATE',
        // },
        {
          name: 'STATUS',
          title: 'STATUS',
          sortField: 'STATUS',
        },
        {
          name: 'DISTRIBUTION_AGREEMENT',
          title: 'DISTRIBUTION AGREEMENT',
          sortField: 'DISTRIBUTION_AGREEMENT',
        },

        {
          name: '__slot:actions',
          title: 'ACTIONS',
          dataClass: 'justify-content-center',
          width: '8%',
        },
      ]
    },

    // eslint-disable-next-line vue/return-in-computed-property
    caRecordFilteredData () {
      if (!this.term || this.term.length < 1) {
        return this.FundProfileList
      }

      return this.FundProfileList.filter((item) => {
        return this.term

          .split(' ')
          .every(
            (v) =>
              item.CONSULTANT_NAME.includes(v) ||
              item.CONSULTANT_NRIC.includes(v) ||
              item.CONSULTANT_FIMM_NO.includes(v) ||
              item.CONSULTANT_PASSPORT_NO.includes(v),
          )
      })
    },
  },

  data () {
    return {
      header: '',
      field: [],
      term: null,
      perPage: '10',
      perPageOptions: ['50', '100', '150', '200'],
      currentPage: 1,
      classificationList: [],
      FundProfileList: [],
      count: 1,

      model: {
        modelFilter: {
          CONSULTANT_FIMM_NO: '',
          CONSULTANT_NAME: '',
          CONSULTANT_NRIC: '',
          CONSULTANT_PASSPORT_NO: '',
        },
      },

      advancedSearchSchema: {
        groups: [
          {
            styleClasses: 'row',
            fields: [
              {
                type: 'input',
                inputType: 'text',
                model: 'modelFilter.CONSULTANT_FIMM_NO',
                label: 'FIMM Fund Code',
                styleClasses: 'col-md-6',
              },
              {
                type: 'input',
                inputType: 'text',
                model: 'modelFilter.CONSULTANT_NAME',
                label: 'Member Fund Code',
                styleClasses: 'col-md-6',
              },
              {
                type: 'input',
                inputType: 'text',
                model: 'modelFilter.CONSULTANT_NRIC',
                label: 'Fund Name',
                styleClasses: 'col-md-6',
              },
              {
                type: 'input',
                inputType: 'text',
                model: 'modelFilter.CONSULTANT_PASPORT_NO',
                label: 'Fund Short Name',
                styleClasses: 'col-md-6',
              },

              // {
              //   type: "select",
              //   model: "classification",
              //   label: "Classification",
              //   placeholder: "Select Classification",
              //   selectOptions: {
              //     multiple: false,
              //     value: "SETTING_GENERAL_ID",
              //     name: "SET_PARAM",
              //     searchable: true,
              //   },
              //   values: (model, schema) => {
              //     return this.classificationList;
              //   },
              //   styleClasses: "col-md-6",
              // },
            ],
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
</style>
