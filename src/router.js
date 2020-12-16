import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import HowToUse from './views/HowToUse.vue';
import Schedule from './views/Schedule.vue';

Vue.use(Router);

export default new Router ({
    mode: "history",
    routes: [
        {path: '/', component: Home},
        {path: '/HowToUse', component: HowToUse},
        {path: '/Schedule', component: Schedule}
    ]
})