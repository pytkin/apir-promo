<template>
  <div class="mobile-menu-overlay-container">
    <transition name="overlay-bg">
      <div class="mobile-menu-overlay-bg" v-show="show" @click="hideMobileOverlay"></div>
    </transition>
    <transition name="overlay">
      <div class="mobile-menu-overlay" v-if="show">
        <ul class="mobile-main-nav">
          <li @click="hideMobileOverlay">
            <router-link to="/directions">Направления</router-link>
          </li>
          <li @click="hideMobileOverlay">
            <router-link to="/technologies">Технологии</router-link>
          </li>
          <li @click="hideMobileOverlay">
            <router-link to="/projects">Проекты</router-link>
          </li>
          <li @click="hideMobileOverlay">
            <router-link to="/about">О компании</router-link>
          </li>
          <li @click="hideMobileOverlay">
            <router-link to="/contacts">Контакты</router-link>
          </li>
        </ul>

        <div class="mobile-overlay-footer">
          <nav class="mobile-soc-nav">
            <a href="#" target="_blank" rel="noopener noreferer" class="vk"></a>
            <a href="#" target="_blank" rel="noopener noreferer" class="facebook"></a>
            <a href="#" target="_blank" rel="noopener noreferer" class="instagram"></a>
          </nav>
          <a href="mailto:info@apir.pro" class="contact-email">info@apir.pro</a>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import $ from "jquery";

export default {
  name: "mobileMenuOverlay",
  props: ["show"],
  methods: {
    hideMobileOverlay() {
      $("body").removeClass("is-mobile-menu-overlay-visible");
      this.$parent.showMobileOverlay = false;
    }
  }
};
</script>
