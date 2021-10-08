<template>
  <router-link
    class="news-link"
    :to="{ name: 'NewsDetails', params: { id: item.id } }"
  >
    <div class="news-card">
      <h4>{{ item.name }}</h4>
      <p v-if="item.shortDesc">{{ item.shortDesc }}</p>
      <p v-else>...</p>
    </div>
  </router-link>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  name: "NewsCard",
};
</script>

<style scoped>
.news-card {
  padding: 20px;
  width: 250px;
  cursor: pointer;
  border: 1px solid #39495c;
  margin-bottom: 18px;
}

.news-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}

.news-card {
  color: #2c3e50;
  text-decoration: none;
}

.news-link {
  text-decoration: none;
}
</style>
