<template>
	<nav class="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
		<div class="container">
		  <router-view class="navbar-brand" :to="{ name: 'iMain' }" v-text="sitename"></router-view>
		  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
		    <span class="navbar-toggler-icon"></span>
		  </button>

		  <div class="collapse navbar-collapse" id="navbarSupportedContent">
		    <div class="navbar-nav">
		        <router-link class="nav-link" :to="{ name: 'iMain' }">Каталог</router-link>
		    </div>
		  </div>
		  	<router-link :to="{ name: 'Form' }" class="nav-link">
			  Корзина <span class="badge badge-success" v-text="cartItemCount"></span>
			</router-link>
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
	}
}
</script>

<style lang="scss">
.nav-link {
	white-space: nowrap;
	color: #000;

	&.router-link-active {
		color: green;
		font-weight: 600;
	}
}
</style>