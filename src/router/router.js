import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from "../View/Home";
import LogIn from "../View/LogIn";
import ShortAnswerQuestions from "../View/ShortAnswerQuestions";
import Graduates from "@/View/Graduates";

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
    },
    {
        path: '/short-answer-questions',
        name: 'short-answer-questions',
        component: ShortAnswerQuestions
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