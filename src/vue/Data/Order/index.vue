<style lang="scss">
    .data-content{
        position: absolute;
        top: 41px;
        left: 0;
        right: 0;
        bottom: 0;
        overflow: auto;
    }
</style>
<template>
    <div class="data-order">
        <DataNav :title="title" :items="items"></DataNav>
        <div class="data-content">
            <router-view></router-view>
        </div>
    </div>
</template>
<script>
    import Data_nav from '@/components/Data_nav.vue'

    export default {
        name: 'dataOrder',
        components: {
            DataNav: Data_nav
        },
        data() {
            return {
                title: '订单数据',
                items: [{
                    text: '报表',
                    to: '/data/order'
                }, {
                    text: '线上订单',
                    to: '/data/order/online'
                }, {
                    text: '线下订单',
                    to: '/data/order/offline'
                }]
            }
        }
    }
</script>
