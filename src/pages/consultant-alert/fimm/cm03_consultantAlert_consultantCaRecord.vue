<template>
  <va-card>
    <div class="row">
      <h4 slot="header" class="card-title">
        Consultant Alert Record :
        <b
          >{{ CONSULTANT.CONSULTANT_NAME }} (
          {{ CONSULTANT.CONSULTANT_FIMM_NO }} )
        </b>
      </h4>
    </div>
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
              v-b-tooltip.hover
              title="View Consultant Records"
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
import "vue-form-generator/dist/vfg.css";
import { debounce } from "lodash";
import * as servicesModule3 from "../../../app/module3/services01";

export default {
  props: {
    CONSULTANT: {},
  },
  mounted() {
    this.getRecordById();
  },
  components: {},

  methods: {
    //searh
    search: debounce(function (term) {
      this.term = term;
      console.log(this.term);
    }, 400),

    getRecordById: async function () {
      // const data = new FormData();

      const response = await servicesModule3.getCaRecordById(
        this.CONSULTANT.CONSULTANT_ID
      );

      this.caRecordList = response;
      this.caRecordCount = this.caRecordList.length;
    },
    async viewRecord(data) {
      //  this.$router.push({
      //   name: "consultantAlert-consultantCaRecord",
      //   params: { CONSULTANT: data }
      // });
    },
    handleClick(newTab) {
      this.currentTab = newTab;
    }, // end tab
    back() {
      this.$router.go(-1);
    }, // back button
  },

  computed: {
    caRecordFields() {
      return [
        {
          name: "__slot:no",
          title: "NO",
        },
        {
          name: "CREATE_TIMESTAMP",
          title: "Creation Date",
          sortField: "CREATE_TIMESTAMP",
        },
        {
          name: "SET_PARAM",
          title: "Classification",
          sortField: "SET_PARAM",
        },
        {
          name: "CA_DATE_START",
          title: "Start Date",
          sortField: "CA_DATE_START",
        },
        {
          name: "CA_DATE_END",
          title: "End Date",
          sortField: "CA_DATE_END",
        },
        {
          name: "CA_REASON",
          title: "Reason",
          sortField: "CA_REASON",
        },
        {
          name: "TS_PARAM",
          title: "Status",
          sortField: "TS_PARAM",
        },

        {
          name: "__slot:actions",
          title: "ACTIONS",
          dataClass: "justify-content-center",
          width: "8%",
        },
      ];
    },

    // eslint-disable-next-line vue/return-in-computed-property
    caRecordFilteredData() {
      if (!this.term || this.term.length < 1) {
        return this.caRecordList;
      }

      return this.caRecordList.filter((item) => {
        return this.term
          .toLowerCase()
          .split(" ")
          .every(
            (v) =>
              item.CONSULTANT_NAME.toLowerCase().includes(v) ||
              item.CONSULTANT_NRIC.includes(v) ||
              item.CONSULTANT_FIMM_NO.toLowerCase().includes(v) ||
              item.CONSULTANT_PASSPORT_NO.toLowerCase().includes(v)
          );
      });
    },
  },

  data() {
    return {
      header: "",
      field: [],
      term: null,
      perPage: "10",
      currentPage: 1,
      caRecordList: [],
      count: 1,
      caRecordCount: null,

      model: {},
      formOptions: {
        validateAfterChanged: true,
      },
    };
  },
};
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