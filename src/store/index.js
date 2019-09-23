import Vue from 'vue'
import Vuex from 'vuex'
import nowCity from './modules/nowCity'
import address from './modules/address'
import loading from './modules/loading'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        nowCity, address, loading
    }
})
