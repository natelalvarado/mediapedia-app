<template>
  <div class="main-wrapper">
    <!-- start login table -->
    <section>
      <div class="container">
        <div class="row">
          <div class="col-lg-6 center-col">
            <div
              class="
                padding-40px-all
                sm-padding-25px-all
                shadow
                border-radius-4
              "
            >
              <h3 class="text-center margin-40px-bottom">Login</h3>
              <form v-on:submit.prevent="submit()">
                <div class="row">
                  <div class="col-md-12">
                    <div class="form-group">
                      <input
                        class="form-control"
                        name="username"
                        id="username"
                        required="required"
                        placeholder="User Name"
                        maxlength="70"
                        type="email"
                        v-model="newSessionParams.email"
                      />
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="form-group">
                      <input
                        class="form-control"
                        type="password"
                        name="password"
                        id="password"
                        required="required"
                        placeholder="Password"
                        maxlength="70"
                        v-model="newSessionParams.password"
                      />
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-sm-6 mb-2">
                    <div class="custom-control custom-checkbox text-left">
                      <input
                        type="checkbox"
                        class="custom-control-input"
                        id="login-remember"
                      />
                      <label class="custom-control-label" for="login-remember"
                        >Keep me signed in</label
                      >
                    </div>
                  </div>
                  <div class="col-sm-6 text-left text-sm-right">
                    <a href="#!">Forgot password?</a>
                  </div>
                </div>

                <div class="col-md-12 margin-25px-top">
                  <button
                    type="button"
                    class="butn btn-block"
                    v-on:click.prevent="submit()"
                  >
                    Login
                  </button>
                </div>

                <div class="col-md-12 text-center margin-25px-top">
                  <span
                    >Don't have an account yet?
                    <a href="/signup">Signup</a></span
                  >
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div class="login">
      <form v-on:submit.prevent="submit()">
        <h1>Login</h1>
        <ul>
          <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
        </ul>
        <div>
          <label>Email:</label>
          <input type="email" v-model="newSessionParams.email" />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" v-model="newSessionParams.password" />
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
      newSessionParams: {},
      errors: [],
    };
  },
  methods: {
    submit: function () {
      axios
        .post("/sessions", this.newSessionParams)
        .then((response) => {
          axios.defaults.headers.common["Authorization"] =
            "Bearer " + response.data.jwt;
          localStorage.setItem("jwt", response.data.jwt);
          this.$router.push("/");
        })
        .catch((error) => {
          console.log(error.response);
          this.errors = ["Invalid email or password."];
          this.newSessionParams = {};
        });
    },
  },
};
</script>
