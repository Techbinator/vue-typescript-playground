<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <router-link class="navbar-brand" to="/">Stock Trader</router-link>
    <div class="collapse navbar-collapse">
      <ul class="navbar-nav mr-auto">
        <router-link to="/portofolio" activeClass="active" tag="li">
          <a class="nav-link">Portofolio</a>
        </router-link>
        <router-link to="/stocks" activeClass="active" tag="li">
          <a class="nav-link">Stocks</a>
        </router-link>
      </ul>
      <strong class="navbar-text navbar-right">Funds: {{ funds | currency }}</strong>
      <ul class="nav navbar-nav navbar-right">
        <li class="nav-item">
          <a class="nav-link" href="#" @click="endDay">End Day</a>
        </li>
        <li class="nav-item dropdown" :class="{show: isDropdownActive}">
          <a
            class="nav-link dropdown-toggle"
            href="#"
            id="navbarDropdownMenuLink"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
            @click="isDropdownActive= !isDropdownActive"
          >Save and load</a>
          <div
            class="dropdown-menu"
            :class="{show: isDropdownActive}"
            aria-labelledby="navbarDropdownMenuLink"
          >
            <a class="dropdown-item" href="#">Save</a>
            <a class="dropdown-item" href="#">Load</a>
          </div>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script lang="ts">
import Vue from "vue";
import { mapActions } from "vuex";

export default Vue.extend({
  data() {
    return {
      isDropdownActive: false
    };
  },
  computed: {
    funds() {
      return this.$store.getters.funds;
    }
  },
  methods: {
    ...mapActions(["randomizeStocks"]),
    endDay() {
      this.randomizeStocks();
    }
  }
});
</script>