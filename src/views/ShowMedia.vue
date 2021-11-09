<template>
  <div class="show-media main-wrapper">
    <section class="no-padding-bottom">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 order-2 order-lg-1">
            <div class="padding-15px-all shadow bg-white">
              <img :src="media.image" width="500" height="500" />
            </div>
          </div>
          <div class="col-lg-6 order-1 order-lg-2 sm-margin-30px-bottom">
            <div class="padding-40px-left padding-40px-top sm-no-padding">
              <div class="form-group col-md-6">
                <h6>Title</h6>
                <p>{{ media.title }}</p>
              </div>
              <div class="form-group col-md-6">
                <h6>Category</h6>
                <p>{{ media.category }}</p>
              </div>
              <div class="form-group col-md-6">
                <h6>Status</h6>
                <p>{{ media.status }}</p>
              </div>
              <div class="form-group col-md-6">
                <h6>{{ creatorDisplay(media) }}</h6>
                <p>{{ media.creator }}</p>
              </div>

              <div class="form-group col-md-12">
                <h6>Genre</h6>
                <p>{{ media.genre }}</p>
              </div>
              <div class="form-group col-md-12" v-if="filterPlot(media)">
                <h6>Plot</h6>
                <p>{{ media.plot }}</p>
              </div>
              <div class="form-group col-md-12" v-if="filterCast(media)">
                <h6>Cast</h6>
                <p>{{ media.cast }}</p>
              </div>
              <div class="form-group col-md-12">
                <h6>Release Date</h6>
                <p>{{ media.year }}</p>
              </div>
              <div class="form-group col-md-12">
                <h6>Rating</h6>
                <p>{{ media.rating }}</p>
              </div>
              <div class="form-group col-md-12">
                <h6>Review</h6>
                <p>{{ media.review }}</p>
              </div>
              <div class="col-md-12">
                <router-link
                  type="submit"
                  class="butn"
                  router-link
                  :to="`/media/${media.id}/edit`"
                >
                  <span>Update Media</span>
                </router-link>
                <button type="submit" class="butn" v-on:click="destroyMedium()">
                  <span>Delete Media</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- <img :src="media.image" alt="" width="500" height="500" />
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
    <button v-on:click="destroyMedium()">Delete</button> -->
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
