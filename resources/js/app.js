require('./bootstrap');

import * as Vue from 'vue'

import App from './vue/app'

const app = new Vue({
    el: '#app',
    components: { App }
});