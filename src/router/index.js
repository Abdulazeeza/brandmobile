import { createRouter, createWebHashHistory } from "vue-router";
import Dashboard from "../views/Dashboard.vue";
import Home from "@/components/dashboard/pages/Home.vue";
import Audience from "@/components/dashboard/pages/Audience.vue";
import Clients from "@/components/dashboard/pages/Clients.vue";
import Games from "@/components/dashboard/pages/Games.vue";
import Campaigns from "@/components/dashboard/pages/Campaigns.vue";
import Redemption from "@/components/dashboard/pages/Redemption.vue";


const routes = [
  {
    path: '/dashboard', component: Dashboard,
    children: [
      {
        path:"",
        name: "Dashboard",
        component: Home
      },
      {
        path: "clients",
        name: "Clients",
        component: Clients
      },
      {
        path: "campaigns",
        name: "Campaigns",
        component: Campaigns
      },
      {
        path: "audience",
        name: "Audience",
        component: Audience
      },
      {
        path: "games",
        name: "Games",
        component: Games
      },
      {
        path: "redemption",
        name: "Redemption",
        component: Redemption
      }, 
    ]
  }
  
  
  // {
  //   path: "/about",
  //   name: "About",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue")
  // }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
