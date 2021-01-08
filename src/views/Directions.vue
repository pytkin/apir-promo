<template>
  <div class="site-content directions-screen">
    <div class="page-header"><div class="bg"></div></div>
    <div class="page-content">
      <div class="text-wrap">
        <div class="page-number">02</div>
        <h2 class="page-title">Направления нашей работы</h2>
        <div class="text-wrap">
          <p>
            Мы создаем программные продукты под ваши требования. В нашем
            портфеле уже более 10 прикладных решений различной отраслевой
            специфики. Наш опыт позволяет принимать верные решения не только при
            программировании, но и на этапе написания технического задания.
          </p>
        </div>
        <router-link to="/directions/all" class="more-link"
          >Узнать больше</router-link
        >
        <button type="button" class="page-transition-handle-btn">Далее</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "directions"
};
</script>
