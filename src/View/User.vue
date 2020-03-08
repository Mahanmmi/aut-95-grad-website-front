<template>
    <div class="wrapper">
        <user-profile-holder/>
        <edit-info-section></edit-info-section>
    </div>
</template>

<script>
  import UserProfileHolder from "@/components/UserComponents/UserProfileHolder";
  // import UserComponentsments from "@/components/UserComponents/UserComments";
  import EditInfoSection from "../components/UserComponents/EditInfoSection";

  export default {
    name: "User",
    components: {EditInfoSection, UserProfileHolder}
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