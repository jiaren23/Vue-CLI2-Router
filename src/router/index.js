import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '@/components/HelloWorld';
import PPP from '@/components/PPP';

Vue.use(VueRouter);

export default new VueRouter({
    routes:[
        {
            name:'首頁', // 元件呈現的名稱
            path:'/home', // 對應的虛擬路徑
            component: Home, // 對應元件名稱
        },
        {
            name:'P頁', // 元件呈現的名稱
            path:'/ppp', // 對應的虛擬路徑
            component : ()=> import ('@/components/PPP'),
            // component : PPP,
        }
    ]
});