import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import { Dialog, Button, Form, FormItem, Input, Card, Tabs, TabPane, Message } from 'element-ui'
Vue.use(Dialog)
Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Card)
Vue.use(Tabs)
Vue.use(TabPane)
Vue.prototype.$message = Message

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
