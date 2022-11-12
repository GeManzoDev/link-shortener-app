<template>
  <button
    class="btn"
    data-clipboard-target="#shortened-link"
    @click="copyText"
    v-show="copyEnabled"
    type="button"
  >
    <i class="fa-sharp fa-solid fa-copy"></i>
  </button>
</template>

<script>
export default {
  name: 'CopyButton',
  data() {
    return {
      shortenedLink: '',
      copyEnabled: false,
    };
  },
};
</script>

<style lang="scss" scoped></style>
