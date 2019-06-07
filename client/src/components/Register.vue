<template>
  <v-container grid-list-md text-xs-center>
      <v-layout row wrap>
        <v-flex xs6 offset-xs3>
        <div id="vue-register">
            <h1>{{title}}</h1>
            <v-text-field type="email" name="email" v-model="email" placeholder="Email Address" required /></v-text-field><br/>
            <v-text-field type="password" name="password" v-model="password" placeholder="Password" required/></v-text-field><br/>
            <div class="error" v-if="message">{{message}}</div>
            <v-btn dark class="cyan" v-on:click="register" depressed >Register</v-btn>
        </div>
        </v-flex>      
    </v-layout>
 </v-container>
</template>
<script>
import AuthenticationServer from '@/services/AuthenticationServer';

export default {
  name: "RegisterVue",
  props: {
    title: String,
  },
  data() {
    return {
      email:'',
      password:'',
      message:''
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
<style scoped>
.error{
  color: red;
}
</style>
