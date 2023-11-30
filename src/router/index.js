import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import AboutView from '@/views/AboutView.vue';

const routes = [
	{
		path: '/',
		name: '홈',
		component: HomeView,
	},
	{
		path: '/about',
		name: '어바웃',
		component: AboutView,
	},
];

const router = createRouter({
	history: createWebHistory('/'),
	routes,
});

export default router;
