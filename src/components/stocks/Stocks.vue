<template>
  <div class="row">
    <stock :stock="stock" v-for="stock in stocks" :key="stock.id" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Stock from "./Stock.vue";
import { IStock } from "@/store/modules/stocks";

export default Vue.extend({
  components: {
    stock: Stock
  },
  computed: {
    stocks(): IStock[] {
      return this.$store.getters.stocks;
    }
  }
});
</script>