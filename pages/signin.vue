<template>
  <section>
    <div class="col-md-4 offset-md-4 mt-3">
      <form autocomplete="off" @submit.stop.prevent="handleSubmit">
        <div class="form-group">
          <label for="email">Email</label>
          <b-form-input
            id="email"
            v-model="email"
            type="email"
            placeholder="Enter your email"
            required
          />
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <b-form-input
            id="password"
            v-model="password"
            label="password"
            type="password"
            class="form-control"
            placeholder="Enter your password"
            required
          />
        </div>
        <button :disabled="loading" type="submit" class="btn btn-primary btn-block mt-3">Submit</button>
        <p class="text-center mt-3">
          No account yet
          <router-link :to="{ name: 'signup' }" tag="a">Contact Admin </router-link>
        </p>
      </form>
    </div>
  </section>
</template>
<script>
import Strapi from "strapi-sdk-javascript/build/main";
import axios from "axios";
let axiosSignin = axios.create({
  baseURL: process.env.baseUrl
});
// const apiUrl = process.env.API_URL || "http://localhost:1337";
// const strapi = new Strapi(apiUrl);
import { mapMutations } from "vuex";
export default {
  data() {
    return {
      email: "",
      password: "",
      loading: false
    };
  },
  methods: {
    async handleSubmit() {
      const formData = new FormData();
      formData.append("identifier", this.email);
      formData.append("password", this.password);
      try {
        axiosSignin
          .post("/auth/local", formData, {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded"
            }
          })
          .then(response => {
            // Handle success.
            console.log("Well done!");
            console.log("User profile", response.data.user);
            console.log("User token", response.data.jwt);
            this.setUser(response.data.user);
            this.setAuthorization(response.data.jwt);
                    window.location.href = "/orders";
          })
          .catch(error => {
            // Handle error.
            console.log("An error occurred:", error);
          });
        // const response = await strapi.login(this.email, this.password);

      } catch (err) {
        this.loading = false;
        alert(err.message || "An error occurred.");
      }
    },
    ...mapMutations({
      setUser: "auth/setUser",
      setAuthorization: "auth/setAuthorization"
    })
  }
};
</script>
