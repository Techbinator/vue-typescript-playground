<template>
  <div id="app" class="container">
    <Header />
    <div>
      <div class="col-xs-12">
        <transition name="slide" mode="out-in">
          <router-view />
        </transition>
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

<style lang="scss" scoped>
.slide-enter-active {
  animation: slide-in 200ms ease-out forwards;
}

.slide-leave-active {
  animation: slide-out 200ms ease-out forwards;
}

@keyframes slide-in {
  from {
    transform: translateY(-30px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes slide-out {
  from {
    transform: translateY(0);
    opacity: 1;
  }
  to {
    transform: translateY(-30px);
    opacity: 0;
  }
}
</style>
