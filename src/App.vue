<template>
  <div id="shop-app">
    <app-header />
    <router-view/>
  </div>
</template>

<script>
import Header from './components/Header';

export default {
  components: {
    'app-header': Header
  }
}
</script>

