
<template>
  <v-layout row wrap>
    <v-flex xs12 sm12 md12>
      <v-layout >
        <v-spacer></v-spacer>
        <v-flex xs1 sm1 md1>
          <br>
          <h1>Profile
          </h1>
        </v-flex>
        <v-spacer></v-spacer>
      </v-layout>
    </v-flex>
    <v-flex xs10 offset-xs1>
          <hr>
    </v-flex>

    <v-flex xs12 sm12 md12>
      <v-container>
        <v-layout>
          <v-spacer></v-spacer>

          <v-flex xs4 sm3>
            <h3> Name: {{name}}           </h3>
          </v-flex>
          <v-spacer></v-spacer>
          <v-flex xs4 sm3>
            <h3> Mail: {{mail}}           </h3>
          </v-flex>
          <v-spacer></v-spacer>

        </v-layout>
      </v-container>
    </v-flex>




    <v-flex xs12>
      <h2>&nbsp;&nbsp;Post: </h2>
      <v-card class="info">
        <v-container fluid grid-list-md>
          <v-layout row wrap  class="mb-4"  dark>
           <template  v-for = "(m,i) in meetupsCards"   >
            <v-flex xs12 sm12 md6 lg6  :key="m.id" v-if= "i % 2 == 0" >
              <v-img :src="m.imageUrl">
              <v-card-title primary-title>
                <div>
                  <h5 class="white--text mb-0">{{m.title}}</h5>
                  <div style="color:#fffafa">{{m.description | slice}}...</div>
                  <h6 class="white--text mb-0">Posted by: {{m.auth}}</h6>
                </div>
              </v-card-title>

              <v-card-actions>
                <v-btn text :to="'/meetup/' + m.id" >
                  <v-icon left>arrow_forward</v-icon>Read full post:
                </v-btn>
              </v-card-actions>
              </v-img>
            </v-flex>
           </template>

           <template  v-for = "(m,i) in meetupsCards"   >
            <v-flex xs12 sm12 md6 lg6 :key="i"  v-if= "i % 2 !== 0"> 
              <v-img :src="m.imageUrl">
              <v-card-title primary-title>
                <div>
                  <h5 class="white--text mb-0">{{m.title}}</h5>
                  <div style="color:#fffafa">{{m.description | slice}}...</div>
                  <h6 class="white--text mb-0">Posted by: {{m.auth}}</h6>
                </div>
              </v-card-title>

              <v-card-actions>
                <v-btn text :to="'/meetup/' + m.id" >
                  <v-icon left>arrow_forward</v-icon>Read full post:
                </v-btn>
              </v-card-actions>
              </v-img>
            </v-flex>
           </template>

          </v-layout>
        </v-container>
      </v-card>
    </v-flex>

  </v-layout>
</template>


<script>


export default {
  data(){
    return{
      once:0
    }
  },
  computed:{
    meetupsCards (){
      return this.$store.getters.getAllmyMeets
    },
    mail(){
      return this.$store.state.mail
    },
    name(){
      return this.$store.state.users.name
    }
  },
  filters: {
    slice: value =>{
      return value.slice(0,20)
    }
  },
  middleware: 'isAuth'
}
</script>