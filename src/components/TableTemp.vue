<style lang="scss" scoped>
    .m-table{
        padding: 15px 10px;
        background-color: $white;
        @include box-shadow(1px 1px 5px $shadow);
        &-titleGroup{
            margin-bottom: 10px;
            padding: 5px 20px;
        }
        &-title{
            display: inline-block;
            vertical-align: middle;
        }
        &-search{
            display: inline-block;
            float: right;
        }
        &-pagination{
            padding: 10px 20px;
            .ivu-page{
                float: right;
            }
        }
        &-total{
            color: $main;
        }
    }
</style>
<template>
    <div :class="prefixCls">
        <div :class="prefixCls+'-titleGroup f-cb'">
            <div :class="prefixCls+'-title'">
                每页显示
                <Select size="small" value="15" style="width:45px" placeholder="">
                    <Option v-for="item in SelectOpt" :value="item.value" :key="item">{{ item.text }}</Option>
                </Select>
                数据
                <template v-if="total">
                    ，共
                    <span :class="prefixCls+'-total'">{{ total }}</span>条数据
                </template>
                <slot name="actions"></slot>
            </div>

            <div :class="prefixCls+'-search'">
                <Input icon="ios-search" placeholder="请输入关键词搜索" style="width: 200px"></Input>
            </div>
        </div>
        <!-- <slot name="actions"></slot> -->
        <!-- 表格区域 -->
        <Table :columns="tableHead" :data="tableData" @on-row-click="onRowClick"></Table>

        <!-- 分页组件 -->
        <div :class="prefixCls+'-pagination f-cb'">
            <Page :total="100" show-elevator></Page>
        </div>
    </div>
</template>
<script>

export default {
    name: 'table',
    props: {
        total: {
            default: 2128
        },
        tableHead: {
            type: Array,
            default() {
                return [
                    {
                        title: '姓名',
                        key: 'name'
                    },
                    {
                        title: '年龄',
                        key: 'age'
                    },
                    {
                        title: '地址',
                        key: 'address'
                    }
                ]
            }
        },
        tableData: {
            type: Array,
            default() {
                return [
                    {
                        name: '王小明',
                        age: 18,
                        address: '北京市朝阳区芍药居'
                    }
                ]
            }
        },
        rowJump: {
            default: false
        },
        SelectOpt: {
            default() {
                return [{
                    text: '15',
                    value: '15'
                },{
                    text: '30',
                    value: '30'
                },{
                    text: '45',
                    value: '45'
                }]
            }
        }
    },
    data() {
        return {
            prefixCls: 'm-table'
        }
    },
    methods: {
        onRowClick(item) {
            if(this.rowJump) {
                this.rowJump(item)
            }
            // this.$router.push('/data/member/details'+ item.weixinid)
        }
    }
}
</script>
