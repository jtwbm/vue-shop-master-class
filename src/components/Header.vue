<template>
	<nav class="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
		<div class="container">
		  <router-view class="navbar-brand" :to="{ name: 'iMain' }" v-text="sitename"></router-view>
		  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
		    <span class="navbar-toggler-icon"></span>
		  </button>

		  <div class="collapse navbar-collapse" id="navbarSupportedContent">
		    <ul class="navbar-nav">
		      <li class="nav-item active">
		        <router-link class="nav-link" :to="{ name: 'iMain' }">Каталог</router-link>
		      </li>
		    </ul>
		  </div>
		  	<button type="button" class="btn" @click="showCheckout">
			  Корзина <span class="badge badge-success" v-text="cartItemCount"></span>
			</button>
		</div>
	</nav>
</template>

<script>
export default {
	name: 'app-header',
	props: ['cartItemCount'],
	data() {
		return {
			sitename: 'Vue.js shop'
		}
	},
	methods: {
		showCheckout() {
			this.$router.push({ name: 'Form' });
		},
	}
}
</script>