// Polyfills
import 'core-js/stable'
import 'regenerator-runtime/runtime'
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import { ColorThemePlugin } from '../services/vuestic-ui'
import store from '../store/index'
import router from '../router/index'

import { VuesticPlugin } from '../services/vuestic-ui/components'
import '../i18n/index'
import YmapPlugin from 'vue-yandex-maps'
import VueClipboard from 'vue-clipboard2'
import { VudalPlugin } from 'vudal'
import $ from 'jquery'

import '../metrics'
import '../registerServiceWorker'

import { consoleBuildInfo } from 'vue-cli-plugin-build-info/plugin'

import XLSX from 'xlsx'
import VueFormGenerator from 'vue-form-generator'
import 'vue-form-generator/dist/vfg.css'
import Tabs from 'vue-tabs-with-active-line'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import VueFileAgent from 'vue-file-agent'
import Count from '../components/count/count'
import koolreport from '../components/koolreport'
import topPDF from '../components/pdf-viewer/topPDF'
import bottomPDF from '../components/pdf-viewer/bottomPDF'
import excelUpload from '../components/excel-upload'
import Pdf from "../components/pdf-viewer/pdf"
import ExcelToCsv from "../components/excel/index"

import Vuetable from 'vuetable-2/src/components/Vuetable.vue'
import VuetablePagination from 'vuetable-2/src/components/VuetablePagination.vue'
import VuetablePaginationDropdown from 'vuetable-2/src/components/VuetablePaginationDropdown.vue'
import VuetablePaginationInfo from 'vuetable-2/src/components/VuetablePaginationInfo.vue'
import VuetablePaginationMixin from 'vuetable-2/src/components/VuetablePaginationMixin.vue'
import VuetablePaginationInfoMixin from 'vuetable-2/src/components/VuetablePaginationInfoMixin.vue'

import vtable from '../components/vue-table'

import Page from 'v-page'

import sidebar from '../components/sidebar'
import card from '../components/card/card'
import chart from '../components/chart/chart'
import barChart from '../components/chart/barChart'
import VueFileAgentStyles from 'vue-file-agent/dist/vue-file-agent.css'
import Multiselect from 'vue-multiselect'
import 'vue-multiselect/dist/vue-multiselect.min.css'
import listIcons from '../components/icon-list/listIcons'

import pdf from 'vue-pdf'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import { VueEditor, Quill } from 'vue2-editor'
import Datepicker from 'vuejs-datepicker'
import { ToggleButton } from 'vue-js-toggle-button'
import VfgPageRoute from '../pages/component/VfgPageRoute'
import VfgSearch from '../pages/component/VfgSearch'
import VfgTheMask from '../pages/component/VfgTheMask.vue'
import VfgFunctionalDate from '../pages/component/VfgFunctionalCalendar.vue'

import VueTheMask from 'vue-the-mask'
import VfgCustomInput from '../pages/component/VfgCustomInput.vue'

import toast from '../components/alert/toast'

import PerfectScrollbar from 'vue2-perfect-scrollbar'
import 'vue2-perfect-scrollbar/dist/vue2-perfect-scrollbar.css'

import VueApexCharts from 'vue-apexcharts'
import VfgCustomTacInput from '../pages/component/VfgCustomTacInput.vue'
import VfgCustomUpload from '../pages/component/VfgCustomUpload.vue'
import VfgCustomFile from '../pages/component/VfgCustomFile.vue'
import VfgCustomCheckbox from '../pages/component/VfgCustomCheckbox.vue'

import axios from 'axios'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import VueToast from 'vue-toast-notification'
// Import one of the available themes
// import 'vue-toast-notification/dist/theme-default.css';
import 'vue-toast-notification/dist/theme-sugar.css'
import VueMyToasts from 'vue-my-toasts'
import BootstrapComponent from 'vue-my-toasts/src/components/toasts/BootstrapComponent'
// import TailwindComponent from 'vue-my-toasts/src/components/toasts/TailwindComponent'
Vue.use(VueMyToasts, {
  component: BootstrapComponent,
  options: {
    width: '100px',
    position: 'top-right',
    padding: '1rem',
  },
})
Vue.use(Page)
Vue.use(VueToast)
Vue.component('field-vfg-custom-checkbox', VfgCustomCheckbox)
Vue.component('field-vfg-custom-file', VfgCustomFile)
Vue.component('field-vfg-custom-upload', VfgCustomUpload)
Vue.component('field-vfg-custom-input', VfgCustomInput)
Vue.component('field-vfg-custom-Tacinput', VfgCustomTacInput)
Vue.use(VueTheMask)
Vue.use(VueApexCharts)
Vue.component('apexchart', VueApexCharts)
Vue.use(PerfectScrollbar)
Vue.component('field-vfg-the-mask', VfgTheMask)
Vue.component('field-vfg-page-route', VfgPageRoute)
Vue.component('field-vfg-search', VfgSearch)
Vue.component('Count', Count)
Vue.component('koolreport', koolreport)
Vue.component('sidebar', sidebar)
Vue.component('card', card)
Vue.component('chart', chart)
Vue.component('barChart', barChart)
Vue.component('Pdf', Pdf)
Vue.component('topPDF', topPDF)
Vue.component('bottomPDF', bottomPDF)
Vue.component('excelUpload', excelUpload)

Vue.component('Vuetable', Vuetable)
Vue.component('VuetablePagination', VuetablePagination)
Vue.component('VuetablePaginationDropdown', VuetablePaginationDropdown)
Vue.component('VuetablePaginationInfo', VuetablePaginationInfo)
Vue.component('VuetablePaginationMixin', VuetablePaginationMixin)
Vue.component('VuetablePaginationInfoMixin', VuetablePaginationInfoMixin)

Vue.component('vtable', vtable)
Vue.component('listIcons', listIcons)
Vue.component('field-vfg-functional-date', VfgFunctionalDate)

consoleBuildInfo()
Vue.component('ToggleButton', ToggleButton)
Vue.component('pdf', pdf)
Vue.component('datepicker', Datepicker)
Vue.component('vue-editor', VueEditor)
Vue.use(VueEditor, Quill)
Vue.use(Vuetable)
Vue.use(Multiselect)
Vue.component('multiselect', Multiselect)
Vue.component('Vuetable', Vuetable)
Vue.component('VueFileAgent', VueFileAgent)
Vue.use(VueFileAgent)
Vue.use(VueFileAgentStyles)
Vue.use(VudalPlugin)
Vue.component('vudal', VudalPlugin)
Vue.use(VuesticPlugin)
Vue.use(YmapPlugin)
Vue.use(VueClipboard)
Vue.use($)

Vue.component(Tabs)

Vue.use(XLSX)

Vue.use(VueFormGenerator)
// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

Vue.use(ColorThemePlugin, {
  // override colors here.
})

Vue.config.errorHandler = err => {
  console.log('Exception ERROR: ', err)
}

router.beforeEach((to, from, next) => {
  store.commit('setLoading', true)
  next()
})

router.afterEach((to, from) => {
  store.commit('setLoading', false)
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  toast,
  render: h => h(App),
})
