<template>
  <div id="app">
    <Header></Header>
    <!-- <Home /> -->
    <router-link to="/">トップへ</router-link>
    <router-link to="/about">About</router-link>
    <router-view></router-view>
  </div>
  
</template>

<script>
// import Home from "@/Home.vue";
import Header from "@/components/Header.vue";

export default {
  name: "App",
  components: {
    // Home,
    Header,
  },
  data(){
    return{
      text: "こんにちは！"
    }
  }
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
