<template>
  <div>
     <img alt="Vue logo" src="./assets/logo.png" />
     <button @click="increment">увеличить</button>
     <div>
       result - {{ count }}
     </div>

    <router-link to="/">Index</router-link>
    <br>
    <router-link to="/home">Go to Home</router-link>
     <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { computed } from 'vue';

import { useCommonStore } from '~/store';

export default {
  name: 'App',

  setup() {
    const store = useCommonStore();

    const count = computed(() => store.count);
    const increment = () => store.increment();

    return {
      count,
      increment,
    };
  },
};
</script>

<style lang="scss">
@import "./assets/scss/index.scss";
</style>
