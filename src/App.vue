<template>
  <div id="shop-app">
    <app-header :cartItemCount="cartItemCount" />
    <transition mode="out-in" name="fade">
      <router-view/>
    </transition>
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

<style lang="scss">
.fade {
  &-enter-active,
  &-leave-active {
    transition: opacity .5s ease-in-out; 
  }
  &-enter,
  &-leave-to {
    opacity: 0;
  }
}
</style>