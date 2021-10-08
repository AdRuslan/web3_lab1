<template>
  <div v-if="item">
    <h1>{{ item.name }}</h1>
    <p>Создано: {{ item.date }}</p>
    <p>{{ item.desc }}</p>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "NewsDetails",
  props: ["id"],
  data() {
    return {
      item: null,
    };
  },
  created() {
    axios
      .get("/articles.json")
      .then((response) => {
        this.item = response.data.find((item) => item.id === +this.id);
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<style scoped></style>
