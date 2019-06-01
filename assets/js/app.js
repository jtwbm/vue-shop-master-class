let webapp = new Vue({
	el: '#app',
	data: {
		sitename: 'Интернет-магазин на Vue.js',
		showProduct: true,
		products: [],
		cart: [],
		order: {
			lastname: '',
			firstname: '',
			patronymic: '',
			address: '',
			city: '',
			state: '',
			method: 'Домой',
			gift: 'Не отправлять в подарок',
			sendGift: 'Отправить в подарок',
			dontSendGift: 'Не отправлять в подарок',
			methodHome: 'Домой',
			methodBusiness: 'На работу'
		},
		states: {
			AL: 'Alabama',
			AR: 'Arizona',
			CA: 'California',
			NV: 'Nevada'
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
		showCheckout() {
			this.showProduct = !this.showProduct;
		},
		submitForm() {
			alert('Заказ отправлен!');
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
		axios.get('./products.json')
			.then(response => {
				this.products = response.data.products;
			});
	}
});