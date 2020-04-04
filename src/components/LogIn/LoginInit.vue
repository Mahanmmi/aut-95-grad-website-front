<template>
    <div>
        <div>
            <h1 class="gold-text">ورود به سایت</h1>
            <div class="horizontal-line"></div>
        </div>
        <div class="button-wrapper" v-if="localAmirkabiry">
            <button class="top-button main-button">ورود امیرکبیری‌ها</button>
            <button class="bottom-button main-button" @click="changeAmirkabiry(false)">ورود غیرامیرکبیری‌ها
            </button>
        </div>
        <div class="button-wrapper" v-else>
            <button class="top-button main-button" @click="changeMode('signin')">ورود</button>
            <button class="bottom-button main-button" @click="changeMode('signup')">ثبت‌نام</button>
            <button class="refresh-page" @click="changeAmirkabiry(true)">
                    <span class="material-icons">
                        undo
                        </span>
                بازگشت
            </button>
        </div>
    </div>
</template>

<script>
  export default {
    name: "LoginInit",
    data() {
      return {
        localAmirkabiry: this.isAmirkabiry
      }
    },
    props: {
      isAmirkabiry: Boolean
    },
    methods: {
      changeMode(mode) {
        this.$emit('changeEnteringMode', mode);
      },
      changeAmirkabiry(mode) {
        this.localAmirkabiry = mode;
        this.$emit('changeIsAmirkabiry', mode);
      }
    }
  }
</script>

<style lang="scss" scoped>
    @import "../../../public/colors";

    .gold-text {
        color: $aut-grad-secondary;
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

    .top-button {
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

    .sub-button {
        margin: 10px 30px 15px 40px;
        padding: 10px;
        border-radius: 7px;
        font-size: 25px;
        font-weight: bold;
    }

    .refresh-page {
        background-color: white;
        border: none;
        display: flex;
        flex-direction: row-reverse;
        align-self: center;
        margin-top: 10px;
        border-radius: 3px;
        padding: 5px;
        justify-content: left;

        &:hover {
            background-color: #eeeeee;
        }
    }
</style>