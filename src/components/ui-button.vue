<template>
  <button
    class="ui-button"
    :type="type"
    :disabled="disabled"
  >
    <slot>кнопка</slot>
  </button>
</template>

<script lang="ts">
export default {
  name: 'ui-button',

  props: {
    type: {
        type: String,
        default: 'button',
    },

    disabled: {
        type: Boolean,
        default: false,
    },
  },
};
</script>

<style scoped lang="scss">
.ui-button {
  padding: 10px 15px;
  height: var(--ui-height);
  background-color: var(--color-bg-button);
  color: var(--color-text);
  border: 1px solid var(--color-border);
  cursor: pointer;

  &:hover {
    background-color: var(--color-bg-button-hover);
  }

  &:active {
    background-color: var(--color-bg-button-active);
  }
}
</style>
