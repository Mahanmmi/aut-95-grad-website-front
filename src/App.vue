<template>
    <div id="app">
        <app-header :is-full-blue="isFullBlue"/>
        <router-view :class="{'dotted-background': !isFullBlue}"/>
    </div>
</template>

<script>
  import AppHeader from "@/components/AppHeader";

  export default {
    name: 'App',
    data() {
      return {
        isFullBlue: this.$route.name !== 'home' ||
          this.$route.name !== 'signin' ||
          this.$route.name !== 'signup'
      }
    },
    components: {
      AppHeader
    }
  }
</script>

<style lang="scss">
    * {
        margin: 0;
        padding: 0;
        direction: rtl;
    }

    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }

    .dotted-background {
        // Dot Colors
        $dot-bg-color: #e5e5e5;
        $dot-color: #d8d8d8;
        // Dot Dimensions
        $dot-size: 3px;
        $dot-space: 35px;
        background-image: radial-gradient($dot-color $dot-size, $dot-bg-color $dot-size);
        background-size: $dot-space $dot-space;
    }
</style>
