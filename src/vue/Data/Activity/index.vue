<style lang="scss">
</style>
<template>
    <div class="data-activity">
        <DataNav :title="title" :items="items"></DataNav>
        <div class="data-content">
            <router-view></router-view>
        </div>
    </div>
</template>
<script>
    import Data_nav from '@/components/Data_nav.vue'

    export default {
        name: 'dataActivity',
        components: {
            DataNav: Data_nav
        },
        data() {
            return {
                title: '线上活动数据',
                items: [{
                    text: '多渠道营销',
                    to: '/data/activity'
                }, {
                    text: '报名参与',
                    to: '/data/activity/partake',
                    nopage: true
                }, {
                    text: '朋友圈分享',
                    to: '/data/activity/share',
                    nopage: true
                }]
            }
        }
    }
</script>
