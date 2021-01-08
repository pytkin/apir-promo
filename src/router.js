import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/directions",
      name: "directions",
      // route level code-splitting
      // this generates a separate chunk (contacts.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "directions" */ "./views/Directions.vue")
    },
    {
      path: "/directions/all",
      name: "all-directions",
      // route level code-splitting
      // this generates a separate chunk (contacts.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(
          /* webpackChunkName: "directionsAll" */ "./views/DirectionsAll.vue"
        )
    },
    {
      path: "/technologies",
      name: "technologies",
      // route level code-splitting
      // this generates a separate chunk (contacts.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(
          /* webpackChunkName: "technologies" */ "./views/Technologies.vue"
        )
    },
    {
      path: "/projects",
      name: "projects",
      // route level code-splitting
      // this generates a separate chunk (contacts.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "projects" */ "./views/Projects.vue")
    },
    {
      path: "/projects/all",
      name: "all-projects",
      // route level code-splitting
      // this generates a separate chunk (contacts.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "projectsAll" */ "./views/ProjectsAll.vue")
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (contacts.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    },
    {
      path: "/about/more",
      name: "about-more",
      // route level code-splitting
      // this generates a separate chunk (contacts.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "aboutMore" */ "./views/AboutMore.vue")
    },
    {
      path: "/contacts",
      name: "contacts",
      // route level code-splitting
      // this generates a separate chunk (contacts.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "contacts" */ "./views/Contacts.vue")
    }
  ]
});
