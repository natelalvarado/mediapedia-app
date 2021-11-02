<template>
  <div class="show-user">
    <h1>My Account</h1>
    <p>Name: {{ user.name }}</p>
    <p>Email: {{ user.email }}</p>
    <router-link to="/users/me/edit">Update Account</router-link>
    <br />
    <button v-on:click="destroyUser()">Delete Account</button>
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
  methods: {
    destroyUser: function () {
      if (confirm("Are you sure you want to delete account?")) {
        axios.delete("/users/me").then((response) => {
          console.log(response.data);
          this.$parent.flashMessage = "Account Deleted";
          this.$router.push("/login");
        });
      }
    },
  },
};
</script>
