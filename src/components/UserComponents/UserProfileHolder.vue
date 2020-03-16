<template>
    <div class="profile-wrapper">
        <section
            class="profile"
            :class="{'stick-top': isEditing}"
        >
            <div class="profile-pic-wrapper">
                <img class="profile-pic" src="../../assets/testpic.svg" alt="pic">
            </div>
            <div class="profile-data">
                <div v-if="!isEditing" class="shifting-wrapper">
                    <div class="user-data">
                        <vue-text-fit class="data">{{user.name}}</vue-text-fit>
                        <vue-text-fit class="data">{{user.studentNumber | numberPersianizer}}</vue-text-fit>
                        <vue-text-fit class="data">{{user.email}}</vue-text-fit>
                        <vue-text-fit class="data">{{user.age | numberPersianizer | ageFilter}}</vue-text-fit>
                    </div>
                    <div class="divider"/>
                    <div class="most-wrapper">
                        <div class="most">
                            <img class="hashtag" alt="hashtag" src="../../assets/hashtag.svg">
                            <vue-text-fit class="most-val" :max="1">یه گه خیلی خیلی طولانی</vue-text-fit>
                        </div>
                        <div class="most">
                            <img class="hashtag" alt="hashtag" src="../../assets/hashtag.svg">
                            <vue-text-fit class="most-val" :max="1">یه گه</vue-text-fit>
                        </div>
                    </div>
                    <div class="divider"/>
                    <router-link tag="button" to="/voting" v-if="!isMe" class="big-full-button">تو هم رای بده
                    </router-link>
                    <router-link tag="button" to="/user/edit" v-else class="big-full-button">ویرایش اطلاعات
                    </router-link>
                </div>
                <div v-else class="shifting-wrapper">
                    <div class="small-button">
                        <vue-text-fit style="margin-left: 6px">تغییر عکس</vue-text-fit>
                        <img alt="image logo" src="../../assets/image-logo.svg">
                    </div>
                    <button class="big-full-button">پاسخ به سوالات</button>
                    <div class="divider"/>
                    <button class="big-full-button">تمومه</button>
                    <button class="big-empty-button">منصرف شدم</button>
                </div>
            </div>
        </section>
        <section v-if="!isEditing" class="short-answer-wrapper">
            <div>
                <p class="short-answer" v-for="sa in shortAnswers" :key="sa.question">
                    <span class="question">{{sa.question}}</span>
                    <span class="text-divider"> | </span>
                    <span class="answer">{{sa.answer}}</span>
                </p>
            </div>
            <div class="divider"/>
            <router-link tag="button" to="/short-answer-questions" class="big-full-button">ویرایش پاسخ ها</router-link>
        </section>
    </div>
</template>

<script>
  import VueTextFit from "@/components/UserComponents/VueTextFit";

  export default {
    name: "UserProfileHolder",
    data() {
      return {
        user: {
          name: 'اسم گوگولی ما',
          studentNumber: 9531899,
          email: 'yegoogooli@googosssslkade.com',
          age: 21
        },
        shortAnswers: [
          {
            question: 'سلام',
            answer: 'علیک'
          },
          {
            question: 'سلام چطوری ها',
            answer: 'ممنون خیلی خوب و  طولانیم شما چطوری خانوم بچه ها خوبن؟'
          },
          {
            question: 'کجا',
            answer: 'مدرسان شریف'
          },
          {
            question: 'کی',
            answer: 'مدرسان شریف'
          },
          {
            question: 'هان',
            answer: 'مدرسان شریف'
          },
          {
            question: 'کجا',
            answer: 'مدرسان شریف'
          },
          {
            question: 'کی',
            answer: 'مدرسان شریف'
          },
          {
            question: 'هان',
            answer: 'مدرسان شریف'
          },
          {
            question: 'کجا',
            answer: 'مدرسان شریف'
          },
          {
            question: 'کی',
            answer: 'مدرسان شریف'
          },
          {
            question: 'هان',
            answer: 'مدرسان شریف'
          },
          {
            question: 'کجا',
            answer: 'مدرسان شریف'
          },
          {
            question: 'کی',
            answer: 'مدرسان شریف'
          },
          {
            question: 'هان',
            answer: 'مدرسان شریف'
          },
          {
            question: 'کجا',
            answer: 'مدرسان شریف'
          },
          {
            question: 'کی',
            answer: 'مدرسان شریف'
          },
          {
            question: 'هان',
            answer: 'مدرسان شریف'
          }
        ]
      }
    },
    computed: {
      isEditing() {
        return this.$route.name === 'userEdit';
      },
      isMe() {
        return this.$route.name === 'userSelf';
      }
    },
    filters: {
      ageFilter(value) {
        return `${value} سال`
      },
      numberPersianizer(value) {
        const num = String(value);
        let ans = "";
        for (const c of num) {
          switch (c) {
            case '0': {
              ans += '۰';
              break;
            }
            case '1': {
              ans += '۱';
              break;
            }
            case '2': {
              ans += '۲';
              break;
            }
            case '3': {
              ans += '۳';
              break;
            }
            case '4': {
              ans += '۴';
              break;
            }
            case '5': {
              ans += '۵';
              break;
            }
            case '6': {
              ans += '۶';
              break;
            }
            case '7': {
              ans += '۷';
              break;
            }
            case '8': {
              ans += '۸';
              break;
            }
            case '9': {
              ans += '۹';
              break;
            }
            default: {
              ans += c;
            }
          }
        }
        return ans;
      }
    },
    components: {VueTextFit}
  }
</script>

<style lang="scss" scoped>
    @import "public/colors";

    .profile-wrapper {
        display: flex;
        flex-direction: column;
        width: 20%;
        margin-right: 30px;
    }

    .profile {
        min-height: 400px;
        text-align: center;
    }

    .stick-top {
        position: -webkit-sticky;
        position: sticky;
        top: 110px;
    }

    .profile-pic-wrapper {
        display: inline-block;
        position: relative;
        width: 10vw;
        height: 10vw;
        border-radius: 50%;
        border: 5px solid $aut-grad-secondary;
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

    .shifting-wrapper {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        width: 100%;
    }

    .profile-data {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        margin-top: -7vw;
        padding: 8vw 10px 20px;
        border-radius: 10px;
        background-color: $aut-grad-primary;
        box-shadow: 0px 8px 8px rgba(0, 0, 0, 0.25);
    }

    .user-data {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 100%;
        min-height: 10vw;
    }

    .data {
        color: white;
        width: 100%;
        margin: 7px 0;
        word-wrap: break-word;
    }

    .divider {
        width: 90%;
        border: 1px solid $aut-grad-secondary;
        background-color: $aut-grad-secondary;
        margin: 10px 0;
        padding: 0;
        height: 0;
    }

    .most-wrapper {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        width: 100%;
        min-height: 5vw;
    }

    .most {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        /*width: 60%;*/
        background-color: $aut-grad-secondary;
        border-radius: 15px;
        height: 30px;
        padding: 1px;
        box-sizing: border-box;
        color: white;
        margin: 7px 0;
    }

    .most:hover {
        background-color: $aut-grad-secondary-dark;
    }

    .hashtag {
        height: 100%;
    }

    .most-val {
        margin: 0 5px 0 10px;
    }

    .big-full-button {
        color: white;
        border-radius: 10px;
        border: none;
        width: 80%;
        /*padding: 10px;*/
        text-align: center;
        background-color: $aut-grad-secondary;
        font-weight: bold;
        font-size: 1.1em;
        cursor: pointer;
        margin: 7px 0;
    }

    .big-full-button:hover {
        background-color: $aut-grad-secondary-dark;
    }

    .small-button {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        color: $aut-grad-secondary;
        border-radius: 10px;
        width: 45%;
        padding: 5px;
        text-align: center;
        background-color: white;
        font-weight: bold;
        border: 5px solid $aut-grad-secondary;
        box-sizing: border-box;
        cursor: pointer;
        margin: 7px 0 15px 0;
    }

    .small-button:hover, .big-empty-button:hover {
        background-color: #eeeeee;
    }

    .big-empty-button {
        color: $aut-grad-secondary;
        border-radius: 10px;
        border: 5px solid $aut-grad-secondary;
        width: 80%;
        /*padding: 5px;*/
        text-align: center;
        background-color: white;
        font-weight: bold;
        font-size: 1.1em;
        cursor: pointer;
        margin: 7px 0;
    }

    .short-answer-wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        min-height: 100px;
        border-radius: 10px;
        background-color: $aut-grad-primary;
        box-shadow: 0px 8px 8px rgba(0, 0, 0, 0.25);
        margin-top: 30px;
        box-sizing: border-box;
        padding: 15px 15px;
    }

    .short-answer {
        text-align: right;
        margin: 3px 0;
    }

    .text-divider {
        display: inline;
        color: $aut-grad-secondary;
        font-size: larger;
        height: 100%;
    }

    .question {
        color: $aut-grad-secondary;
    }

    .answer {
        color: white;
        word-wrap: break-spaces;
    }

    button {
        height: 50px;
        align-items: center;
    }

    @media only screen and (max-width: 768px) {
        .profile-wrapper {
            width: 80%;
            margin-right: 0;
        }

        .profile-pic-wrapper {
            width: 40vw;
            height: 40vw;
        }

        .profile-data {
            margin-top: -30vw;
            padding: 31vw 5px 20px;
        }
    }
</style>