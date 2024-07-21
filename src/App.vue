<template>
  <div>
    <img alt="Vue logo" src="./assets/logo.png" />

    <ui-switch v-model="isDark" @change="toggleDarkMode"/>
    <div> isDark - {{ isDark }} </div>

    <div>
      <ui-input
        v-focus
        v-model="text"
        @keyup.enter="log"
      />
      <ui-button
        @click="log"
      >
        Кнопка
      </ui-button>
    </div>

    <div>
      {{ text }}
    </div>

    <router-link :to="`${$basePath}/`">Index</router-link>
    <br>
    <router-link :to="`${$basePath}/home`">Go to Home</router-link>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { computed, ref, inject } from 'vue';

import UiInput from '~/components/ui-input.vue';
import UiButton from '~/components/ui-button.vue';
import UiSwitch from './components/ui-switch.vue';

export default {
  name: 'App',

  components: {
    UiSwitch,
    UiInput,
    UiButton,
  },

  setup() {
    const toggleDarkMode = inject('toggleDarkMode');

    const text = ref('');
    const isDark = ref(toggleDarkMode());
    const log = () => console.log(text.value);

    return {
      text,
      isDark,
      log,
      toggleDarkMode,
    };
  },
};
</script>

<style lang="scss">
@import "./assets/scss/index.scss";
</style>
