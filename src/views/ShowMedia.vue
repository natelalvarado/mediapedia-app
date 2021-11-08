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
              <form v-on:submit.prevent="editMedia()">
                <div class="form-group col-md-6">
                  <h7>Category</h7>
                  <select :value="media.category">
                    <option disabled value="">Please select one</option>
                    <option value="Movie">Movie</option>
                    <option value="Television">Television</option>
                    <option value="Video Game">Video Game</option>
                    <option value="Book">Book</option>
                    <option value="Music">Music</option>
                  </select>
                </div>
                <div
                  class="form-group col-md-6"
                  v-on:submit.prevent="editMedia()"
                >
                  <h7>Status</h7>
                  <select>
                    <option disabled value="">Please select one</option>
                    <option>Completed</option>
                    <option>In Progress</option>
                    <option>Not Started</option>
                  </select>
                </div>
                <div class="form-group col-md-6">
                  <h7> {{ creatorDisplay(media) }}</h7>
                  <input
                    type="text"
                    class="form-control no-margin-bottom padding-10px-tb"
                    name="exampleInputName"
                    id="exampleInputName"
                    :value="media.creator"
                  />
                </div>
                <div class="form-group col-md-6">
                  <h7>Title</h7>
                  <input
                    type="text"
                    class="form-control no-margin-bottom padding-10px-tb"
                    name="exampleInputName"
                    id="exampleInputName"
                    :value="media.title"
                  />
                </div>
                <div class="form-group col-md-12">
                  <h7>Genre</h7>
                  <input
                    type="text"
                    class="form-control no-margin-bottom padding-10px-tb"
                    name="exampleInputTitle"
                    id="exampleInputTitle"
                    :value="media.genre"
                  />
                </div>
                <div class="form-group col-md-12" v-if="filterPlot(media)">
                  <h7>Plot</h7>
                  <textarea
                    type="text"
                    class="form-control no-margin-bottom padding-10px-tb"
                    name="exampleInputTitle"
                    id="exampleInputTitle"
                    :value="media.plot"
                  ></textarea>
                </div>
                <div class="form-group col-md-12" v-if="filterCast(media)">
                  <h7>Cast</h7>
                  <input
                    type="text"
                    class="form-control no-margin-bottom padding-10px-tb"
                    name="exampleInputTitle"
                    id="exampleInputTitle"
                    :value="media.cast"
                  />
                </div>
                <div class="form-group col-md-12">
                  <h7>Release Date</h7>
                  <input
                    type="text"
                    class="form-control no-margin-bottom padding-10px-tb"
                    name="exampleInputTitle"
                    id="exampleInputTitle"
                    :value="media.year"
                  />
                </div>
                <div class="form-group col-md-12">
                  <h7>Rating</h7>
                  <select>
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
              </form>
              <div class="col-md-12">
                <button
                  type="submit"
                  class="butn"
                  v-on:click.prevent="editMedia()"
                >
                  <span>Update Media</span>
                </button>
                <button type="submit" class="butn" v-on:click="destroyMedium()">
                  <span>Delete Media</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- <img :src="media.image" alt="" width="500" height="500" /> -->
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
      editMediaParams: {},
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
    editMedia: function () {
      axios
        .patch(`/media/${this.editMediaParams.id}`, this.editMediaParams)
        .then((response) => {
          console.log(response.data);
          this.$router.go(`/media/${response.data.id}`);
        })
        .catch((error) => {
          console.log(error.response.data.errors);
        });
    },
  },
};
</script>
