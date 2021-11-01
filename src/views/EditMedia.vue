<template>
  <div class="edit-media">
    <h1>Update Media Entry</h1>
    <form v-on:submit.prevent="editMedia()">
      <div>
        Category:
        <input type="text" v-model="editMediaParams.category" />
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
        Rating:
        <input type="text" v-model="editMediaParams.rating" />
      </div>
      <div>
        Review:
        <input type="text" v-model="editMediaParams.review" />
      </div>
      <div>
        Status:
        <input type="text" v-model="editMediaParams.status" />
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
