<template>
	<main class="container">
		<div class="row">
			<div class="card col-sm-4" v-for="product in sortedProducts" :key="product.id">
				<div class="card-header">
			    	<router-link tag="h5" :to="{ name: 'Product', params: { id: product.id }}" class="card-title">{{ product.title }} <span v-if="product.new" class="badge badge-success">New</span></router-link>
			    	<div class="rating">
			    		<i class="fa-star" :class="getStarClass(n, product)" v-for="n in 5"></i>
			    	</div>
			  	</div>
				<div class="card-body">
					<img :src="product.image" class="card-img-top" :alt="product.title">
					<hr>
					<p class="card-text" v-text="product.description"></p>
				</div>
			    <div class="card-footer row">
			    	<div class="col-sm-6">
			    		<strong>{{ product.price | formatPrice }}</strong>
			    	</div>
			    	<div class="col-sm-6">
				  		<button type="button" class="btn btn-info" @click="addToCart(product)" v-if="canAddToCart(product)">В корзину</button>
				  		<button type="button" class="btn btn-outline-secondary" disabled v-else>В корзину</button>
				  		<div class="productCountInfo">
					  		<template v-if="product.availableCount === 0">Распродано</template>
				    		<template v-else-if="product.availableCount < 5">Осталось {{ product.availableCount }} шт.</template>
				    		<template v-else>Купить сейчас!</template>
				    	</div>
				  	</div>
			    </div>
			</div>
		</div>
	</main>
</template>

<script>
export default {
	data() {
		return {
			products: [],
			cart: [],
		}
	},
	computed: {
		cartItemCount() {
			return this.cart.length || '';
		},
		sortedProducts() {
			let arrProducts = [];
			if(this.products.length) {
				arrProducts = this.products.slice(0);
				arrProducts.sort((x, y) => x.title.toLowerCase() < y.title.toLowerCase() ? -1 : 1);
			}
			return arrProducts;
		}
	},
	methods: {
		canAddToCart(product) {
			// return this.products[id].availableCount > this.cartItemCount;
			return product.availableCount > 0;
		},
		addToCart(product) {
			this.cart.push(product.id);
			product.availableCount--;
		},
		
		
		getStarClass(n, product) {
			return product.rating < n ? 'far' : 'fas';
		}
	},
	filters: {
		formatPrice(price) {
			if(!parseInt(price)) { return ""; }

			let formatPrice = parseInt(price).toLocaleString() + ' ₽';

			return formatPrice;
		}
	},
	created() {
		axios.get('/products.json')
			.then(response => {
				this.products = response.data.products;
			});
	}
}
</script>