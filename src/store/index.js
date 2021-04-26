import Vue from 'vue'
import Vuex from 'vuex'
import VuexI18n from 'vuex-i18n' // load vuex i18n module
import app from './modules/app'

import * as getters from './getters'

Vue.use(Vuex)

const store = new Vuex.Store({
  strict: true, // process.env.NODE_ENV !== 'production',
  getters,
  modules: {
    app,
  },
  // state: {},
  // mutations: {},
  state: {
    userDetail: {},
    colorTextController: '#FFFFFF',
    colorActiveController: '#4F5E7F',
    colorPassiveController: '#8497B0',
  },
  mutations: {
    change (state, userDetail) {
      state.userDetail = userDetail
    },
    colorText (state, colorTextController) {
      state.colorTextController = colorTextController
    },
    colorPassive (state, colorPassiveController) {
      state.colorPassiveController = colorPassiveController
    },
    colorActive (state, colorActiveController) {
      state.colorActiveController = colorActiveController
    },
  },
  getters: {
    userDetail: state => state.userDetail,
    palette: state => state.colorController,
    paletteActive: state => state.colorActiveController,
    palettePassive: state => state.colorPassiveController,
    paletteText: state => state.colorTextController,
  },
})

Vue.use(VuexI18n.plugin, store)

export default store
