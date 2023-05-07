import Vue from 'vue'
import App from './App.vue'

// elementui组件库
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI);

// 路由
import router from '@/router';

// axios
import axios from 'axios';
// Vue.use(axios)
Vue.prototype.axios = axios;

// 社交分享
import SocialShare from 'vue-social-share'
Vue.use(SocialShare)
import 'vue-social-share/dist/client.css'

// JwChat 一个IM（即时通讯）组件，需要使用elementui
import JwChat from 'jwchat';
Vue.use(JwChat)

// qs库
import Qs from  'qs'
Vue.use(Qs)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
