<template>
    <div class="dotted-background">
        <div class="content-wrapper">
            <div class="explanation-wrapper">
                <h2>سوالات کوتاه‌پاسخ</h2>
                <p>ﺎﺑ ﯽﻣ یدﺮﺑرﺎﮐ یﺎﻫراﺰﺑا دﻮﺒﻬﺑ فﺪﻫ ﺎﺑ عﻮﻨﺘﻣ یﺎﻫدﺮﺑرﺎﮐ و زﺎﯿﻧ درﻮﻣ یژﻮﻟﻮﻨﮑﺗ ﯽﻠﻌﻓ ﻂﯾاﺮﺷ یاﺮﺑ و ﺖﺳا مزﺎﻟ ﻪﮐ نﺎﻨﭽﻧآﺮﻄﺳ و نﻮﺘﺳ رد ﻪﻠﺠﻣ و ﻪﻣﺎﻧزور ﻪﮑﻠﺑ نﻮﺘﻣ و ﺎﻫﺮﮕﭘﺎﭼ .ﺖﺳا ﮏﯿﻓاﺮﮔ نﺎﺣاﺮﻃ زا هدﺎﻔﺘﺳا ﺎﺑ و پﺎﭼ ﺖﻌﻨﺻ زا مﻮﻬﻔﻣﺎﻧ ﯽﮔدﺎﺳ ﺪﯿﻟﻮﺗ ﺎﺑ ﯽﮕﺘﺧﺎﺳ ﻦﺘﻣ مﻮﺴﭙﯾا مرﻮﻟ.ﺪﺷﺎﺑ ﯽﻣ یدﺮﺑرﺎﮐ یﺎﻫراﺰﺑا دﻮﺒﻬﺑ فﺪﻫ ﺎﺑ عﻮﻨﺘﻣ یﺎﻫدﺮﺑرﺎﮐ و زﺎﯿﻧ درﻮﻣ یژﻮﻟﻮﻨﮑﺗ ﯽﻠﻌﻓ ﻂﯾاﺮﺷ یاﺮﺑ و ﺖﺳا مزﺎﻟ ﻪﮐ نﺎﻨﭽﻧآﺮﻄﺳ و نﻮﺘﺳ رد ﻪﻠﺠﻣ و ﻪﻣﺎﻧزور ﻪﮑﻠﺑ نﻮﺘﻣ و ﺎﻫﺮﮕﭘﺎﭼ .ﺖﺳا ﮏﯿﻓاﺮﮔ نﺎﺣاﺮﻃ زا هدﺎﻔﺘﺳا ﺎﺑ و پﺎﭼ ﺖﻌﻨﺻ زا مﻮﻬﻔﻣﺎﻧ ﯽﮔدﺎﺳ ﺪﯿﻟﻮﺗ ﺎﺑ ﯽﮕﺘﺧﺎﺳ ﻦﺘﻣ مﻮﺴﭙﯾا مرﻮ </p>
            </div>
            <div class="form-wrapper">
                <div class="single-question">
                    <label class="label" for="name">اسمت چیه؟</label>
                    <input
                            id="name"
                            type="text"
                            v-model="this.answer.name"
                    />
                </div>
                <div class="single-question">
                    <label class="label" for="livingPlace">کجا زندگی میکنی؟</label>
                    <input
                            id="livingPlace"
                            type="text"
                            v-model="this.answer.livingPlace"
                    />
                </div>

                <div class="single-question">
                    <label class="label" for="childNumber">چند تا بچه داری؟</label>
                    <input
                            id="childNumber"
                            type="text"
                            v-model="this.answer.childNumber"
                    />
                </div>
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
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "public/colors";

    .dotted-background {
        // Dot Colors
        $dot-bg-color: #e5e5e5;
        $dot-color: #d8d8d8;
        // Dot Dimensions
        $dot-size: 3px;
        $dot-space: 35px;
        background-image: radial-gradient($dot-color $dot-size, $dot-bg-color $dot-size);
        background-size: $dot-space $dot-space;
        margin: 0 0 0 0;
        padding: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        min-height: calc(100vh - 50px);
    }

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
        padding: 50px;
        background-color: white;
        color: $aut-grad-primary;
        margin-top: 30px;
        border-radius: 10px;
        position: relative;

    }

    label {
        color: $aut-grad-secondary;
        font-weight: bold;
        margin-top: 20px;
    }

    input {
        width: 100%;
        border: 0;
        outline: 0;
        padding: 0.5rem 0;
        border-bottom: 3px solid $aut-grad-secondary;
        box-shadow: none;
        color: #111;
        max-width: 80%;
    }

    .single-question {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin: 0 0 40px 0;
    }



    @media only screen and (max-width: 1200px) {
        .content-wrapper{
            margin: 0;
        }
    }
</style>