<template>
  <div>
    <img alt="Vue logo" src="./assets/logo.png" />
    <button @click="increment">увеличить</button>
    <div>
    result - {{ count }}
    </div>

    <div>
      <ui-input
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

    <router-link to="/">Index</router-link>
    <br>
    <router-link to="/home">Go to Home</router-link>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { computed, ref } from 'vue';

import { useCommonStore } from '~/store';

import UiInput from '~/components/ui-input.vue';
import UiButton from '~/components/ui-button.vue';

export default {
  name: 'App',

  components: {
    UiInput,
    UiButton,
  },

  setup() {
    const store = useCommonStore();

    const text = ref('');
    const count = computed(() => store.count);
    const increment = () => store.increment();
    const log = () => console.log(text.value);

    return {
      text,
      count,
      increment,
      log,
    };
  },
};
</script>

<style lang="scss">
@import "./assets/scss/index.scss";
</style>
