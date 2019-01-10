<template>
  <transition name="slide">
    <div v-if="isOpen" class="c-drawer">
      <button class="c-drawer__close" @click="setDrawer('close')">Close Cart</button>
      <h1 class="c-drawer__heading">Shopping Cart</h1>
    </div>
  </transition>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  computed: {
    ...mapGetters("miniCart", ["isOpen"])
  },
  methods: {
    ...mapMutations("miniCart", ["setDrawer"])
  }
};
</script>

<style scoped>
.slide-enter,
.slide-leave-to {
  transform: translateX(100%);
}
.slide-leave,
.slide-enter-to {
  transform: translateX(0);
}
.c-drawer {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 100;
  width: 400px;
  max-width: 100%;
  background-color: white;
  text-align: center;
  overflow-y: scroll;
  transition: transform 0.35s ease;
}
</style>


