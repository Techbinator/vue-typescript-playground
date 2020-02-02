<template>
  <div class="col-sm-6 col-md-4 stock">
    <div class="card">
      <div class="card-body">
        <h3 class="card-title">
          {{ stock.name }}
          <small>(Price: {{ stock.price }}) | {{ stock.quantity }}</small>
        </h3>
        <div>
          <input placeholder="quantity" type="number" class="form-control" v-model="quantity" />
        </div>
        <div>
          <button class="btn btn-success" :disabled="quantity <=0" @click="sellStock">Sell</button>
        </div>
      </div>
    </div>
  </div>
</template>


<script lang="ts">
import Vue from "vue";
import { IStock } from "@/types/stocks";
import { mapActions } from "vuex";

export default Vue.extend({
  data() {
    return {
      quantity: "0"
    };
  },
  props: {
    stock: {
      type: Object as () => IStock
    }
  },
  methods: {
    ...mapActions(["sellStock"]),
    sellStock() {
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: this.quantity
      };
      this.sellStock();
    }
  }
});
</script>

<style lang="scss" scoped>
.stock {
  margin-top: 10px;
}
</style>