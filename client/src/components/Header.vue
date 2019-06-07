<template>
<v-container>
    <v-app id="inspire">
        <v-toolbar fixed dark color="primary">
            <v-toolbar-side-icon></v-toolbar-side-icon>

            <v-toolbar-title class="white--text">{{title}}</v-toolbar-title>

            <v-spacer>
                <div id="nav">
                <v-toolbar-items>
                        <router-link to="/"><v-btn flat>Home</v-btn></router-link>
                        <router-link to="/about"><v-btn flat>About</v-btn></router-link>
                        <router-link to="/register"><v-btn flat>Register</v-btn></router-link>
                </v-toolbar-items>
                </div>   
            </v-spacer>

            <v-btn icon>
            <v-icon>search</v-icon>
            </v-btn>

            <v-btn icon>
            <v-icon>apps</v-icon>
            </v-btn>

            <v-btn icon>
            <v-icon>refresh</v-icon>
            </v-btn>

            <v-btn icon>
            <v-icon>more_vert</v-icon>
            </v-btn>
        </v-toolbar>
        
            <v-layout align-content-center justify-center row />
                <v-flex xs12>
                    <v-card>
                    <v-card-text class="px-0"><router-view /></v-card-text>
                    </v-card>
                </v-flex>
            </v-layout>
        
    </v-app>
    </v-container>
    
</template>

<script>
export default {
    props:{
        title:String
    }
  
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
