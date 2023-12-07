<template>
	<div>
		<h2>About Page</h2>
		<p>{{ $route.path }}</p>
		<button class="btn btn-primary" @click="$router.push('/')">
			Home으로 이동
		</button>
		<h2>Store</h2>
		<p>counter : {{ store.counter }}</p>
		<p>counter2 : {{ counter }}</p>
		<p>doubleCount : {{ store.doubleCount }}</p>
		<p>doubleCountPlusOne : {{ store.doubleCountPlusOne }}</p>
		<button @click="store.increment">2배 증가</button>
	</div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { useCounterStore } from '@/stores/counter';
import { storeToRefs } from 'pinia';

const route = useRoute();
console.log('route.path', route.path);

const store = useCounterStore();
const { counter } = storeToRefs(store); //구조분해 할당을 위해서는 storeToRefs 을 사용해야 한다.
</script>

<style lang="scss" scoped></style>
