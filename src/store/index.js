import Vue from 'vue';
import Vuex from 'vuex';
import productsModule from './modules/products';

Vue.use(Vuex);

const store = new Vuex.Store({
	namespaced: true,
	modules: {
		productsModule
	}
});

export default store;