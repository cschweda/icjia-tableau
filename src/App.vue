<template>
  <div id="app">
    <github />

    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>

    <my-footer />
  </div>
</template>

<script>
  import MyFooter from "@/components/Footer";
  import Github from "@/components/Github";
  import metaInfo from "./meta";
  import router from "./router";
  import "@/assets/styles/main.css";
  export default {
    mounted: function () {

    },
    metaInfo,
    name: "App",
    data() {
      return {

      };
    },
    components: {
      MyFooter,
      Github
    }
  };
</script>

<style>
  #app {
    font-size: 18px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: #fff;
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.2s;
  }

  .fade-enter,
  .fade-leave-active {
    opacity: 0;
  }
</style>