<template>
  <va-card>
    <div class="row">
      <h4 slot="header" class="card-title">List of Distributor</h4>
      <br />
      <div class="col float-right">
        <div class="float-right">
          <h5>
            <b-badge v-b-toggle.collapse-1 class="mr-1" variant="secondary"
            ><i class="fa fa-search"></i
            ></b-badge>
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
          @click="filterRecord"
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
        :fields="RecordFields"
        :data="RecordFilteredData"
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
              v-b-tooltip.hover
              title="edit"
              v-on:click="viewRecord(props.rowData)"
              class="badge badge-primary mr-2"
            >
              <i class="fa fa-eye"></i
              ></span>
          </h5>
        </template>
      </va-data-table>

      <br />
      <br />
      <br />
      <button
        @click="back"
        type="button"
        class="btn btn-primary btn-fill btn-md"
      >
        <i class="fa fa-step-backward" /> &nbsp; Previous
      </button>
    </va-card>
  </va-card>
</template>

<script>
import 'vue-form-generator/dist/vfg.css'
import { debounce } from 'lodash'
import * as servicesModule1 from '../../../app/module1/services05'

export default {
  mounted () {
    this.getAllDistributor()
  },
  components: {},

  methods: {

    // searh
    search: debounce(function (term) {
      this.term = term
      console.log(this.term)
    }, 400),

    // advanceSearch
    async filterRecord () {
      try {
        const response = await servicesModule1.filterdistributorList(
          this.model.modelFilter,
        )
        // eslint-disable-next-line eqeqeq
        if (response != 'error') {
          this.RecordList = response
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
    getAllDistributor: async function () {
      const response = await servicesModule1.getAllDistributor()
      this.RecordList = response
      this.RecordCount = this.RecordList.length
    },
    async viewRecord () {
      this.$router.push('/fimm/distributor-Cancellation-Submission')
    },

  },

  computed: {
    RecordFields () {
      return [
        {
          name: '__slot:no',
          title: 'NO',
        },
        {
          name: 'DIST_NAME',
          title: 'DISTRIBUTOR NAME',
          sortField: 'DIST_NAME',
        },
        {
          name: 'DIST_REGI_NUM1',
          title: 'REG NUMBER',
          sortField: 'DIST_REGI_NUM1',
        },
        {
          name: 'DIST_REGI_NUM2',
          title: 'NEW REG NUMBER',
          sortField: 'DIST_REGI_NUM2',
        },
        {
          name: 'DIST_EMAIL',
          title: 'EMAIL',
          sortField: 'DIST_EMAIL',
        },
        {
          name: '__slot:actions',
          title: 'ACTIONS',
          dataClass: 'justify-content-center',
          width: '15%',
        },
      ]
    },

    // eslint-disable-next-line vue/return-in-computed-property
    RecordFilteredData () {
      if (!this.term || this.term.length < 1) {
        return this.RecordList
      }

      return this.RecordList.filter((item) => {
        return this.term

          .split(' ')
          .every(
            (v) =>
              item.DIST_NAME.includes(v) ||
              item.DIST_REGI_NUM1.includes(v) ||
              item.DIST_REGI_NUM2.includes(v) ||
              item.DIST_EMAIL.includes(v),

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
      RecordList: [],
      count: 1,

      model: {
        modelFilter: {
          DIST_NAME: '',
          DIST_REGI_NUM1: '',
          DIST_REGI_NUM2: '',
          DIST_EMAIL: '',

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
                model: 'modelFilter.DIST_NAME',
                label: 'DISTRIBUTOR NAME',
                styleClasses: 'col-md-6',
              },
              {
                type: 'input',
                inputType: 'text',
                model: 'modelFilter.DIST_REGI_NUM1',
                label: 'EMAIL',
                styleClasses: 'col-md-6',
              },
              {
                type: 'input',
                inputType: 'text',
                model: 'modelFilter.DIST_REGI_NUM1',
                label: 'REG NUMBER',
                styleClasses: 'col-md-6',
              },
              {
                type: 'input',
                inputType: 'text',
                model: 'modelFilter.DIST_REGI_NUM2',
                label: 'NEW REG NUMBER',
                styleClasses: 'col-md-6',
              },
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
<style lang="css">
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
