<style lang="scss">
    .store-order-list{

    }
</style>
<template>
    <div class="store-order-list">
        <Mybreadcrumb :items="breadcrumbList"></Mybreadcrumb>

        <Alert closable>最近一次成功更新数据的时间是： 2017-03-15-10:05:47</Alert>

        <div class="m-table-ct">
            <TableTemp :tableHead="tableHead" :tableData="tableData"></TableTemp>
        </div>
    </div>
</template>
<script>
import Mybreadcrumb from '@/components/Breadcrumb.vue'
import TableTemp from '@/components/TableTemp.vue'
import datas from '@/datas/storeOrder.js'

export default {
    name: 'storeOrderList',
    components: {
        Mybreadcrumb,
        TableTemp
    },
    data() {
        return {
            breadcrumbList: [
                {
                    text: '订单管理'
                }
            ],
            tableHead: [
                {
                    title: '订单编号',
                    key: 'code'
                },
                {
                    title: '客户ID',
                    key: 'uid'
                },
                {
                    title: '产品ID',
                    key: 'pid'
                },
                {
                    title: '产品规格ID',
                    key: 'gid'
                },
                {
                    title: '产品数量',
                    key: 'num'
                },
                {
                    title: '订单价格',
                    key: 'price'
                },
                {
                    title: '产品名称',
                    key: 'name'
                },
                {
                    title: '订单产生时间',
                    key: 'time'
                },
                {
                    title: '来源',
                    key: 'from'
                }
            ],
            tableData: datas.tableData
        }
    }
}
</script>
