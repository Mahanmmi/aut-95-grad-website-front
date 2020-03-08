<template>
    <div class="home-wrapper">
        <div class="form-wrapper">
            <div class="top">
                <h1 class="gold-text">ورود به سایت</h1>
                <div class="horizontal-line"></div>
            </div>
            <div class="button-wrapper">
                <button id="Amirkabiri">ورود امیرکبیری‌ها</button>
                <button id="not-Amirkabiri">ورود غیرامیرکبیری‌ها</button>
            </div>

        </div>
    </div>
</template>

<script>
    export default {
        name: "LogInContent"
    }
</script>

<style lang="scss" scoped>
    @import "public/colors";

    .gold-text{
        color:$aut-grad-secondary;
    }

    .home-wrapper {
        background-color:$aut-grad-primary;
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: calc(100vh - 50px);
    }
    .form-wrapper {
        background-color: #FFFFFF;
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        box-shadow: 20px 20px 40px black;
        padding: 25px 15px 15px 15px;
        min-width: 500px;
        min-height: 350px;
    }
    .horizontal-line {
        height: 2px;
        background-color: $aut-grad-secondary;
        justify-self: stretch;
        margin: 10px;
    }
    .button-wrapper{
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin: 20px 10px 10px 10px;
    }
    button{
        margin: 10px 30px 20px 30px;
        padding: 15px;
        border-radius: 7px;
        font-size: 25px;
        font-weight: bold;
    }
    #Amirkabiri{
        background-color: $aut-grad-secondary;
        color: white;
        border: 2px solid $aut-grad-secondary;
    }
    #not-Amirkabiri{
        background-color: white;
        color: $aut-grad-secondary;
        border: 4px solid $aut-grad-secondary;
    }
</style>