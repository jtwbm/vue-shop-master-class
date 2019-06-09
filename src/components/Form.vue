<template>
	<main class="container checkout">
		<h2>Оформление заказа</h2>
		<form action="#">
			<h4>Личные данные</h4>
			<hr>
			<div class="row">
				<div class="col">
					<div class="form-group">
					    <label for="lastname">Фамилия</label>
					    <input type="text" class="form-control" id="lastname" placeholder="" v-model.trim="order.lastname">
				  	</div>
				</div>
				<div class="col">
					<div class="form-group">
					    <label for="firstname">Имя</label>
					    <input type="text" class="form-control" id="firstname" placeholder="" v-model.trim="order.firstname">
				  	</div>
				</div>
				<div class="col">
					<div class="form-group">
					    <label for="patronymic">Отчество</label>
					    <input type="text" class="form-control" id="patronymic" placeholder="" v-model.trim="order.patronymic">
				  	</div>
				</div>
			</div>
			<h4>Адрес доставки</h4>
			<hr>
			<div class="row">
				<div class="col-2">
					<div class="form-group">
					    <label for="state">Штат</label>
					    <select class="form-control" id="state" v-model="order.state">
					      <option disabled>State</option>
					      <option v-for="(state, key) in states" :value="state">{{ key }}</option>
					    </select>
					  </div>
				</div>
				<div class="col">
					<div class="form-group">
					    <label for="city">Город</label>
					    <input type="text" class="form-control" id="city" placeholder="" v-model.trim="order.city">
				  	</div>
				</div>
				<div class="col-12">
					<div class="form-group">
					    <label for="address">Адрес</label>
					    <input type="text" class="form-control" id="address" placeholder="" v-model.trim="order.address">
				  	</div>
				</div>
				<div class="col">
					<div class="form-group form-check">
					    <input type="checkbox" class="form-check-input" id="gift"
					    	:true-value="order.sendGift" 
					    	:false-value="order.dontSendGift" 
					    	v-model="order.gift">
					    <label class="form-check-label" for="gift">Отправить в подарок?</label>
				  	</div>
				</div>
				<div class="col">
					<div class="custom-control custom-radio">
					  <input type="radio" id="methodHome" name="method" class="custom-control-input" value="Home" 
						  :value="order.methodHome"
						  v-model="order.method">
					  <label class="custom-control-label" for="methodHome">Домашний адрес</label>
					</div>
					<div class="custom-control custom-radio">
					  <input type="radio" id="methodBusiness" name="method" class="custom-control-input" value="Business" 
					  	:value="order.methodBusiness"
					  	v-model="order.method">
					  <label class="custom-control-label" for="methodBusiness">Рабочий адрес</label>
					</div>
				</div>
			</div>
		</form>
		<hr>
		<div class="alert alert-info">
			<h3>Ваши данные:</h3>
			<ul class="verify">
				<li><strong>ФИО:</strong> {{ [order.lastname, order.firstname, order.patronymic].join(" ") }}</li>
				<li><strong>Адрес:</strong> {{ order.address }}</li>
				<li><strong>Город:</strong> {{ order.city }}</li>
				<li><strong>Штат:</strong> {{ order.state }}</li>
				<li><strong>В подарок:</strong> {{ order.gift }}</li>
				<li><strong>Вариант доставки:</strong> {{ order.method }}</li>
			</ul>
		</div>

		<div class="row">
			<div class="col-12">
				<div class="alert alert-secondary clearfix">
					<button class="btn btn-success float-right" @click="submitForm">Заказать</button>
				</div>
			</div>
		</div>
	</main>
</template>

<script>
export default {
	data() {
		return {
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
		}
	},
	methods: {
		submitForm() {
			alert('Заказ отправлен!');
		},
	}
}
</script>