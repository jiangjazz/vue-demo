<template>
    <div class="layout">
        <HeaderCt :toggleFN="toggleClick" />
        <LeftMenu />
        <div class="m-content">
            <router-view></router-view>
        </div>
    </div>
</template>
<script>
    import HeaderCt from '@/components/HeaderCt.vue'
    import LeftMenu from '@/components/LeftMenu.vue'

    export default {
        replace: false,
        name: 'layout',
        components: {
            HeaderCt,
            LeftMenu
        },
        data () {
            return {
                spanLeft: 5,
                spanRight: 19
            }
        },
        computed: {
            iconSize () {
                return this.spanLeft === 5 ? 14 : 24;
            }
        },
        methods: {
            toggleClick () {
                if (this.spanLeft === 5) {
                    this.spanLeft = 2;
                    this.spanRight = 22;
                } else {
                    this.spanLeft = 5;
                    this.spanRight = 19;
                }
            }
        }
    }
</script>
