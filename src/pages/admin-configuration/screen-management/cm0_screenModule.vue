/* eslint-disable no-unused-expressions */
<template>
  <va-card>
    <!-- authorization -->
    <vudal name="editAuthorizationLevel" class="widthModal">
      <div class="header">
        Edit Edit Division<i class="close icon">&times;</i>
      </div>
      <div class="content">
        <vue-form-generator
          :model="model"
          :schema="editDivisionSchema"
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
          @click="updateDivisionAPI"
          type="button"
          class="cancel vudal-btn mr-2 btn btn-primary btn-fill btn-md"
        >
          <i class="fa fa-edit" /> &nbsp; Update
        </button>
      </div>
    </vudal>
    <!-- division -->
    <vudal name="simpleModalEditDivision" class="widthModal">
      <div class="header">
        Edit Edit Division<i class="close icon">&times;</i>
      </div>
      <div class="content">
        <vue-form-generator
          :model="model"
          :schema="editDivisionSchema"
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
          @click="updateDivisionAPI"
          type="button"
          class="cancel vudal-btn mr-2 btn btn-primary btn-fill btn-md"
        >
          <i class="fa fa-edit" /> &nbsp; Update
        </button>
      </div>
    </vudal>
    <!-- department -->
    <vudal name="simpleModalEditDepartment" class="widthModal">
      <div class="header">
        Screen Authorization Details<i class="close icon">&times;</i>
      </div>
      <div class="content">
        <vue-form-generator
          :model="model"
          :schema="editDepartmentSchema"
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
          @click="updateDepartmentAPI"
          type="button"
          class="cancel vudal-btn mr-2 btn btn-primary btn-fill btn-md"
        >
          <i class="fa fa-edit" /> &nbsp; Update
        </button>
      </div>
    </vudal>
    <!-- group -->

    <h4 slot="header" class="card-title">Screen and Module Management</h4>
    <div class="">
      <br />
      <tabs
        :tabs="tabs"
        :currentTab="currentTab"
        :wrapper-class="'default-tabs'"
        :tab-class="'default-tabs__item'"
        :tab-active-class="'default-tabs__item_active'"
        :line-class="'default-tabs__active-line'"
        @onClick="handleClick"
      />

      <div v-if="currentTab === 'tab1'">
        <br />
        <vue-form-generator
          :model="model"
          :schema="Tab1Schema"
          :options="formOptions"
          ref="Tab1Form"
        >
        </vue-form-generator>
        <br />
        <b-form-group label="SELECT MENU ICON" v-slot="{ ariaDescribedby }">
          <horizontal-scroll>
            <div style="margin: 10px 10px 10px 10px;">
              <b-form-radio-group
                id="radio-slots"
                v-model="selectedIcon1"
                :aria-describedby="ariaDescribedby"
                name="radio-options-slots"
              >
                <b-form-radio
                  v-for="icon in icons1"
                  :key="icon"
                  name="some-radios"
                  :value="icon"
                >
                  <i :class="icon"></i>
                </b-form-radio>
              </b-form-radio-group>
              <br />
              <b-form-radio-group
                id="radio-slots"
                v-model="selectedIcon1"
                :aria-describedby="ariaDescribedby"
                name="radio-options-slots"
              >
                <b-form-radio
                  v-for="icon in icons2"
                  :key="icon"
                  name="some-radios"
                  :value="icon"
                >
                  <i :class="icon"></i>
                </b-form-radio>
              </b-form-radio-group>
              <br />
              <b-form-radio-group
                id="radio-slots"
                v-model="selectedIcon1"
                :aria-describedby="ariaDescribedby"
                name="radio-options-slots"
              >
                <b-form-radio
                  v-for="icon in icons3"
                  :key="icon"
                  name="some-radios"
                  :value="icon"
                >
                  <i :class="icon"></i>
                </b-form-radio>
              </b-form-radio-group>
            </div>
          </horizontal-scroll>
        </b-form-group>
        <br />
        <button
          type="button"
          @click="addModule"
          class="btn btn-primary btn-fill btn-md"
        >
          <i class="fa fa-plus" /> &nbsp; Add Parameter
        </button>
        <br />
        <!-- list -->
        <va-card class="mt-2">
          <va-data-table
            :datacount="moduleListCount"
            :dataperpage="parseInt(perPage)"
            :fields="moduleFields"
            :data="moduleFilteredData"
            no-data-label="No data found"
            :per-page="parseInt(perPage)"
            clickable
          >
            <template slot="no" slot-scope="row">
              {{ row.rowIndex + 1 }}
            </template>
            <template slot="icons" slot-scope="props">
              <i :class="props.rowData.MOD_ICON"></i>
            </template>
            <template slot="actions" slot-scope="props">
              <h5 class="mt-1">
                <span
                  v-b-tooltip.hover
                  title="Details"
                  v-on:click="showScreenDetails(props.rowData)"
                  class="badge badge-primary mr-2"
                >
                  <i class="fa fa-info-circle"></i
                ></span>
                <span
                  v-b-tooltip.hover
                  title="Edit"
                  v-on:click="showAuthorizationLevelDetails(props.rowData)"
                  class="badge badge-primary mr-2"
                >
                  <i class="fa fa-edit"></i
                ></span>
              </h5>
            </template>
          </va-data-table>
        </va-card>
        <br /><br />
      </div>
      <div v-if="currentTab === 'tab2'">
        <br />
        <vue-form-generator
          :model="model"
          :schema="Tab2Schema"
          :options="formOptions"
          ref="Tab2Form"
        >
        </vue-form-generator>

        <br />
        <button
          type="button"
          @click="addSubmodule"
          class="btn btn-primary btn-fill btn-md"
        >
          <i class="fa fa-plus" /> &nbsp; Add Parameter
        </button>
        <br />

        <va-card class="mt-2">
          <va-data-table
            :datacount="submoduleListCount"
            :dataperpage="parseInt(perPage)"
            :fields="submoduleSchema"
            :data="submoduleFilteredData"
            :per-page="parseInt(perPage)"
            clickable
          >
            <template slot="no" slot-scope="row">
              {{ row.rowIndex + 1 }}
            </template>

            <template slot="actions" slot-scope="props">
              <h5 class="mt-1">
                <span
                  v-b-tooltip.hover
                  title="Details"
                  v-on:click="showScreenDetails(props.rowData)"
                  class="badge badge-primary mr-2"
                >
                  <i class="fa fa-info-circle"></i
                ></span>
                <span
                  v-b-tooltip.hover
                  title="Edit"
                  v-on:click="showAuthorizationLevelDetails(props.rowData)"
                  class="badge badge-primary mr-2"
                >
                  <i class="fa fa-edit"></i
                ></span>
              </h5>
            </template>
          </va-data-table>
        </va-card>
      </div>
      <div v-if="currentTab === 'tab3'">
        <br />
        <vue-form-generator
          :model="model"
          :schema="Tab3Schema"
          :options="formOptions"
          @model-updated="onModuleUpdated"
          ref="Tab1Form"
        >
        </vue-form-generator>
        <br />
        <button
          type="button"
          @click="addScreen"
          class="btn btn-primary btn-fill btn-md"
        >
          <i class="fa fa-plus" /> &nbsp; Add Parameter
        </button>
        <br />
        <!-- list -->
        <va-card class="mt-2">
          <va-data-table
            :datacount="screenPageListCount"
            :dataperpage="parseInt(perPage)"
            :fields="screenPageFields"
            :data="screenPageFilteredData"
            no-data-label="No data found"
            :per-page="parseInt(perPage)"
            clickable
          >
            <template slot="no" slot-scope="row">
              {{ row.rowIndex + 1 }}
            </template>
            <template slot="actions" slot-scope="props">
              <h5 class="mt-1">
                <span
                  v-b-tooltip.hover
                  title="Details"
                  v-on:click="showScreenDetails(props.rowData)"
                  class="badge badge-primary mr-2"
                >
                  <i class="fa fa-info-circle"></i
                ></span>
                <span
                  v-b-tooltip.hover
                  title="Edit"
                  v-on:click="showAuthorizationLevelDetails(props.rowData)"
                  class="badge badge-primary mr-2"
                >
                  <i class="fa fa-edit"></i
                ></span>
              </h5>
            </template>
          </va-data-table>
        </va-card>
        <br /><br />
      </div>
    </div>
  </va-card>
</template>
<script>
// eslint-disable-next-line no-unused-vars
import Vudal from "vudal";
import "vue-form-generator/dist/vfg.css";
import Tabs from "vue-tabs-with-active-line";
import * as servicesModule04 from "../../../app/module0/services04";
import * as servicesModule0 from "../../../app/module0/services";
import * as servicesModule1 from "../../../app/module1/services";

import data1 from "./data1.json";
import data2 from "./data2.json";
import data3 from "./data3.json";
import HorizontalScroll from "vue-horizontal-scroll";
import "vue-horizontal-scroll/dist/vue-horizontal-scroll.css";

import Vue from "vue";
import VueToast from "vue-toast-notification";
// Import one of the available themes
//import 'vue-toast-notification/dist/theme-default.css';
import "vue-toast-notification/dist/theme-sugar.css";

Vue.use(VueToast);

const TABS = [
  { title: "Setting 1 : Module", value: "tab1" },
  { title: "Setting 2 : Sub Module", value: "tab2" },
  { title: "Setting 3 : Screen Page", value: "tab3" }
];

export default {
  watch: {},
  mounted() {
    (this.icons1 = data1), (this.icons2 = data2), (this.icons3 = data3);
    this.getAllModule();
    this.getAllSubmodule();
    this.getAllPageList();
  },
  components: {
    Tabs,
    Vudal,
    HorizontalScroll
  },
  props: {
    id: {
      default: "N/A"
    }
  },

  methods: {
    async submit() {
      this.checkboxArray = [];
      this.screenList.forEach(item => {
        if (item.selected == true) {
          this.checkboxArray.push(item.MANAGE_SCREEN_ID);
        }
      });
      // alert(this.checkboxArray)
      const data = new FormData();
      data.append("MANAGE_GROUP_ID", this.model.groupSelection.MANAGE_GROUP_ID);
      data.append("AUTHORIZATION_LEVEL_ID", this.authorizationLevel);
      data.append("MANAGE_SCREEN_ID", JSON.stringify(this.checkboxArray));
      try {
        const response = await servicesModule0.createScreenAccess(data);
      } catch (error) {
        console.log(error);
      }
    },
    checkBox(screenId, id) {
      if (document.getElementById("checkboxId_" + id).checked) {
        this.checkboxArray.push(screenId);
      } else {
        const indexToRemove = this.checkboxArray.indexOf(screenId);
        if (indexToRemove > -1) {
          this.checkboxArray.splice(indexToRemove, 1);
        }
      }
    },

    getAllSubmodule: async function() {
      const response = await servicesModule04.getSubmoduleAll();
      this.submoduleList = response;
      this.submoduleListCount = this.submoduleList.length;
    },

    getAllPageList: async function() {
      const response = await servicesModule04.getAllScreens();
      this.screenPageList = response;
      this.screenPageListCount = this.screenPageList.length;
    },

    getDivision: async function() {
      const response = await servicesModule04.getAllDivisionList();
      this.divisionList = response;

      // alert(this.divisionList)
    },

    getAuthorizationLevel: async function() {
      const response = await servicesModule04.getAllSettingGeneralList(
        "AUTHORIZATIONLEVEL"
      );
      this.authorizationList = response;
    },

    onModuleUpdated: async function(newVal, schema) {
      if (schema == "moduleSelection" && newVal) {
        this.model.submoduleSelection = "";

        console.log(newVal.MANAGE_MODULE_ID);
        const response = await servicesModule04.getSubmodule(
          newVal.MANAGE_MODULE_ID
        );
        this.submoduleListSelect = response;
      }

      if (schema == "submoduleSelection" && newVal) {
        this.getScreen();
      }
    },
    onConfigUpdated: async function(newVal, schema) {
      if (schema == "divisionSelection" && newVal) {
        this.model.departmentSelection = "";
        this.model.groupSelection = "";
        this.model.authorizationSelection = "";

        const response = await servicesModule04.getDepartmentByDivisionId(
          newVal.MANAGE_DIVISION_ID
        );
        this.departmentList = response;
        this.getDepartment();
      } else if (schema == "departmentSelection" && newVal) {
        this.model.groupSelection = "";
        this.model.authorizationSelection = "";

        const response = await servicesModule04.getGroupByDepartmentId(
          newVal.MANAGE_DEPARTMENT_ID
        );
        this.groupList = response;
        this.getGroup();
      } else if (schema == "groupSelection" && newVal) {
        this.model.authorizationSelection = "";

        const response = await servicesModule04.getDepartmentByDivisionId(
          newVal.MANAGE_DEPARTMENT_ID
        );
        // this.departmentList = response;
      } else if (schema == "authorizationSelection" && newVal) {
        this.authorizationLevel = newVal.SETTING_GENERAL_ID;
      }
    },
    handleClick(newTab) {
      this.currentTab = newTab;
    }, // end tab
    back() {
      this.$router.go(-1);
    }, // back button

    //--------------------module---------------------------/
    getAllModule: async function() {
      const response = await servicesModule04.getAllModule();
      this.moduleList = response;
      this.moduleListCount = this.moduleList.length;
    },
    async addScreen() {
      try {
        const data = new FormData();
        
        data.append("MANAGE_SUBMODULE_ID", this.model.submoduleSelection.MANAGE_SUBMODULE_ID);
        data.append("SCREEN_NAME", this.model.SCREEN_NAME);
        data.append("SCREEN_ROUTE", this.model.PAGE_ROUTE);
        data.append("SCREEN_PROCESS", this.model.PROCESS_FLOW);
        data.append("SCREEN_DESCRIPTION", this.model.SCREEN_DESCRIPTION);
        // console.log("data :" + data);
        // eslint-disable-next-line no-unused-vars
        const response = await servicesModule04.createScreen(data);
        console.log(response);

        this.getScreen();
      } catch (error) {
        console.log(error);
      }
    },
    async addModule() {
      try {
        const data = new FormData();
        data.append("MOD_CODE", this.model.MOD_CODE);
        data.append("MOD_NAME", this.model.MOD_NAME);
        data.append("MOD_SNAME", this.model.MOD_SNAME);
        data.append("MOD_INDEX", this.model.MOD_INDEX);
        data.append("MOD_ICON", this.selectedIcon1);
        // console.log("data :" + data);
        // eslint-disable-next-line no-unused-vars
        const response = await servicesModule04.createModule(data);
        console.log(response);

        this.getAllModule();
      } catch (error) {
        console.log(error);
      }
    },
    async addSubmodule() {
      try {
        const data = new FormData();
        data.append("SUBMOD_CODE", this.model.SUBMOD_CODE);
        data.append("SUBMOD_NAME", this.model.SUBMOD_NAME);
        data.append(
          "MANAGE_MODULE_ID",
          this.model.moduleSelection.MANAGE_MODULE_ID
        );
        // console.log("data :" + data);
        // eslint-disable-next-line no-unused-vars
        const response = await servicesModule04.createSubmodule(data);
        console.log(response);

        this.getAllSubmodule();
      } catch (error) {
        console.log(error);
      }
    },
    async updateDivisionAPI() {
      try {
        const data = new FormData();
        data.append("MANAGE_MODULE_ID", this.MANAGE_MODULE_ID);
        data.append("MOD_NAME", this.model.editDivisionName);

        // console.log("data :" + data);
        // eslint-disable-next-line no-unused-vars
        const response = await servicesModule0.updateDivision(data);
        this.getAllModule();
      } catch (error) {
        console.log(error);
      }
    },
    async addDepartment() {
      if (this.$refs.Tab2Form.validate()) {
        const data = new FormData();
        data.append(
          "MANAGE_MODULE_ID",
          this.model.divisionSelection.MANAGE_MODULE_ID
        );
        data.append("DPMT_NAME", this.model.departmentName);
        try {
          // eslint-disable-next-line no-unused-vars
          const response = await servicesModule0.createDepartment(data);
          this.getDepartment();
        } catch (error) {
          console.log(error);
        }
      }
    },
    async deleteDepartment(data) {
      // eslint-disable-next-line no-unused-vars
      const response = await servicesModule0.deleteDepartment(
        data.MANAGE_DEPARTMENT_ID
      );
      this.getDepartment();
    },
    async showAuthorizationLevelDetails(data) {
      this.$modals.editAuthorizationLevel.$show();
    },
    async showScreenDetails(data) {
      // eslint-disable-next-line no-unused-vars
      const response = await servicesModule0.getDepartmentById(
        data.MANAGE_DEPARTMENT_ID
      );
      this.$modals.simpleModalEditDepartment.$show();
      this.MANAGE_DEPARTMENT_ID = response.MANAGE_DEPARTMENT_ID;
      this.model.DIVISION = response;
      this.model.DPMT_NAME = response.DPMT_NAME;
    },
    async updateDepartmentAPI() {
      try {
        const data = new FormData();
        data.append("MANAGE_DEPARTMENT_ID", this.MANAGE_DEPARTMENT_ID);
        data.append(
          "MANAGE_MODULE_ID",
          this.model.moduleSelection.MANAGE_MODULE_ID
        );
        data.append("DPMT_NAME", this.model.editDepartmentName);

        // console.log("data :" + data);
        // eslint-disable-next-line no-unused-vars
        const response = await servicesModule0.updateDepartment(data);
        this.getDepartment();
      } catch (error) {
        console.log(error);
      }
    }
    //----------------------group-----------------/
  },

  computed: {
    //tab1
    moduleFields() {
      return [
        {
          name: "__slot:no",
          title: "No"
        },
        {
          name: "MOD_CODE",
          title: "Code"
        },
        {
          name: "MOD_NAME",
          title: "Module Name"
        },
        {
          name: "MOD_SNAME",
          title: "Short Name"
        },
        {
          name: "__slot:icons",
          title: "Icon",
          dataClass: "justify-content-center",
          width: "15%"
        },
        {
          name: "__slot:actions",
          title: "Action",
          dataClass: "justify-content-center",
          width: "15%"
        }
      ];
    },
    moduleFilteredData() {
      if (!this.term || this.term.length < 1) {
        return this.moduleList;
      }
    },
    submoduleFilteredData() {
      if (!this.term || this.term.length < 1) {
        return this.submoduleList;
      }
    },
    //tab2
    submoduleSchema() {
      return [
        {
          name: "__slot:no",
          title: "No"
        },
        {
          name: "MOD_NAME",
          title: "Module Name"
        },
        {
          name: "SUBMOD_CODE",
          title: "Sub Module Code"
        },
        {
          name: "SUBMOD_NAME",
          title: "Sub Module Name"
        },
        {
          name: "__slot:actions",
          title: "Action",
          dataClass: "justify-content-center",
          width: "15%"
        }
      ];
    },
    screenPageFilteredData() {
      if (!this.term || this.term.length < 1) {
        return this.screenPageList;
      }
    },
    //tab3
    screenPageFields() {
      return [
        {
          name: "__slot:no",
          title: "No"
        },
        {
          name: "MOD_NAME",
          title: "Module Name"
        },
        {
          name: "SUBMOD_NAME",
          title: "Submodule Name"
        },
        {
          name: "SCREEN_NAME",
          title: "Screen Name"
        },
        {
          name: "SCREEN_ROUTE",
          title: "Page Route"
        },
        {
          name: "SCREEN_PROCESS",
          title: "Process Flow"
        },
        {
          name: "SCREEN_DESCRIPTION",
          title: "Description"
        },
        {
          name: "__slot:actions",
          title: "Action",
          dataClass: "justify-content-center",
          width: "15%"
        }
      ];
    },
    groupFilteredData() {
      if (!this.term || this.term.length < 1) {
        return this.groupList;
      }
    }
  },

  data() {
    return {
      valueId: this.id,
      editSelectedIcon: "",
      moduleListCount: null,
      selectedIcon1: null,
      selectedIcon2: null,
      selectedIcon3: null,
      icons1: [],
      icons2: [],
      icons3: [],
      screenAccessListCount: null,
      screenPageListCount: null,
      checkboxArray: [],
      authorizationLevel: null,
      moduleListCurrentCount: null,
      header: "",
      field: [],
      count: 1,
      term: null,
      hasModule: false,
      perPage: "10",
      moduleList: [],
      screenList: [],
      screenPageList: [],
      submoduleList: [],
      submoduleListSelect: [],
      submoduleListCount: null,
      divisionList: [],
      authorizationList: [],
      staffList: [],
      departmentList: [],
      groupList: [],
      currentPage: 1,

      tabs: TABS,
      currentTab: "tab1",

      model: {
        MOD_CODE: "",
        MOD_NAME: "",
        MOD_SNAME: "",
        MOD_INDEX: 0,
        MOD_ICON: "",

        SUBMOD_NAME: "",
        SUBMOD_CODE: "",

        divisionName: "",
        editDivisionName: "",

        moduleSelection: "",
        submoduleSelection: "",
        departmentSelection: "",
        groupSelection: "",
        authorizationSelection: "",
        departmentName: "",
        editDepartmentName: "",

        MOD_NAME_FIRST: "",
        SUBMOD_NAME_FIRST: "",
        SCREEN_NAME: "",
        PAGE_ROUTE: "",
        PROCESS_FLOW: "",
        SCREEN_DESCRIPTION: "",

        DIVISION: "",
        DPMT_NAME: ""
      },
      //Module
      editDivisionSchema: {
        groups: [
          {
            styleClasses: "row",
            fields: [
              {
                type: "input",
                inputType: "Text",
                model: "editDivisionName",
                label: "Module Name",
                placeholder: "Enter division",
                required: true,
                styleClasses: "col-md-12"
              }
            ]
          }
        ]
      },
      //Module & submodule
      Tab1Schema: {
        groups: [
          {
            styleClasses: "row mt-2",
            fields: [
              {
                type: "input",
                inputType: "text",
                label: "CODE",
                model: "MOD_CODE",
                placeholder: "Enter code",
                required: true,
                validator: "string",
                styleClasses: "col-md-4"
              },
              {
                type: "input",
                inputType: "text",
                label: "MODULE NAME",
                model: "MOD_NAME",
                placeholder: "Enter module name",
                required: true,
                validator: "string",
                styleClasses: "col-md-4"
              },
              {
                type: "input",
                inputType: "text",
                label: "MODULE SHORT NAME",
                model: "MOD_SNAME",
                placeholder: "Enter module short name",
                required: true,
                validator: "string",
                styleClasses: "col-md-3"
              },
              {
                type: "input",
                inputType: "number",
                min: 0,
                label: "INDEX",
                model: "MOD_INDEX",
                required: true,
                styleClasses: "col-md-1"
              }
            ]
          }
        ]
      },
      Tab2Schema: {
        groups: [
          {
            styleClasses: "row mt-2",
            fields: [
              {
                type: "vueMultiSelect",
                model: "moduleSelection",
                label: "Module",
                placeholder: "Select module",
                selectOptions: {
                  multiple: false,
                  key: "MANAGE_MODULE_ID",
                  label: "MOD_NAME",
                  searchable: true
                },
                values: (model, schema) => {
                  return this.moduleList;
                },
                styleClasses: "col-md-5"
              },
              {
                type: "input",
                inputType: "text",
                label: "Sub Module Code",
                model: "SUBMOD_CODE",
                placeholder: "Enter code",
                required: true,
                validator: "string",
                styleClasses: "col-md-2"
              },
              {
                type: "input",
                inputType: "text",
                label: "Sub Module Name",
                model: "SUBMOD_NAME",
                placeholder: "Enter name",
                required: true,
                validator: "string",
                styleClasses: "col-md-5"
              }
            ]
          }
        ]
      },
      Tab3Schema: {
        groups: [
          {
            styleClasses: "row mt-2",
            fields: [
              {
                type: "vueMultiSelect",
                model: "moduleSelection",
                label: "Module",
                placeholder: "Select module",
                selectOptions: {
                  multiple: false,
                  key: "MANAGE_MODULE_ID",
                  label: "MOD_NAME",
                  searchable: true
                },
                values: (model, schema) => {
                  return this.moduleList;
                },
                styleClasses: "col-md-6"
              },
              {
                type: "vueMultiSelect",
                model: "submoduleSelection",
                label: "Sub submodule",
                placeholder: "Select Sub module",
                selectOptions: {
                  multiple: false,
                  key: "MANAGE_SUBMODULE_ID",
                  label: "SUBMOD_NAME",
                  searchable: true
                },
                values: (model, schema) => {
                  return this.submoduleListSelect;
                },
                styleClasses: "col-md-6"
              },
              {
                type: "input",
                inputType: "text",
                label: "Screen Name",
                model: "SCREEN_NAME",
                placeholder: "Enter screen name",
                required: true,
                validator: "string",
                styleClasses: "col-md-6"
              },
              {
                type: "vfg-page-route",
                model: "PAGE_ROUTE",
                placeholder: "Enter page route",
                styleClasses: "col-md-6"
              },
              // {
              //   type: "input",
              //   inputType: "text",
              //   label: "Page Route",
              //   model: "PAGE_ROUTE",
              //   placeholder: "Enter page route",
              //   required: true,
              //   validator: "string",
              //   styleClasses: "col-md-6"
              // },
              {
                type: "input",
                inputType: "text",
                label: "Process Flow",
                model: "PROCESS_FLOW",
                placeholder: "Enter process flow",
                required: true,
                validator: "string",
                styleClasses: "col-md-6"
              },
              {
                type: "input",
                inputType: "text",
                label: "Description",
                model: "SCREEN_DESCRIPTION",
                placeholder: "Enter description",
                required: false,
                validator: "string",
                styleClasses: "col-md-6"
              }
            ]
          }
        ]
      },
      Tab1ConfigSchema: {
        groups: [
          {
            styleClasses: "row mt-2",
            fields: [
              {
                type: "vueMultiSelect",
                model: "divisionSelection",
                label: "Division Name",
                required: true,
                placeholder: "Select Division",
                selectOptions: {
                  multiple: false,
                  key: "MANAGE_DIVISION_ID",
                  label: "DIV_NAME",
                  searchable: true
                },
                values: (model, schema) => {
                  return this.divisionList;
                },
                styleClasses: "col-md-6"
              },
              {
                type: "vueMultiSelect",
                model: "departmentSelection",
                label: "Department Name",
                disabled: (model, schema) => {
                  if (this.model.divisionSelection) {
                    return false;
                  } else {
                    return true;
                  }
                },
                required: true,
                placeholder: "Select Department",
                selectOptions: {
                  multiple: false,
                  key: "MANAGE_DEPARTMENT_ID",
                  label: "DPMT_NAME",
                  searchable: true
                },
                values: (model, schema) => {
                  return this.departmentList;
                },
                styleClasses: "col-md-6"
              }
            ]
          },
          {
            styleClasses: "row mt-2",
            fields: [
              {
                type: "vueMultiSelect",
                model: "groupSelection",
                label: "Group Name",
                required: true,
                disabled: (model, schema) => {
                  if (this.model.departmentSelection) {
                    return false;
                  } else {
                    return true;
                  }
                },
                placeholder: "Select Group",
                selectOptions: {
                  multiple: false,
                  key: "MANAGE_GROUP_ID",
                  label: "GROUP_NAME",
                  searchable: true
                },
                values: (model, schema) => {
                  return this.groupList;
                },
                styleClasses: "col-md-6"
              },
              {
                type: "vueMultiSelect",
                model: "authorizationSelection",
                label: "Authorization Level",
                required: true,
                placeholder: "Select Authorization Level",
                selectOptions: {
                  multiple: false,
                  key: "SETTING_GENERAL_ID",
                  label: "SET_PARAM",
                  searchable: true
                },
                disabled: (model, schema) => {
                  if (this.model.groupSelection) {
                    return false;
                  } else {
                    return true;
                  }
                },
                values: (model, schema) => {
                  return this.authorizationList;
                },
                styleClasses: "col-md-6"
              }
            ]
          },
          {
            styleClasses: "row mt-2",
            fields: [
              {
                type: "vueMultiSelect",
                model: "staffSelection",
                label: "Staff Name",
                placeholder: "Select Staff",
                selectOptions: {
                  multiple: false,
                  key: "MANAGE_STAFF_ID",
                  label: "STAFF_NAME",
                  searchable: true
                },
                values: (model, schema) => {
                  return this.staffList;
                },
                styleClasses: "col-md-12"
              }
            ]
          }
        ]
      },
      editDepartmentSchema: {
        groups: [
          {
            styleClasses: "row mt-2",
            fields: [
              {
                type: "vueMultiSelect",
                model: "DIVISION",
                label: "Module Name",
                placeholder: "Select Division",
                selectOptions: {
                  multiple: false,
                  key: "MANAGE_MODULE_ID",
                  label: "MOD_NAME",
                  searchable: true
                },
                values: (model, schema) => {
                  return this.moduleList;
                },
                styleClasses: "col-md-12",
                required: true,
                validator: "required"
              },
              {
                type: "input",
                inputType: "Text",
                model: "DPMT_NAME",
                label: "Department Name",
                placeholder: "Enter department",
                required: true,
                styleClasses: "col-md-12",
                validator: "required"
              }
            ]
          }
        ]
      },

      dpmtFilterSchema: {
        groups: [
          {
            styleClasses: "row",
            fields: [
              {
                type: "vueMultiSelect",
                model: "editDivisionSelection",
                label: "Module Name",
                placeholder: "Select Division",
                selectOptions: {
                  multiple: false,
                  key: "MANAGE_MODULE_ID",
                  label: "MOD_NAME",
                  searchable: true
                },
                values: (model, schema) => {
                  return this.divisionList;
                },
                styleClasses: "col-md-6",
                required: true,
                validator: "required"
              }
            ]
          }
        ]
      },
      //Group

      formOptions: {
        validateAfterChanged: true
      }
    };
  }
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
