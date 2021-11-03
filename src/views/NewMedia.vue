<template>
  <div class="new-media">
    <h1>New Media</h1>
    <div>
      <form v-on:submit.prevent="createMedia()">
        <span>Category:</span>
        <select v-model="newMediaParams.category">
          <option disabled value="">Please select one</option>
          <option>Movie</option>
          <option>Television</option>
          <option>Video Game</option>
          <option>Book</option>
          <option>Music</option>
        </select>
        <br />
        Title:
        <input type="string" v-model="newMediaParams.title" />
        <br />
        Creator:
        <input type="string" v-model="newMediaParams.creator" />
        <br />
        Genre:
        <input type="string" v-model="newMediaParams.genre" />
        <br />
        Cast:
        <input type="string" v-model="newMediaParams.cast" />
        <br />
        Plot:
        <input type="text" v-model="newMediaParams.plot" />
        <br />
        Year:
        <input type="string" v-model="newMediaParams.year" />
        <br />
        Image:
        <input type="string" v-model="newMediaParams.image" />
        <br />
        <span>Rating:</span>
        <select v-model="newMediaParams.status">
          <option disabled value="">Please select one</option>
          <option>A+</option>
          <option>A</option>
          <option>A-</option>
          <option>B+</option>
          <option>B</option>
          <option>B-</option>
          <option>C+</option>
          <option>C</option>
          <option>C-</option>
          <option>D+</option>
          <option>D</option>
          <option>D-</option>
          <option>F</option>
        </select>
        <br />
        Review:
        <input type="text" v-model="newMediaParams.review" />
        <br />
        <span>Status:</span>
        <select v-model="newMediaParams.status">
          <option disabled value="">Please select one</option>
          <option>Complete</option>
          <option>Incomplete</option>
          <option>Not Started</option>
        </select>
        <br />
        <button type="submit" value="Create" class="btn btn-primary">
          Create
        </button>
      </form>
    </div>
  </div>
</template>

<style></style>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      newMediaParams: {},
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
          this.$router.push("/");
        })
        .catch((error) => {
          console.log(error.response.data.errors);
        });
    },
  },
};
</script>
