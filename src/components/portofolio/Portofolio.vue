<template>
  <div>
    <app-stock v-for="stock in stocks" :key="stock.id" :stock="stock" />
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import { mapGetters } from "vuex";
import appStock from "./Stock.vue";

export default Vue.extend({
  computed: {
    ...mapGetters({ stocks: "stockPortofolio" })
  },
  components: {
    appStock
  }
});
</script>