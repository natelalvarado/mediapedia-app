<template>
  <div class="edit-user">
    <h1>Update Account</h1>
    <form v-on:submit.prevent="editUser()">
      <ul>
        <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
      </ul>
      <div>
        <label>Name:</label>
        <input type="text" v-model="EditUserParams.name" />
      </div>
      <div>
        <label>Email:</label>
        <input type="email" v-model="EditUserParams.email" />
      </div>
      <div>
        <label>Password:</label>
        <input type="password" v-model="EditUserParams.password" />
      </div>
      <div>
        <label>Password confirmation:</label>
        <input type="password" v-model="EditUserParams.password_confirmation" />
      </div>
      <input type="submit" value="Submit" />
    </form>
    EditUserParams: {{ EditUserParams }}
  </div>
</template>

<style></style>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      EditUserParams: {},
      errors: [],
    };
  },
  created: function () {
    axios.get("/users/me").then((response) => {
      console.log(response.data);
      this.EditUserParams = response.data;
    });
  },
  methods: {
    editUser: function () {
      axios
        .patch("/users/me", this.EditUserParams)
        .then((response) => {
          console.log(response.data);
          this.$router.push("users/me");
        })
        .catch((error) => {
          console.log(error.response.data.errors);
        });
    },
  },
};
</script>
