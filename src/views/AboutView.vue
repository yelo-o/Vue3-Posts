<template>
	<div>
		<h2>About Page</h2>
		{{ $route.path }}
	</div>
</template>

<script setup>
import { useRoute } from 'vue-router';
const route = useRoute();
console.log('route.path', route.path);
</script>

<style lang="scss" scoped></style>
