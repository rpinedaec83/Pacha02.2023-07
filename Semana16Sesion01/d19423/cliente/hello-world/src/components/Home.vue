<template>
    <div class="home">
      <img alt="Vue logo" src="../assets/logo.png">
      <form @submit.prevent="login(usuario)">
        <input type="text" placeholder="Ingrese email" v-model="usuario.email">
        <input type="password" placeholder="Ingrese contraseña" v-model="usuario.password">
        <button type="submit">Acceder</button>
      </form>
    </div>
  </template>
  
  <script>
  import {mapActions} from 'vuex'
  export default {
    data() {
      return {
        usuario: {
          email: 'prueba3@prueba.com',
          password: '123123'
        }
      }
    },
    methods: {
      ...mapActions(['login'])
    }
  }
  </script>