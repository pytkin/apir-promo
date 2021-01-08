<template>
  <div class="site-content all-directions-screen">
    <div class="page-content">
      <full-page
        ref="fullpage"
        :options="fullpageOptions"
        id="fullpage"
        class="sections-wrap"
      >
        <div class="section section1">
          <div class="column-wrap">
            <div class="column-left">
              <div class="bg"></div>
              <router-link to="/directions" class="prev-link"
                >Назад</router-link
              >
              <div class="text-wrap">
                <h3>Направления нашей работы</h3>
                <h2>
                  Заказная разработка программных продуктов и аутсорсинг
                  IT-услуг
                </h2>
                <p>
                  Создаем программные продукты для решения сложных задач.<br />
                  Лидерство начинается с автоматизации.<br />
                  Чтобы делать что-то быстрее и лучше других, важно иметь
                  программное обеспечение, индивидуально разработанное под
                  бизнес-процессы заказчика.
                </p>
              </div>
            </div>
            <div class="column-right">
              <ol>
                <li>
                  Совместная подготовка технических требований, проектирование
                  программного продукта, внедрение и настройка системы у
                  заказчика
                </li>
                <li>
                  Размещение программного продукта и защита данных, обслуживание
                  и доработка информационной системы, консультации пользователей
                </li>
              </ol>
            </div>
            <span class="next-section-indicator"><span>Вниз</span></span>
          </div>
        </div>
        <div class="section section2">
          <div class="column-wrap">
            <div class="column-left">
              <router-link to="/directions" class="prev-link"
                >Назад</router-link
              >
              <div class="text-wrap">
                <h3>Направления нашей работы</h3>
                <h2>Разработка и внедрение корпоративных систем управления</h2>
                <p>
                  Проектная деятельность в той или иной форме присутствует
                  практически в любой компании. Всё больше компаний осознают
                  сложность задач проектного управления и выделяют проектную
                  деятельность в качестве важной, специфической части своего
                  бизнеса. Информационные системы управления проектами
                  обеспечивают планирование проектов и ресурсов, управление
                  проектными командами, оценку рисков, отслеживание хода
                  исполнения проектов, формирование управленческой отчетности и
                  контроль финансовой составляющей проектов.
                </p>
              </div>
            </div>
            <div class="column-right">
              <div class="bg"></div>
            </div>
            <span class="next-section-indicator"><span>Вниз</span></span>
          </div>
        </div>
        <div class="section section3">
          <div class="column-wrap">
            <div class="column-left">
              <div class="bg"></div>
              <router-link to="/directions" class="prev-link"
                >Назад</router-link
              >
              <div class="text-wrap">
                <h3>Направления нашей работы</h3>
                <h2>Разработка мобильных приложений</h2>
                <p>
                  Компания АПИР специализируется на предоставлении полного
                  спектра услуг в области создания мобильных приложений и
                  веб-разработок.<br />
                  Мы сосредоточили свое внимание на постоянном совершенствовании
                  методов по реализации и развитию успешных продуктов для
                  компаний, стартапов и простых людей как мы.
                </p>
              </div>
            </div>
            <div class="column-right">
              <div class="top-element">
                <h2>Blockchain<br />Development</h2>
              </div>
              <div class="bottom-element">
                <h2>BigData</h2>
              </div>
            </div>
          </div>
        </div>
      </full-page>
    </div>
    <resize-observer @notify="handleResize" />
  </div>
</template>

<script>
export default {
  name: "allDirections",
  data() {
    return {
      fullpageOptions: {
        licenseKey: "OPEN-SOURCE-GPLV3-LICENSE",
        scrollOverflow: true,
        responsiveHeight: true,
        scrollOverflowReset: true
      }
    };
  },
  methods: {
    handleResize() {
      this.$refs.fullpage.api.reBuild();
      // if (window.matchMedia("(max-width: 1440px)").matches) {
      //   this.$refs.fullpage.api.destroy('all');
      //   console.log(this.$refs.fullpage.api);
      // } else {
      //   this.$refs.fullpage.api.reBuild();
      // }
    }
  }
};
</script>
