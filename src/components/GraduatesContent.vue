<template>
    <div class="wrapper">
        <div class="graduates-wrapper">
            <div class="graduates-desc">
                <input
                    class="graduate-search"
                    placeholder="دنبال کی میگردی؟"
                >
            </div>
            <div v-for="i in 10" :key="i" class="graduate-container">
                <div class="graduate-image">
                    <img alt="grad photo" src="../assets/testpic.svg">
                </div>
                <div class="graduate-name">
                    <vue-text-fit
                        :max="1"
                        :target-line-count="2"
                    >
                        اسم یارو خیلی خوبه و طولانی و لعنتی
                    </vue-text-fit>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  import VueTextFit from "@/components/VueTextFit";

  export default {
    name: "GraduatesContent",
    components: {VueTextFit}
  }
</script>

<style lang="scss" scoped>
    @import "public/colors";

    .wrapper {
        display: flex;
        justify-content: center;
        padding-top: 10vh;
        padding-bottom: 10vh;
        min-height: calc(100vh - 50px);
    }

    .graduates-wrapper {
        display: flex;
        justify-content: space-around;
        align-content: flex-start;
        flex-wrap: wrap;
        flex-direction: row-reverse;
        width: 70%;
    }

    .graduates-desc {
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 30px;
        border-radius: 10px;
        margin: 0;
        border: 2px solid $aut-grad-secondary;
        background-color: white;
        padding: 7px;
        width: 100%;
        box-shadow: 0px 8px 8px rgba(0, 0, 0, 0.25);
        box-sizing: border-box;
    }

    .all-graduate-container {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        flex-direction: row-reverse;
    }
    
    .graduate-search {
        width: 100%;
        height: 100%;
        color: #545454;
        font-size: x-large;
        text-align: center;
        border: none;
    }

    .graduate-container {
        width: 160px;
        margin: 20px 5px 0 5px;
        border-radius: 10px;
        box-shadow: 0px 8px 8px rgba(0, 0, 0, 0.25);
        cursor: pointer;
        &:hover {
            box-shadow: 0px 8px 8px rgba(0, 0, 0, 0.5);
        }
    }

    .graduate-image img {
        display: flex;
        justify-content: center;
        min-height: 100px;
        margin: 0;
        width: 100%;
        border-top-right-radius: 10px;
        border-top-left-radius: 10px;
        background-color: $aut-grad-primary;
        color: white;

        // img {
        //     width: 100%;
        // }
    }

    .graduate-name {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 5px;
        width: 100%;
        min-height: 50px;
        box-sizing: border-box;
        border-bottom-right-radius: 10px;
        border-bottom-left-radius: 10px;
        background-color: $aut-grad-secondary;
        color: white;
        font-weight: bold;
    }

    @media only screen and (max-width: 768px) {
        .graduate-container {
            width: 80px;
        }
    }
</style>