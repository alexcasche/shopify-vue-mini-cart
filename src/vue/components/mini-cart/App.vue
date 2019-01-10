<template lang="html">
  <div class="c-miniCart">
    <Trigger />
    <Overlay />
    <Drawer />
  </div>
</template>

<script>
import Trigger from "./Trigger.vue";
import Overlay from "./Overlay.vue";
import Drawer from "./Drawer.vue";

export default {
  components: {
    Trigger,
    Overlay,
    Drawer
  }
};
</script>