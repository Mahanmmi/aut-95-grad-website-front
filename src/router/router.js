import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from "../components/Home";

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    }
];

export const router = new VueRouter({
    routes,
    mode: 'history'
});