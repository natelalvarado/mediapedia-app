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
                          src="img/logos/mediapedia logo.png"
                          alt="logo"
                          height="200"
                          width="100"
                      /></a>
                      <!-- end logo -->
                    </div>

                    <div class="navbar-toggler"></div>

                    <!-- start menu area -->
                    <ul
                      class="navbar-nav ml-auto"
                      id="nav"
                      style="display: none"
                    >
                      <li>
                        <a v-if="isLoggedIn()">Account Settings</a>
                        <ul>
                          <li><a href="/logout">Logout</a></li>
                          <li>
                            <a href="/users/me">My Profile</a>
                          </li>
                        </ul>
                      </li>
                      <li v-if="!isLoggedIn()">
                        <a href="/login">Login</a>
                      </li>
                      <li v-if="!isLoggedIn()"><a href="/signup">Signup</a></li>
                      <!-- <li>
                        <a href="javascript:void(0)">User Panel</a>
                        <ul>
                          <li><a href="admin/index.html">Dashboard</a></li>
                          <li><a href="admin/message.html">Message</a></li>
                          <li><a href="admin/booking.html">Booking</a></li>
                          <li><a href="admin/wallet.html">Wallet</a></li>
                          <li>
                            <a href="admin/my-listing.html">My Listing</a>
                          </li>
                          <li><a href="admin/reviews.html">Reviews</a></li>
                          <li><a href="admin/bookmark.html">Bookmarks</a></li>
                          <li>
                            <a href="admin/add-listing.html">Add Listing</a>
                          </li>
                          <li>
                            <a href="admin/my-profile.html">My Profile</a>
                          </li>
                        </ul>
                      </li> -->
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
      <div id="nav">
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
      </div>
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
