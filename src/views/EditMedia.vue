<template>
  <div class="edit-media main-wrapper">
    <section class="no-padding-bottom">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 order-2 order-lg-1">
            <div class="padding-15px-all shadow bg-white">
              <img :src="editMediaParams.image" width="500" height="500" />
            </div>
          </div>
          <div class="col-lg-6 order-1 order-lg-2 sm-margin-30px-bottom">
            <div class="padding-40px-left padding-40px-top sm-no-padding">
              <form v-on:submit.prevent="editMedia()">
                <div class="form-group col-md-6">
                  <h7>Category</h7>
                  <select
                    :value="editMediaParams.category"
                    v-model="editMediaParams.category"
                  >
                    <option disabled value="">Please select one</option>
                    <option value="Movie">Movie</option>
                    <option value="Television">Television</option>
                    <option value="Video Game">Video Game</option>
                    <option value="Book">Book</option>
                    <option value="Music">Music</option>
                  </select>
                </div>
                <div class="form-group col-md-6">
                  <h7>Status</h7>
                  <select v-model="editMediaParams.status">
                    <option disabled value="">Please select one</option>
                    <option>Completed</option>
                    <option>In Progress</option>
                    <option>Not Started</option>
                  </select>
                </div>
                <div class="form-group col-md-6">
                  <h7> {{ creatorDisplay(editMediaParams) }}</h7>
                  <input
                    type="text"
                    class="form-control no-margin-bottom padding-10px-tb"
                    name="exampleInputName"
                    id="exampleInputName"
                    v-model="editMediaParams.creator"
                  />
                </div>
                <div class="form-group col-md-6">
                  <h7>Title</h7>
                  <input
                    type="text"
                    class="form-control no-margin-bottom padding-10px-tb"
                    name="exampleInputName"
                    id="exampleInputName"
                    v-model="editMediaParams.title"
                  />
                </div>
                <div class="form-group col-md-12">
                  <h7>Genre</h7>
                  <input
                    type="text"
                    class="form-control no-margin-bottom padding-10px-tb"
                    name="exampleInputTitle"
                    id="exampleInputTitle"
                    v-model="editMediaParams.genre"
                  />
                </div>
                <div
                  class="form-group col-md-12"
                  v-if="filterPlot(editMediaParams)"
                >
                  <h7>Plot</h7>
                  <textarea
                    type="text"
                    class="form-control no-margin-bottom padding-10px-tb"
                    name="exampleInputTitle"
                    id="exampleInputTitle"
                    v-model="editMediaParams.plot"
                  ></textarea>
                </div>
                <div
                  class="form-group col-md-12"
                  v-if="filterCast(editMediaParams)"
                >
                  <h7>Cast</h7>
                  <input
                    type="text"
                    class="form-control no-margin-bottom padding-10px-tb"
                    name="exampleInputTitle"
                    id="exampleInputTitle"
                    v-model="editMediaParams.cast"
                  />
                </div>
                <div class="form-group col-md-12">
                  <h7>Release Date</h7>
                  <input
                    type="text"
                    class="form-control no-margin-bottom padding-10px-tb"
                    name="exampleInputTitle"
                    id="exampleInputTitle"
                    v-model="editMediaParams.year"
                  />
                </div>
                <div class="form-group col-md-12">
                  <h7>Rating</h7>
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
                <div class="col-md-12">
                  <input type="submit" value="Save" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- <h1>Update Media Entry</h1>
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
        {{ creatorDisplay(editMediaParams) }}:
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
          <option>Completed</option>
          <option>In Progress</option>
          <option>Not Started</option>
        </select>
      </div>
      <div v-if="filterCast(editMediaParams)">
        Cast:
        <input type="text" v-model="editMediaParams.cast" />
      </div>
      <div v-if="filterPlot(editMediaParams)">
        Plot:
        <input type="text" v-model="editMediaParams.plot" />
      </div>
      <br />
      <input type="submit" value="Save" />
    </form>
    editMediaParams: {{ editMediaParams }} -->
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
    filterPlot: function (editMediaParams) {
      return (
        editMediaParams.category === "Movie" ||
        editMediaParams.category === "Television" ||
        editMediaParams.category === "Book"
      );
    },
    filterCast: function (editMediaParams) {
      return (
        editMediaParams.category === "Movie" ||
        editMediaParams.category === "Television"
      );
    },
    creatorDisplay: function (editMediaParams) {
      if (editMediaParams.category === "Movie") {
        return "Director";
      } else if (editMediaParams.category === "Music") {
        return "Artist";
      } else if (editMediaParams.category === "Book") {
        return "Author";
      } else if (editMediaParams.category === "Video Game") {
        return "Studio";
      } else {
        return "Creator";
      }
    },
  },
};
</script>
