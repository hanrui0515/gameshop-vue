import Vuex, {Store} from 'vuex';
import Vue from 'vue';

/* Bootstrap */
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-reboot.css';

/* FontAwesome */
import {FontAwesomeIcon as Fa} from '@fortawesome/vue-fontawesome';

/* Socket.io */
import SocketIO from 'socket.io-client';
import VueSocketIO from 'vue-socket.io-extended';

declare module 'vuex' {
  interface Store<S> {
    $vm: Vue;
  }
}

import App from './App.vue';
import router from './router';
import store from './store/store';
import VueSocketIOExt from 'vue-socket.io-extended';

Vue.config.productionTip = false;

Vue.component('Fa', Fa);

const io = SocketIO('http://192.168.1.10:62180', {
  path: '/ws',
  autoConnect: false,
  reconnectionDelay: 3000,
  randomizationFactor: 0,
});

Vue.use(VueSocketIOExt, io, {
  store, actionPrefix: 'IO_', mutationPrefix: 'IO_',
  eventToActionTransformer: (event: string) => event.replace(/([A-Z_][^A-Z_]+)/, '_$1').toUpperCase(),
  eventToMutationTransformer: (event: string) => event.replace(/([A-Z_][^A-Z_]+)/, '_$1').toUpperCase(),
});

const app = new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');

store.$vm = app;
