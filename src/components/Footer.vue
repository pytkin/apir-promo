<template>
  <footer class="footer">
    <div class="page-transition-handle">
      <div class="transition-indicator"></div>
      <button type="button" class="btn" @click="nextPage">Далее</button>
    </div>
    <nav class="social-services">
      <a href="#" target="_blank" rel="noopener noreferer" class="vk"></a>
      <a href="#" target="_blank" rel="noopener noreferer" class="facebook"></a>
      <a
        href="#"
        target="_blank"
        rel="noopener noreferer"
        class="instagram"
      ></a>
    </nav>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  methods: {
    nextPage() {
      switch (this.$route.name) {
        case "home":
          this.$router.push("/directions");
          break;
        case "directions":
          this.$router.push("/technologies");
          break;
        case "technologies":
          this.$router.push("/projects");
          break;
        case "projects":
          this.$router.push("/about");
          break;
        case "about":
          this.$router.push("/contacts");
          break;
        default:
          return false;
      }
    }
  }
};
</script>
