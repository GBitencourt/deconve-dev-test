<template>
  <form>
    <div>
      <label>Video URL</label>
      <input type="text" v-model="videoUrl" />
      <label>Video TYPE</label>
      <input type="text" v-model="videoType" />
    </div>
    <button @click="addVideo($event)">Submit</button>
  </form>
  <div>
    <a href="home.html"> Back </a>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Home",
  components: {},
  data: function () {
    return {
      videos: [],
    };
  },
  methods: {
    // eslint-disable-next-line no-unused-vars
    addVideo(e) {
      this.videos.push({
        url: this.videoUrl,
        type: this.videoType,
      });
      const data = JSON.parse(localStorage.getItem("Videos")) || [];
      data.push({
        url: this.videoUrl,
        type: this.videoType,
      });
      localStorage.setItem("Videos", JSON.stringify(data));
      alert("Video Added");
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
