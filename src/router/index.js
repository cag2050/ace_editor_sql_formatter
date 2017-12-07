import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: '',
            component: resolve => require(['../components/Ace'], resolve)
        },
        {
            path: '/hello',
            name: 'HelloWorld',
            component: HelloWorld
        }
    ]
})
