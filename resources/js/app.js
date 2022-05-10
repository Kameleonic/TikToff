require('./bootstrap');
Vue.component('app', require('./components/app.vue').default);

import { createApp } from 'vue'


import App from './components/app.vue';

const app = new Vue({
    el: '#app',
    components: {
        'app': require('./components/app.vue'),
    }
});