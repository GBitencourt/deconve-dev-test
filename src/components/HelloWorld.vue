<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>This app will allow you to enter videos and identify human faces</p>
    <h3>Upload a new video</h3>
    <ul>
      <li>
        <a href="add.html"> Add Video </a>
        >
      </li>
    </ul>
    <h3>View all videos stored</h3>
    <ul>
      <li>
        <a href="view.html">View Video</a>
        >
      </li>
    </ul>
    <h3>Update a video</h3>
    <ul>
      <li>
        <a href="update.html">Update videos</a>
        >
      </li>
    </ul>
    <h3>Delete a video</h3>
    <ul>
      <li>
        <a href="delete.html">Delete a video</a>
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
