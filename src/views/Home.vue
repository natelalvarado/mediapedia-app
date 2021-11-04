<template>
  <div class="home">
    <h3>Filter by category</h3>
    <button v-on:click="setFilter('')">All</button>
    <button v-on:click="setFilter('Movie')">Movie</button>
    <button v-on:click="setFilter('Television')">Television</button>
    <button v-on:click="setFilter('Book')">Book</button>
    <button v-on:click="setFilter('Video Game')">Video Game</button>
    <button v-on:click="setFilter('Music')">Music</button> <br />
    <h3>Filter by Status</h3>
    <button v-on:click="setFilter('Completed')">Completed</button>
    <button v-on:click="setFilter('In Progress')">In Progress</button>
    <button v-on:click="setFilter('Not Started')">Not Started</button>
    <h1>Media List</h1>
    <div
      v-for="medium in filterBy(media, filter, 'category', 'status')"
      v-bind:key="medium.id"
    >
      <br />
      <img :src="medium.image" alt="" width="250" height="250" />
      <p>{{ medium.title }}</p>
      <p>Status: {{ medium.status }}</p>
      <p>Category: {{ medium.category }}</p>
      <p>Rating: <br />{{ medium.rating }}</p>
      <p>Review: {{ medium.review }}</p>
      <router-link :to="`/media/${medium.id}`">SHOW INFO</router-link>
    </div>
  </div>
</template>

<style></style>

<script>
import axios from "axios";
import Vue2Filters from "vue2-filters";

export default {
  mixins: [Vue2Filters.mixin],

  data: function () {
    return {
      media: [],
      filter: "",
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
    setFilter: function (filter) {
      this.filter = filter;
    },
  },
};
</script>
