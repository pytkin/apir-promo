
<template>
  <header class="header">
    <div class="logo" @click="hideMobileMenu">
      <router-link to="/" class="logo-link"></router-link>
    </div>
    <nav class="main-nav">
      <router-link to="/directions">Направления</router-link>
      <router-link to="/technologies">Технологии</router-link>
      <router-link to="/projects">Проекты</router-link>
      <router-link to="/about">О компании</router-link>
      <router-link to="/contacts">Контакты</router-link>
    </nav>
    <button type="button" class="menu-overlay-toggle" @click="toggleMobileMenu">
      <div class="open-icon"></div>
      <div class="close-icon"></div>
      <div class="caption">Закрыть</div>
    </button>
  </header>
</template>

<script>
import $ from "jquery";

export default {
  name: "Header",
  methods: {
    toggleMobileMenu() {
      if (this.$parent.showMobileOverlay) {
        $("body").removeClass("is-mobile-menu-overlay-visible");
      } else {
        $("body").addClass("is-mobile-menu-overlay-visible");
      }

      this.$parent.showMobileOverlay = !this.$parent.showMobileOverlay;
    },
    hideMobileMenu() {
      this.$parent.showMobileOverlay = false;
      $("body").removeClass("is-mobile-menu-overlay-visible");
    }
  }
};
</script>
