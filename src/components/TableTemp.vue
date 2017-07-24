<style lang="scss" scoped>
    .m-table{
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
    }
</style>
<template>
    <div :class="prefixCls">
        <div :class="prefixCls+'-titleGroup f-cb'">
            <div :class="prefixCls+'-title'">
                每页现实
                <Select value="15" style="width:45px" placeholder="">
                    <Option v-for="item in SelectOpt" :value="item.value" :key="item">{{ item.text }}</Option>
                </Select>
                数据
            </div>

            <div :class="prefixCls+'-search'">
                <Input icon="ios-search" placeholder="请输入..." style="width: 200px"></Input>
            </div>
        </div>
        <slot name="actions"></slot>
        <!-- 表格区域 -->
        <Table border :columns="tableHead" :data="tableData" @on-row-click="onRowClick"></Table>

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
