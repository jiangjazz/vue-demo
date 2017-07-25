<style lang="scss" scoped>
    // .layout{
    //     position: absolute;
    //     top: 0;
    //     bottom: 0;
    //     left: 0;
    //     right: 0;
    //     min-width: 1400px;
    //     min-height: 600px;
    //     overflow: auto;
    //     .m-content{
    //         position: absolute;
    //         top: 48px;
    //         left: 200px;
    //         bottom: 0;
    //         right: 0;
    //         overflow: auto;
    //         background-color: rgb(236, 240, 245);
    //     }
    // }
</style>
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
