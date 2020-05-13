import Vue from 'vue';
import Router from 'vue-router';
import LandingPage from './components/LandingPage.vue';
import UiDesigns from './components/UiDesigns.vue';


Vue.use(Router);

export default new Router({
	mode: 'history',
	base: process.env.BASE_URL,
	routes: [
		{
			path: '/',
			name: 'LandingPage',
			component: LandingPage
		},
		{
			path: '/ui-designs',
			name: 'UiDesigns',
			component: UiDesigns
		},

		
	],
	scrollBehavior () {
  return { x: 0, y: 0 }
}
});
