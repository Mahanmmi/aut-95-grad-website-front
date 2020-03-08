<template>
    <header class="header">
        <nav class="main-menu">
            <router-link
                to="/"
                class="main-link link"
            >
                صفحه اول
            </router-link>
            <router-link
                to="/"
                class="main-link link"
            >
                صفحه اول
            </router-link>
            <router-link
                to="/"
                class="main-link link"
            >
                صفحه اول
            </router-link>
        </nav>
        <img
            alt="grad-logo"
            src="../assets/logo.png"
            class="logo"
        >
        <nav class="user-menu">
            <div class="user-link link">
                گوگولی
            </div>
            <div class="user-link link">
                گوگولی
            </div>
        </nav>
    </header>
</template>

<script>
  export default {
    name: "AppHeader"
  }
</script>

<style lang="scss" scoped>
    @import "public/colors";

    .header {
        position: fixed;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-direction: row-reverse;
        top: 0;
        left: 0;
        width: 100%;
        height: 90px;
        z-index: 999;
        box-shadow: 0 0 10px 10px #adadad;
        background-color: $aut-grad-primary;
        color: $aut-grad-secondary;
        font-weight: bold;
        font-size: x-large;
    }

    .main-menu {
        display: flex;
        flex-direction: row-reverse;
        justify-content: flex-start;
        margin-right: 15px;
        flex: 1;
    }

    .link {
        text-decoration: none;
        color: $aut-grad-secondary;
        padding: 5px 10px;
        margin: 0 5px;
        border-radius: 10px;
    }

    .link-active, .link:hover {
        background-color: $aut-grad-primary-dark;
    }

    .main-link {

    }

    .logo {
        height: 90px;
    }

    .user-menu {
        display: flex;
        flex: 1;
        margin-left: 15px;
        justify-content: flex-start;
    }

    .user-link {

    }
</style>