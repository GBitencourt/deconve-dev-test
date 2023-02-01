<template>
  <form>
    <div>
      <label>Video that you want to modify URL</label>
      <input type="text" v-model="oldVideoUrl" />
      <label>New URL</label>
      <input type="text" v-model="newVideoUrl" />
    </div>
    <button @click="updateVideo($event)">Submit</button>
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
    updateVideo(e) {
      this.videos.push({
        url: this.videoUrl,
        type: this.videoType,
      });
      const data = JSON.parse(localStorage.getItem("Videos")) || [];
      data.map((item) => {
        if (item.url === this.oldVideoUrl) {
          item.url = this.newVideoUrl;
        }
      });
      console.log(data);
      localStorage.setItem("Videos", JSON.stringify(data));
      alert("Video Updated");
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
