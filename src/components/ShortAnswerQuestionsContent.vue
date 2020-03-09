<template>
    <div >
        <div class="content-wrapper">
            <div class="explanation-wrapper">
                <h2>سوالات کوتاه‌پاسخ</h2>
                <p>ﺎﺑ ﯽﻣ یدﺮﺑرﺎﮐ یﺎﻫراﺰﺑا دﻮﺒﻬﺑ فﺪﻫ ﺎﺑ عﻮﻨﺘﻣ یﺎﻫدﺮﺑرﺎﮐ و زﺎﯿﻧ درﻮﻣ یژﻮﻟﻮﻨﮑﺗ ﯽﻠﻌﻓ ﻂﯾاﺮﺷ یاﺮﺑ و ﺖﺳا مزﺎﻟ ﻪﮐ نﺎﻨﭽﻧآﺮﻄﺳ و نﻮﺘﺳ رد ﻪﻠﺠﻣ و ﻪﻣﺎﻧزور ﻪﮑﻠﺑ نﻮﺘﻣ و ﺎﻫﺮﮕﭘﺎﭼ .ﺖﺳا ﮏﯿﻓاﺮﮔ نﺎﺣاﺮﻃ زا هدﺎﻔﺘﺳا ﺎﺑ و پﺎﭼ ﺖﻌﻨﺻ زا مﻮﻬﻔﻣﺎﻧ ﯽﮔدﺎﺳ ﺪﯿﻟﻮﺗ ﺎﺑ ﯽﮕﺘﺧﺎﺳ ﻦﺘﻣ مﻮﺴﭙﯾا مرﻮﻟ.ﺪﺷﺎﺑ ﯽﻣ یدﺮﺑرﺎﮐ یﺎﻫراﺰﺑا دﻮﺒﻬﺑ فﺪﻫ ﺎﺑ عﻮﻨﺘﻣ یﺎﻫدﺮﺑرﺎﮐ و زﺎﯿﻧ درﻮﻣ یژﻮﻟﻮﻨﮑﺗ ﯽﻠﻌﻓ ﻂﯾاﺮﺷ یاﺮﺑ و ﺖﺳا مزﺎﻟ ﻪﮐ نﺎﻨﭽﻧآﺮﻄﺳ و نﻮﺘﺳ رد ﻪﻠﺠﻣ و ﻪﻣﺎﻧزور ﻪﮑﻠﺑ نﻮﺘﻣ و ﺎﻫﺮﮕﭘﺎﭼ .ﺖﺳا ﮏﯿﻓاﺮﮔ نﺎﺣاﺮﻃ زا هدﺎﻔﺘﺳا ﺎﺑ و پﺎﭼ ﺖﻌﻨﺻ زا مﻮﻬﻔﻣﺎﻧ ﯽﮔدﺎﺳ ﺪﯿﻟﻮﺗ ﺎﺑ ﯽﮕﺘﺧﺎﺳ ﻦﺘﻣ مﻮﺴﭙﯾا مرﻮ </p>
            </div>
            <div class="form-wrapper" >
                <div class="single-question" v-for="question in this.questions" v-bind:key="question">
                    <label class="label" ><div class="span">{{question.text}}</div>
                    <input
                            type="text"
                            v-model="question.ans"
                    />
                    </label>
                </div>

            </div>

            <div class="button-wrapper">
                <button id="done">تمومه</button>
                <button id="cancel">منصرف شدم</button>
            </div>
        </div>
    </div>

</template>

<script>
    export default {
        name: "ShortAnswerQuestionsContent",
        Validations: {},
        data() {
            return {
                answer: {
                    name: "",
                    childNumber: "",
                    livingPlace: ""
                },
                questions:[
                    {
                        text: "من یه پرندم",
                        ans: ""
                    },
                    {
                        text: "آرزو دارم",
                        ans: ""
                    },
                    {
                        text: "کنارم باشی",
                        ans: ""
                    },
                    {
                        text: "من یه پرنده خیلی خیلی طولانی ام",
                        ans: ""
                    },
                    {
                        text: "آرزو دارم",
                        ans: ""
                    },
                    {
                        text: "کنارم باشی",
                        ans: ""
                    },
                    {
                        text: "من یه پرندم",
                        ans: ""
                    },
                    {
                        text: "آرزو دارم",
                        ans: ""
                    },
                    {
                        text: "کنارم باشی",
                        ans: ""
                    },
                    {
                        text: "من یه پرندم",
                        ans: ""
                    },
                    {
                        text: "آرزو دارم",
                        ans: ""
                    },
                    {
                        text: "کنارم باشی",
                        ans: ""
                    }
                ]
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "public/colors";



    .content-wrapper {
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 50px;
        margin: 0 20% 50px 20%;
    }

    .explanation-wrapper {
        background-color: $aut-grad-primary;
        color: white;
        min-height: 150px;
        padding: 30px;
        border-radius: 10px;

    }

    .form-wrapper {
        display: flex;
        flex-direction: column;
        justify-content: center;
        background-color: white;
        color: $aut-grad-primary;
        margin-top: 30px;
        border-radius: 10px;
        position: relative;
        box-shadow: 10px 10px 5px $aut-grad-shadow;
        padding-top: 30px;

    }

    label {
        color: $aut-grad-secondary;
        font-weight: bold;
        margin: 1vw 2vw 0 2vw;
        width: 100%;
        display: flex;
        flex-direction: row;
    }

    input {
        border: 0;
        outline: 0;
        padding: 0.5rem 0;
        border-bottom: 4px solid $aut-grad-secondary;
        box-shadow: none;
        color: #111;
        width: 90%;
        margin: 0 2vw 0 2vw;

    }

    .single-question {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin: 0 0 40px 0;
        width: 100%;
    }
    .button-wrapper{
        margin-top: 30px;
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        position: -webkit-sticky;
        position: sticky;
        bottom: 20px;
    }
    .button-wrapper button{
        padding: 15px;
        border-radius: 7px;
        font-size: 25px;
        font-weight: bold;
        width: 200px;
    }
    #done{
        background-color: $aut-grad-secondary;
        color: white;
        border: 2px solid $aut-grad-secondary;
        box-shadow: 10px 10px 5px $aut-grad-shadow;
    }
    #cancel{
        background-color: white;
        color: $aut-grad-secondary;
        border: 4px solid $aut-grad-secondary;
        box-shadow: 10px 10px 5px $aut-grad-shadow;
    }
    .button-wrapper button:hover {
        cursor: pointer;
    }

    label .span{
        width: 10vw;

    }


    @media only screen and (max-width: 770px) {
        .content-wrapper{
            margin: 0;
        }

        label .span{
            width: 25vw;
        }

    }
</style>