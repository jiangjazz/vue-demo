<style lang="scss" scoped>
    .data-order-offline{
        background-color: #ffffff;
        .ivu-alert{
            padding-left: 20px;
        }
    }
</style>
<template>
    <div class="data-order-offline">
        <Alert banner closable type="success">最近一次成功更新数据的时间是： 2017-03-15-10:05:47</Alert>
        <TableTemp :tableHead="tableHead" :tableData="tableData"></TableTemp>
    </div>
</template>
<script>

import TableTemp from '@/components/TableTemp.vue'

import datas from '@/datas/dataOffline.js'

export default {
    name: 'dataOrderOffline',
    components: {
        TableTemp
    },
    data() {
        return {
            tableHead: [{
                title: '订单编号',
                key: 'orderKey'
            }, {
                title: '客户ID',
                key: 'customerID'
            }, {
                title: '产品ID',
                key: 'goodID'
            }, {
                title: '产品规格ID',
                key: 'goodStyleID'
            }, {
                title: '产品数量',
                key: 'orderNum'
            }, {
                title: '订单价格',
                key: 'price'
            }, {
                title: '产品名称',
                key: 'name'
            }, {
                title: '订单产生时间',
                key: 'time'
            }, {
                title: '来源门店',
                key: 'ways'
            }, {
                title: '产生积分',
                key: 'integral'
            }],
            tableData: datas.tableData
        }
    }
}
</script>
