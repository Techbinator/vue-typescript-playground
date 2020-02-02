<template>
  <div id="app" class="container">
    <Header />
    <div>
      <div class="col-xs-12">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import Header from "@/components/Header.vue";
export default Vue.extend({
  components: { Header },
  created() {
    this.$store.dispatch("initStocks");
  }
});
</script>
