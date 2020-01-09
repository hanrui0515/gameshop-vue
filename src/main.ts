import Vue from 'vue';

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-reboot.css';

import {FontAwesomeIcon as Fa} from '@fortawesome/vue-fontawesome';

const SocketIO = require('socket.io-client');
const VueSocketIO = require('vue-socket.io');

import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

Vue.component('Fa', Fa);
Vue.use(new VueSocketIO({
  debug: process.env.NODE_ENV !== 'production',
  connection: SocketIO('http://192.168.1.10:62180', {
    path: '/ws',
  }),
}));

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
