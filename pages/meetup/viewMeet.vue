
<template>
  <v-layout row wrap>
    <v-flex xs12>
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
            <v-flex xs12 sm12 md6 lg6 :key="m.id"  v-if= "i % 2 !== 0"> 
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
      if(this.once === 0){
        this.once = 1;
        this.$store.dispatch('fetchAllpost');
      }
      console.log(this.$store.state.loadedMeetup)
      return this.$store.state.loadedMeetup
    }
  },
  filters: {
    slice: function (value) {
      return value.slice(0,20)
    }
  },
  middleware: 'isAuth'
}
</script>