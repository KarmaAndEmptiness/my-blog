import Vuex from 'vuex'
import Vue from 'vue'
import article from './modules/article'
import tag from './modules/tag'
import archive from './modules/archive'
import common from './modules/common'
Vue.use(Vuex);
export default new Vuex.Store({
    modules: {
        article,
        tag,
        archive,
        common
    }
})