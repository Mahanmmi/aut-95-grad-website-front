<template>
    <div>
        <footer v-if="!isFullBlue" class="footer">
            <p>دانشجویان ورودی ۹۵ دانشکده مهندسی کامپیوتر دانشگاه صنعتی امیرکبیر (پلی تکنیک تهران)</p>
        </footer>
    </div>
</template>

<script>
  export default {
    name: "AppFooter",
    props: {
      isFullBlue: Boolean
    }
  }
</script>

<style lang="scss" scoped>
    @import "public/colors";

    .footer {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 5px;
        min-height: 40px;
        background-color: $aut-grad-primary;
        color: white;
        font-size: larger;
    }
</style>