<template>
    <div id="app">
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
              rel="stylesheet">
        <notifications position="top center" classes="vue-notification-custom"/>
        <app-header :is-full-blue="isFullBlue"/>
        <router-view :class="{'dotted-background': !isFullBlue}"/>
        <app-footer :is-full-blue="isFullBlue"/>
    </div>
</template>

<script>
  import AppHeader from "@/components/AppHeader";
  import AppFooter from "@/components/AppFooter";

  export default {
    name: 'App',
    computed: {
      isFullBlue() {
        return this.$route.name === 'home' ||
          this.$route.name === 'signin' ||
          this.$route.name === 'signup'
      }
    },
    components: {
      AppFooter,
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
        /*font-family: Avenir, Helvetica, Arial, sans-serif;*/
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
        font-family: Sahel, serif;
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

    @font-face {
        font-family: Sahel;
        src: url('https://cdn.rawgit.com/rastikerdar/sahel-font/9891b5c0/dist/Sahel-Black.eot');
        src: url('https://cdn.rawgit.com/rastikerdar/sahel-font/9891b5c0/dist/Sahel-Black.eot?#iefix') format('embedded-opentype'),
        url('https://cdn.rawgit.com/rastikerdar/sahel-font/9891b5c0/dist/Sahel-Black.woff') format('woff'),
        url('https://cdn.rawgit.com/rastikerdar/sahel-font/9891b5c0/dist/Sahel-Black.ttf') format('truetype');
        font-weight: 900;
    }

    .vue-notification-custom {
        padding: 10px;
        margin: 0 5px 5px;

        direction: rtl;
        text-align: right;
        font-size: 12px;

        color: #ffffff;
        background: #44A4FC;
        border-right: 5px solid #187FE7;

        &.warn {
            background: #ffb648;
            border-right-color: #f48a06;
        }

        &.error {
            background: #E54D42;
            border-right-color: #B82E24;
        }

        &.success {
            background: #68CD86;
            border-right-color: #42A85F;
        }
    }

    button {
        font-family: Sahel, serif;
    }
</style>
