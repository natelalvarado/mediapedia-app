<template>
  <div class="new-media main-wrapper">
    <div class="container margin-80px-top margin-30px-bottom">
      <div class="row">
        <div class="col-md-9 form-list center-col container margin-30px-top">
          <div class="col-md-6 form-list center-col">
            <div class="padding-15px-all shadow bg-white">
              <img :src="newMediaParams.image" width="500" height="500" />
            </div>
          </div>
          <form v-on:submit.prevent="createMedia()">
            <div class="container margin-30px-top">
              <div class="col-md-6 form-list center-col row">
                <h6>Category</h6>
                <select v-model="newMediaParams.category">
                  <option disabled value="">Please select one</option>
                  <option>Movie</option>
                  <option>Television</option>
                  <option>Video Game</option>
                  <option>Book</option>
                  <option>Music</option>
                </select>
              </div>
              <div
                class="col-md-6 form-list center-col container margin-30px-top"
              >
                <h6>Status</h6>
                <select v-model="newMediaParams.status">
                  <option disabled value="">Please select one</option>
                  <option>Completed</option>
                  <option>In Progress</option>
                  <option>Not Started</option>
                </select>
              </div>
              <div
                class="col-md-6 form-list center-col container margin-30px-top"
              >
                <h6>Title</h6>
                <input
                  type="text"
                  class="form-control no-margin-bottom padding-10px-tb"
                  name="exampleInputName"
                  id="exampleInputName"
                  placeholder="Enter Title"
                  v-model="newMediaParams.title"
                />
              </div>
              <div
                class="col-md-6 form-list center-col container margin-30px-top"
              >
                <h6>{{ creatorDisplay(newMediaParams) }}</h6>
                <input
                  type="text"
                  class="form-control no-margin-bottom padding-10px-tb"
                  name="exampleInputName"
                  id="exampleInputName"
                  placeholder="Enter Creator"
                  v-model="newMediaParams.creator"
                />
              </div>
              <div
                class="col-md-6 form-list center-col container margin-30px-top"
              >
                <h6>Genre</h6>
                <input
                  type="text"
                  class="form-control no-margin-bottom padding-10px-tb"
                  name="exampleInputName"
                  id="exampleInputName"
                  placeholder="Enter Genre"
                  v-model="newMediaParams.genre"
                />
              </div>
              <div
                class="col-md-6 form-list center-col container margin-30px-top"
              >
                <h6>Release Date</h6>
                <input
                  type="text"
                  class="form-control no-margin-bottom padding-10px-tb"
                  name="exampleInputName"
                  id="exampleInputName"
                  placeholder="Enter Release Date"
                  v-model="newMediaParams.year"
                />
              </div>

              <div
                class="col-md-6 form-list center-col container margin-30px-top"
              >
                <h6 v-if="filterPlot(newMediaParams)">Plot</h6>
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="5"
                  placeholder="Enter Plot Summary"
                  v-model="newMediaParams.plot"
                  v-if="filterPlot(newMediaParams)"
                ></textarea>
              </div>
              <div
                class="col-md-6 form-list center-col container margin-30px-top"
              >
                <h6 v-if="filterCast(newMediaParams)">Cast</h6>
                <input
                  type="text"
                  class="form-control no-margin-bottom padding-10px-tb"
                  name="exampleInputName"
                  id="exampleInputName"
                  placeholder="Enter Cast"
                  v-if="filterCast(newMediaParams)"
                  v-model="newMediaParams.cast"
                />
              </div>
              <div
                class="col-md-6 form-list center-col container margin-30px-top"
              >
                <h6>Image</h6>
                <input
                  type="text"
                  class="form-control no-margin-bottom padding-10px-tb"
                  name="exampleInputName"
                  id="exampleInputName"
                  placeholder="Enter Image URL"
                  v-model="newMediaParams.image"
                />
              </div>
              <div
                class="col-md-6 form-list center-col container margin-30px-top"
              >
                <h6>Rating</h6>
                <select v-model="newMediaParams.rating">
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

              <div class="form-group col-md-6 container margin-30px-top">
                <h6>Review</h6>
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="5"
                  placeholder="Enter Review"
                  v-model="newMediaParams.review"
                ></textarea>
              </div>
              <div class="col-md-6 form-list center-col">
                <button
                  type="submit"
                  class="butn col-md-12 form-list center-col"
                  value="Create"
                >
                  <span>Create New Media</span>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
    <!-- <h1>New Media</h1>
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
        {{ creatorDisplay(newMediaParams) }}:
        <input type="string" v-model="newMediaParams.creator" />
        <br />
        Genre:
        <input type="string" v-model="newMediaParams.genre" />
        <span v-if="filterCast(newMediaParams)"> <br />Cast:</span>
        <input
          v-if="filterCast(newMediaParams)"
          type="string"
          v-model="newMediaParams.cast"
        />
        <span v-if="filterPlot(newMediaParams)"> <br />Plot:</span>
        <input
          type="text"
          v-if="filterPlot(newMediaParams)"
          v-model="newMediaParams.plot"
        />
        <br />
        Year:
        <input type="string" v-model="newMediaParams.year" />
        <br />
        Image:
        <input type="string" v-model="newMediaParams.image" />
        <br />
        <span>Rating:</span>
        <select v-model="newMediaParams.rating">
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
          <option>Completed</option>
          <option>In Progress</option>
          <option>Not Started</option>
        </select>
        <br />
        <button type="submit" value="Create" class="btn btn-primary">
          Create
        </button>
      </form>
    </div> -->
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
    creatorDisplay: function (newMediaParams) {
      if (newMediaParams.category === "Movie") {
        return "Director";
      } else if (newMediaParams.category === "Music") {
        return "Artist";
      } else if (newMediaParams.category === "Book") {
        return "Author";
      } else if (newMediaParams.category === "Video Game") {
        return "Studio";
      } else {
        return "Creator";
      }
    },
    filterPlot: function (newMediaParams) {
      return (
        newMediaParams.category === "Movie" ||
        newMediaParams.category === "Television" ||
        newMediaParams.category === "Book"
      );
    },
    filterCast: function (newMediaParams) {
      return (
        newMediaParams.category === "Movie" ||
        newMediaParams.category === "Television"
      );
    },
  },
};
</script>
