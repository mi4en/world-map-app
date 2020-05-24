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
		path: '/acronis-html',
		name: 'acronis-html',
		component: () => import('../views/AcronisHTML'),
	},
	{
		path: '/acronis-js',
		name: 'acronis-js',
		component: () => import('../views/AcronisJs'),
	},
];

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
});

export default router;
