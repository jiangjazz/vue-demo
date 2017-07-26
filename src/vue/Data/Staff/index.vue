<template>
    <div class="data-staff">
        <DataNav :title="title" :items="items"></DataNav>
        <div class="data-content">
            <router-view></router-view>
        </div>
    </div>
</template>
<script>
    import Data_nav from '@/components/Data_nav.vue'

    export default {
        name: 'dataStaff',
        components: {
            DataNav: Data_nav
        },
        data() {
            return {
                title: '员工与门店数据',
                items: [{
                    text: '报表',
                    to: '/data/staff'
                }, {
                    text: '员工数据',
                    to: '/data/staff/workers'
                }, {
                    text: '门店数据',
                    to: '/data/staff/shops'
                }]
            }
        }
    }
</script>
