import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from "../View/Home";
import LogIn from "../View/LogIn";

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/login',
        name: 'login',
        component: LogIn
    }
];

export const router = new VueRouter({
    routes,
    mode: 'history'
});