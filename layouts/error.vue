<template>
  <v-container dark>
    <br>
    <br>
    <v-layout>
      <v-flex lg6 offset-lg3 md12 >
        <v-img src="/r404.png"></v-img>
      </v-flex>
    </v-layout>

    <v-layout>
      <v-spacer>
      </v-spacer>
      <v-flex xs5 >
        <NuxtLink to="/">
        click here to return
        </NuxtLink>
      </v-flex>
    </v-layout>

  </v-container>
</template>

<script>
export default {
  layout: 'empty',
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  data () {
    return {
      pageNotFound: '404 Not Found',
      otherError: 'An error occurred'
    }
  },
  head () {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError
    return {
      title
    }
  }
}
</script>

<style scoped>
h1 {
  font-size: 20px;
}
</style>
