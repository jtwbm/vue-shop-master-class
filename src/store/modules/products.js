const state = {
	products: []
};

const getters = {
	products: state => state.products
};

const mutations = {
	'SET_STORE' (state, products) {
		state.products = products;
	}
};

const actions = {
	initStore({ commit }) {
		axios.get('./products.json')
			.then(response => {
				console.log(response.data.products)
				commit('SET_STORE', response.data.products);
			});
	}
};

export default { state, getters, mutations, actions };