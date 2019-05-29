// Включить/отключить логгирование
const APP_LOG_LIFECYCLE_EVENTS = true;

let webapp = new Vue({
	el: '#app',
	data: {
		sitename: 'Интернет-магазин на Vue.js',
		showProduct: true,
		product: {
			// http://www.holodilnik.ru/digital_tech/notebook/asus/90nr00i3_m1074/sankt-peterburg/
			id: 1001,
			new: true,
			availableCount: 10,
			rating: 4,
			title: 'Ноутбук ASUS FX 504 GE-E 4633 T i7-8750 H (90 NR 00 I3-M 10740) Gunmetal, Metal',
			description: 'Отличная модель, которая подойдет все любителям гейминга.',
			characteristics: {
				processor: {
					title: 'Процессор',
					text: 'Intel Core i7 2,2 ГГц'
				},
				RAM: {
					title: 'Оперативная память',
					text: '8 ГБ DDR4-2666 МГц'
				},
				OS: {
					title: 'Операционная система',
					text: 'Windows 10'
				},
				HDD: {
					title: 'Встроенная память',
					text: '1000 Гб (HDD) + 256 Гб (SSD)'
				},
				display: {
					title: 'Дисплей',
					text: '15,6", 1920x1080, широкоформатный'
				},
				video: {
					title: 'Видео',
					text: '4 Гб GDDR5'
				}
			},
			price: '4743',
			image: 'http://holod.ru/pics/clean/medium/50/581250_0.jpg'
		},
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
		canAddToCart() {
			return this.product.availableCount > this.cartItemCount;
		}
	},
	methods: {
		addToCart() {
			this.cart.push(this.product.id);
		},
		showCheckout() {
			this.showProduct = !this.showProduct;
		},
		submitForm() {
			alert('Заказ отправлен!');
		},
		getStarClass(n) {
			return this.product.rating < n ? 'far' : 'fas';
		}
	},
	filters: {
		formatPrice(price) {
			if(!parseInt(price)) { return ""; }

			let formatPrice = parseInt(price).toLocaleString() + ' ₽';

			return formatPrice;
		}
	},
	beforeCreate() {
		if(APP_LOG_LIFECYCLE_EVENTS) { console.info('beforeCreate') }
	},
	created() {
		if(APP_LOG_LIFECYCLE_EVENTS) { console.info('created') }
	},
	beforeMount() {
		if(APP_LOG_LIFECYCLE_EVENTS) { console.info('beforeMount') }
	},
	mounted() {
		if(APP_LOG_LIFECYCLE_EVENTS) { console.info('mounted') }
	},
	beforeUpdate() {
		if(APP_LOG_LIFECYCLE_EVENTS) { console.info('beforeUpdate') }
	},
	updated() {
		if(APP_LOG_LIFECYCLE_EVENTS) { console.info('updated') }
	},
	beforeDestroy() {
		if(APP_LOG_LIFECYCLE_EVENTS) { console.info('beforeDestroy') }
	},
	destroyed() {
		if(APP_LOG_LIFECYCLE_EVENTS) { console.info('destroyed') }
	},
});