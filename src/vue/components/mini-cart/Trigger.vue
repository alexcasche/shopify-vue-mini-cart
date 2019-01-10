<template>
  <button class="c-trigger" @click="setDrawer('open')">Open Cart</button>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  methods: {
    ...mapMutations("miniCart", ["setDrawer"])
  }
};
</script>

<style scoped>
</style>

