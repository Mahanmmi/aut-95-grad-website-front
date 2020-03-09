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
            <div class="comments-wrapper">


                <div class="each-comment-wrapper" v-for="comment in comments" v-bind:key="comment.index">
                    <div class="right">
                        <div class="profile-pic-wrapper">
                            "../../assets/testpic.svg"
                            <!--                            <img class="profile-pic" v-bind:src="comment.profilePicUrl" alt="عکس">-->
                            <img class="profile-pic" src="../../assets/testpic.svg"
                                 alt="عکس">

                        </div>
                    </div>
                    <div class="left">
                        <div class="comment-cards">
                            <div class="comment-title">
                                <p>{{comment.name}} | <b>{{comment.title}}</b></p>
                                <p>{{comment.date}}</p>
                            </div>
                            <div class="horizontal-line"></div>
                            <div class="comment">
                                <div v-bind:class="[comment.textPicUrl!== '' ? 'comment-text-wrapper': '']">
                                    <p>{{comment.text}}</p>
                                </div>

                                <div class="picture-wrapper" v-if="comment.textPicUrl!=='' ">

                                    <!--                                    <img class="comment-pic" v-bind:src="comment.textPicUrl" alt="عکس">-->
                                    <img class="comment-pic" src="../../assets/realMadrid.svg" alt="عکس">

                                </div>
                            </div>

                        </div>

                    </div>
                </div>


            </div>


            <div class="comments-wrapper">
                <div class="each-comment-wrapper">
                    <div class="right">
                        <div class="profile-pic-wrapper">
                            <img class="profile-pic" src="../../assets/testpic.svg" alt="عکس">
                        </div>
                    </div>
                    <div class="left left-new-comment">
                        <div class="comment-cards">
                            <div class="comment-title">
                                <input
                                        type="text"
                                        v-model="this.newComment.title"
                                        placeholder="عنوان نظر..."
                                />
                            </div>
                            <div class="horizontal-line"></div>
                            <div class="comment">
                                <div>
                                    <input
                                            type="text"
                                            v-model="this.newComment.text"
                                            placeholder="تو هم نظر بده..."
                                    />
                                </div>

                            </div>

                        </div>
                        <div class="button-wrapper">
                            <button id="submit">ثبت نظر</button>

                            <div class="upload-btn-wrapper">
                                <button class="btn">انتخاب عکس</button>
                                <input type="file" @change="onFileSelected"/>
                            </div>
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
            return {
                comments: [
                    // sample
                    {
                        name: "منم منم مادرتون",
                        title: "متن زیبا",
                        text: "متن متن متن متن کوتاه",
                        date: "۱۳۹۸/۱۲/۱۲",
                        textPicUrl: "",
                        profilePicUrl: "../../assets/testpic.svg"
                    }, {
                        name: "منم منم مادرتون",
                        title: "متن زیبا",
                        text: "ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از\n" +
                            "                                        طراحان گرافیک\n" +
                            "                                        است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و\n" +
                            "                                        برای شرایط\n" +
                            "                                        فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می\n" +
                            "                                        باشد.لورم\n" +
                            "                                        ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان\n" +
                            "                                        گرافیک است.\n" +
                            "                                        چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای\n" +
                            "                                        شرایط فعلی\n" +
                            "                                        تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می\n" +
                            "                                        باشد",
                        date: "۱۳۹۸/۱۲/۱۲",
                        textPicUrl: "../../assets/realMadrid.svg",
                        profilePicUrl: "../../assets/testpic.svg"
                    }
                ],
                newComment: {
                    title: "",
                    text: "",
                    picture: null
                }
            }
        },
        methods: {
            onFileSelected(event) {
                console.log(event);
                this.newComment.picture = event.target.files[0];
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "public/colors";

    .content-wrapper {
        justify-content: center;
        margin: 30px 0px 100px 0px;
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
        box-shadow: 0px 8px 8px $aut-grad-shadow;
        padding: 20px;
        text-align: right;
    }

    .head {
        margin: 30px;
        background-color: $aut-grad-primary;
        border-radius: 10px;
        box-shadow: 0px 8px 8px $aut-grad-shadow;
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


    .each-comment-wrapper {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin-top: 20px;
    }

    .comments-wrapper {
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin: 0px 30px 0 30px;

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

    .comment-cards {
        background-color: white;
        border-radius: 10px;
        box-shadow: 0px 8px 8px $aut-grad-shadow;
        padding: 20px;
        text-align: right;
        margin-right: 10px;

    }

    .comment-title {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    .horizontal-line {
        height: 2px;
        background-color: $aut-grad-secondary;
        justify-self: stretch;
        width: 50%;
        margin: 20px 0 20px 0;
    }

    .comment {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    .comment-text-wrapper {
        width: 50%;
    }

    .picture-wrapper {
        width: 50%;
        margin-right: 20px;
    }

    .left {
        width: 89%;
    }

    .right {
        width: 11%;
    }

    .comment-pic {
        border-radius: 10px;
        max-width: 100%;
        max-height: 100%;
        float: left;
    }

    .comment-cards input {
        width: 100%;
        border: 0;
        outline: 0;
        padding: 0.5rem 0;
        box-shadow: none;
        color: #111;
        font-size: 15px;
        -webkit-appearance: none;
        border-radius: 0;
        cursor: text;
    }

    .button-wrapper {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        justify-self: left;
        margin: 30px 0 30px 0;
    }

    button {
        padding: 15px;
        border-radius: 7px;
        font-size: 25px;
        font-weight: bold;
        width: 200px;
        background-color: $aut-grad-secondary;
        color: white;
        border: 2px solid $aut-grad-secondary;
    }

    .upload-btn-wrapper {
        position: relative;
        overflow: hidden;
        display: inline-block;
    }

    .btn {
        border: 3px solid $aut-grad-secondary;
        color: $aut-grad-secondary;
        background-color: white;
        padding: 8px 20px;
        border-radius: 8px;
        font-size: 20px;
        font-weight: bold;
    }

    .upload-btn-wrapper input[type=file] {
        font-size: 100px;
        position: absolute;
        left: 0;
        top: 0;
        opacity: 0;
    }


    @media only screen and (max-width: 768px) {
        .comment-wrapper {
            width: 80%;
        }
    }
</style>