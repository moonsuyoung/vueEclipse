import Vue from 'vue'
import App from './App'
import router from './router';
import axios from 'axios';
import moment from 'moment';
import swal from 'sweetalert';
import store from './store';
import VueCookie from 'vue-cookie';
//import * as VueGoogleMaps from 'vue2-google-maps';

//import fam from '../node_modules/fontawesome-markers/index';
import cfg from '../static/cfg';


moment.locale('ko');

if(process.env.NODE_ENV === 'development') cfg.path.api = 'http://localhost:3000/api/';

const token = VueCookie.get("token");
if(token) axios.defaults.headers.common.Authorization = token;

axios.interceptors.response.use((res)=> {
  if(res.data.token) {
    VueCookie.set('token',res.data.token,{expires:'2m'});
    axios.defaults.headers.common.Authorization = VueCookie.get('token');
  }

  return Promise.resolve(res);
},(err)=>{
  if(err.response.status === 401) {
    console.log(err);
  }
  return Promise.reject(err);
})

Vue.prototype.$axios = axios;
Vue.prototype.$cfg = cfg;
Vue.prototype.$moment = moment;
Vue.prototype.$swal = swal;
//Vue.prototype.$fam = fam;

Vue.config.productionTip = true;



/* eslint-disable no-new */
/* new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components:{App},
}); */

new Vue({
  el:"#app"
  , render: h => h(App)
  , router
  , store
}).$mount('#app')

