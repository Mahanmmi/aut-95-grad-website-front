<template>
    <header class="header" :class="{ 'header-shadow': !isFullBlue }">
        <nav class="main-menu">
            <router-link
                to="/"
                class="main-link link"
                exact-active-class="link-active"
            >
                صفحه اول
            </router-link>
            <router-link
                to="/graduates"
                class="main-link link"
                exact-active-class="link-active"
            >
                فارغ‌التحصیلان
            </router-link>
            <router-link
                to="/"
                class="main-link link"
            >
                صفحه اول
            </router-link>
        </nav>
        <div v-if="!isFullBlue" class="logo-container">
            <img alt="logo" style="height: 100%" src="../assets/logo.svg">
        </div>
        <nav class="user-menu">
            <div class="user-link link">
                <p style="display: inline-block; margin-left: 15px">گوگولی</p>
                <img alt="human" src="../assets/human.svg">
            </div>
        </nav>
    </header>
</template>

<script>
  export default {
    name: "AppHeader",
    props: {
      isFullBlue: Boolean
    }
  }
</script>

<style lang="scss" scoped>
    @import "public/colors";

    .header {
        position: fixed;
        display: flex;
        justify-content: space-between;
        align-items: center;
        top: 0;
        left: 0;
        width: 100%;
        height: 90px;
        z-index: 999;
        background-color: $aut-grad-primary;
        color: $aut-grad-secondary;
        font-weight: bold;
        font-size: x-large;
    }

    .header-shadow {
        box-shadow: 0 0 10px 10px #adadad;
    }

    .main-menu {
        display: flex;
        justify-content: flex-start;
        margin-right: 15px;
        flex: 1;
    }

    .link {
        text-decoration: none;
        color: $aut-grad-secondary;
        padding: 10px 15px;
        margin: 0 5px;
        border-radius: 10px;
    }

    .link-active, .link:hover {
        background-color: $aut-grad-primary-dark;
    }

    .main-link {

    }

    .logo-container {
        height: 70px;
    }

    .user-menu {
        display: flex;
        flex: 1;
        margin-left: 15px;
        flex-direction: row-reverse;
        justify-content: flex-start;
    }

    .user-link {
        display: flex;
    }
</style>