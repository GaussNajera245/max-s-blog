<template>
  <v-container>
    <br>
    <v-layout>
      <v-flex x12>
        <v-layout>
          <v-flex offset-xs5 >
        <h2 style="font-size:2em" >SIGN UP: </h2>
          </v-flex>
        </v-layout>
        <v-card>
          <v-card-text>
            <v-container>
              <form @submit.prevent="onsignUp">
                <v-layout row>
                  <v-flex xs12 >
                    <v-text-field
                      type="email"
                      name="email"
                      v-model="email"
                      id="email"
                      label="Mail"
                      :rules="emailRules"
                      required
                    >
                    
                    </v-text-field>


                    <v-text-field
                      type="password"
                      name="password"
                      v-model="password"
                      id="password"
                      label="Password"
                      :rules="passwordRules"
                      required
                    >

                    </v-text-field>
                    
                    <v-text-field
                      type="password"
                      name="confirmPassword"
                      v-model="confirmPassword"
                      id="confirmPassword"
                      label="Confirm Password"
                      required
                      :rules="confirmPassRule"
                    >

                    </v-text-field>
                  </v-flex>
                  <v-flex xs4>   
                    <v-spacer></v-spacer>
                    <v-btn
                        color="warning"
                        :disabled="!isValid"
                        type="submit"
                      >  Sign Up
                    </v-btn>
                    <v-spacer></v-spacer>
                  </v-flex>


                </v-layout>
              </form>
            </v-container>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>


<script>
export default {
  data(){
    return {
    email:'',
    confirmPassword:'',
    password:'',
    confirmPassRule:[
      v => ( this.comparePass ) ? true: 'Passwords do not match',
      v => !!v || '',
    ],
    passwordRules:[
      v => !!v || 'Password is required',
    ],
    emailRules:[
      v => !!v || 'E-Mail is required',
      v => /.+@.+\..+/.test(v) || 'E-mail is invalid'
    ],
  }},

  computed:{
    isValid(){
      return this.email !== '' && this.confirmPassword !== '' && this.password !=='' && this.comparePass
    },
    comparePass(){
      return ( this.password == this.confirmPassword ) 
    },
    user(){
      return this.$store.state.users.id
    }
  },
  
  watch:{
    user: (val) =>{
      if( val !== undefined && val !== null) {
        window.$nuxt.$router.push('/')  //https://github.com/nuxt/nuxt.js/issues/2637
      }
    }
  },

  methods:{
    onsignUp(){
      this.$store.dispatch('newUser', {
        email: this.email, 
        password: this.password
        }
      );
    }
  }
}
</script>