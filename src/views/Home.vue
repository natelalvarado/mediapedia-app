<template>
  <div class="home">
    <h1>Media List</h1>
    <div v-for="media in media" v-bind:key="media.id">
      <p>{{ media.title }}</p>
      <p>{{ media.category }}</p>
      <router-link :to="`/media/${media.id}`">SHOW INFO</router-link>
    </div>
  </div>
</template>

<style></style>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      media: [],
    };
  },
  created: function () {
    this.indexMedia();
  },
  methods: {
    indexMedia: function () {
      axios.get("/media").then((response) => {
        console.log("media index", response);
        this.media = response.data;
      });
    },
  },
};
</script>
