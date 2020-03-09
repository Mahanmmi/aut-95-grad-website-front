import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from "../View/Home";
import LogIn from "../View/LogIn";
import ShortAnswerQuestions from "../View/ShortAnswerQuestions";
import Graduates from "@/View/Graduates";
import User from "@/View/User";
import EditInfoSection from "@/components/UserComponents/EditInfoSection";
import UserComments from "../components/UserComponents/UserComments";
import Vote from "@/View/Vote";

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
        path: '/voting',
        name: 'voting',
        component: Vote
    },
    {
        path: '/user',
        name: 'user',
        component: User,
        children: [
            {
                path: '/user/edit',
                name: 'userEdit',
                component: EditInfoSection
            },
            {
                path: '/user/:name',
                name: 'eachUserPage',
                component: UserComments
            }
        ]
    }
];

export const router = new VueRouter({
    routes,
    mode: 'history'
});