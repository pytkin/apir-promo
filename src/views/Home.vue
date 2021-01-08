<template>
  <div class="site-content main-screen">
    <div class="promo-section">
      <h2>Разрабатываем и внедряем программное обеспечение</h2>

      <div class="news-wrap">
        <new-flickity
          class="slide-wrap"
          ref="flickity"
          :options="flickityOptions"
        >
          <div class="slide-item">
            <h3>
              Участники IV Всероссийского форума "Взгляд в цифровое будущее"
            </h3>
            <p>
              24-26 октября в г.Сочи проходил, организованный ПАО "Ростелеком",
              форум, посвященный развитию инфраструктуры в интересах цифровой
              экономики для органов государственной власти.
            </p>
          </div>
        </new-flickity>
      </div>
      <button
        class="btn btn-primary"
        type="button"
        @click="showRequestFormModal"
      >
        Оставить заявку
      </button>
    </div>
    <div class="walking-man"></div>
    <div class="planets">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 600.57 808.17"
      >
        <defs>
          <linearGradient
            id="linear-gradient"
            x1="20.51"
            x2="20.51"
            y1="420.97"
            y2="419.97"
            gradientTransform="matrix(.7 0 0 -200.24 308 84294.59)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stop-color="#fff" />
            <stop offset="1" stop-color="#dbe1f4" />
          </linearGradient>
          <radialGradient
            id="radial-gradient"
            cx="-50.19"
            cy="419.27"
            r=".6"
            gradientTransform="matrix(0 557.21 557.21 0 -233298.66 28081.26)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stop-color="#fff" />
            <stop offset=".7" stop-color="#fff" stop-opacity=".38" />
            <stop offset="1" stop-color="#fff" stop-opacity="0" />
          </radialGradient>
          <linearGradient
            id="linear-gradient-2"
            x1="-119.49"
            x2="-119.49"
            y1="420.82"
            y2="419.82"
            gradientTransform="matrix(-.7 0 0 -216.51 379.42 91112.04)"
            xlink:href="#linear-gradient"
          />
          <radialGradient
            id="radial-gradient-2"
            cx="-48.74"
            cy="425.74"
            r="1.33"
            gradientTransform="matrix(53.26 0 0 -53.26 3048.48 22924.01)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stop-color="#fff" />
            <stop offset="1" stop-color="#fff" stop-opacity="0" />
          </radialGradient>
          <linearGradient
            id="linear-gradient-3"
            x1="-.49"
            x2="-.49"
            y1="419.56"
            y2="418.56"
            gradientTransform="matrix(1 0 0 -716.25 338 300513.09)"
            xlink:href="#linear-gradient"
          />
          <radialGradient
            id="radial-gradient-3"
            cx="-48.18"
            cy="430.32"
            r="1.06"
            gradientTransform="matrix(37.28 0 0 -37.28 2133.65 16727.08)"
            xlink:href="#radial-gradient-2"
          />
          <linearGradient
            id="linear-gradient-4"
            x1="-.49"
            x2="-.49"
            y1="419.8"
            y2="418.8"
            gradientTransform="matrix(1 0 0 -501.23 54 210415.42)"
            xlink:href="#linear-gradient"
          />
          <radialGradient
            id="radial-gradient-4"
            cx="-49.03"
            cy="414.86"
            r=".92"
            gradientTransform="matrix(-106.54 0 0 106.54 -5072.36 -43644.82)"
            xlink:href="#radial-gradient-2"
          />
          <linearGradient
            id="linear-gradient-5"
            x1="-.49"
            x2="-.49"
            y1="419.61"
            y2="418.61"
            gradientTransform="matrix(1 0 0 -662.67 485.73 278061.98)"
            xlink:href="#linear-gradient"
          />
          <radialGradient
            id="radial-gradient-5"
            cx="-51.99"
            cy="419.05"
            r="1.07"
            gradientTransform="scale(145.46 -145.46) rotate(-78.21 -285.4 172.76)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stop-color="#647bb7" />
            <stop offset="1" stop-color="#fff" stop-opacity="0" />
          </radialGradient>
        </defs>
        <path
          id="yellow-planet-line"
          fill="url(#linear-gradient)"
          d="M322 0h.7v200.26h-.7z"
        />
        <g id="yellow-planet">
          <path
            id="Path"
            fill="#fff0c9"
            d="M322 759c153.87 0 278.6-125.22 278.6-279.7S475.84 199.6 322 199.6 43.36 324.82 43.36 479.3 168.1 759 322 759z"
          />
          <path
            id="Path-2"
            fill="url(#radial-gradient)"
            d="M321.62 759.41c153.87 0 278.6-125.22 278.6-279.7S475.49 200 321.62 200 43 325.24 43 479.72s124.75 279.69 278.62 279.69z"
            data-name="Path"
          />
        </g>
        <path
          id="green-planet-line"
          fill="url(#linear-gradient-2)"
          d="M463.41 0h-.7v216.53h.7z"
        />
        <g id="green-planet">
          <path
            id="Path-3"
            fill="#72bab6"
            d="M461.64 270.27a26.63 26.63 0 0 0 0-53.26 26.63 26.63 0 0 0 0 53.26z"
            data-name="Path"
          />
          <path
            id="Path-4"
            fill="url(#radial-gradient-2)"
            d="M461.64 270.27a26.63 26.63 0 0 0 0-53.26 26.63 26.63 0 0 0 0 53.26z"
            data-name="Path"
          />
        </g>
        <path
          id="gray-planet-line"
          fill="url(#linear-gradient-3)"
          d="M337 0h1v716.27h-1z"
        />
        <g id="gray-planet">
          <path
            id="Path-5"
            fill="#bdc1c4"
            d="M337.66 753.29a18.64 18.64 0 0 0 0-37.28 18.64 18.64 0 0 0 0 37.28z"
            data-name="Path"
          />
          <path
            id="Path-6"
            fill="url(#radial-gradient-3)"
            d="M337.66 753.29a18.64 18.64 0 0 0 0-37.28 18.64 18.64 0 0 0 0 37.28z"
            data-name="Path"
          />
        </g>
        <path
          id="red-planet-line"
          fill="url(#linear-gradient-4)"
          d="M53 0h1v501.25h-1z"
        />
        <g id="red-planet">
          <path
            id="Path-7"
            fill="#e8c7db"
            d="M53.61 607.36a53.27 53.27 0 0 0 0-106.54 53.27 53.27 0 1 0 0 106.54z"
            data-name="Path"
          />
          <path
            id="Path-8"
            fill="url(#radial-gradient-4)"
            d="M53.28 607.57A53.27 53.27 0 1 0 0 554.31a53.27 53.27 0 0 0 53.28 53.26z"
            data-name="Path"
          />
        </g>
        <path
          id="blue-planet-line"
          fill="url(#linear-gradient-5)"
          d="M484.74 0h1v662.67h-1z"
        />
        <g id="blue-planet">
          <path
            id="Path-9"
            fill="#9abee9"
            d="M484.83 808.17a72.73 72.73 0 0 0 72.72-72.74 72.73 72.73 0 0 0-145.45-1.71v1.71a72.73 72.73 0 0 0 72.71 72.75z"
            data-name="Path"
          />
          <path
            id="Path-10"
            fill="url(#radial-gradient-5)"
            d="M484.83 808.17a72.73 72.73 0 0 0 72.72-72.74 72.73 72.73 0 0 0-145.45-1.71v1.71a72.73 72.73 0 0 0 72.71 72.75z"
            data-name="Path"
          />
        </g>
      </svg>
    </div>
    <div class="bg"></div>

    <vudal
      name="requestFormModal"
      class="dialog-content"
      id="make-request-form"
    >
      <form>
        <button type="button" class="close-modal close"></button>
        <div class="form-header">
          <h2>Оставить заявку</h2>
          <div class="sub-header">
            Расскажите подробнее про вашу идею или проект.<br />Мы будем рады
            помочь в его создании и разработке.
          </div>
        </div>
        <div class="form-body">
          <div class="form-group">
            <label for="name">Имя*</label>
            <input
              type="text"
              name="name"
              id="name"
              class="form-control"
              placeholder="Ваше имя"
            />
          </div>
          <div class="form-group">
            <label for="email">Email*</label>
            <input
              type="text"
              name="email"
              id="email"
              class="form-control"
              placeholder="example@mail.com"
            />
          </div>
          <div class="form-group">
            <label for="phone">Телефон*</label>
            <input
              type="text"
              name="phone"
              id="phone"
              class="form-control"
              placeholder="+7"
            />
          </div>
          <div class="form-group">
            <label for="details">Пара слов о вашем проекте</label>
            <input
              type="text"
              name="details"
              id="details"
              class="form-control"
            />
          </div>
          <div class="form-group">
            <label for="budget">Планируемый бюджет</label>
            <v-select
              v-model="selected"
              :searchable="false"
              :options="['500 тыс. ₽ — 1 млн. ₽']"
              name="budget"
              id="budget"
            ></v-select>
          </div>
          <div class="upload-file-control">
            <label class="attach-file-handle">
              <input type="file" name="file" id="file" />
              <span>Прикрепить файл</span>
            </label>
          </div>
        </div>
        <div class="form-actions">
          <button type="submit" class="btn btn-primary">Отправить</button>
          <label class="inline-checkbox" for="data-policy">
            <input type="checkbox" name="data-policy" id="data-policy" />
            <span
              ><i
                >Настоящим подтверждаю, что я ознакомлен и согласен с
                <a href="#" target="_blank"
                  >политикой обработки персональных данных</a
                >.</i
              ></span
            >
          </label>
        </div>
      </form>
    </vudal>
  </div>
</template>

<script>
import Vudal from "vudal";
import Flickity from "vue-flickity";

const NewFlickity = {
  ...Flickity,
  beforeDestroy: function() {
    return;
  }
};

export default {
  name: "home",
  components: { Vudal, NewFlickity },
  data: function() {
    return {
      flickityOptions: {
        wrapAround: true,
        prevNextButtons: false,
        pageDots: true
      },
      selected: null
    };
  },
  methods: {
    showRequestFormModal() {
      this.$modals.requestFormModal.$show();
    },
    next() {
      this.$refs.flickity.next();
    },
    prev() {
      this.$refs.flickity.previous();
    }
  }
};
</script>
