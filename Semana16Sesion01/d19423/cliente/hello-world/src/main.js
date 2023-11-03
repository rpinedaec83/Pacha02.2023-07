
import App from './App.vue'
import router from './router/index'
import store from './store/index'


const app = new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>'
  })
