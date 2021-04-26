<template>
  <va-card>
    <div class="row">
      <h4 slot="header" class="card-title">Suspension Details</h4>
      <br />
      <br />
    </div>
    <va-card>
      <div class="ml-3">
        <div class="content">
          <br />
          <table class="table table-striped">
            <tbody>
              <tr>
                <td style="width: 20%">Distributor Name</td>
                <td style="width: 1%">:</td>
                <td>A.D.Fincancial Sdn. Bhd.</td>
              </tr>
              <tr>
                <td>Start Date</td>
                <td>:</td>
                <td></td>
              </tr>
              <tr>
                <td>End Date</td>
                <td>:</td>
                <td></td>
              </tr>
              <tr>
                <td>Reason</td>
                <td>:</td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </va-card>
    <br />
    <br />
    <va-card>
      <h4 slot="header" class="card-title">Respond and Justification</h4>
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
// import * as servicesModule3 from '../../../app/module3/services01'
import Tabs from 'vue-tabs-with-active-line'

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
      tabs: Tabs,
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
