import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home";
import NewsList from "../views/NewsList";
import NewsDetails from "../views/NewsDetails";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/news",
    name: "NewsList",
    component: NewsList,
  },
  {
    path: "/news:id",
    name: "NewsDetails",
    props: true,
    component: NewsDetails,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
