<template>
  <div class="main-wrapper">
    <div class="signup">
      <div class="row">
        <div class="col-lg-6 center-col">
          <div
            class="padding-40px-all sm-padding-25px-all shadow border-radius-4"
          >
            <h3 class="text-center margin-40px-bottom">Signup</h3>
            <form v-on:submit.prevent="submit()">
              <div class="row">
                <div class="col-md-12">
                  <div class="form-group">
                    <input
                      class="form-control"
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Username"
                      v-model="newUserParams.name"
                      maxlength="70"
                    />
                  </div>
                </div>
                <div class="col-md-12">
                  <div class="form-group">
                    <input
                      class="form-control"
                      type="text"
                      name="email"
                      id="email"
                      placeholder="Email"
                      maxlength="70"
                      v-model="newUserParams.email"
                    />
                  </div>
                </div>
                <div class="col-12">
                  <div class="form-group">
                    <input
                      class="form-control"
                      type="password"
                      name="password"
                      id="password1"
                      placeholder="Password"
                      maxlength="70"
                      v-model="newUserParams.password"
                    />
                  </div>
                </div>
                <div class="col-12">
                  <div class="form-group">
                    <input
                      class="form-control"
                      type="password"
                      name="password"
                      id="password2"
                      placeholder="Confirm Password"
                      maxlength="70"
                      v-model="newUserParams.password_confirmation"
                    />
                  </div>
                </div>
                <div class="col-md-12 margin-25px-top">
                  <button
                    type="button"
                    class="butn btn-block"
                    v-on:click.prevent="submit()"
                  >
                    Register
                  </button>
                </div>

                <div class="col-md-12 text-center margin-25px-top">
                  <span
                    >Already have an account? <a href="/login">Login</a></span
                  >
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      <form v-on:submit.prevent="submit()">
        <h1>Signup</h1>
        <ul>
          <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
        </ul>
        <div>
          <label>Name:</label>
          <input type="text" v-model="newUserParams.name" />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" v-model="newUserParams.email" />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" v-model="newUserParams.password" />
        </div>
        <div>
          <label>Password confirmation:</label>
          <input
            type="password"
            v-model="newUserParams.password_confirmation"
          />
        </div>
        <input type="submit" value="Submit" />
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      newUserParams: {},
      errors: [],
    };
  },
  methods: {
    submit: function () {
      axios
        .post("/users", this.newUserParams)
        .then((response) => {
          console.log(response.data);
          this.$router.push("/");
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>
