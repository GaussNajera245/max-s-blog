<template>
    <v-container row wrap>
        <v-flex xs12>
            <v-card>
                <v-card-title>
                    <h5 class="primary--text"> {{meet.title}} </h5>
                </v-card-title>
                <v-img 
                :src ="meet.imageUrl"
                height="400px"
                
                >
                </v-img>
                <v-card-text>
                    <div class="info--text" > Posted on: {{meet.date | day}} at {{meet.date | hour}} </div>
                    <div>{{meet.description}} 
                        <span class="info--text" > 
                            <strong> 
                                By: {{meet.auth}} 
                            </strong>
                        </span> 
                    </div>
                    
                    
                </v-card-text>

                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn>Go Back:</v-btn>
                </v-card-actions>


            </v-card>
        </v-flex>
    </v-container> 
</template>

<script>
export default {
    computed:{
        meet () {
            return this.$store.getters.loadedMeet(this.$route.params.id)
        }
    },
    filters: {
        day: function (value) {
        return value.slice(0,10)
        },
        hour: function (value) {
          let stringHour =  value.slice(11,16);        
          let num = parseInt(stringHour.split(':')[0]);
          let e = (num - 6).toString();
          let some = [e , stringHour.split(':')[1] ].join(':');
          
          return some
        }
    },
    middleware: 'isAuth'
}
</script>