import Vue from 'vue';
import Vuex from 'vuex';
import Action from '@/store/Action';
import Mutation from '@/store/Mutation';
import {UserLoginData} from '@/utils/AxiosUtil';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {},
    mailbox: {},
    shop: {
      products: [],
    },
  },
  actions: {
    [Action.LOGIN_USER_REQUEST]({dispatch}, data: UserLoginData) {

    }
  },
  mutations: {},
  modules: {},
});
