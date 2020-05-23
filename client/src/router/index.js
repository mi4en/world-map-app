import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home,
	},
	{
		path: '/about',
		name: 'About',
		component: () => import('../views/About.vue'),
	},
	{
		path: '/chart',
		name: 'chart',
		component: () => import('../views/Chart'),
	},
	{
		path: '/map',
		name: 'map',
		component: () => import('../views/WorldMap'),
	},
	{
		path: '/acronis',
		name: 'acronis',
		component: () => import('../views/Acronis'),
	},
];

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
});

export default router;
