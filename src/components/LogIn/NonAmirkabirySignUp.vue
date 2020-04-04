<template>
    <div class="parent">
        <div class="content-wrapper">
            <div class="important-info">
                <div class="head">
                    <p class="title">اطلاعات ضروری</p>
                    <i class="material-icons">
                        keyboard_arrow_down
                    </i>
                </div>
                <div class="fields-wrapper-top">
                    <div class="top">
                        <div class="right">
                            <div class="single-field">
                                <input
                                        class="animation"
                                        id="firstName"
                                        type="text"
                                        v-model="user.firstName"
                                        placeholder=" "
                                />
                                <label for="firstName" id="label-firstName">نام</label>
                            </div>
                            <div class="single-field">
                                <input
                                        class="animation"
                                        id="lastName"
                                        type="text"
                                        v-model="user.lastName"
                                        placeholder=" "
                                />
                                <label for="lastName" id="label-lastName">نام خانوادگی</label>
                            </div>
                            <div class="single-field">
                                <input
                                        class="animation"
                                        id="email"
                                        type="text"
                                        v-model="user.email"
                                        placeholder="xx@xx.xx"
                                />
                                <label for="email">ایمیل</label>
                            </div>
                        </div>
                        <div class="left">
                            <div class="single-field">
                                <input
                                        class="animation"
                                        id="userName"
                                        type="text"
                                        v-model="user.username"
                                        placeholder=" "
                                />
                                <label for="userName">نام کاربری</label>
                            </div>
                            <div class="single-field">
                                <input
                                        class="animation"
                                        id="birthDate"
                                        type="text"
                                        v-model="user.birthDate"
                                        placeholder="**/**/**"
                                />
                                <label for="birthDate">تاریخ تولد</label>
                            </div>
                            <div class="single-field">
                                <input
                                        class="animation"
                                        id="gender"
                                        type="password"
                                        v-model="user.password"
                                        placeholder=" "
                                />
                                <label for="gender">رمز عبور</label>
                            </div>
                        </div>
                    </div>
                    <div class="bottom">
                        <div class="single-field">
                            <textarea
                                    class="my-text-area animation"
                                    name=""
                                    id="about"
                                    cols=" "
                                    rows="3"
                                    v-model="user.about"
                                    placeholder=" "
                            />
                            <label for="about">درباره من</label>
                        </div>
                    </div>
                </div>
                <div class="button-wrapper">
                    <button id="done">ثبت</button>
                    <router-link to="/signin/non-amirkabiry">
                        <button id="login">قبلا اکانت ساختم، ورود!</button>
                    </router-link>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "NonAmirkabirySignUp",
        data() {
            return {
                user: {
                    firstName: "",
                    lastName: "",
                    email: "",
                    about: "",
                    username: "",
                    birthDate: "",
                    password: ""
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "../../../public/colors";

    .parent {
        min-height: calc(100vh - 50px);
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .content-wrapper {
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 50px;
        margin: 0px 10vw 0px 10vw;
    }


    .fields-wrapper-top {
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 50px 0;
        background-color: white;
        margin: 0 30px 30px 30px;
        border-radius: 10px;
        box-shadow: 0px 8px 8px rgba(0, 0, 0, 0.25);
    }

    .head {
        margin: 0 30px 18px 30px;
        background-color: $aut-grad-primary;
        border-radius: 10px;
        box-shadow: 0px 8px 8px rgba(0, 0, 0, 0.25);
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding: 10px;
        height: 25px;
        align-items: center;
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

    .top {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    .left {
        width: 40%;
        margin-left: 60px;
    }

    .right {
        width: 40%;
        margin-right: 0;
    }

    .bottom {
        margin-left: 60px;
    }

    .animation {
        width: 100%;
        border: 0;
        outline: 0;
        padding: 0.5rem 0;
        border-bottom: 4px solid $aut-grad-secondary;
        box-shadow: none;
        color: #111;
        font-size: 15px;
        -webkit-appearance: none;
        border-radius: 0;
        cursor: text;

    }

    label, .animation {
        transition: all 0.2s;
        touch-action: manipulation;
    }


    .animation:focus {
        outline: 0;
        border-bottom: 1px solid #666;
    }

    label {
        text-transform: uppercase;
        letter-spacing: 0.05em;
        font-size: 10px;
        font-weight: bold;
        color: $aut-grad-secondary;
        position: relative;
        right: 50px;
        min-width: 80px;
        top: -25px;
    }

    #label-firstName {
        right: 40px;
    }

    #label-lastName {
        right: 70px;
    }

    /**
    * Translate down and scale the label up to cover the placeholder,
    * when following an input (with placeholder-shown support).
    * Also make sure the label is only on one row, at max 2/3rds of the
    * field—to make sure it scales properly and doesn't wrap.
    */
    .animation:placeholder-shown + label {
        cursor: text;
        max-width: 66.66%;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        transform-origin: right top;
        transform: translate(0, 2.125rem) scale(1.5);
    }

    /**
    * By default, the placeholder should be transparent. Also, it should
    * inherit the transition.
    */
    ::-webkit-input-placeholder {
        opacity: 0;
        transition: inherit;
    }

    /**
    * Show the placeholder when the input is focused.
    */
    .animation:focus::-webkit-input-placeholder {
        opacity: 1;
    }

    /**
    * When the element is focused, remove the label transform.
    * Also, do this when the placeholder is _not_ shown, i.e. when
    * there's something in the input at all.
    */
    .animation:not(:placeholder-shown) + label,
    .animation:focus + label {
        transform: translate(0, 0) scale(1);
        cursor: pointer;
    }

    .single-field {
        display: flex;
        flex-direction: row-reverse;
        justify-content: space-between;
        margin: 0 0 40px 0;
    }

    .button-wrapper {
        margin-top: 30px;
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        position: -webkit-sticky;
        position: sticky;
        bottom: 20px;
    }

    .button-wrapper button {
        padding: 15px;
        border-radius: 7px;
        font-size: 25px;
        font-weight: bold;
        width: 200px;
    }

    #done {
        background-color: $aut-grad-secondary;
        color: white;
        border: 2px solid $aut-grad-secondary;
    }

    #login {
        background-color: white;
        color: $aut-grad-secondary;
        border: 4px solid $aut-grad-secondary;
    }

    .button-wrapper button:hover {
        cursor: pointer;
        box-shadow: 0px 8px 8px rgba(0, 0, 0, 0.25);

    }


    @media only screen and (max-width: 1200px) {

        .top {
            flex-direction: column;
            justify-content: center;
        }
        .right {
            width: 90%;
        }
        .left {
            width: 90%;
        }
        .bottom {
            margin: 0;
            width: 90%;
        }


    }

    @media only screen and (max-width: 768px) {

        .fields-wrapper-top {
            font-size: 12px;
            margin: 0px 0 20px 0;
        }

        .head {
            margin: 0px 0 20px 0;
        }

        .title {
            font-size: 15px;
        }
        .content-wrapper {
            margin: 0;
        }
        label {
            left: 0;
            right: 0;
        }
        #label-firstName {
            right: 0px;
        }

        #label-lastName {
            right: 0px;
        }

        .button-wrapper button {
            margin-top: 5px;
            font-size: 17px;
            padding: 10px;
        }


    }
</style>