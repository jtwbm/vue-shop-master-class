<template>
  <div id="shop-app">
    <app-header :cartItemCount="cartItemCount" />
    <router-view/>
  </div>
</template>

<script>
import Header from './components/Header';

export default {
  components: {
    'app-header': Header
  },
  data() {
  	return {
  		cartItemCount: 0
  	}
  }
}
</script>

