<template>
  <div>
    <button>Vue Mini Cart</button>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  props: {
    externalProp: {
      type: String,
      default: ""
    }
  },
  computed: {
    ...mapGetters("example", ["value"])
  }
};
</script>