import Vue from 'vue'
import VueRouter from "vue-router"
import About from "@/views/About.vue"
// import Top from "@/views/Top.vue"
import Show from "@/views/Show.vue"
import Home from "@/views/Home.vue"


Vue.use(VueRouter)

const routes = [
  {path:'/', component: Home},
  {path:'/about', component: About},
  {path:'/show/:id', component: Show},
]

const router = new VueRouter({
  mode: 'history',
  routes: routes
})

export default router