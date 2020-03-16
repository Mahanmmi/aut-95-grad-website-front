<template>
    <header class="header" :class="{ 'header-shadow': !isFullBlue }">
        <nav class="main-menu-wrapper">
            <i
                v-if="!mobileMainMenu"
                class="material-icons menu-logo"
                @click="toggleMobileMainMenu()"
            >
                menu
            </i>
            <i
                v-else
                class="material-icons menu-logo"
                @click="toggleMobileMainMenu()"
            >
                close
            </i>
            <div
                class="main-menu"
                :class="{'main-menu-mobile': mobileMainMenu}"
            >
                <router-link
                    to="/"
                    class="main-link link"
                    exact-active-class="link-active"
                >
                    <vue-text-fit
                        :max="1"
                        @click="mobileMainMenu = false"
                        style="white-space: nowrap"
                    >
                        صفحه اول
                    </vue-text-fit>
                </router-link>
                <router-link
                    to="/graduates"
                    class="main-link link"
                    exact-active-class="link-active"
                >
                    <vue-text-fit
                        :max="1"
                        @click="mobileMainMenu = false"
                    >
                        فارغ‌التحصیلان
                    </vue-text-fit>
                </router-link>
                <router-link
                    to="/voting"
                    class="main-link link"
                    exact-active-class="link-active"
                    @click="mobileMainMenu = false"
                >
                    <vue-text-fit
                        :max="1"
                        @click="mobileMainMenu = false"
                    >
                        رای‌گیری‌ها
                    </vue-text-fit>
                </router-link>
            </div>
        </nav>
        <router-link
            tag="div"
            v-if="!isFullBlue"
            class="logo-container"
            to="/"
        >
            <img alt="logo" style="height: 100%" src="../assets/logo.svg">
        </router-link>
        <nav class="user-menu-wrapper">
            <div
                class="user-logo"
                :class="{'link-active': userMenu}"
                @click="toggleUserMenu()"
            >
                <p class="user-name">گوگولی</p>
                <img alt="human" src="../assets/human.svg">
            </div>
            <div
                class="user-menu"
                :class="{'user-menu-active': userMenu}"
            >
                <div class="user-link" @click="userMenu = false">
                    پروفایل من
                </div>
                <div class="user-link" @click="userMenu = false">
                    خروج
                </div>
            </div>
        </nav>
    </header>
</template>

<script>
  import VueTextFit from "@/components/VueTextFit";

  export default {
    name: "AppHeader",
    components: {VueTextFit},
    data() {
      return {
        mobileMainMenu: false,
        userMenu: false,
      }
    },
    methods: {
      toggleMobileMainMenu() {
        this.mobileMainMenu = !this.mobileMainMenu;
      },
      toggleUserMenu() {
        this.userMenu = !this.userMenu;
      }
    },
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
        box-shadow: 0 0 10px 10px $aut-grad-shadow;
    }

    .main-menu-wrapper {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        margin-right: 15px;
        flex: 1;
    }

    .main-menu {
        display: flex;
    }

    .link, .user-link {
        align-items: center;
        text-decoration: none;
        color: $aut-grad-secondary;
        padding: 10px 15px;
        margin: 0 5px;
        border-radius: 10px;
        cursor: pointer;
    }

    .main-link {
        display: flex;
        align-items: center;
    }

    .user-link {
        font-size: large;
    }

    .link-active, .link:hover, .user-link:hover, .user-logo:hover {
        background-color: $aut-grad-primary-dark;
    }

    .logo-container {
        height: 70px;
        cursor: pointer;
    }

    .user-menu-wrapper {
        display: flex;
        flex: 1;
        margin-left: 15px;
        align-items: center;
        flex-direction: row-reverse;
        justify-content: flex-start;
    }

    .user-logo {
        display: flex;
        align-items: center;
        cursor: pointer;
        text-decoration: none;
        color: $aut-grad-secondary;
        padding: 10px 15px;
        margin: 0 5px;
        border-radius: 10px;
    }

    .user-menu {
        display: none;
        background-color: $aut-grad-primary;

        padding: 5px;
        flex-direction: column;
        position: absolute;
        border-bottom-right-radius: 5px;
        border-bottom-left-radius: 5px;
        margin-top: 80px;
    }

    .user-menu-active {
        display: flex;
    }

    .user-name {
        display: inline-block;
        margin-left: 15px
    }

    .menu-logo {
        cursor: pointer;
        font-size: xx-large;
        display: none;
    }

    @media only screen and (max-width: 768px) {
        .user-name {
            display: none;
        }

        .link, .user-link {
            font-size: medium;
        }

        .menu-logo {
            display: block;
            position: relative;
        }

        .main-menu {
            display: none;
        }

        .main-menu-mobile {
            display: flex;
            background-color: $aut-grad-primary;
            padding: 5px;
            flex-direction: column;
            position: absolute;
            border-bottom-right-radius: 5px;
            border-bottom-left-radius: 5px;
            margin-top: 80px;
        }

        .user-logo {
            position: relative;
        }

    }
</style>