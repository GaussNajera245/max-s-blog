<template>
  <v-app >
    <link
      href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900|Material+Icons"
      rel="stylesheet"
    >
    <v-navigation-drawer temporary absolute v-model="drawer"  style="position:fixed; top:0; left:0; overflow-y:scroll;" > 
      <v-list>
        <v-list-item>
        <img  src="/meetup1.png"  style="height: 60px;" >
        </v-list-item>

        <v-list-item v-for="item in menuItems" :key="item.title"  :to = "item.url" >
          <v-icon left >{{item.icon}}</v-icon>
          <v-list-item-content>{{item.title}}</v-list-item-content>
        </v-list-item>

        <v-list-item v-if= "this.isUserAuth" @click= "logOut" >
            <v-icon left >home</v-icon>
            <v-list-item-content>Log Out</v-list-item-content>
        </v-list-item>

      </v-list>
    </v-navigation-drawer>
    
    <v-app-bar app height="88" dark>
      <v-icon left @click="drawer=!drawer" class="hidden-md-and-up" > mdi-menu </v-icon> 
      
      <nuxt-link to="/"> 
        <img  src="/meetup1.png"    style="height: 80px;cursor:pointer" >
      </nuxt-link>
      <h2>&nbsp;Meetup's</h2>
      
      <v-spacer></v-spacer>
      <template  v-for="(item,i) in menuItems">
       <v-btn  
          text  
          :key="i"    
          class="hidden-xs-only  hidden-sm-only " 
          :to = "item.url"
          > 
        <v-icon left>{{item.icon}}</v-icon> 
        {{item.title}}
      </v-btn>
      </template> 

      <template  v-if="this.isUserAuth">
      <v-btn  
          text   
          class="hidden-xs-only  hidden-sm-only " 
          @click="logOut"
          > 
        <v-icon left>home</v-icon> 
        Log Out
      </v-btn>    
      </template>
    </v-app-bar>
   
    <v-content style="background-color: #981914;">
      <div class="gn-content" >
        <nuxt /> 
      </div>
    </v-content>

    <v-footer dark>
      <span>&copy; 2019 Web Dev</span>
    </v-footer>

  </v-app>
</template>

<script>
export default {
  data () {
    return {
      drawer: false,
    }
  },

  computed:{
    menuItems(){
      let menuItems = [];

      if(this.isUserAuth){
        menuItems = [
          {icon: 'supervisor_account', title: 'View All Posts', url: "/meetup/viewMeet" },
          {icon: 'room', title: 'Create Post', url: "/meetup/createMeetup"},
          {icon: 'person', title: 'Profile', url: "/user/profile"}
        ]
      }
      else{
        menuItems = [
        {icon: 'face', title: 'Sign Up', url: "/user/signup"},
        {icon: 'lock_open', title: 'Sign In', url: "/user/signin"},
      ]
      }
      return menuItems
    },
    
    isUserAuth(){
      let auth = this.$store.getters.getUser.id
      let condition = (auth !== undefined && auth !== null)
      return condition
    }
  },

  methods:{
    logOut(){
      this.$store.dispatch('logOut');
    }
  }
}
</script>

<style scoped>
  .gn-content{
    background-color: snow;
    /* min-width: 400px; */
    /* height: 100%; */
    margin-left: 100px;
    margin-right: 100px;
    padding-left: 15px;
    padding-right: 15px;
  }
</style>
