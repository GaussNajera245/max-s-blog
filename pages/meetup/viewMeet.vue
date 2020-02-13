
<template>
  <v-layout row wrap>
    <v-flex xs12>
      <v-card class="info">
        <v-container fluid>

          <v-layout row  v-for=" m in meetupsCards "  :key="m.id" class="mb-4" dark >
            <v-flex xs5 sm4 md3>
              <v-img :src="m.imageUrl"></v-img>
            </v-flex>

            <v-flex xs7 xm8 md9>
              <v-card-title primary-title>
                <div>
                  <h5 class="white--text mb-0">{{m.title}}</h5>
                  <div>{{m.date}}</div>
                </div>
              </v-card-title>

              <v-card-actions>
                <v-btn text :to="'/meetup/' + m.id" >
                  <v-icon left>arrow_forward</v-icon>ViewMeetup
                </v-btn>
              </v-card-actions>
            </v-flex>
              <br>
          </v-layout>


        </v-container>
      </v-card>
    </v-flex>

  </v-layout>
</template>


<script>
export default {
  computed:{
    meetupsCards (){
      return this.$store.state.loadedMeetup
    }
  }
}
</script>