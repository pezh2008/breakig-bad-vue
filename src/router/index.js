import { createRouter, createWebHistory } from "vue-router";
import MainPage from "../pages/MainPage";
import CatalogPage from "../pages/CatalogPage";
import PersonPage from "../pages/PersonPage";
const routes = [
  {
    path: "/", // http://localhost:8080/
    component: MainPage,
  },
  {
    path: "/catalog",
    component: CatalogPage,
  },
  {
    path: "/person",
    component: PersonPage
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
