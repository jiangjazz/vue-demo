<style lang="scss">
    .data-nav{
        height: $ctNavHeight;
        background-color: $white;
        border-bottom: 1px solid $border-default;
        &-title{
            display: inline-block;
            margin: 0 20px;
            height: $ctNavHeight;
            line-height: $ctNavHeight;
            font-size: $f-h3;
            font-weight: bold;
            vertical-align: middle;
        }
        &-group{
            height: $ctNavHeight;
            display: inline-block;
            vertical-align: middle;

        }
        &-item{
            margin: 5px 10px 0 10px;
            display: inline-block;
            width: 80px;
            line-height: $ctNavHeight - 5px - 3px;
            font-size: $f-h6;
            text-align: center;
            cursor: pointer;
            color: $text-disabled;
            a{
                display: block;
                color: $text-disabled;
            }
            &-active{
                border-bottom: 3px solid  $main;
                a{
                    color: $text-important;
                }
            }
        }
    }
</style>
<template>
    <div :class="prefixCls">
            <div v-if="title" :class="prefixCls+'-title'">
                {{ title }}
            </div>
            <div :class="prefixCls+'-group'">
                <div :class="itemClasses(item)" v-for="(item, index) in items" :key="item.to + index">
                    <router-link v-if="!item.nopage" :to="item.to" >
                        {{ item.text }}
                    </router-link>
                    <div v-else @click="nopageInfo(false)">
                        {{ item.text }}
                    </div>
                </div>
            </div>

    </div>
</template>
<script>
    const prefixCls = 'data-nav'

    export default {
        name: 'dataNav',
        props: {
            title: {
                type: String,
                default: undefined
            },
            items: {
                type: Array,
                default() {
                    return []
                }
            },
            breadcrumb: {
                default() {
                    return []
                }
            }
        },
        methods: {
            // 设置item class
            itemClasses(item) {
                return [
                    `${prefixCls}-item`,
                    {
                        [`${prefixCls}-item-active`]: (item.to === this.$route.path)
                    }
                ]
            },
            nopageInfo(nodesc) {
                this.$Notice.info({
                    title: '暂无此页面，敬请期待',
                    desc: nodesc ? '' : '暂无此页面，敬请期待'
                })
            }
        },
        data() {
            return {
                prefixCls: prefixCls
            }
        }
    }
</script>
