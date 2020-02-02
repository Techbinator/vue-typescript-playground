<template>
  <div>
    {{ cacat() }}
    <app-stock v-for="stock in stocks" :key="stock.id" :stock="stock" />
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import appStock from "./Stock.vue";
import { IStockPortofolio } from "../../types/portofolio";

export default Vue.extend({
  computed: {
    stocks(): IStockPortofolio[] {
      return this.$store.getters.stockPortofolio;
    }
  },
  methods: {
    cacat() {
      console.log(this.stocks);
    }
  },
  components: {
    appStock
  }
});
</script>