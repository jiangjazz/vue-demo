<style lang="scss">
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
        name: 'dataMember',
        components: {
            DataNav: Data_nav
        },
        data() {
            return {
                title: '会员与粉丝数据',
                items: [{
                    text: '报表',
                    to: '/data/member'
                }, {
                    text: '会员数据',
                    to: '/data/member/users'
                }, {
                    text: '粉丝数据',
                    to: '/data/member/fans'
                }]
            }
        }
    }
</script>
