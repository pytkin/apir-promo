<template>
  <div id="app" class="site-wrapper">
    <Header :class="[
      $route.name != 'home' && $route.name != 'all-projects' && $route.name != 'about-more' && $route.name != 'all-directions' ? 'inner-page' : '',
      $route.name == 'about-more' ? 'about-more-inner-page' : '',
      $route.name == 'all-directions' ? 'directions-all-inner-page' : ''
    ]" />
    <MobileMenuOverlay :show="showMobileOverlay" />
    <transition
      name="screen"
      mode="out-in"
      v-on:beforeEnter="beforeEnter"
      v-on:enter="enter"
      v-on:afterEnter="afterEnter"
      v-on:afterLeave="afterLeave"
      v-on:leave="leave"
      v-on:beforeLeave="beforeLeave"
      appear
    >
      <router-view />
    </transition>
    <div class="page-transition-indicator">
      <div class="wrap">
        <div class="bg"></div>
        <div class="tbg"></div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import $ from "jquery";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileMenuOverlay from "@/components/MobileMenuOverlay";
// import Flickity from "flickity";

const updateBgs = (routeName, indicator, isTBgs = true) => {
  const updateTarget = isTBgs ? indicator.find(".bg") : indicator.find(".tbg");

  switch (routeName) {
    case "directions":
      updateTarget.css("background-color", "#F2F0E8");
      break;
    case "technologies":
      updateTarget.css("background-color", "#F2E8E8");
      break;
    case "projects":
      updateTarget.css("background-color", "#E8F2F1");
      break;
    case "about":
      updateTarget.css("background-color", "#F2E8EF");
      break;
    case "contacts":
      updateTarget.css("background-color", "#E8EFF2");
      break;
    default:
      updateTarget.css("background-color", "#fff");
      break;
  }
};

export default {
  name: "app",
  components: {
    Header,
    Footer,
    MobileMenuOverlay
  },
  data() {
    return {
      showMobileOverlay: false
    };
  },
  methods: {
    beforeEnter: function() {
      if (!$(".page-transition-indicator").hasClass("slide-in")) {
        updateBgs(this.$route.name, $(".page-transition-indicator"));
      } else {
        updateBgs(this.$route.name, $(".page-transition-indicator"), false);

        $(".page-transition-indicator").addClass("up-bg");
      }
    },
    enter: function() {
      // fix height of slider for home screen
      const homeScreen = this.$children.find(
        child => child.$options.name == "home"
      );
      if (typeof homeScreen !== "undefined") {
        homeScreen.$refs.flickity.resize();
      }

      if (
        this.$route.name !== "home" &&
        this.$route.name !== "all-projects" &&
        this.$route.name !== "all-directions" &&
        this.$route.name !== "about-more"
      ) {
        $(".page-transition-indicator").addClass("slide-in");
      }
    },
    afterEnter: function() {
      // $(el).addClass("screen-in");
      if ($(".page-transition-indicator").hasClass("slide-in")) {
        updateBgs(this.$route.name, $(".page-transition-indicator"));
      }
      $(".page-transition-indicator").removeClass("up-bg");
    },
    beforeLeave: function() {
      if (this.$route.name === "about-more") {
        $(".about-screen").addClass("subpage-transition");
      }
    },
    leave: function() {
      if (
        this.$route.name === "home" ||
        this.$route.name === "all-projects" ||
        this.$route.name === "all-directions"
      ) {
        $(".page-transition-indicator").removeClass("slide-in");
      }
    },
    afterLeave: function() {
      // if (this.$route.name !== "home") {
      //   this.visiblePageTransIndicator = true;
      // }
    }
  }
};
</script>


<style lang="pcss" src="./assets/styles/main.pcss" />
