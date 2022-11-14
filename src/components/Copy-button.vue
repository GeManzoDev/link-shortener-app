<template>
  <button
    class="btn"
    data-clipboard-target="#shortened-link"
    @click="copyText"
    type="button"
  >
    <i class="fa-sharp fa-solid fa-copy"></i>
  </button>
</template>

<script>
export default {
  name: 'CopyButton',
};
</script>

<style scoped>
* {
  font-size: 12px;
}
i {
  font-size: 30px;
  color: #0084ff78;
  margin-left: 10px;
}
i:hover {
  transform: scale(0.9);
}
</style>
