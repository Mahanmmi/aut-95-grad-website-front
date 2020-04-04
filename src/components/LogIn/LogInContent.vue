<template>
    <div class="home-wrapper">
        <div class="form-wrapper" v-if="enteringMode === ''">
            <div class="top">
                <h1 class="gold-text">ورود به سایت</h1>
                <div class="horizontal-line"></div>
            </div>
            <transition>
                <div class="button-wrapper" v-if="isAmirkabiry">
                    <button class="top-button main-button">ورود امیرکبیری‌ها</button>
                    <button class="bottom-button main-button" @click="isAmirkabiry = false">ورود غیرامیرکبیری‌ها
                    </button>
                </div>
                <div class="button-wrapper" v-else>

                    <button class="top-button sub-button" @click="enteringMode= 'signin'">ورود</button>
                    <button class="bottom-button sub-button" @click="enteringMode= 'signup'">ثبت‌نام</button>
                    <button class="refresh-page" @click="refreshPage()">
                    <span class="material-icons">undo
                        </span>
                        بازگشت
                    </button>
                </div>
            </transition>
        </div>
        <div class="content-wrapper" v-else-if="enteringMode === 'signin'">
            <NonAmirkabiryLogIn></NonAmirkabiryLogIn>
        </div>
        <div class="content-wrapper" v-else-if="enteringMode === 'signup'">
            <NonAmirkabirySignUp></NonAmirkabirySignUp>
        </div>
    </div>
</template>

<script>
    import NonAmirkabiryLogIn from "./NonAmirkabiryLogIn";
    import NonAmirkabirySignUp from "./NonAmirkabirySignUp";

    export default {
        name: "LogInContent",
        components: {NonAmirkabirySignUp, NonAmirkabiryLogIn},
        data() {
            return {
                isAmirkabiry: true,
                enteringMode: ''
            }
        },
        created() {

        },
        methods:{
            refreshPage:function () {
                window.location.reload()
            }
        }
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
        width: 40%;
        max-width: 500px;
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

    .top-button{
        background-color: $aut-grad-secondary;
        color: white;
        border: none;
        /*border: 2px solid $aut-grad-secondary;*/
    }

    .top-button:hover {
        background-color: $aut-grad-secondary-dark;
    }

    .bottom-button {
        background-color: white;
        color: $aut-grad-secondary;
        border: 4px solid $aut-grad-secondary;
    }

    .bottom-button:hover {
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
        margin: 0px 40px 15px 40px;
        padding: 15px;
        border-radius: 7px;
        font-size: 25px;
        font-weight: bold;
    }
    .sub-button.top-button{
        margin-top: 60px;
    }
    .content-wrapper{
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    @media only screen and (max-width: 768px) {
        .form-wrapper {
            width: 80%;
            display: flex;
            justify-content: center;
            margin: 0;
        }
        .home-wrapper {
            padding: 0;

        }
    }

</style>