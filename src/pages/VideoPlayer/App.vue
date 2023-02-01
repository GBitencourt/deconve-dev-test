<template>
  <h2>All videos listed!</h2>
  <ul id="example-1">
    <li v-for="item in todo_items" :key="item.type">
      Video URL: {{ item.url }}
      <button @click="addVideo(item.url)">Submit</button>
    </li>
  </ul>
  <div>
    <a href="home.html"> Back </a>
  </div>
  <video width="320" height="240" ref="videoPlayer">
    <source
      src="https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4"
      type="video/mp4"
      id="video"
    />
    Your browser does not support the video tag.
  </video>
  <div>
    <button @click="play">play</button>
    <button @click="pause">pause</button>
    <button @click="stop">stop</button>
    <button @click="setSpeed(0.5)">0.5x</button>
    <button @click="setSpeed(1)">1x</button>
    <button @click="setSpeed(1.5)">1.5x</button>
    <button @click="setSpeed(2)">2x</button>
  </div>
</template>
<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "videoplayer",
  methods: {
    play() {
      this.$refs.videoPlayer.play();
    },
    pause() {
      this.$refs.videoPlayer.pause();
    },
    stop() {
      const { videoPlayer } = this.$refs;
      videoPlayer.pause();
      videoPlayer.currentTime = 0;
    },
    setSpeed(speed) {
      this.$refs.videoPlayer.playbackRate = speed;
    },
    addVideo(e) {
      document.querySelector("#video > source").src = e;
    },
  },
  data: function () {
    return { todo_items: [] };
  },
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
