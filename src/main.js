import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import DemoTwo from "./components/DemoTwo.vue"
import DemoOne from "./components/DemoOne.vue"


console.log(999, VueRouter.prototype);

Vue.config.productionTip = false

Vue.use(VueRouter)

Vue.directive('allow', {
  inserted: (el, binding, vnode) => {
    let permissionList = vnode.context.$route.meta.permission;
    if (permissionList[0] === 0) {
      el.parentNode.removeChild(el);
    }
  }
})

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    { 
      path: '/demoTwo', 
      component: DemoTwo, 
      meta: { 
        permission: [],
      },
    },
  ]
})

const ansyRouter = [
  {
    path: "/demoOne",
    meta: {
      permission: [1],
    },
    component: DemoOne,
    children: [],
  }
]

router.addRoute(ansyRouter[0]);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
