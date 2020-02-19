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
  </v-app>
</template>

<script>
export default {
  computed:{
      items(){
          return this.$store.getters.featuredMeetups
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
