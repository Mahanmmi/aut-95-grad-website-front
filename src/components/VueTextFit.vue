<template>
  <span @click="$emit('click')">
    <slot></slot>
  </span>
</template>

<script>
  export default {
    name: 'VueTextFit',
    props: {
      targetLineCount: {
        'default': 1,
        type: Number,
      },
      unit: {
        'default': 'em',
        type: String,
      },
      min: {
        'default': 0.4,
        type: Number,
      },
      max: {
        'default': 1.5,
        type: Number,
      }
    },
    methods: {
      calculate() {
        let element = this.$el;
        // first make it an inline block and set the line height to a fixed pixel value
        element.style.display = 'inline-block';
        element.style.lineHeight = '1px';
        // then keep trying untill it fits
        let fontSize = this.max;
        let stepSize = (this.unit === 'px') ? 1 : 0.05;
        element.style.fontSize = fontSize + this.unit;
        while (element.offsetHeight > this.targetLineCount && fontSize > this.min) {
          fontSize -= stepSize;
          element.style.fontSize = fontSize + this.unit;
        }
        // found it!!
        // reset the styles
        element.style.display = null;
        element.style.lineHeight = null;
      }
    },
    mounted() {
      this.calculate();
      this.$nextTick(() => {
        this.calculate();
      });
      window.addEventListener('resize', this.calculate);
      window.addEventListener('load', this.calculate);
    },
    beforeDestroy() {
      window.removeEventListener('resize', this.calculate);
      window.removeEventListener('load', this.calculate);
    }
  }
</script>