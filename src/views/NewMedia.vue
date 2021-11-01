<template>
  <div class="new-media">
    <h1>New Media</h1>
    <div>
      Category:
      <input type="string" v-model="newMediaParams.category" />
      Title:
      <input type="string" v-model="newMediaParams.title" />
      Creator:
      <input type="string" v-model="newMediaParams.creator" />
      Genre:
      <input type="string" v-model="newMediaParams.genre" />
      Cast:
      <input type="string" v-model="newMediaParams.cast" />
      Plot:
      <input type="text" v-model="newMediaParams.plot" />
      Year:
      <input type="string" v-model="newMediaParams.year" />
      Image:
      <input type="string" v-model="newMediaParams.image" />
      Review:
      <input type="text" v-model="newMediaParams.review" />
      Rating:
      <input type="string" v-model="newMediaParams.rating" />
      Status:
      <input type="string" v-model="newMediaParams.status" />
    </div>
    <button
      type="submit"
      value="Create"
      class="btn btn-primary"
      v-on:click.stop.prevent="createMedia()"
    >
      Create
    </button>
  </div>
</template>

<style></style>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      newMediaParams: {
        category: "",
        title: "",
        creator: "",
        genre: "",
        cast: "",
        plot: "",
        year: "",
        image: "",
        review: "",
        rating: "",
        status: "",
      },
      errors: [],
    };
  },
  created: function () {},
  methods: {
    createMedia: function () {
      axios
        .post("/media", this.newMediaParams)
        .then((response) => {
          console.log(response.data);
          this.$router.push("/media");
        })
        .catch((error) => {
          console.log(error.response.data.errors);
        });
    },
  },
};
</script>
