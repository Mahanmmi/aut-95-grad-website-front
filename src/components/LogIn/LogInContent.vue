<template>
    <div class="home-wrapper">
        <div class="form-wrapper">
            <div v-if="enteringMode === ''">
                <login-init
                    :isAmirkabiry="isAmirkabiry"
                    @changeEnteringMode="enteringMode = $event"
                    @changeIsAmirkabiry="isAmirkabiry = $event"
                />
            </div>
            <div class="content-wrapper" v-else-if="enteringMode === 'signin'">
                <NonAmirkabiryLogIn @back="childBack"></NonAmirkabiryLogIn>
            </div>
            <div class="content-wrapper" v-else-if="enteringMode === 'signup'">
                <NonAmirkabirySignUp @back="childBack"></NonAmirkabirySignUp>
            </div>
        </div>

    </div>
</template>

<script>
  import NonAmirkabiryLogIn from "./NonAmirkabiryLogIn";
  import NonAmirkabirySignUp from "./NonAmirkabirySignUp";
  import LoginInit from "@/components/LogIn/LoginInit";

  export default {
    name: "LogInContent",
    components: {LoginInit, NonAmirkabirySignUp, NonAmirkabiryLogIn},
    data() {
      return {
        isAmirkabiry: true,
        enteringMode: ''
      }
    },
    created() {

    },
    methods: {
      childBack: function (params) {
        this.enteringMode = params
      },

    }
  }
</script>

<style lang="scss" scoped>
    @import "../../../public/colors";

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
        max-width: 600px;
        min-height: 350px;
        margin: 90px auto;
    }

    .content-wrapper {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 20px 0;
    }

    @media only screen and (max-width: 768px) {
        .form-wrapper {
            width: 80%;
            display: flex;
            justify-content: center;
            /*margin: 0;*/
        }
        .home-wrapper {
            padding: 0;

        }
    }

</style>