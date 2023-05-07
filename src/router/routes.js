/*
    定义路由路径
*/
export default [
    {
        // 重定向根路径
        path: '/',
        component: ()=> import ('@/views/IndexView.vue')
    },
    {
        path: '/index',
        name: 'index',
        component: ()=> import ('@/views/IndexView.vue')
    },
    {
        path: '/article',
        name: 'article',
        component: ()=> import ('@/views/ArticlesView.vue')
    },
    {
        path: '/chat',
        name: 'chat',
        component: ()=> import ('@/views/ChatView.vue')
    },
    {
        path: '/login',
        component: ()=> import ('@/components/login.vue')
    },
    {
        path: '/register',
        component: ()=> import ('@/components/register.vue')
    },
    // {
    //     path: '/write',
    //     component: ()=> import ('')
    // }
    
]
