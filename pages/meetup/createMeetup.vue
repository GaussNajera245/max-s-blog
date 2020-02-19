<template>
<v-container>
  <v-layout row>
    <v-flex xs12>
      <h2 style="font-size:2em" > Create a new post</h2>
    </v-flex>
  </v-layout>

  <v-layout row>
    <v-flex xs12 >
       <v-form xs4
          ref="form"
          v-model="valid"
          @submit.prevent="createMyPost"
        >
        <v-text-field
          v-model="title"
          name="title"
          :rules="titleRules"
          label="Title: "
          required
        ></v-text-field>

        <v-textarea
          counter
          name="description"
          v-model="description"
          label="Description"
          required
        ></v-textarea>

        <v-select
          :items="items"
          label="Select a background photo"
          required
          v-model="select"
        ></v-select>

      <v-layout>
      <v-flex xs4 offset-xs3 >
        <v-btn
            color="error"
            class="mr-4"
            @click="reset"
          >  Reset Post
          </v-btn>
      </v-flex>
      <v-flex xs4>   
        <v-btn
            color="warning"
            :disabled="!isValid"
            type="submit"
          >  Create post
        </v-btn>
      </v-flex>
      </v-layout>  

    </v-form>
      </v-flex>
  </v-layout>
</v-container>
</template>


<script>
import {firebase} from '~/plugins/firebase.js'

export default {
    data: () => ({
      valid: true,
      title: '',
      titleRules: [
        v => !!v || 'Title is required',
      ],
      description: '',
      select: '',
      url: '',
      items:[
        "Squirrel",
        "Sky",
        "Bird",
        "Planet",
        "Random"
      ]
    }),

    methods: {
       reset () {
        this.$refs.form.reset()
      },
      updateUrlProp(){
          if(this.select !== "Random"){
            let hi = this.select.toLowerCase();
            this.url = `https://cdn.vuetifyjs.com/images/carousel/${hi}.jpg`;
          }
          else if (this.select === "Random") {
            let h = Math.floor(Math.random()*1000);
            this.url= `https://i.picsum.photos/id/${h}/1095/400.jpg`
          }
      },
      createMyPost(){
        this.updateUrlProp()

        const pass = {
          title: this.title,
          description: this.description,
          id:"dummie Id",
          date: new Date(),
          imageUrl: this.url,
          auth: this.user.name
        }

        this.$store.dispatch('createMeetup', pass) 
        this.reset()
      }
    },
    computed:{
      isValid(){
         return this.title !== '' &&  this.description !== '' && this.select !==''
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
  middleware: 'isAuth'
  }
</script>



