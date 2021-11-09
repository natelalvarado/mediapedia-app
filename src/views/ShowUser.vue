<template>
  <div class="show-user main-wrapper">
    <!-- start contact form -->
    <section class="bg-light-gray contact-form">
      <div class="container margin-30px-top">
        <div class="row">
          <div class="col-md-9 form-list center-col">
            <div class="row">
              <div class="form-group col-md-6">
                <h7>Username</h7>
                <input
                  v-model="EditUserParams.name"
                  type="text"
                  class="form-control no-margin-bottom padding-10px-tb"
                  name="exampleInputName"
                  id="exampleInputName"
                  :placeholder="user.name"
                />
              </div>
            </div>
            <div class="row">
              <div class="form-group col-md-6">
                <h7>E-mail</h7>
                <input
                  v-model="EditUserParams.email"
                  type="text"
                  class="form-control no-margin-bottom padding-10px-tb"
                  name="exampleInputEmail"
                  id="exampleInputEmail"
                  :placeholder="user.email"
                />
              </div>
            </div>
            <h7>Update Password</h7>
            <div class="row">
              <div class="form-group col-md-6">
                <input
                  v-model="EditUserParams.password"
                  type="text"
                  class="form-control no-margin-bottom padding-10px-tb"
                  name="exampleInputTitle"
                  id="exampleInputTitle"
                  placeholder="New Password"
                />
              </div>
            </div>
            <div class="row">
              <div class="form-group col-md-6">
                <input
                  v-model="EditUserParams.password_confirmation"
                  class="text"
                  id="exampleFormControlTextarea1"
                  placeholder="Confirm Password"
                />
              </div>
              <div class="col-md-12">
                <button
                  v-on:click.prevent="editUser()"
                  type="submit"
                  class="butn"
                >
                  <span>Update Account</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- <h1>My Account</h1>
    <p>Name: {{ user.name }}</p>
    <p>Email: {{ user.email }}</p>
    <router-link to="/users/me/edit">Update Account</router-link>
    <br />
    <button v-on:click="destroyUser()">Delete Account</button> -->
  </div>
</template>

<style></style>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      EditUserParams: {},
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
    editUser: function () {
      axios
        .patch("/users/me", this.EditUserParams)
        .then((response) => {
          console.log(response.data);
          this.$router.go("users/me");
        })
        .catch((error) => {
          console.log(error.response.data.errors);
        });
    },
  },
};
</script>
