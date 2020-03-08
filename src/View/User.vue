<template>
    <div class="wrapper">
        <user-profile-holder/>
        <user-comments/>
    </div>
</template>

<script>
  import UserProfileHolder from "@/components/UserComponents/UserProfileHolder";
  import UserComments from "@/components/UserComponents/UserComments";

  export default {
    name: "User",
    components: {UserComments, UserProfileHolder}
  }
</script>

<style scoped>
    .wrapper {
        display: flex;
        justify-content: space-evenly;
        padding-top: 10vh;
        padding-bottom: 10vh;
    }

    @media only screen and (max-width: 768px) {
        .wrapper {
            flex-direction: column;
            align-items: center;
            justify-content: space-evenly;
        }
    }
</style>