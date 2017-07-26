// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from "vue-router"
import UI_iview from "iview"
import 'iview/dist/styles/iview.css'

import VueRouterConfig from '@/config/router/index'

Vue.config.productionTip = false

Vue.use(UI_iview)
Vue.use(VueRouter)
VueRouterConfig(Vue, VueRouter)

console.log('%c欢迎，这里是Janzen使用vue+ivew写的一个小demo\n', 'color: white;background: black;')
console.log('%c如果你有更多的想法，请联系janzenjiang@qq.com\n', 'color: white;background: black;')
