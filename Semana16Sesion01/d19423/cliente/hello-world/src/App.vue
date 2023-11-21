<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
    <button @click="cerrarSesion">Cerrar Sesion</button>
  </div>
  <router-view/>
</template>

<script>
import {mapActions} from 'vuex'
export default {
  methods: {
    ...mapActions(['obtenerToken', 'cerrarSesion'])
  },
  created(){
    this.obtenerToken()
  }
}
</script>