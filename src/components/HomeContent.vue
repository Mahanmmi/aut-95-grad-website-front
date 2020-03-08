<template>
    <div class="home-wrapper">
        <svg width="238" height="208" viewBox="0 0 238 208" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_d)">
                <path d="M229.659 12.9437V7.27368L207.099 7.27368V12.9437L229.659 12.9437Z" fill="white"/>
                <path d="M193.185 35.5474H198.855V7.27742H193.185V35.5474Z" fill="white"/>
                <path d="M215.545 38.3774H221.215V10.1074H215.545V38.3774Z" fill="white"/>
                <path d="M193.838 73.0524H199.508V47.5624H193.838V73.0524Z" fill="white"/>
                <path d="M164.202 73.0524H169.872V47.5624H164.202V73.0524Z" fill="white"/>
                <path d="M162.175 38.3824H167.845V12.9424H162.175V38.3824Z" fill="white"/>
                <path d="M145.315 38.3824H150.985V12.9424H145.315V38.3824Z" fill="white"/>
                <path d="M176.445 35.5474H182.115V7.27742H176.445V35.5474Z" fill="white"/>
                <path d="M195.869 38.3837V32.7137H179.279V38.3837H195.869Z" fill="white"/>
                <path d="M165.011 27.0762V21.4062L148.421 21.4062V27.0762L165.011 27.0762Z" fill="white"/>
                <path d="M210.937 61.7599V56.0899H194.347V61.7599H210.937Z" fill="white"/>
                <path d="M210.94 75.8874V70.2174H196.67V75.8874H210.94Z" fill="white"/>
                <path d="M181.235 50.4024V44.7324H167.045V50.4024H181.235Z" fill="white"/>
                <path d="M181.23 75.8874V70.2174H167.04V75.8874H181.23Z" fill="white"/>
                <path d="M210.935 50.4024V44.7324H196.665V50.4024H210.935Z" fill="white"/>
                <path d="M162.179 12.9437V7.27368L150.989 7.27368V12.9437L162.179 12.9437Z" fill="white"/>
                <path d="M165.009 15.7737V10.1037L159.339 10.1037V15.7737H165.009Z" fill="white"/>
                <path d="M153.819 15.7737V10.1037L148.149 10.1037V15.7737H153.819Z" fill="white"/>
                <path d="M183.96 53.2374V47.5674H178.29V53.2374H183.96Z" fill="white"/>
                <path d="M183.965 73.0524V67.3824H178.295V73.0524H183.965Z" fill="white"/>
                <path d="M67.48 64.78L8 32.4L67.4 0L126.9 32.39V75.89H115.86L115.91 38.38L67.48 64.78Z" fill="white"/>
                <path d="M105 55V76.6L67.47 97.15L29.34 76.48V54.82L67.45 75.4L105 55Z" fill="white"/>
                <path d="M145.32 101.41H119.4V178.63H145.32V101.41Z" fill="#9E8B4D"/>
                <path d="M227.4 101.41H201.48V178.63H227.4V101.41Z" fill="#9E8B4D"/>
                <path d="M214.439 114.374V88.4537L119.399 88.4537V114.374L214.439 114.374Z" fill="#9E8B4D"/>
                <path d="M166.919 191.414V165.494H132.359V191.414H166.919Z" fill="#9E8B4D"/>
                <path d="M214.439 191.414V165.494H179.879V191.414H214.439Z" fill="#9E8B4D"/>
                <path d="M188.399 178.634V152.714H158.399V178.634H188.399Z" fill="#9E8B4D"/>
                <path d="M106.8 111.79H80.88V191.32H106.8V111.79Z" fill="#9E8B4D"/>
                <path d="M54.96 110.44H29.04V153.16H54.96V110.44Z" fill="#9E8B4D"/>
                <path d="M106.799 165.674V139.754H41.9987V165.674H106.799Z" fill="#9E8B4D"/>
                <path d="M67.92 109.78L106.8 88.45V114.37H29.04V88.45L67.92 109.78Z" fill="#9E8B4D"/>
            </g>
            <defs>
                <filter id="filter0_d" x="0" y="0" width="237.659" height="207.414" filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                    <feOffset dy="8"/>
                    <feGaussianBlur stdDeviation="4"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
                </filter>
            </defs>
        </svg>
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