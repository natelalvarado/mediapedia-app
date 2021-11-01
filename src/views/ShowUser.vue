<template>
  <div class="show-user">
    <h1>My Account</h1>
    <p>Name: {{ user.name }}</p>
    <p>Email: {{ user.email }}</p>
    <router-link :to="`/user/${user.id}/edit`">Update Account</router-link>
  </div>
</template>

<style></style>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      user: {},
    };
  },
  created: function () {
    axios.get("/users/me").then((response) => {
      console.log(response.data);
      this.user = response.data;
    });
  },
  methods: {},
};
</script>
