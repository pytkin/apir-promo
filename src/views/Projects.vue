<template>
  <div class="site-content projects-screen">
    <div class="page-header"><div class="bg"></div></div>
    <div class="page-content">
      <div class="text-wrap">
        <div class="page-number">04</div>
        <h2 class="page-title">Наши проекты</h2>
        <p>Мы разрабатываем и внедряем сложные информационные системы.<br>О некоторых из них мы можем вам рассказать.</p>
        <router-link class="more-link" to="/projects/all">Посмотреть все проекты компании</router-link>
      </div>
      <new-flickity class="projects-wrap" ref="flickity" :options="flickityOptions">
        <div class="item">
          <div class="bg" v-bind:style="{ 'background-image': 'url(' + image1 + ')' }"></div>
          <div class="title">Комплексная система<br>управления отходами</div>
        </div>
        <div class="item">
          <div class="bg" v-bind:style="{ 'background-image': 'url(' + image2 + ')' }"></div>
          <div class="title">Мониторинг<br>культуры</div>
        </div>
        <div class="item">
          <div class="bg" v-bind:style="{ 'background-image': 'url(' + image3 + ')' }"></div>
          <div class="title">Спортивный<br>портал</div>
        </div>
        <div class="item">
          <div class="bg" v-bind:style="{ 'background-image': 'url(' + image4 + ')' }"></div>
          <div class="title">Спортивная<br>академия</div>
        </div>
        <div class="item">
          <div class="bg" v-bind:style="{ 'background-image': 'url(' + image5 + ')' }"></div>
          <div class="title">Управление<br>спортивными объектами</div>
        </div>
        <div class="item">
          <div class="bg" v-bind:style="{ 'background-image': 'url(' + image6 + ')' }"></div>
          <div class="title">Управление<br>мероприятиями</div>
        </div>
      </new-flickity>
      <button type="button" class="page-transition-handle-btn">Далее</button>
    </div>
  </div>
</template>

<script>
import Flickity from "vue-flickity";

const NewFlickity = {
  ...Flickity,
  beforeDestroy: function() {
    return;
  }
};

import image1 from "@/assets/images/project-image1.jpg";
import image2 from "@/assets/images/project-image2.jpg";
import image3 from "@/assets/images/project-image3.jpg";
import image4 from "@/assets/images/project-image4.jpg";
import image5 from "@/assets/images/project-image5.jpg";
import image6 from "@/assets/images/project-image6.jpg";

export default {
  name: "projects",
  components: { NewFlickity },
  data: function() {
    return {
      flickityOptions: {
        cellAlign: "left",
        prevNextButtons: true,
        pageDots: true,
        wrapAround: true
      },
      image1,
      image2,
      image3,
      image4,
      image5,
      image6
    };
  }
};
</script>
