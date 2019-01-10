<template>
  <transition name="fade">
    <div v-if="isOpen" class="c-overlay" @click="setDrawer('close')"></div>
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
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.fade-leave,
.fade-enter-to {
  opacity: 1;
}
.c-overlay {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 100;
  background-color: rgba(0, 0, 0, 0.4);
  transition: opacity 0.35s ease;
}
</style>

