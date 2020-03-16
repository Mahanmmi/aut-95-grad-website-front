<template>
    <div class="parent">
        <div class="content-wrapper">
            <div class="my-word">
                <div class="head">
                    <p class="title">از زبان من</p>
                    <i class="material-icons">
                        keyboard_arrow_down
                    </i>
                </div>
                <div class="text-cards">
                    <textarea name="text" class="my-text-area" cols="" rows="5">
                        چاپگرها و
                        متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و
                        کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.لورم ایپسوم متن ساختگی با تولید سادگی
                        نامفهوم
                        از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و
                        سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود
                        ابزارهای
                        کاربردی می باشد
                    </textarea>
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
                        <div class="right" v-if="windowWidth>770">
                            <div class="profile-pic-wrapper">
                                "../../assets/testpic.svg"
                                <!--                            <img class="profile-pic" v-bind:src="comment.profilePicUrl" alt="عکس">-->
                                <img class="profile-pic" src="../../assets/testpic.svg"
                                     alt="عکس">

                            </div>
                        </div>
                        <div class="left" v-if="windowWidth>770">
                            <div class="comment-cards">
                                <div class="comment-title">
                                    <div>
                                        <p>{{comment.name}} | <b>{{comment.title}}</b></p>
                                    </div>
                                    <div class="details">
                                        <button class="verify-comment" v-if="verifiedUser">
                                            <svg width="30" height="30" viewBox="0 0 30 30" fill="none"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="15" cy="15" r="14.5" fill="white" stroke="#9E8B4D"/>
                                                <path
                                                        d="M6.62104 16.002C6.42529 16.23 6.33004 16.5202 6.35329 16.8202C6.37654 17.1202 6.51454 17.3932 6.74329 17.5882L12.2955 22.3477C12.5018 22.524 12.7575 22.6185 13.026 22.6185C13.059 22.6185 13.0928 22.617 13.1265 22.614C13.4303 22.587 13.704 22.4422 13.8975 22.2075L23.394 10.6492C23.5845 10.4167 23.6738 10.1242 23.6445 9.82495C23.6145 9.5257 23.4713 9.2557 23.2388 9.06445L21.5003 7.63645C21.021 7.24345 20.3115 7.31245 19.917 7.7917L12.6083 16.6875L9.67129 14.1712C9.20029 13.7692 8.48929 13.8225 8.08504 14.2935L6.62104 16.002Z"
                                                        fill="#9E8B4D"/>
                                            </svg>
                                        </button>


                                        <button class="verify-comment" v-if="verifiedUser">
                                            <svg width="30" height="30" viewBox="0 0 30 30" fill="none"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="15" cy="15" r="14.5" fill="white" stroke="#9E8B4D"/>
                                                <g clip-path="url(#clip0)">
                                                    <path
                                                            d="M8.25 21.75C8.25 22.9903 9.25908 24 10.5 24H19.5C20.7409 24 21.75 22.9903 21.75 21.75V10.5H8.25V21.75Z"
                                                            fill="#9E8B4D"/>
                                                    <path
                                                            d="M17.25 7.12499V6H12.75V7.12499H7.125V9.37497H22.875V7.12499H17.25Z"
                                                            fill="#9E8B4D"/>
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0">
                                                        <rect x="6" y="6" width="18" height="18" fill="white"/>
                                                    </clipPath>
                                                </defs>
                                            </svg>

                                        </button>

                                        <p>{{comment.date}}</p>
                                    </div>
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


                        <div class="left" v-if="windowWidth<=770">
                            <div class="comment-cards">
                                <div class="comment-title">
                                    <div class="details">
                                        <p>{{comment.name}} | <b>{{comment.title}}</b></p>
                                        <div class="right" v-if="windowWidth<=770">
                                            <div class="profile-pic-wrapper">
                                                "../../assets/testpic.svg"
                                                <!--                            <img class="profile-pic" v-bind:src="comment.profilePicUrl" alt="عکس">-->
                                                <img class="profile-pic" src="../../assets/testpic.svg"
                                                     alt="عکس">

                                            </div>
                                        </div>
                                    </div>
                                    <div class="details">
                                        <button class="verify-comment" v-if="verifiedUser">
                                            <svg width="30" height="30" viewBox="0 0 30 30" fill="none"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="15" cy="15" r="14.5" fill="white" stroke="#9E8B4D"/>
                                                <path
                                                        d="M6.62104 16.002C6.42529 16.23 6.33004 16.5202 6.35329 16.8202C6.37654 17.1202 6.51454 17.3932 6.74329 17.5882L12.2955 22.3477C12.5018 22.524 12.7575 22.6185 13.026 22.6185C13.059 22.6185 13.0928 22.617 13.1265 22.614C13.4303 22.587 13.704 22.4422 13.8975 22.2075L23.394 10.6492C23.5845 10.4167 23.6738 10.1242 23.6445 9.82495C23.6145 9.5257 23.4713 9.2557 23.2388 9.06445L21.5003 7.63645C21.021 7.24345 20.3115 7.31245 19.917 7.7917L12.6083 16.6875L9.67129 14.1712C9.20029 13.7692 8.48929 13.8225 8.08504 14.2935L6.62104 16.002Z"
                                                        fill="#9E8B4D"/>
                                            </svg>
                                        </button>


                                        <button class="verify-comment" v-if="verifiedUser">
                                            <svg width="30" height="30" viewBox="0 0 30 30" fill="none"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="15" cy="15" r="14.5" fill="white" stroke="#9E8B4D"/>
                                                <g clip-path="url(#clip0)">
                                                    <path
                                                            d="M8.25 21.75C8.25 22.9903 9.25908 24 10.5 24H19.5C20.7409 24 21.75 22.9903 21.75 21.75V10.5H8.25V21.75Z"
                                                            fill="#9E8B4D"/>
                                                    <path
                                                            d="M17.25 7.12499V6H12.75V7.12499H7.125V9.37497H22.875V7.12499H17.25Z"
                                                            fill="#9E8B4D"/>
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0">
                                                        <rect x="6" y="6" width="18" height="18" fill="white"/>
                                                    </clipPath>
                                                </defs>
                                            </svg>

                                        </button>

                                        <p>{{comment.date}}</p>
                                    </div>
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
                            <div class="comment-cards left-new-comment">
                                <div class="comment-title">
                                    <input
                                            type="text"
                                            v-model="this.newComment.title"
                                            placeholder="عنوان نظر..."
                                    />
                                </div>
                                <div class="horizontal-line"></div>
                                <div>
                                        <textarea
                                                class="my-text-area"
                                                name=""
                                                id=""
                                                cols="30"
                                                rows="10"
                                                v-model="this.newComment.text"
                                                placeholder="تو هم نظر بده...">

                                        </textarea>


                                </div>

                            </div>
                            <div class="button-wrapper">
                                <button id="submit">ثبت نظر</button>
                                <div class="file-select">
                                    <p>{{selectedFile}}</p>
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
                },
                windowWidth: '',
                selectedFile: ''
            }
        },
        methods: {
            onFileSelected(event) {
                console.log(event);
                this.newComment.picture = event.target.files[0];
                this.selectedFile = event.target.files[0].name;
            },
            handleResize() {
                this.windowWidth = window.innerWidth;
            },

        },
        computed: {
            verifiedUser: function () {
                return true;
                //write something here that can verify if the logged in user is the
                //owner of the page
            },

        },
        mounted() {
            // window.onresize = () => {
            //     this.windowWidth = window.innerWidth
            // }
        },
        created() {
            window.addEventListener('resize', this.handleResize);
            this.handleResize();
        },
        destroyed() {
            window.removeEventListener('resize', this.handleResize);
        },


    }
</script>

<style lang="scss" scoped>
    @import "public/colors";

    .parent {
        margin-top: 10px;
    }

    .content-wrapper {
        justify-content: center;
        margin: 3vw 0px 100px 0px;

    }

    .card-wrapper {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .text-cards {
        background-color: white;
        margin: 0 30px 30px 30px;
        border-radius: 10px;
        box-shadow: 0px 8px 8px $aut-grad-shadow;
        padding: 20px;
        text-align: right;
    }

    .head {
        margin: 0 30px 30px 30px;
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
        margin-bottom: 20px;
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
        width: 5vw;
        height: 5vw;
        border-radius: 50%;
        border: 2px solid $aut-grad-secondary;
        overflow: hidden;
        z-index: 2;
        box-shadow: 0px 8px 8px $aut-grad-shadow;

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

    .comment-cards:hover {
        box-shadow: 5px 15px 13px $aut-grad-shadow;
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
        margin: 0px 0 20px 0;
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
        justify-content: space-around;
        align-items: center;
        justify-self: left;
        margin: 0px 0 30px 0;
    }

    #submit {
        padding: 15px;
        border-radius: 7px;
        font-size: 25px;
        font-weight: bold;
        width: 200px;
        background-color: $aut-grad-secondary;
        color: white;
        border: 2px solid $aut-grad-secondary;
    }

    #submit:hover {
        background-color: $aut-grad-secondary-dark;
        box-shadow: 0px 3px 5px $aut-grad-shadow;
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

    .my-text-area {
        border: none;
        font-family: Sahel;
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        column-count: auto;

    }

    button:hover {
        cursor: pointer;
    }

    .upload-btn-wrapper input:hover {
        cursor: pointer;
    }

    .upload-btn-wrapper input[type=file] {
        font-size: 100px;
        position: absolute;
        left: 0;
        top: 0;
        opacity: 0;
    }

    .details {
        display: flex;
        flex-direction: row;
        justify-content: left;
        align-items: center;
    }

    .verify-comment {
        background-color: white;
        border: none;
        margin-left: 10px;
    }

    .verify-comment:hover {
        opacity: 0.5;
    }

    .details p {
        margin-top: 0px;
    }

    .left-new-comment {
        margin-bottom: 20px;
    }

    .file-select {
        display: flex;
        flex-direction: column-reverse;
    }

    .file-select p {
        color: $aut-grad-secondary-dark;
    }


    @media only screen and (max-width: 770px) {
        .content-wrapper {
            padding: 0;
            margin: 0;
        }
        .head {
            margin: 0px 0 20px 0;
        }
        .text-cards {
            margin: 0px 0 20px 0;
        }
        .comments-wrapper {
            margin: 0px 0 20px 0;
        }
        .details {
            display: flex;
            flex-direction: column-reverse;
            justify-content: start;
        }
        .each-comment-wrapper {
            flex-direction: column;
        }
        .left {
            width: 100%;
        }
        .right {
            width: 100%;
            display: flex;
            justify-content: right;
            margin-bottom: 10px;
        }

        .profile-pic-wrapper {
            width: 18vw;
            height: 18vw;
            border: 0.5px solid $aut-grad-secondary;
        }

        .comment {
            flex-direction: column;
        }

        .comment-text-wrapper {
            width: 100%;
        }

        .picture-wrapper {
            margin: 0px 0 10px 0;
            width: 100%;
        }

        .comment-pic {
            float: none;
        }

        .verify-comment {
            margin-top: 0px;
        }

    }
</style>