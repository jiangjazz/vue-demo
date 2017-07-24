<style lang="scss" scoped>
    .data-staff-shops{
        background-color: #ffffff;
        .ivu-alert{
            padding-left: 20px;
        }
    }
</style>
<template>
    <div class="data-staff-shops">
        <Alert banner closable type="success">最近一次成功更新数据的时间是： 2017-03-15-10:05:47</Alert>
        <TableTemp :tableHead="tableHead" :tableData="tableData"></TableTemp>
    </div>
</template>
<script>

import TableTemp from '@/components/TableTemp.vue'

import datas from '@/datas/dataStaffShops.js'

export default {
    name: 'dataStaffShops',
    components: {
        TableTemp
    },
    data() {
        return {
            tableHead: [
                {
                    title: '门店ID',
                    key: 'shopid'
                },
                {
                    title: '店名',
                    key: 'name'
                },
                {
                    title: '地址',
                    key: 'addr'
                },
                {
                    title: '电话',
                    key: 'phone'
                },
                {
                    title: '营业时间',
                    key: 'time'
                },
                {
                    title: '销售量',
                    key: 'sales'
                },
                {
                    title: '销售金额',
                    key: 'saleamount'
                },
                {
                    title: '店长',
                    key: 'shopkeeper'
                },
                {
                    title: '店长手机',
                    key: 'shopkeeperphone'
                }
            ],
            tableData: datas.tableData
        }
    },
    methods: {
    }
}
</script>
