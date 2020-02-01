<template>
  <div class="row">
    <stock :stock="stock" v-for="stock in stocks" :key="stock.id" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Stock from "./Stock.vue";

export default Vue.extend({
  components: {
    stock: Stock
  },
  data() {
    return {
      stocks: [
        {
          id: 1,
          name: "BMW",
          price: 110
        },
        {
          id: 2,
          name: "Google",
          price: 200
        },
        {
          id: 3,
          name: "Apple",
          price: 250
        },
        {
          id: 4,
          name: "Twitter",
          price: 8
        }
      ]
    };
  }
});
</script>