<template>
  <div class="col-sm-6 col-md-4 stock">
    <div class="card">
      <div class="card-body">
        <h3 class="card-title">
          {{ stock.name }}
          <small>(Price: {{ stock.price }})</small>
        </h3>
        <div>
          <input
            placeholder="quantity"
            type="number"
            class="form-control"
            v-model.number="quantity"
            :class="{danger: insufficentFunds}"
          />
        </div>
        <div>
          <button
            class="btn btn-success"
            :disabled="quantity <=0 || !Number.isInteger(quantity)"
            @click="buyStock"
          >{{ insufficentFunds ? "Insufficient Funds": 'Buy' }}</button>
        </div>
      </div>
    </div>
  </div>
</template>


<script lang="ts">
import Vue from "vue";
import { IStock } from "@/types/stocks";

export default Vue.extend({
  data() {
    return {
      quantity: 2
    };
  },
  computed: {
    funds(): number {
      return this.$store.getters.funds;
    },
    insufficentFunds(): boolean {
      return this.quantity * this.stock.price > this.funds;
    }
  },
  props: {
    stock: {
      type: Object as () => IStock
    }
  },
  methods: {
    buyStock() {
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: this.quantity
      };
      this.$store.dispatch("buyStock", order);
      this.quantity = 0;
    }
  }
});
</script>

<style lang="scss" scoped>
.stock {
  margin-top: 10px;
}
.danger {
  border: 1px solid red;
}
</style>