<template>
  <div class="show-media">
    <img :src="media.image" alt="" width="500" height="500" />
    <h1>{{ media.title }}</h1>
    <p>Category: {{ media.category }}</p>
    <p>Status: {{ media.status }}</p>
    <p>{{ creatorDisplay(media) }}: {{ media.creator }}</p>
    <p>Genre: {{ media.genre }}</p>
    <p>Release date: {{ media.year }}</p>
    <p>Rating: {{ media.rating }}</p>
    <p>Review: {{ media.review }}</p>
    <p v-if="filterCast(media)">Cast: {{ media.cast }}</p>
    <p v-if="filterPlot(media)">Plot: {{ media.plot }}</p>
    <router-link :to="`/media/${media.id}/edit`">Update</router-link>
    <br />
    <button v-on:click="destroyMedium()">Delete</button>
  </div>
</template>

<style></style>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      media: {},
      createrTitle: "",
    };
  },
  created: function () {
    axios.get(`/media/${this.$route.params.id}`).then((response) => {
      console.log(response.data);
      this.media = response.data;
    });
  },
  methods: {
    destroyMedium: function () {
      if (confirm("Are you sure")) {
        axios.delete(`/media/${this.media.id}`).then((response) => {
          console.log(response.data);
          this.$parent.flashMessage = "Entry Deleted";
          this.$router.push("/");
        });
      }
    },
    filterPlot: function (media) {
      return (
        media.category === "Movie" ||
        media.category === "Television" ||
        media.category === "Book"
      );
    },
    filterCast: function (media) {
      return media.category === "Movie" || media.category === "Television";
    },
    creatorDisplay: function (media) {
      if (media.category === "Movie") {
        return "Director";
      } else if (media.category === "Music") {
        return "Artist";
      } else if (media.category === "Book") {
        return "Author";
      } else if (media.category === "Video Game") {
        return "Studio";
      } else {
        return "Creator";
      }
    },
  },
};
</script>
