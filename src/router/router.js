import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from "../View/Home";
import LogIn from "../View/LogIn";
import ShortAnswerQuestions from "../View/ShortAnswerQuestions";
import Graduates from "@/View/Graduates";
import User from "@/View/User";

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/signin',
        name: 'signin',
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
    },
    {
        path: '/user',
        name: 'user',
        component: User
    }
];

export const router = new VueRouter({
    routes,
    mode: 'history'
});