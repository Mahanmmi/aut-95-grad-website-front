<template>
    <div class="wrapper">
        <user-profile-holder/>
        <router-view class="subrouter"/>
    </div>
</template>

<script>
  import UserProfileHolder from "@/components/UserComponents/UserProfileHolder";

  export default {
    name: "User",
    components: {UserProfileHolder}
  }
</script>

<style scoped>
    .wrapper {
        display: flex;
        justify-content: space-evenly;
        padding-top: 10vh;
        padding-bottom: 10vh;
    }

    .subrouter {
        width: 65%;
        display: flex;
        flex-direction: column;
    }

    @media only screen and (max-width: 768px) {
        .wrapper {
            flex-direction: column;
            align-items: center;
            justify-content: space-evenly;
        }

        .subrouter {
            width: 80%;
        }
    }
</style>