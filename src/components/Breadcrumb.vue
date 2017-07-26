<style lang="scss">
    .u-breadcrumb{
        padding: 0 20px;
        height: $ctNavHeight;
        background-color: $white;
        border-bottom: 1px solid $border-default;
        line-height: $ctNavHeight;
        .item{
            color: $text-disabled;
            &.active{
                color: $text-normal;
            }
        }
    }
</style>
<template>
    <div :class="prefixCls">
        <!-- <router-link to="/member/group/list" class="item">会员分组</router-link>
        <span class="separator">></span>
        <span class="item active">详情</span> -->
        <span v-for="(item, index) in items" v-if="itemsLength > 1 && index !== (itemsLength - 1)" :key="index">
            <router-link :to="item.to" class="item">{{ item.text }}</router-link>
            <span class="separator">></span>
        </span>
        <span class="item active">{{ items[itemsLength - 1].text }}</span>
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
        computed: {
            itemsLength() {
                return this.items.length
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
