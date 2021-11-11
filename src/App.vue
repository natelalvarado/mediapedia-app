<template>
  <div id="app">
    <!-- start main-wrapper section -->
    <div class="main-wrapper">
      <!-- start header section -->
      <header class="scrollHeader">
        <div class="navbar-default">
          <!-- start top search -->
          <!-- end top search -->

          <div class="container">
            <div class="row align-items-center">
              <div class="col-md-12">
                <div class="menu_area">
                  <nav class="navbar navbar-expand-lg navbar-light no-padding">
                    <div class="navbar-header navbar-header-custom">
                      <!-- start logo -->
                      <div v-if="isLoggedIn()">
                        <a
                          href="/"
                          class="
                            navbar-brand
                            width-200px
                            sm-width-180px
                            xs-width-150px
                          "
                          ><img
                            id="logo"
                            src="img/logos/mediapedialogo.png"
                            alt="logo"
                            height="300"
                            width="250"
                        /></a>
                      </div>
                      <div v-if="!isLoggedIn()">
                        <a
                          href="/login"
                          class="
                            navbar-brand
                            width-200px
                            sm-width-180px
                            xs-width-150px
                          "
                          ><img
                            id="logo"
                            src="img/logos/mediapedialogo.png"
                            alt="logo"
                            height="300"
                            width="250"
                        /></a>
                      </div>
                      <!-- end logo -->
                    </div>

                    <div class="navbar-toggler"></div>

                    <!-- start menu area -->
                    <ul
                      class="navbar-nav ml-auto"
                      id="nav"
                      style="display: none"
                    >
                      <li v-if="isLoggedIn()">
                        <a href="/users/me">My Profile</a>
                      </li>
                      <li v-if="isLoggedIn()"><a href="/logout">Logout</a></li>
                      <li v-if="!isLoggedIn()">
                        <a href="/login">Login</a>
                      </li>
                      <li v-if="!isLoggedIn()"><a href="/signup">Signup</a></li>
                    </ul>
                    <!-- end menu area -->

                    <!-- start attribute navigation -->
                    <div
                      class="
                        attr-nav
                        sm-no-margin sm-margin-65px-right
                        xs-margin-55px-right
                      "
                    >
                      <ul class="top-nav-area">
                        <li class="dropdown sm-no-margin-right">
                          <a
                            href="/new"
                            class="butn listi md-padding-15px-lr sm-no-padding"
                            v-if="isLoggedIn()"
                          >
                            <i
                              class="
                                fas
                                fa-plus-circle
                                font-size22
                                margin-5px-right
                                sm-no-margin-right
                                vertical-align-middle
                              "
                            ></i>
                            <span class="vertical-align-middle sm-display-none"
                              >ADD MEDIA</span
                            >
                          </a>
                        </li>
                      </ul>
                    </div>
                    <!-- end attribute navigation -->
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <!-- end header section -->
      <!-- <div id="nav">
        <router-link to="/">Home</router-link> |
        <span v-if="isLoggedIn()">
          <router-link to="/new">New Media</router-link> |
          <router-link to="/users/me">My Account</router-link> |
          <router-link to="/logout">Logout</router-link>
        </span>
        <span v-if="!isLoggedIn()">
          <router-link to="/login">Login</router-link> |
          <router-link to="/signup">Signup</router-link>
        </span>
      </div> -->
      <div class="main-wrapper">
        <router-view />
      </div>
    </div>
  </div>
</template>

<style></style>

<script>
export default {
  data: function () {
    return {
      flashMessage: "",
    };
  },
  methods: {
    isLoggedIn: function () {
      return localStorage.jwt;
    },
  },
};
</script>
