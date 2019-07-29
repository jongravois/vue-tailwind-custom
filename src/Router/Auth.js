const routes = [
    {
        path: '/signup',
        name: 'signup',
        meta: {
            layout: 'bare',
            title: 'Universal Asset Management'
        },
        component: () => import('../views/SignUp.vue')
    },
    {
        path: '/signin',
        name: 'signin',
        meta: {
            layout: 'bare',
            title: 'Universal Asset Management'
        },
        component: () => import('../views/SignIn.vue')
    }
];

export default routes;
