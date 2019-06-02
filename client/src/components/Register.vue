<template>
    <div id="vue-register">
        <h1>{{title}}</h1>
        <input type="email" name="email" v-model="email" placeholder="Email Address" required /><br/>
        <input type="password" name="password" v-model="password" placeholder="Password" required/><br/>
        <button v-on:click="register">Register</button>
    </div>
</template>
<script>
import AuthenticationServer from '@/services/AuthenticationServer';

export default {
  name: "RegisterVue",
  props: {
    title: String,
  },
  data: function () {
    return {
      email:'',
      password:''
    }
    
  },
  methods:{
   register: function(){
    // alert(this.email)
    response = AuthenticationServer.register({
        email:this.email,
        password:this.password
      }).then(function (response) {

                    console.log(response.data);

                })
      
    }
  }
};
</script>