<style lang="scss">
    .u-breadcrumb{
    }
</style>
<template>
    <div :class="prefixCls">
        <router-link to="/member/group/list" class="item">会员分组</router-link>
        <span class="separator">></span>
        <span class="item active">详情</span>
    </div>
</template>
<script>
// 未启用
    const prefixCls = 'u-breadcrumb'

    export default {
        name: 'u_breadcrumb',
        props: {
            items: {
                type: Array,
                default() {
                    return []
                }
            }
        },
        methods: {
        },
        data() {
            return {
                prefixCls: prefixCls
            }
        }
    }
</script>
