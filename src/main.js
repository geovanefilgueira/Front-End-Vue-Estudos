//Inportação de Libs
import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

//Inportação de Componentes page
import Home from './components/page/home.vue'
import Details from './components/page/details.vue'

Vue.use(VueRouter)
const router = new VueRouter({
  mode: 'history',
  routes:[
    {path:'', component: Home },
    {path:'/details/:postsitenparam',component :Details}
  ]
})
Vue.config.productionTip = false
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
