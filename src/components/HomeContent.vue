<template>
    <div class="home-wrapper">
        <img alt="logo" style="height: 100%" src="../assets/logo.svg">
    </div>
</template>

<script>
  export default {
    name: "HomeContent"
  }
</script>

<style lang="scss" scoped>
    @import "public/colors";
    .home-wrapper {
        background: $aut-grad-primary none;
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: calc(100vh - 50px);
    }
</style>