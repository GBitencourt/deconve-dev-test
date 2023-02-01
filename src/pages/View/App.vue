<template>
  <ul id="example-1">
    <li v-for="item in todo_items" :key="item.type">
      Video URL: {{ item.url }}
    </li>
  </ul>
  <div>
    <a href="home.html"> Back </a>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "View",
  components: {},
  data: function () {
    return { todo_items: [] };
  },
  methods: {},
  mounted() {
    this.todo_items = JSON.parse(localStorage.getItem("Videos")) || [];
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  align-items: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
