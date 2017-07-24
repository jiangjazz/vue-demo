<style lang="scss">
    .data-nav{
        height: 40px;
        background-color: rgb(242, 242, 242);
        border-bottom: 1px solid #cccccc;
        &-title{
            display: inline-block;
            margin-left: 20px;
            height: 40px;
            line-height: 40px;
            vertical-align: middle;
            font-size: 18px;
        }
        &-group{
            display: inline-block;
            float: right;
        }
        &-item{
            margin: 0 5px;
            display: inline-block;
            width: 100px;
            line-height: 38px;
            font-size: 14px;
            text-align: center;
            cursor: pointer;
            a{
                display: block;
                color: #495060;
            }
            &-active{
                background-color: rgb(236, 240, 245);
                border:1px solid #cccccc;
                border-bottom-color: rgb(236, 240, 245);
                a{
                    color: #2d8cf0;
                }
            }
        }
    }
</style>
<template>
    <div :class="prefixCls" class="f-cb">
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
