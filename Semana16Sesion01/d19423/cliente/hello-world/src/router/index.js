import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import About from '../components/About.vue'


import store from 'vuex'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About,
    meta: {requireAuth: true}
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  const rutaProtegida = to.matched.some(record => record.meta.requireAuth);

    if(rutaProtegida && store.state.token === null){
        // ruta protegida es true
        // token es nulo true, por ende redirigimos al inicio
        next({name: 'Home'})
    }else{
        // En caso contrario sigue...
        next()
    }

})

export default router