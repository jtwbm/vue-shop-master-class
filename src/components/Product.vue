<template>
    <div class="container">
        <br><br>
        <div class="media">
            <img :src="product.image" class="mr-3" :alt="product.title">
            <div class="media-body">
                <h1 class="mt-0">{{ product.title }} <span v-if="product.new" class="badge badge-success">New</span></h1>
                <p v-html="product.description"></p>
                <div class="rating">
		    		<i class="fa-star" :class="getStarClass(n, product)" v-for="n in 5"></i>
		    	</div>
                    <div class="col-sm-6">
                        <strong>{{ product.price | formatPrice }}</strong>
                    </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            product: ''
        }
    },
    filters: {
		formatPrice(price) {
			if(!parseInt(price)) { return ""; }

			let formatPrice = parseInt(price).toLocaleString() + ' ₽';

			return formatPrice;
		}
	},
	methods:{
		getStarClass(n, product) {
			return product.rating < n ? 'far' : 'fas';
		}
	},
    created() {
        const _this = this;

        axios.get('/products.json')
            .then(res => {
                _this.product = res.data.products.filter(product => {
                    return product.id == this.$route.params.id
                })[0];
            });
    }
}
</script>