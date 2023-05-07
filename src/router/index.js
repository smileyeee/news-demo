/*
    这里放的是关于路由的基本配置
    直接搬的别人的代码，原文链接：http://t.csdn.cn/32jrn
*/

import Vue from 'vue'
import VueRouter from "vue-router"
import routes from './routes'
 
Vue.use(VueRouter)
 
// 解決编程式路由住同一地址跳转时会报错的恃观
const originalPush = VueRouter.prototype.push
const originalReplace = VueRouter.prototype.replace
// push
VueRouter.prototype.push = function push(location, onResolve, onReject) {
    if (onResolve || onReject) {
        return originalPush.call(this, location, onResolve, onReject)
    } else {
        return originalPush.call(this, location).catch(err => err)
    }
}
// replace
VueRouter.prototype.replace = function push(location, onResolve, onReject) {
    if (onResolve || onReject) {
        return originalReplace.call(this, location, onResolve, onReject)
    } else {
        return originalReplace.call(this, location).catch(err => err)
    }
}
const router = new VueRouter({
    routes
})
export default router;


