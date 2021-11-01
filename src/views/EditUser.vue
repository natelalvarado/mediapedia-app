<template>
  <div class="edit-user">
    <h1>Update Account</h1>
    <form v-on:submit.prevent="submit()">
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
  </div>
</template>

<style></style>

<script>
export default {
  data: function () {
    return {};
  },
  created: function () {},
  methods: {},
};
</script>
