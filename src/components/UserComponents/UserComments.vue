<template>
    <div class="content-wrapper">
        <div class="my-word">
            <div class="head">
                <p class="title">از زبان من</p>
                <i class="material-icons">
                    keyboard_arrow_down
                </i>
            </div>
            <div class="text-cards">
                <p>ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و
                    متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و
                    کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم
                    از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و
                    سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای
                    کاربردی می باشد</p>
            </div>
        </div>
        <div class="your-word">
            <div class="head">
                <p class="title">از زبان شما</p>
                <i class="material-icons">
                    keyboard_arrow_down
                </i>
            </div>
            <div class="card-wrapper">
                <div class="comment-wrapper">
                    <div class="right">
                        <div class="profile-pic-wrapper">
                            <img class="profile-pic" src="../../assets/testpic.svg" alt="pic">
                        </div>
                    </div>
                    <div class="left">
                        <div class="comment-cards">
                            <p>ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک
                                است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط
                                فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.لورم
                                ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
                                چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
                                تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: "UserComments",
        data() {
            return {}
        }
    }
</script>

<style lang="scss" scoped>
    @import "public/colors";

    .content-wrapper {
        justify-content: center;
        margin: 30px 70px 100px 70px;
        width: 65%;
    }

    .card-wrapper {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .text-cards {
        background-color: white;
        margin: 30px;
        border-radius: 10px;
        box-shadow:0px 8px 8px $aut-grad-shadow;
        padding: 20px;
        text-align: right;
    }

    .head {
        margin: 30px;
        background-color: $aut-grad-primary;
        border-radius: 10px;
        box-shadow:0px 8px 8px $aut-grad-shadow;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding: 20px;
    }

    .title {
        color: white;
        font-size: 22px;
        font-weight: bold;
    }

    .material-icons {
        color: white;
        font-size: 35px;
        font-weight: bold;
    }

    .your-word {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }


    .comment-wrapper {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    .card-wrapper {
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin: 30px;

    }

    .profile-pic-wrapper {
        display: inline-block;
        position: relative;
        width: 6vw;
        height: 6vw;
        border-radius: 50%;
        border: 2px solid $aut-grad-secondary;
        overflow: hidden;
        z-index: 2;
    }

    .profile-pic {
        position: absolute;
        flex-grow: 1;
        width: 110%;
        height: auto;
        top: 0;
        left: -5%;
    }

    .comment-cards{
        background-color: white;
        border-radius: 10px;
        box-shadow:0px 8px 8px $aut-grad-shadow;
        padding: 20px;
        text-align: right;
        margin-right: 10px;
    }

    @media only screen and (max-width: 768px) {
        .comment-wrapper {
            width: 80%;
        }
    }
</style>