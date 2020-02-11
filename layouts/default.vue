<template>
  <v-app >
    <link
      href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900|Material+Icons"
      rel="stylesheet"
    >
    <v-navigation-drawer temporary absolute v-model="drawer" > 
      <v-list>
        <v-list-item>
        <img  src="/meetup1.png"  style="height: 60px;" >
        </v-list-item>

        <v-list-item v-for="item in menuItems" :key="item.title"  :to = "item.url" >
          <v-icon left >{{item.icon}}</v-icon>
          <v-list-item-content>{{item.title}}</v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    
    <v-app-bar app height="88" >
      <v-icon left @click="drawer=!drawer" class="hidden-md-and-up" > mdi-menu </v-icon> 
        <img  src="/meetup1.png"  style="height: 80px;" >

      
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
    </v-app-bar>
   
    <v-content>
      <nuxt />
    </v-content>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      drawer: false,
      menuItems:[
        {icon: 'supervisor_account', title: 'View Meetups', url: "/meetup/viewMeet" },
        {icon: 'room', title: 'Organize Meetups', url: "/meetup/createMeetup"},
        {icon: 'person', title: 'Profile', url: "/user/profile"},
        {icon: 'face', title: 'Sign Up', url: "/user/signup"},
        {icon: 'lock_open', title: 'Sign In', url: "/user/signign"},
      ]
    }
  }
}
</script>
