<template>
  <div class="edit-media">
    <h1>Update Media Entry</h1>
    <form v-on:submit.prevent="editMedia()">
      <div>
        <span>Category:</span>
        <select v-model="editMediaParams.category">
          <option disabled value="">Please select one</option>
          <option>Movie</option>
          <option>Television</option>
          <option>Video Game</option>
          <option>Book</option>
          <option>Music</option>
        </select>
      </div>
      <div>
        Title:
        <input type="text" v-model="editMediaParams.title" />
      </div>
      <div>
        Creator:
        <input type="text" v-model="editMediaParams.creator" />
      </div>
      <div>
        Genre:
        <input type="text" v-model="editMediaParams.genre" />
      </div>
      <div>
        Release Date:
        <input type="text" v-model="editMediaParams.year" />
      </div>
      <div>
        Image:
        <input type="text" v-model="editMediaParams.image" />
      </div>
      <div>
        <span>Rating:</span>
        <select v-model="editMediaParams.rating">
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
      </div>
      <div>
        Review:
        <input type="text" v-model="editMediaParams.review" />
      </div>
      <div>
        <span>Status:</span>
        <select v-model="editMediaParams.status">
          <option disabled value="">Please select one</option>
          <option>Complete</option>
          <option>Incomplete</option>
          <option>Not Started</option>
        </select>
      </div>
      <div>
        Cast:
        <input type="text" v-model="editMediaParams.cast" />
      </div>
      <div>
        Plot:
        <input type="text" v-model="editMediaParams.plot" />
      </div>
      <br />
      <input type="submit" value="Save" />
    </form>
    editMediaParams: {{ editMediaParams }}
  </div>
</template>

<style></style>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      editMediaParams: {},
      errors: [],
    };
  },
  created: function () {
    axios.get(`/media/${this.$route.params.id}`).then((response) => {
      console.log(response.data);
      this.editMediaParams = response.data;
    });
  },
  methods: {
    editMedia: function () {
      axios
        .patch(`/media/${this.editMediaParams.id}`, this.editMediaParams)
        .then((response) => {
          console.log(response.data);
          this.$router.push(`/media/${response.data.id}`);
        })
        .catch((error) => {
          console.log(error.response.data.errors);
        });
    },
  },
};
</script>
