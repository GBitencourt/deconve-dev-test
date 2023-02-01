<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>This app will allow you to enter videos and identify human faces</p>
    <h3>Upload a new video</h3>
    <ul>
      <li>
        <a
          href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel"
          target="_blank"
          rel="noopener"
          >add video page</a
        >
      </li>
    </ul>
    <h3>View all video urls stored</h3>
    <ul>
      <li>
        <a href="https://vuejs.org" target="_blank" rel="noopener">view</a>
      </li>
    </ul>
    <h3>Update a video</h3>
    <ul>
      <li>
        <a href="https://router.vuejs.org" target="_blank" rel="noopener"
          >Update videos</a
        >
      </li>
    </ul>
    <h3>Delete a video</h3>
    <ul>
      <li>
        <a href="https://router.vuejs.org" target="_blank" rel="noopener"
          >Delete a video</a
        >
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
