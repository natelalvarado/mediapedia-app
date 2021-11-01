<template>
  <div class="show-media">
    <h1>{{ media.title }}</h1>
    <p>status: {{ media.status }}</p>
    <p>{{ media.image }}</p>
    <p>creator: {{ media.creator }}</p>
    <p>genre: {{ media.genre }}</p>
    <p>release date: {{ media.year }}</p>
    <p>Rating: {{ media.rating }}</p>
    <p>Review: {{ media.review }}</p>
    <p>Cast: {{ media.cast }}</p>
    <p>Plot: {{ media.plot }}</p>
    <router-link :to="`/media/${media.id}/edit`">Edit</router-link>
  </div>
</template>

<style></style>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      media: {},
    };
  },
  created: function () {
    axios.get(`/media/${this.$route.params.id}`).then((response) => {
      console.log(response.data);
      this.media = response.data;
    });
  },
  methods: {},
};
</script>
