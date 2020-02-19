<template>
  <v-app>
    <v-carousel>
      <v-carousel-item
        style="cursor:pointer"
        v-for="item in items"
        :key="item.id"
        :src="item.imageUrl"
        @click="onloadmeet(item.id)"
        reverse-transition="fade-transition"
        transition="fade-transition"
      ></v-carousel-item>
    </v-carousel>
    <v-layout>
      <v-spacer></v-spacer>
        <h2 style="font-style: oblique;font-size:2em">Welcome back {{name}} !!!!</h2>
      <v-spacer></v-spacer>
    
    </v-layout>
  </v-app>
</template>

<script>
export default {
  computed:{
      items(){
          return this.$store.getters.featuredMeetups
      },
      name(){
        return this.$store.state.users.name
      }
  },
  methods: {
    onloadmeet(id) {
      this.$router.push("/meetup/" + id);
    }
  },
  middleware: 'isAuth'
};
</script>
