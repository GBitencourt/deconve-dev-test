<template>
  <form>
    <div>
      <label>Video that you want to Delete</label>
      <input type="text" v-model="oldVideoUrl" />
    </div>
    <button @click="deleteVideo($event)">Submit</button>
  </form>
  <div>
    <a href="home.html"> Back </a>
  </div>
</template>

<script>
// localStorage.setItem("HabitTracker", JSON.stringify(nlwSetup.data));
// const data = JSON.parse(localStorage.getItem("HabitTracker")) || {};

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Update",
  components: {},
  data: function () {
    return {
      videos: [],
    };
  },
  mounted() {
    this.todo_items = JSON.parse(localStorage.getItem("Videos")) || [];
  },
  methods: {
    // eslint-disable-next-line no-unused-vars
    deleteVideo(e) {
      this.videos.push({
        url: this.videoUrl,
        type: this.videoType,
      });
      const data = JSON.parse(localStorage.getItem("Videos")) || [];
      data.splice(data.indexOf(this.oldVideoUrl), 1);
      console.log(data);
      localStorage.setItem("Videos", JSON.stringify(data));
      alert("Video Deleted");
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
