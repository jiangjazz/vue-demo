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
