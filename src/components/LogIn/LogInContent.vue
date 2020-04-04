<template>
    <div class="home-wrapper">
        <div class="form-wrapper">
            <div class="top">
                <h1 class="gold-text">ورود به سایت</h1>
                <div class="horizontal-line"></div>
            </div>
            <transition>
                <div class="button-wrapper" v-if="!loginMode">
                    <button class="Amirkabiri main-button">ورود امیرکبیری‌ها</button>
                    <button class="not-Amirkabiri main-button" @click="loginMode = true">ورود غیرامیرکبیری‌ها</button>
                </div>
                <div class="button-wrapper" v-else>

                    <router-link to="/signin/non-amirkabiry">
                        <button class="Amirkabiri sub-button">ورود</button>
                    </router-link>
                    <router-link to="/signup/non-amirkabiry">
                        <button class="not-Amirkabiri sub-button">ثبت‌نام</button>
                    </router-link>
                    <button class="refresh-page" @click="location.reload()">
                    <span class="material-icons">undo
                        </span>
                        بازگشت
                    </button>
                </div>
            </transition>
        </div>
    </div>
</template>

<script>
    export default {
        name: "LogInContent",
        data() {
            return {
                loginMode: false
            }
        },
        created() {

        },
        methods: {}
    }
</script>

<style lang="scss" scoped>
    @import "../../../public/colors";

    .gold-text {
        color: $aut-grad-secondary;
    }

    .home-wrapper {
        background-color: $aut-grad-primary;
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: calc(100vh - 50px);
        width: 100%;
    }

    .form-wrapper {
        background-color: #FFFFFF;
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        box-shadow: 0px 8px 8px rgba(0, 0, 0, 0.25);
        padding: 25px 15px 20px 15px;
        min-width: 500px;
        min-height: 350px;
    }

    .horizontal-line {
        height: 2px;
        background-color: $aut-grad-secondary;
        justify-self: stretch;
        margin: 10px;
    }

    .button-wrapper {
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin: 20px 10px 10px 10px;
    }

    .main-button {
        margin: 10px 30px 5px 30px;
        padding: 15px;
        border-radius: 7px;
        font-size: 25px;
        font-weight: bold;
    }

    .Amirkabiri {
        background-color: $aut-grad-secondary;
        color: white;
        border: none;
        /*border: 2px solid $aut-grad-secondary;*/
    }

    .Amirkabiri:hover {
        background-color: $aut-grad-secondary-dark;
    }

    .not-Amirkabiri {
        background-color: white;
        color: $aut-grad-secondary;
        border: 4px solid $aut-grad-secondary;
    }

    .not-Amirkabiri:hover {
        background-color: #eeeeee;
    }

    .refresh-page {
        background-color: white;
        border: none;
        display: flex;
        flex-direction: row-reverse;
        justify-content: left;
    }

    .sub-button {
        width: 70%;
        margin: 0px 40px 20px 40px;
        padding: 15px;
        border-radius: 7px;
        font-size: 25px;
        font-weight: bold;
    }

    @media only screen and (max-width: 768px) {
        .form-wrapper{
            width: 80%;
            display: flex;
            justify-content: center;
            margin: 0;
        }
        .home-wrapper{
            padding: 0;

        }
    }

</style>