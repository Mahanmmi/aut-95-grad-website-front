import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from "../View/Home";
import Graduates from "@/View/Graduates";

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/graduates',
        name: 'graduates',
        component: Graduates
    }
];

export const router = new VueRouter({
    routes,
    mode: 'history'
});