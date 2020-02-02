<template>
  <div class="col-sm-6 col-md-4 stock">
    <div class="card">
      <div class="card-body">
        <h3 class="card-title">
          {{ stock.name }}
          <small>(Price: {{ stock.price }}) | {{ stock.quantity }}</small>
        </h3>
        <div>
          <input
            placeholder="quantity"
            type="number"
            class="form-control"
            v-model.number="quantity"
          />
        </div>
        <div>
          <button
            class="btn btn-success"
            :disabled="insufficentQuantity || quantity <=0 || !Number.isInteger(quantity)"
            @click="sellStock"
          >{{insufficentQuantity ? 'Not enought Stocks' : 'Sell'}}</button>
        </div>
      </div>
    </div>
  </div>
</template>


<script lang="ts">
import Vue from "vue";
import { IStock } from "@/types/stocks";
import { mapActions } from "vuex";
import { IStockPortofolio } from "../../types/portofolio";

export default Vue.extend({
  data() {
    return {
      quantity: 0
    };
  },
  computed: {
    insufficentQuantity(): boolean {
      return this.quantity > this.stock.quantity;
    }
  },
  props: {
    stock: {
      type: Object as () => IStockPortofolio
    }
  },
  methods: {
    ...mapActions({ sellStockAction: "sellStock" }),
    sellStock() {
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: this.quantity
      };
      this.sellStockAction(order);
      this.quantity = 0;
    }
  }
});
</script>

<style lang="scss" scoped>
.stock {
  margin-top: 10px;
}
</style>