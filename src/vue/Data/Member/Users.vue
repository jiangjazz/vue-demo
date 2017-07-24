<style lang="scss" scoped>
    .data-member-users{
        background-color: #ffffff;
        .ivu-alert{
            padding-left: 20px;
        }
    }
</style>
<template>
    <div class="data-member-users">
        <Alert banner closable type="success">最近一次成功更新数据的时间是： 2017-03-15-10:05:47</Alert>
        <TableTemp :tableHead="tableHead" :tableData="tableData"></TableTemp>
    </div>
</template>
<script>

import TableTemp from '@/components/TableTemp.vue'

import datas from '@/datas/dataMemberUsers.js'

export default {
    name: 'dataMemberUsers',
    components: {
        TableTemp
    },
    data() {
        return {
            tableHead: [{
                title: '会员ID',
                key: 'userid'
            }, {
                title: '微信ID',
                key: 'weixinid'
            }, {
                title: '手机号',
                key: 'phone'
            }, {
                title: '性别',
                key: 'sex'
            }, {
                title: '所在地',
                key: 'addr'
            }, {
                title: '邮箱',
                key: 'email'
            }, {
                title: '积分',
                key: 'intergal'
            }, {
                title: '订单量',
                key: 'num'
            }, {
                title: '订单金额',
                key: 'sum'
            }, {
                title: '会员日',
                key: 'userday'
            }],
            tableData: datas.tableData
        }
    }
}
</script>
