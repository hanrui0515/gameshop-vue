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
  state: initialState,
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

      this.$vm.$router.replace({path: '/'});
    },
    [Action.LOGIN_USER_ERROR]({dispatch, commit}, err) {
      // error handling...
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
      commit(Mutation.SET_USER_CREDENTIAL, response.data.data);
    },
    [Action.REGISTER_USER_ERROR]({dispatch, commit}, err) {
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
    [Action.REGISTER_USER_RESPONSE]({commit}, response: AxiosResponse) {
      commit(Mutation.SET_USER_CREDENTIAL, response.data.data);
    },
    [Action.REGISTER_USER_ERROR]({dispatch, commit}, err) {
      // Error handling...
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
    ['IO_AUTHORIZE_TIMEOUT']({}, args) {
      console.log(args);
    },
  },
  mutations: {
    [Mutation.SET_USER_CREDENTIAL](state, data) {
      // @ts-ignore
      state.user.credential = {token: data.token, expiredAt: new Date(data.expiredAt * 1000)};
    },
    ['MUT_SET_USER_INFO'](state, data) {
      state.user.info = data;
    },
    ['IO_PUSH_MESSAGE'](state, args) {
      state.mailbox.messages.push(args.message);
    },
  },
  modules: {},
  plugins: [createLogger()],
  strict: true,
});

store.subscribeAction((action, state) => {
  console.log('%cAction', 'color: #ff0; background-color: #666; padding: 3px 6px; border-radius: 2px;', action.type);
  console.log('%cPayload', 'color: #0ff; background-color: #666; padding: 3px 6px; border-radius: 2px;', action.payload);
});

export default store;
