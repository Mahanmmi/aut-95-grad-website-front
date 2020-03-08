<template>
    <div class="content-wrapper">
        <div class="important-info">
            <div class="head">
            <p class="title">اطلاعات ضروری</p>
            </div>
            <div class="fields-wrapper">
                <div class="top">
                   <div class="right">
                       <div class="single-question">
                           <input
                                   id="firstName"
                                   type="text"
                                   v-model="this.importantData.firstName"
                           />
                       </div>
                       <div class="single-question">
                           <input
                                   id="lastNname"
                                   type="text"
                                   v-model="this.importantData.lastName"
                                   placeholder=""
                           />
                       </div>
                       <div class="single-question">
                           <input
                                   id="email"
                                   type="text"
                                   v-model="this.importantData.email"
                           />
                       </div>
                   </div>
                    <div class="left">
                        <div class="single-question">
                            <input
                                    id="userName"
                                    type="text"
                                    v-model="this.importantData.username"
                            />
                        </div>
                        <div class="single-question">
                            <input
                                    id="birthDate"
                                    type="text"
                                    v-model="this.importantData.birthDate"
                            />
                        </div>
                        <div class="single-question">
                            <input
                                    id="gender"
                                    type="text"
                                    v-model="this.importantData.gender"
                            />
                        </div>
                    </div>
                </div>
                <div class="bottom">

                </div>
            </div>
        </div>
        <div class="not-important-info">
            <div class="head">

            </div>
            <div class="fields-wrapper">

            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "EditInfoSection",
        data(){
            return{
              importantData:{
                  firstName: "",
                  lastName: "",
                  email: "",
                  about: "",
                  username: "",
                  birthDate: "",
                  gender: ""
              },
              unImportantData:{
                  telegram: "",
                  tweeter: "",
                  instagram: "",
                  gitHub: ""
              }
            }
        }
    }
</script>


<style lang="scss" scoped>
    @import "public/colors";

    .content-wrapper{
        width: 65%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin: 100px 70px 100px 70px;
    }

    .fields-wrapper{
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 50px;
        background-color: white;
        margin: 30px;
        border-radius: 10px;
        box-shadow: 10px 10px 5px $aut-grad-shadow;
    }
    .head{
        margin: 30px;
        background-color: $aut-grad-primary;
        border-radius: 10px;
        box-shadow: 10px 10px 5px $aut-grad-shadow;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
    .title{
        color: white;
        font-size: 22px;
    }
    .top{
        display: flex;
        flex-direction: row;
        justify-content: center;
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
</style>