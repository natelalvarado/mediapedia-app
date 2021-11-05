<template>
  <div id="app">
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
    <router-view />
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
