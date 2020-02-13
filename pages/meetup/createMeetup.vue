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
        "Planet"
      ]
    }),

    methods: {
       reset () {
        this.$refs.form.reset()
      },

      createMyPost(){
        let i = this.$store.state.loadedMeetup;
        i.forEach((e)=>{
          if( e.title == this.select ){
            this.url = e.imageUrl;
          }
        })

        const pass = {
          title: this.title,
          description: this.description,
          id:"dummie Id",
          date: new Date(),
          imageUrl: this.url
        }

        this.$store.dispatch('createMeetup', pass) 
        this.reset()
      }
    },
    computed:{
      isValid(){
         return this.title !== '' &&  this.description !== '' && this.select !==''
      },
     }
  }
</script>



