const routes = [
    {
        path: '/home',
        name: 'home',
        meta: {
            title: 'Universal Asset Management'
        },
        component: () => import('../views/Home.vue')
    },
    {
        path: '/protected',
        name: 'protected',
        meta: {
            auth: true,
            title: 'Protected Route'
        },
        component: () => import('../views/Protected.vue')
    }
];

export default routes;
