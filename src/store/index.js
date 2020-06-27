import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import app from './modules/app'
import settings from './modules/settings'
import user from './modules/user'
import goods from './modules/goods'
import userLevel from './modules/userLevel'
import unionLevel from '@/store/modules/unionLevel'
import order from '@/store/modules/order'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    app,
    settings,
    user,
    goods,
    userLevel,
    unionLevel,
    order
  },
  getters
})

export default store
