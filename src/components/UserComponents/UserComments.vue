<template>
    <div class="comment-wrapper"></div>
</template>

<script>
  export default {
    name: "UserComments"
  }
</script>

<style lang="scss" scoped>
    @import "public/colors";

    .comment-wrapper {
        display: flex;
        flex-direction: column;
        width: 65%;
        height: 800px;
        background-color: $aut-grad-primary;
    }

    @media only screen and (max-width: 768px) {
        .comment-wrapper {
            width: 80%;
        }
    }
</style>