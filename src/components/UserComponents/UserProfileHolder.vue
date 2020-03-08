<template>
    <div class="profile-wrapper">
        <div class="profile">
            <div class="profile-pic-wrapper">
                <img class="profile-pic" src="../../assets/testpic.svg" alt="pic">
            </div>
            <div class="profile-data">
                <div v-if="!isEditing" class="no-edit-wrapper">
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
                    <button class="bottom-button">تو هم رای بده</button>
                </div>
            </div>
        </div>
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
        }
      }
    },
    computed: {
      isEditing() {
        return this.$route.name === 'userEdit';
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
        width: 17%;
        border: 1px solid red;
    }

    .profile {
        height: 400px;
        text-align: center;
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

    .no-edit-wrapper {
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
        padding: 8vw 5px 20px;
        border-radius: 10px;
        background-color: $aut-grad-primary;
        box-shadow: 0 5px 8px 3px $aut-grad-shadow;
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
        margin: 10px 0;
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
        width: 60%;
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

    .bottom-button {
        color: white;
        border-radius: 10px;
        border: none;
        width: 70%;
        padding: 10px;
        text-align: center;
        background-color: $aut-grad-secondary;
        font-weight: bold;
        font-size: x-large;
        cursor: pointer;
        margin: 7px 0;
    }

    .bottom-button:hover {
        background-color: $aut-grad-secondary-dark;
    }

    @media only screen and (max-width: 768px) {
        .profile-wrapper {
            width: 80%;
            padding-bottom: 45vw;
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