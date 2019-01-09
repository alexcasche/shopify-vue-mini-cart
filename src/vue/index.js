import Vue from "vue";
import Vuex from "vuex";
import store from "./store";
import vueCustomElement from "vue-custom-element";
import "document-register-element";

Vue.config.devtools = true;
Vue.use(Vuex);
Vue.use(vueCustomElement);

const vuexStore = new Vuex.Store(store);

const widgets = {
  "vue-example": "VueExample.vue"
};

Object.entries(widgets).forEach(widget => {
  const [name, componentPath] = widget;
  const component = require(`./components/${componentPath}`).default;
  component.store = vuexStore;
  Vue.customElement(name, component);
});
