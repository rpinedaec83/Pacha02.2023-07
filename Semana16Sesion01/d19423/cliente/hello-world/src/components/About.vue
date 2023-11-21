<template>
    <div class="about">
      <h1>Ruta protegida</h1>
    </div>
  </template>
  
  <script>
  import {mapState} from 'vuex'
  export default {
    created(){
      this.ruta()
    },
    computed: {
      ...mapState(['token'])
    },
    methods: {
      async ruta(){
        try {
          const res = await fetch('https://api-prueba-100.herokuapp.com/api/admin', {
            headers: {
              'Content-Type': 'application/json',
              'auth-token': this.token
            },
          })
          const resDB = await res.json()
          console.log(resDB)
        } catch (error) {
          console.log(error)
        }
      }
    }
  }
  </script>