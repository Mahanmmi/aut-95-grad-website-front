import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from "../View/Home";
import LogIn from "../View/LogIn";
import ShortAnswerQuestions from "../View/ShortAnswerQuestions";
import Graduates from "@/View/Graduates";
import UserInfo from "../View/UserInfo";

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
        path: '/me/information',
        name: 'editInfo',
        component: UserInfo
    }
];

export const router = new VueRouter({
    routes,
    mode: 'history'
});