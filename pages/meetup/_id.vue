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
                    <div class="info--text" > {{meet.date}}- Where it takes place: {{meet.title}} </div>
                    <div>{{meet.description}}</div>
                </v-card-text>

                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn>Register</v-btn>
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
    middleware: 'isAuth'
}
</script>