<template>
  <div class="home main-wrapper">
    <section>
      <div class="container">
        <div class="border-bottom padding-20px-bottom margin-30px-bottom">
          <div class="row align-items-end">
            <div class="col-lg-3 col-md-6 sm-margin-20px-bottom">
              <span class="text-extra-dark-gray font-weight-600">Sort By</span>
              <select
                class="form-control no-margin-bottom margin-10px-top"
                id="exampleFormControlSelect1"
              >
                <option selected>Default</option>
                <option value="3">Name Ascending</option>
                <option value="4">Name Descending</option>
                <option value="1">Score Ascending</option>
                <option value="2">Score Descending</option>
              </select>
            </div>
          </div>
        </div>
        <div class="margin-60px-bottom">
          <span class="margin-20px-right font-size18">Filter By</span>
          <div
            class="
              form-check form-check-inline
              margin-30px-right
              md-margin-15px-right
            "
          >
            <input
              class="form-check-input"
              type="radio"
              name="filtertype"
              id="inlineCheckbox1"
              v-on:click="setFilter('')"
            />
            <label
              class="form-check-label text-extra-dark-gray"
              for="inlineCheckbox1"
              >All</label
            >
          </div>
          <div
            class="
              form-check form-check-inline
              margin-30px-right
              md-margin-15px-right
            "
          >
            <input
              class="form-check-input"
              type="radio"
              name="filtertype"
              id="inlineCheckbox1"
              v-on:click="setFilter('Movie')"
            />
            <label
              class="form-check-label text-extra-dark-gray"
              for="inlineCheckbox1"
              >Movies</label
            >
          </div>
          <div
            class="
              form-check form-check-inline
              margin-30px-right
              md-margin-15px-right
            "
          >
            <input
              class="form-check-input"
              type="radio"
              name="filtertype"
              id="inlineCheckbox2"
              v-on:click="setFilter('Television')"
            />
            <label
              class="form-check-label text-extra-dark-gray"
              for="inlineCheckbox2"
              >Television</label
            >
          </div>
          <div
            class="
              form-check form-check-inline
              margin-30px-right
              md-margin-15px-right
            "
          >
            <input
              class="form-check-input"
              type="radio"
              name="filtertype"
              id="inlineCheckbox3"
              v-on:click="setFilter('Book')"
            />
            <label
              class="form-check-label text-extra-dark-gray"
              for="inlineCheckbox3"
              >Books</label
            >
          </div>
          <div
            class="
              form-check form-check-inline
              margin-30px-right
              md-margin-15px-right
            "
          >
            <input
              class="form-check-input"
              type="radio"
              name="filtertype"
              id="inlineCheckbox4"
              v-on:click="setFilter('Music')"
            />
            <label
              class="form-check-label text-extra-dark-gray"
              for="inlineCheckbox4"
              >Music</label
            >
          </div>
          <div
            class="
              form-check form-check-inline
              margin-30px-right
              md-margin-15px-right
            "
          >
            <input
              class="form-check-input"
              type="radio"
              name="filtertype"
              id="inlineCheckbox5"
              v-on:click="setFilter('Video Game')"
            />
            <label
              class="form-check-label text-extra-dark-gray"
              for="inlineCheckbox5"
              >Video Game</label
            >
          </div>
          <div
            class="
              form-check form-check-inline
              margin-30px-right
              md-margin-15px-right
            "
          >
            <input
              class="form-check-input"
              type="radio"
              name="filtertype"
              id="inlineCheckbox6"
              v-on:click="setFilter('Completed')"
            />
            <label
              class="form-check-label text-extra-dark-gray"
              for="inlineCheckbox6"
              >Completed</label
            >
          </div>
          <div
            class="
              form-check form-check-inline
              margin-30px-right
              md-margin-15px-right
            "
          >
            <input
              class="form-check-input"
              type="radio"
              name="filtertype"
              id="inlineCheckbox7"
              v-on:click="setFilter('In Progress')"
            />
            <label
              class="form-check-label text-extra-dark-gray"
              for="inlineCheckbox7"
              >In Progress</label
            >
          </div>
          <div
            class="
              form-check form-check-inline
              margin-30px-right
              md-margin-15px-right
            "
          >
            <input
              class="form-check-input"
              type="radio"
              name="filtertype"
              id="inlineCheckbox8"
              v-on:click="setFilter('Not Started')"
            />
            <label
              class="form-check-label text-extra-dark-gray"
              for="inlineCheckbox8"
              >Not Started</label
            >
          </div>
        </div>
        <div class="row">
          <div class="col-lg-9 sm-margin-50px-bottom">
            <div
              class="
                border-bottom
                margin-40px-bottom
                padding-40px-bottom
                xs-padding-30px-bottom
              "
            >
              <div
                class="card card-list border-0"
                v-for="medium in filterBy(media, filter, 'category', 'status')"
                v-bind:key="medium.id"
              >
                <br />
                <div class="row align-items-center">
                  <div class="col-md-5 col-lg-4 xs-margin-20px-bottom">
                    <div class="card-list-img">
                      <img class="border-radius-5" :src="medium.image" alt="" />
                    </div>
                  </div>
                  <div class="col-md-7 col-lg-8">
                    <div class="card-body no-padding-tb">
                      <div
                        class="
                          d-flex
                          justify-content-between
                          align-items-center
                        "
                      >
                        <h5 class="card-title no-margin-bottom font-size22">
                          <router-link
                            :to="`/media/${medium.id}`"
                            class="text-extra-dark-gray"
                            >{{ medium.title }}
                          </router-link>
                        </h5>
                        <ul class="no-margin-bottom">
                          <li>
                            <span> {{ medium.status }}</span>
                          </li>
                        </ul>
                      </div>
                      <span>{{ medium.rating }}</span>
                      <br />
                      <span>{{ medium.category }}</span>
                      <p class="margin-20px-tb sm-margin-10px-top">
                        {{ medium.review }}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="pagination text-small text-uppercase text-extra-dark-gray"
            >
              <ul>
                <li>
                  <a href="javascript:void(0);"
                    ><i
                      class="
                        fas
                        fa-long-arrow-alt-left
                        margin-5px-right
                        xs-display-none
                      "
                    ></i>
                    Prev</a
                  >
                </li>
                <li class="active"><a href="javascript:void(0);">1</a></li>
                <li><a href="javascript:void(0);">2</a></li>
                <li><a href="javascript:void(0);">3</a></li>
                <li>
                  <a href="javascript:void(0);"
                    >Next
                    <i
                      class="
                        fas
                        fa-long-arrow-alt-right
                        margin-5px-left
                        xs-display-none
                      "
                    ></i
                  ></a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-lg-3">
            <div class="side-bar">
              <div class="widget">
                <div class="widget-title"><h3>Search</h3></div>
                <form method="post" action="#!">
                  <div class="form-group">
                    <input
                      type="text"
                      class="form-control padding-10px-tb"
                      id="exampleFormControlInput4"
                      placeholder="What are you looking for?"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
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
