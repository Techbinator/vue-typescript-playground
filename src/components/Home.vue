<template>
  <div>
    <h1>Trade or view your portofolio</h1>
    <h6>You may Save and Load data</h6>
    <h6>Click on 'End day' to begin a new day</h6>
    <hr />
    <p>Your Funds: {{ funds | currency }}</p>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  computed: {
    funds() {
      return this.$store.getters.funds;
    }
  }
});
</script>