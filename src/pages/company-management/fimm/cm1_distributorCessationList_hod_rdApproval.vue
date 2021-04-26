<template>
  <div class="content">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <card>
            <template slot="header">
              <div class="row">
                <div class="col">
                  <h4 class="card-title">
                    List of Distributor Cessation Request
                  </h4>
                </div>
                <div class="col float-right">
                  <div class="float-right">
                    <h5>
                      <b-badge
                        v-b-toggle.collapse-1
                        class="mr-1"
                        variant="secondary"
                      >
                        <i class="fa fa-search"></i>
                      </b-badge>
                      <span v-on:click="onClick" class="badge badge-primary">
                        <i class="fa fa-plus"></i
                        ></span>
                    </h5>
                  </div>
                </div>
              </div>
              <b-collapse id="collapse-1" class="mt-2">
                <b-card>
                  <vue-form-generator
                    :model="model"
                    :schema="schema"
                    ref="firstTabForm"
                  >
                  </vue-form-generator>
                </b-card>
              </b-collapse>
            </template>
            <div class="row col-3">
              <div class="form-group form-group-sm has-search">
                <span class="fa fa-search form-control-feedback"></span>
                <input
                  v-model="filter"
                  type="text"
                  class="form-control"
                  placeholder="Search"
                />
              </div>
            </div>

            <!-- Main table element -->
            <div class="col-ml-2">
              <b-table
                :items="items"
                :fields="fields"
                :current-page="currentPage"
                :per-page="perPage"
                :filter="filter"
                responsive="md"
              >
                <!-- A virtual column -->
                <template #cell(index)="data">
                  {{ data.index + 1 }}
                </template>

                <!-- A custom formatted column -->
                <!-- <template #cell(name)="data">
                  <b class="text-info">{{ data.value.last.toUpperCase() }}</b
                  >, <b>{{ data.value.first }}</b>
                </template> -->

                <!-- A virtual composite column -->
                <!-- <template #cell(nameage)="data">
                  {{ data.item.name.first }} is {{ data.item.age }} years old
                </template> -->

                <!-- Optional default data cell scoped slot -->
                <template #cell()="data">
                  <span class="description">{{ data.value }}</span>
                </template>
                <template #cell(actions)="row">
                  <h4>
                    <span
                      v-on:click="view(row)"
                      class="badge badge-success mr-1"
                    >
                      <i class="fa fa-eye"></i
                      ></span>
                  </h4>
                </template>
              </b-table>
            </div>
            <div class="row col ml-2 mt-2">
              <b-pagination
                size="md"
                :total-rows="this.items.length"
                :per-page="perPage"
                v-model="currentPage"
              />
              <b-form-fieldset horizontal class="col-1">
                <b-form-select
                  :options="[
                    { text: 5, value: 5 },
                    { text: 10, value: 10 },
                    { text: 15, value: 15 }
                  ]"
                  v-model="perPage"
                >
                </b-form-select>
              </b-form-fieldset>
            </div>
          </card>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Vue from 'vue'
import VueFormGenerator from 'vue-form-generator'
import 'vue-form-generator/dist/vfg.css'

Vue.use(VueFormGenerator)

export default {
  methods: {
    onClick () {
      console.log('jhdfj')
      // this.$router.push("/admin/company-registration");
    },

    view (item) {
      console.log(item)
      this.$router.push('company-termination-by-member-review-and-approval')
    },
  },
  data () {
    return {
      fields: [
        // A virtual column that doesn't exist in items
        { key: 'index', label: 'No' },
        // A column that needs custom formatting
        { key: 'submitdate', label: 'Submission Date', sortable: true },
        { key: 'company', label: 'Distributor Name', sortable: true },
        // A regular column
        { key: 'regno', label: 'Registration No', sortable: true },
        { key: 'newregno', label: 'New Registration No', sortable: true },
        // A regular column
        { key: 'phoneno', label: 'Phone No', sortable: true },
        { key: 'email', label: 'Email', sortable: true },
        { key: 'status', label: 'Status', sortable: true },
        { key: 'updateby', label: 'Update By' },
        { key: 'latestupdate', label: 'Latest Update', sortable: true },
        { key: 'actions', label: 'Actions' },
        // A virtual column made up from two fields
        // { key: "nameage", label: "First name and age" }
      ],
      items: [
        {
          no: 1,
          company: 'A.D.Fincancial Sdn. Bhd.',
          regno: '871180-W',
          newregno: '20190123152',
          phoneno: '03-7956 8833',
          approval: 'Approve',
          email: 'info@adfinance.my',
          status: 'Pending',
          updateby: 'Sazali Bin Abu',
          latestupdate: '20-10-2020',
          submitdate: '08-09-2020',
        },
        // {
        //   no: 2,
        //   company: "Affin Bank Berhad",
        //   regno: "25046-T",
        //   phoneno: "03-8925 7333",
        //   status: "Registered"
        // },
        // {
        //   no: 3,
        //   company: "Affin Hwang Asset Management Berhad",
        //   regno: "0429786-T",
        //   phoneno: "1-800-88-7080",
        //   status: "Reviewed"
        // },
        // {
        //   no: 4,
        //   company: "AIA Pension and Asset Management Sdn. Bhd.",
        //   regno: "1011637-P",
        //   phoneno: "03-2056 3655",
        //   status: "Pending"
        // },
        // {
        //   no: 5,
        //   company: "Manulife Investment Management (M) Berhad",
        //   regno: "834424-U",
        //   phoneno: "03-2719 9271",
        //   status: "Reviewed"
        // },
        // {
        //   no: 6,
        //   company: "Principal Asset Management Berhad",
        //   regno: "304078-K",
        //   phoneno: "03-2084 8888",
        //   status: "Registered"
        // },
        // {
        //   no: 7,
        //   company: "Public Mutual Bank Berhad",
        //   regno: "23419-A",
        //   phoneno: "03-2022 5000",
        //   status: "Reviewed"
        // }
      ],
      tableVariants: [
        'primary',
        'secondary',
        'info',
        'danger',
        'warning',
        'success',
        'light',
        'dark',
      ],
      currentPage: 1,
      perPage: 5,
      filter: null,

      model: {
        companyName: '',
        regno: '',
        phoneno: '',
        status: '',
      },

      schema: {
        fields: [
          {
            type: 'input',
            inputType: 'text',
            model: 'companyName',
            label: 'Distributor Name',
            styleClasses: 'col-md-6',
          },
          {
            type: 'input',
            inputType: 'text',
            model: 'regno',
            label: 'Registration No',
            styleClasses: 'col-md-6',
          },
          {
            type: 'input',
            inputType: 'text',
            model: 'phoneno',
            label: 'Phone No',
            styleClasses: 'col-md-6',
          },
          {
            type: 'select',
            label: 'Status',
            model: 'status',
            styleClasses: 'col-md-6',

            values: (model, schema) => {
              return this.status
            },
          },
        ],
        groups: [
          {
            fields: [
              {
                type: 'submit',
                buttonText: 'Search',
                onSubmit (model) {
                  console.log(model)
                },
                label: 'Search',
                styleClasses: 'col-1',
                // validateBeforeSubmit: true
              },
              {
                type: 'submit',
                buttonText: 'Reset',
                onSubmit (model) {
                  console.log(model)
                  model.companyName = ''
                  model.regno = ''
                  model.phoneno = ''
                  model.status = ''
                },
                label: 'Search',
                styleClasses: 'col-1',
                // validateBeforeSubmit: true
              },
            ],
          },
        ],
      },

      type: [
        {
          id: 'UTMC',
          name: 'UTMC',
        },
        {
          id: 'IUTA',
          name: 'IUTA',
        },
        {
          id: 'CUTA',
          name: 'CUTA',
        },
      ],
      status: [
        {
          id: 'Pending',
          name: 'Pending',
        },
        {
          id: 'Approve',
          name: 'Approve',
        },
        // {
        //   id: "Returned",
        //   name: "Returned"
        // },
        // {
        //   id: "Approved",
        //   name: "Approved"
        // },
        // {
        //   id: "Rejected",
        //   name: "Rejected"
        // },
        // {
        //   id: "Registered",
        //   name: "Registered"
        // }
      ],
      category: [
        {
          id: 'Agent',
          name: 'Agent',
        },
        {
          id: 'Employee',
          name: 'Employee',
        },
      ],
    }
  },
}
</script>
<style>
</style>
