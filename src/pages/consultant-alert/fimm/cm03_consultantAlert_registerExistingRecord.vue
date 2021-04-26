<template>
  <va-card>
    <div class="row">
      <h4 slot="header" class="card-title">Register New Case</h4>
      <br />
      <br />
    </div>
    <va-card>
      <div class="ml-3 col-md-12">
        Consultant Profile
        <span v-if="visibleProfile == false"
          >:
          <b
            >{{ CONSULTANT.CONSULTANT_NAME }} (
            {{ CONSULTANT.CONSULTANT_FIMM_NO }} )</b
          ></span
        >
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
          <table class="table table-striped">
            <tbody>
              <tr>
                <td style="width: 15%">Consultant Name</td>
                <td>{{ CONSULTANT.CONSULTANT_NAME }}</td>
              </tr>
              <tr>
                <td>NRIC Number</td>
                <td>{{ CONSULTANT.CONSULTANT_NRIC }}</td>
              </tr>
              <tr>
                <td>FIMM Number</td>
                <td>{{ CONSULTANT.CONSULTANT_FIMM_NO }}</td>
              </tr>

              <tr>
                <td>Passport Number</td>
                <td>{{ CONSULTANT.CONSULTANT_PASPORT_NO }}</td>
              </tr>
               <tr>
                <td>Status</td>
                <td>{{ CONSULTANT.STATUS }}</td>
              </tr>
            </tbody>
          </table>
        </b-collapse>
      </div>
    </va-card>
    <br />
    <va-card>
      <div class="ml-3">
        <vue-form-generator
          :model="model"
          :schema="registerNewCaseSchema"
          :options="formOptions"
          ref="registerNewCaseForm"
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
    <br />
    <button @click="back" type="button" class="btn btn-primary btn-fill btn-md">
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
        @click="registerCase"
        type="button"
        class="ml-1 btn btn-success btn-fill btn-md"
      >
        <i class="fa fa-paper-plane" /> &nbsp; Submit
      </button>
    </div>
  </va-card>
</template> 
  
<script>
import "vue-form-generator/dist/vfg.css";
import moment from "moment";
import * as servicesModule3 from "../../../app/module3/services01";

export default {
  props: {
    CONSULTANT: {},
  },

  mounted() {
    this.getAllClassification();
    //alert(JSON.stringify(this.CONSULTANT));
  },
  components: {},

  methods: {
    getAllClassification: async function () {
      const response = await servicesModule3.getAllClassification();
      this.classificationList = response;
    },

    handleClick(newTab) {
      this.currentTab = newTab;
    }, // end tab
    back() {
      this.$router.go(-1);
    }, // back button

     validatestatusForm() {
      return this.$refs.registerNewCaseForm.validate();
    },

    validateEntryForm() {
      return this.$refs.registerNewCaseForm.validate();
    },

    saveAsDraft: async function () {
      if (this.$refs.registerNewCaseForm.validate()) {
        const data = new FormData();
        data.append("CA_RECORD_ID", this.CONSULTANT.CA_RECORD_ID);
        this.model.startDate != null
          ? data.append(
              "CA_DATE_START",
              moment(this.model.startDate).format("YYYY-MM-DD")
            )
          : null;
        this.model.endDate != null
          ? data.append(
              "CA_DATE_START",
              moment(this.model.endDate).format("YYYY-MM-DD")
            )
          : null;
        data.append(
          "CA_CLASSIFICATION",
          this.model.classification.SETTING_GENERAL_ID
        );
        data.append("CA_REASON", this.model.reason);
        data.append("CA_REMARK", this.model.remark);
        data.append("CA_PUBLISH_STATUS", "0");
        const user = localStorage.getItem("user");
        data.append("CREATE_BY", JSON.parse(user).user_id);

        try {
          const response = await servicesModule3.createExistingCase(data);
        } catch (error) {
          console.log(error);
        }
      }
    },
   
    registerCase: async function () {
      if (this.$refs.registerNewCaseForm.validate()) {
        const data = new FormData();
        data.append("CA_RECORD_ID", this.CONSULTANT.CA_RECORD_ID);
        this.model.startDate != null
          ? data.append(
              "CA_DATE_START",
              moment(this.model.startDate).format("YYYY-MM-DD")
            )
          : null;
        this.model.endDate != null
          ? data.append(
              "CA_DATE_END",
              moment(this.model.endDate).format("YYYY-MM-DD")
            )
          : null;
        data.append(
          "CA_CLASSIFICATION",
          this.model.classification.SETTING_GENERAL_ID
        );
        data.append("CA_REASON", this.model.reason);
        data.append("CA_REMARK", this.model.remark);
        data.append("CA_PUBLISH_STATUS", "1");
        const user = localStorage.getItem("user");
        data.append("CREATE_BY", JSON.parse(user).user_id);

        try {
          const response = await servicesModule3.createExistingCase(data);

          this.$router.push("/fimm/consultantAlert-consultantCaRecord");
        } catch (error) {
          console.log(error);
        }
      }
    },

    deleteUploadedFile: function (fileRecord) {
      this.$refs.vueFileAgent.deleteUpload(
        this.uploadUrl,
        this.uploadHeaders,
        fileRecord
      );
    },
    filesSelected: function (fileRecordsNewlySelected) {
      console.log("selected");
      var validFileRecords = fileRecordsNewlySelected.filter(
        (fileRecord) => !fileRecord.error
      );
      this.fileRecordsForUpload = this.fileRecordsForUpload.concat(
        validFileRecords
      );
      console.log(fileRecordsNewlySelected);
    },
    onBeforeDelete: function (fileRecord) {
      var i = this.fileRecordsForUpload.indexOf(fileRecord);
      if (i !== -1) {
        // queued file, not yet uploaded. Just remove from the arrays
        this.fileRecordsForUpload.splice(i, 1);
        var k = this.fileRecords.indexOf(fileRecord);
        if (k !== -1) this.fileRecords.splice(k, 1);
      } else {
        if (confirm("Are you sure you want to delete?")) {
          this.$refs.vueFileAgent.deleteFileRecord(fileRecord); // will trigger 'delete' event
        }
      }
    },
    fileDeleted: function (fileRecord) {
      var i = this.fileRecordsForUpload.indexOf(fileRecord);
      if (i !== -1) {
        this.fileRecordsForUpload.splice(i, 1);
      } else {
        this.deleteUploadedFile(fileRecord);
      }
    },
  },

  computed: {},

  data() {
    return {
      classificationList: [],
      fileRecords: [],
      visibleProfile: false,
      startDate: null,
      endDate: null,

      model: {
        classification: "",
        startDate: null,
        endDate: null,
        reason: "",
        remark: "",
        fileUpload: "",
      },

      registerNewCaseSchema: {
        fields: [
          {
            type: "vueMultiSelect",
            model: "classification",
            label: "Classification",
            placeholder: "Select Classification",
            selectOptions: {
              multiple: false,
              key: "SETTING_GENERAL_ID",
              label: "SET_PARAM",
              searchable: true,
            },
            values: (model, schema) => {
              return this.classificationList;
            },
            styleClasses: "col-md-6",
            required: true,
            validator: "required",
          },
          {
            type: "input",
            inputType: "date",
            model: "startDate",
            label: "Start Date",
            styleClasses: "col-md-3",
          },
          {
            type: "input",
            inputType: "date",
            model: "endDate",
            label: "End Date",
            styleClasses: "col-md-3",
          },
          {
            type: "textArea",

            model: "reason",
            label: "Reason",
            hint: "Max 1000 characters",
            max: 1000,
            placeholder: "Enter Reason",
            rows: 5,
            validator: "string",
            styleClasses: "col-md-12",
          },

          {
            type: "textArea",
            model: "remark",
            label: "Remark",
            hint: "Max 1000 characters",
            max: 1000,
            placeholder: "Enter Remark",
            rows: 5,
            validator: "string",
            styleClasses: "col-md-12",
          },
        ],
      },

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