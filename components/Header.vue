
<template>
  <div>
    <b-navbar toggleable="lg" type="light" variant="light">
      <b-navbar-brand :to="'/orders'" v-show="isAuthenticated">Home</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav v-show="isAuthenticated">
          <b-nav-item-dropdown text="Đơn hàng" left>
            <b-dropdown-item :to="'/orders'">Danh sách đơn hàng</b-dropdown-item>
            <b-dropdown-item>...</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <!-- <b-nav-form>
            <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
            <b-button size="sm" class="my-2 my-sm-0" variant="outline-success" type="submit">Search</b-button>
          </b-nav-form>-->
          <b-navbar-brand href="#">
            <b-img rounded="circle" src="https://placekitten.com/g/30/30" alt="Kitten" />
          </b-navbar-brand>
          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template v-slot:button-content>
              <em>{{username}}</em>
            </template>
            <b-dropdown-item v-if="!username" href="#" to="/signin">Sign In</b-dropdown-item>
            <b-dropdown-item v-if="username" href="#" @click="logout">Sign Out</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import { fileURLToPath } from 'url';
import axios from '~/plugins/axios'
export default {
  data() {
    return {
      file: null
    };
  },
  computed: {
    username() {
      return this.$store.getters["auth/username"];
    },
    isAuthenticated() {
      return this.$store.getters["auth/isAuthenticated"];
    }
  },
  methods: {
    ...mapMutations({
      logout: "auth/logout"
    })
  }
};
</script>
