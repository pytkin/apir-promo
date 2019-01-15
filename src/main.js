import Vue from "vue";
import { VudalPlugin } from "vudal";
import VueTabs from "vue-nav-tabs";
import * as VueGoogleMaps from "vue2-google-maps";
import vSelect from "vue-select";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "fullpage.js/vendors/scrolloverflow";
import VueFullPage from "vue-fullpage.js";
import { ResizeObserver } from "vue-resize";

Vue.use(VudalPlugin);
Vue.use(VueTabs);
Vue.use(VueFullPage);
Vue.use(VueGoogleMaps, {
  load: {
    key:
      process.env.NODE_ENV === "production"
        ? "AIzaSyDeQH-LcGq5UczePcG0HZJjtlMeHQHowoY"
        : "AIzaSyBxZ4j-CQEhUds8Nv6wT9PFNOEfMvjOHKU"
  }
});
Vue.component("resize-observer", ResizeObserver);
Vue.component("v-select", vSelect);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
