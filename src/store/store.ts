import Vue from 'vue';
import Vuex from 'vuex';
import {AxiosResponse} from 'axios';
import createLogger from 'vuex/dist/logger';
import Action from '@/store/Action';
import Mutation from '@/store/Mutation';
import {initialState} from '@/store/state';
import AxiosUtil, {LoginUserData, RegisterUserData, RetrieveGoodsParams} from '@/utils/AxiosUtil';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: initialState(),
  actions: {
    [Action.LOGIN_USER_REQUEST]({dispatch}, data: LoginUserData) {
      AxiosUtil.loginUser(data).then((response) => {
        dispatch(Action.LOGIN_USER_RESPONSE, response);
      }, (err) => {
        dispatch(Action.LOGIN_USER_ERROR, err);
      });
      dispatch(Action.LOGIN_USER_PENDING);
    },
    [Action.LOGIN_USER_PENDING]({dispatch, commit}, err) {
      // do something when request is pending
    },
    async [Action.LOGIN_USER_RESPONSE]({commit}, response: AxiosResponse) {
      localStorage.setItem('token', response.data.data.token);
      localStorage.setItem('token_expired_at', '' + (response.data.data.expiredAt * 1000));

      AxiosUtil.setAccessToken(response.data.data.token);

      const socket = this.$vm.$socket;
      socket.client.connect();
      socket.client.once('connect', () => {
        socket.client.emit('authorize', {token: response.data.data.token});
      });

      commit(Mutation.SET_USER_CREDENTIAL, response.data.data);

      const res1 = await AxiosUtil.authorizeUser({token: response.data.data.token});
      commit('MUT_SET_USER_INFO', res1.data.data.user);

      await this.$vm.$router.replace({path: '/'});
    },
    [Action.LOGIN_USER_ERROR]({dispatch, commit}, err) {
      // error handling...
      alert(err.message + '. details: ' + err.details);
    },
    [Action.LOGOUT_USER_REQUEST]({dispatch}) {
      AxiosUtil.logoutUser().then((response) => {
        dispatch(Action.LOGOUT_USER_RESPONSE, response);
      }, (err) => {
        dispatch(Action.LOGOUT_USER_ERROR, err);
      });
      dispatch(Action.LOGOUT_USER_PENDING);
    },
    [Action.LOGOUT_USER_PENDING]() {
      // do something when request is pending
    },
    [Action.LOGOUT_USER_RESPONSE]({commit}, response: AxiosResponse) {
      // commit(Mutation.SET_USER_CREDENTIAL, response.data.data);
    },
    [Action.LOGOUT_USER_ERROR]({dispatch, commit}, err) {
      // error handling...
    },
    [Action.REGISTER_USER_REQUEST]({dispatch}, data: RegisterUserData) {
      AxiosUtil.registerUser(data).then((response) => {
        dispatch(Action.REGISTER_USER_RESPONSE, response);
      }, (err) => {
        dispatch(Action.REGISTER_USER_ERROR, err);
      });
      dispatch(Action.REGISTER_USER_PENDING);
    },
    async [Action.REGISTER_USER_RESPONSE]({commit}, response: AxiosResponse) {
      commit(Mutation.SET_USER_CREDENTIAL, response.data.data);

      await this.$vm.$router.replace({path: '/user/login'});
    },
    [Action.REGISTER_USER_ERROR]({dispatch, commit}, err) {
      // Error handling...
      alert(err.message + '. details: ' + err.details);
    },
    [Action.RETRIEVE_GOODS_REQUEST]({dispatch}, params: RetrieveGoodsParams) {
      AxiosUtil.retrieveGoods(params).then((response) => {
        dispatch(Action.RETRIEVE_GOODS_RESPONSE, response);
      }, (err) => {
        dispatch(Action.RETRIEVE_GOODS_ERROR, err);
      });
      dispatch(Action.RETRIEVE_GOODS_PENDING);
    },
    [Action.RETRIEVE_GOODS_RESPONSE]({commit}, response: AxiosResponse) {

    },
    [Action.RETRIEVE_GOODS_ERROR]() {
      // Error handling...
    },
    ['IO_AUTHORIZE']({state}) {
      this.$vm.$socket.client.emit('authorize', state.user.credential.token);
      console.log(arguments);
    },
    ['IO_AUTHORIZATION_ERROR']({}, args) {
      console.log(args);
    },
  },
  mutations: {
    [Mutation.SET_USER_INFO](state, data) {
      state.user.info = data;
    },
    [Mutation.SET_USER_CREDENTIAL](state, {token, expiredAt}) {
      state.user.credential = {token, expiredAt: new Date(expiredAt * 1000)};
    },
    [Mutation.APPEND_GOODS](state, {goods}) {
      state.shop.goods = [...state.shop.goods, goods];
    },
    [Mutation.UPDATE_GOODS](state, {id, goods}) {
      const transition = state.shop.goods.filter((goods: any) => goods.id === id)[0] || {};
      const newGoods = {...transition, ...goods, id};

      state.shop.goods = state.shop.goods.map((goods: any) => goods.id !== id ? goods : newGoods);
    },
    [Mutation.REMOVE_GOODS](state, {id}) {
      state.shop.goods = state.shop.goods.filter((goods: any) => goods.id !== id);
    },
    [Mutation.APPEND_ORDER](state, {order}) {
      state.shop.orders = [...state.shop.orders, order];
    },
    [Mutation.UPDATE_ORDER](state, {id, order}) {
      const transition = state.shop.orders.filter((order: any) => order.id === id)[0] || {};
      const newGoods = {...transition, ...order, id};

      state.shop.orders = state.shop.orders.map((order: any) => order.id !== id ? order : newGoods);
    },
    [Mutation.REMOVE_ORDER](state, {id}) {
      state.shop.orders = state.shop.orders.filter((order: any) => order.id !== id);
    },
    ['IO_PUSH_MESSAGE'](state, args) {
      state.mailbox.messages.push(args.message);
    },
  },
  modules: {},
  plugins: [createLogger()],
  strict: true,
});

export default store;
