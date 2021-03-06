import Vue from 'vue';
import App from '@/containers/App';
import router from '@/router';

import '@/bootstrap';

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App),
});
