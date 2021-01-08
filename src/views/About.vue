<template>
  <div class="site-content about-screen">
    <div class="page-header"><div class="bg"></div></div>
    <div class="page-content">
      <div class="text-wrap">
        <div class="page-number">05</div>
        <h2 class="page-title">О компании</h2>
        <div class="text-wrap">
          <p>Компания «АПИР» — эксперт на рынке умных-технологий.</p>
          <p>
            Основной профиль компании – разработка программного обеспечения
            умных-сервисов.
          </p>
          <p>
            ООО «АПИР» — экспертный центр по проектам «умных» технологий на
            предприятиях и в городах. «Умные» технологии позволяют оперативно
            удобно и наглядно управлять различными услугами в сфере ЖКХ,
            дорожного хозяйства, отходами, спортивными и культурными объектами.
          </p>
        </div>
        <router-link class="more-link" to="/about/more">Подробнее</router-link>
        <button type="button" class="page-transition-handle-btn">Далее</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "about"
};
</script>
