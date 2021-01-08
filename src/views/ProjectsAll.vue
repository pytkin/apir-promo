<template>
  <div class="site-content all-projects-screen">
    <div class="page-content">
      <ul class="breadcrumbs">
        <li>
          <router-link to="/">Главная</router-link>
        </li>
        <li>
          <router-link to="/projects">Проекты</router-link>
        </li>
        <li>
          <span>Все проекты</span>
        </li>
      </ul>
      <div class="page-header">
        <h2>Все проекты</h2>
        <div class="project-filters">
          <v-select
            v-model="industryFilter"
            :searchable="false"
            :options="['Все']"
            placeholder="Отрасль"
          ></v-select>
          <v-select
            v-model="directionFilter"
            :searchable="false"
            :options="['Все']"
            placeholder="Направление"
          ></v-select>
          <v-select
            v-model="technologyFilter"
            :searchable="false"
            :options="['Все']"
            placeholder="Технология"
          ></v-select>
        </div>
      </div>
      <div class="projects-wrap">
        <a class="item" href="#" target="_blank" rel="noopener nofollow">
          <div
            class="bg"
            v-bind:style="{ 'background-image': 'url(' + image1 + ')' }"
          ></div>
          <div class="title">Комплексная система<br />управления отходами</div>
        </a>
        <a class="item" href="#" target="_blank" rel="noopener nofollow">
          <div
            class="bg"
            v-bind:style="{ 'background-image': 'url(' + image2 + ')' }"
          ></div>
          <div class="title">Мониторинг<br />культуры</div>
        </a>
        <a class="item" href="#" target="_blank" rel="noopener nofollow">
          <div
            class="bg"
            v-bind:style="{ 'background-image': 'url(' + image3 + ')' }"
          ></div>
          <div class="title">Спортивный<br />портал</div>
        </a>
        <a class="item" href="#" target="_blank" rel="noopener nofollow">
          <div
            class="bg"
            v-bind:style="{ 'background-image': 'url(' + image4 + ')' }"
          ></div>
          <div class="title">Спортивная<br />академия</div>
        </a>
        <a class="item" href="#" target="_blank" rel="noopener nofollow">
          <div
            class="bg"
            v-bind:style="{ 'background-image': 'url(' + image5 + ')' }"
          ></div>
          <div class="title">Управление<br />спортивными объектами</div>
        </a>
        <a class="item" href="#" target="_blank" rel="noopener nofollow">
          <div
            class="bg"
            v-bind:style="{ 'background-image': 'url(' + image6 + ')' }"
          ></div>
          <div class="title">Управление<br />мероприятиями</div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import image1 from "@/assets/images/big-project-image1.jpg";
import image2 from "@/assets/images/big-project-image2.jpg";
import image3 from "@/assets/images/big-project-image3.jpg";
import image4 from "@/assets/images/big-project-image4.jpg";
import image5 from "@/assets/images/big-project-image5.jpg";
import image6 from "@/assets/images/big-project-image6.jpg";

export default {
  name: "allProjects",
  data: function() {
    return {
      image1,
      image2,
      image3,
      image4,
      image5,
      image6,
      industryFilter: null,
      directionFilter: null,
      technologyFilter: null
    };
  }
};
</script>
