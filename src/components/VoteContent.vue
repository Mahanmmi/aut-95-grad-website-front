<template>
    <div class="wrapper">
        <div class="content-wrapper">
            <section class="vote-desc-wrapper">
                <h2>رای‌گیری ترین‌ها</h2>
                <br>
                <p>ﺎﺑ ﯽﻣ یدﺮﺑرﺎﮐ یﺎﻫراﺰﺑا دﻮﺒﻬﺑ فﺪﻫ ﺎﺑ عﻮﻨﺘﻣ یﺎﻫدﺮﺑرﺎﮐ و زﺎﯿﻧ درﻮﻣ یژﻮﻟﻮﻨﮑﺗ ﯽﻠﻌﻓ ﻂﯾاﺮﺷ یاﺮﺑ و ﺖﺳا مزﺎﻟ
                    ﻪﮐ نﺎﻨﭽﻧآﺮﻄﺳ و نﻮﺘﺳ رد ﻪﻠﺠﻣ و ﻪﻣﺎﻧزور ﻪﮑﻠﺑ نﻮﺘﻣ و ﺎﻫﺮﮕﭘﺎﭼ .ﺖﺳا ﮏﯿﻓاﺮﮔ نﺎﺣاﺮﻃ زا هدﺎﻔﺘﺳا ﺎﺑ و پﺎﭼ
                    ﺖﻌﻨﺻ زا مﻮﻬﻔﻣﺎﻧ ﯽﮔدﺎﺳ ﺪﯿﻟﻮﺗ ﺎﺑ ﯽﮕﺘﺧﺎﺳ ﻦﺘﻣ مﻮﺴﭙﯾا مرﻮﻟ.ﺪﺷﺎﺑ ﯽﻣ یدﺮﺑرﺎﮐ یﺎﻫراﺰﺑا دﻮﺒﻬﺑ فﺪﻫ ﺎﺑ عﻮﻨﺘﻣ
                    یﺎﻫدﺮﺑرﺎﮐ و زﺎﯿﻧ درﻮﻣ یژﻮﻟﻮﻨﮑﺗ ﯽﻠﻌﻓ ﻂﯾاﺮﺷ یاﺮﺑ و ﺖﺳا مزﺎﻟ ﻪﮐ نﺎﻨﭽﻧآﺮﻄﺳ و نﻮﺘﺳ رد ﻪﻠﺠﻣ و ﻪﻣﺎﻧزور ﻪﮑﻠﺑ
                    نﻮﺘﻣ و ﺎﻫﺮﮕﭘﺎﭼ .ﺖﺳا ﮏﯿﻓاﺮﮔ نﺎﺣاﺮﻃ زا هدﺎﻔﺘﺳا ﺎﺑ و پﺎﭼ ﺖﻌﻨﺻ زا مﻮﻬﻔﻣﺎﻧ ﯽﮔدﺎﺳ ﺪﯿﻟﻮﺗ ﺎﺑ ﯽﮕﺘﺧﺎﺳ ﻦﺘﻣ
                    مﻮﺴﭙﯾا مرﻮ </p>
            </section>
            <section class="all-votes-wrapper">
                <div class="vote-wrapper" v-for="vote in votes" :key="vote.question">
                    <div class="question-wrapper">
                        <img class="hashtag" src="../assets/hashtag-vote.svg" alt="hashtag">
                        <p>{{vote.question}}</p>
                    </div>
                    <div class="select-wrapper">
                        <p class="selected" v-if="vote.selected">{{vote.selected}}</p>
                        <img v-if="vote.selected" class="human" src="../assets/human-minus.svg" alt="human -">
                        <img v-else class="human" src="../assets/human-plus.svg" alt="human +">
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>

<script>
  export default {
    name: "VoteContent",
    data() {
      return {
        votes: [
          {
            question: 'زیباترین؟',
            selected: 'پارسا انعامی'
          },
          {
            question: 'گوگولی ترین؟؟؟',
            selected: undefined
          },
          {
            question: 'گوگولی ترین؟؟؟',
            selected: undefined
          },
          {
            question: 'گوگولی ترین؟؟؟',
            selected: undefined
          },
          {
            question: 'گوگولی ترین؟؟؟',
            selected: undefined
          },
          {
            question: 'گوگولی ترین؟؟؟',
            selected: undefined
          },
          {
            question: 'گوگولی ترین؟؟؟',
            selected: undefined
          },
          {
            question: 'گوگولی ترین؟؟؟',
            selected: undefined
          },
          {
            question: 'گوگولی ترین؟؟؟',
            selected: undefined
          },
          {
            question: 'گوگولی ترین؟؟؟',
            selected: undefined
          }
        ]
      };
    }
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

    .content-wrapper {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex-direction: column;
        width: 50%;
    }

    .vote-desc-wrapper {
        border-radius: 10px;
        background-color: $aut-grad-primary;
        text-align: center;
        padding: 15px 20px;
        box-sizing: border-box;
        color: white;
        width: 100%;
        margin: 0 0 10px 0;
        box-shadow: 10px 10px 5px $aut-grad-shadow;
    }

    .all-votes-wrapper {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
    }

    .vote-wrapper {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        box-sizing: border-box;
        padding: 10px 15px;
        margin: 7px 0;
        border-radius: 10px;
        background-color: white;
        color: $aut-grad-secondary;
        box-shadow: 10px 10px 5px $aut-grad-shadow;
        font-weight: bold;
        font-size: larger;
    }

    .question-wrapper, .select-wrapper {
        display: flex;
        align-items: center;
    }

    .hashtag {
        margin-left: 10px;
    }

    .selected {
        justify-self: flex-end;;
    }

    .human {
        justify-self: flex-end;
        padding: 5px;
        margin-right: 3px;
        border-radius: 5px;
        cursor: pointer;
    }

    .human:hover {
        background-color: #eeeeee;
    }

    @media only screen and (max-width: 768px) {
        .content-wrapper {
            width: 80%;
        }

        .vote-wrapper {
            font-size: medium;
        }
    }
</style>