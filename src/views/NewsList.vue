<template>
  <h1>Новости:</h1>
  <div class="news">
    <NewsCard v-for="item in news" :key="item.id" :item="item" />
  </div>
</template>

<script>
import axios from "axios";
import NewsCard from "../components/NewsCard.vue";

export default {
  name: "NewsList",
  components: {
    NewsCard,
  },
  data() {
    return {
      news: null,
    };
  },
  created() {
    axios
      .get("/articles.json")
      .then((response) => {
        this.news = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<style scoped>
.news {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
