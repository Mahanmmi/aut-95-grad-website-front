<template>
    <div class="wrapper">
        <div class="graduates-wrapper">
            <div class="graduates-desc">
                <p>دنبال کی میگردی؟</p>
            </div>
            <div class="graduate-container">
                <div class="graduate-image">
                    <img alt="grad photo" src="">
                </div>
                <div class="graduate-name">
                     اسم یارو خیلی خوبه و طولانی و لعنتی
                </div>
            </div>
            <div class="graduate-container">
                <div class="graduate-image">
                    <img alt="grad photo" src="">
                </div>
                <div class="graduate-name">
                    اسم یارو خیلی خوبه
                </div>
            </div>
            <div class="graduate-container">
                <div class="graduate-image">
                    <img alt="grad photo" src="">
                </div>
                <div class="graduate-name">
                    اسم یارو خیلی خوبه
                </div>
            </div>
            <div class="graduate-container">
                <div class="graduate-image">
                    <img alt="grad photo" src="">
                </div>
                <div class="graduate-name">
                    اسم یارو خیلی خوبه
                </div>
            </div>
            <div class="graduate-container">
                <div class="graduate-image">
                    <img alt="grad photo" src="">
                </div>
                <div class="graduate-name">
                    اسم یارو خیلی خوبه
                </div>
            </div>
            <div class="graduate-container">
                <div class="graduate-image">
                    <img alt="grad photo" src="">
                </div>
                <div class="graduate-name">
                    اسم یارو خیلی خوبه
                </div>
            </div>
            <div class="graduate-container">
                <div class="graduate-image">
                    <img alt="grad photo" src="">
                </div>
                <div class="graduate-name">
                    اسم یارو خیلی خوبه
                </div>
            </div>
            <div class="graduate-container">
                <div class="graduate-image">
                    <img alt="grad photo" src="">
                </div>
                <div class="graduate-name">
                    اسم یارو خیلی خوبه
                </div>
            </div>
            <div class="graduate-container">
                <div class="graduate-image">
                    <img alt="grad photo" src="">
                </div>
                <div class="graduate-name">
                    اسم یارو خیلی خوبه
                </div>
            </div>
            <div class="graduate-container">
                <div class="graduate-image">
                    <img alt="grad photo" src="">
                </div>
                <div class="graduate-name">
                    اسم یارو خیلی خوبه
                </div>
            </div>
            <div class="graduate-container">
                <div class="graduate-image">
                    <img alt="grad photo" src="">
                </div>
                <div class="graduate-name">
                    اسم یارو خیلی خوبه
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    name: "GraduatesContent"
  }
</script>

<style lang="scss" scoped>
    @import "public/colors";

    .wrapper {
        display: flex;
        justify-content: center;
        padding-top: 10vh;
        padding-bottom: 10vh;
    }

    .graduates-wrapper {
        display: flex;
        justify-content: space-around;
        align-content: flex-start;
        flex-wrap: wrap;
        flex-direction: row-reverse;
        min-height: calc(100vh - 50px);
        width: 70%;
    }

    .graduates-desc {
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 10px;
        margin: 0;
        border: 2px solid $aut-grad-secondary;
        background-color: white;
        color: #c4c4c4;
        font-size: x-large;
        padding: 5px;
        width: 100%;
        box-shadow: 0 5px 10px 0 #adadad;
    }

    .graduate-container {
        width: 160px;
        height: 210px;
        margin: 20px 5px 0 5px;
        background-color: #12f123;
        border-radius: 10px;
        box-shadow: 0 5px 10px 0 #adadad;
    }

    .graduate-image {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 160px;
        width: 160px;
        border-top-right-radius: 10px;
        border-top-left-radius: 10px;
        background-color: $aut-grad-primary;
        color: white;
    }

    .graduate-name {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 5px;
        width: 160px;
        height: 50px;
        box-sizing: border-box;
        border-bottom-right-radius: 10px;
        border-bottom-left-radius: 10px;
        background-color: $aut-grad-secondary;
        color: white;
        font-weight: bold;
    }
</style>