<style lang="scss" scoped>
    .data-staff-workers{
        background-color: #ffffff;
        .ivu-alert{
            padding-left: 20px;
        }
    }
</style>
<template>
    <div class="data-staff-workers">
        <Alert banner closable>最近一次成功更新数据的时间是： 2017-03-15-10:05:47</Alert>
        <TableTemp :rowJump="rowJump" :tableHead="tableHead" :tableData="tableData"></TableTemp>
    </div>
</template>
<script>

import TableTemp from '@/components/TableTemp.vue'

import datas from '@/datas/dataStaffWorkers.js'

export default {
    name: 'dataStaffWorkers',
    components: {
        TableTemp
    },
    data() {
        return {
            tableHead: [{
                title: '员工ID',
                key: 'workerid'
            },
            {
                title: '姓名',
                key: 'name'
            },
            {
                title: '手机号',
                key: 'phone'
            },
            {
                title: '性别',
                key: 'sex'
            },
            {
                title: '微信号',
                key: 'weixinid'
            },
            {
                title: '邮箱',
                key: 'email'
            },
            {
                title: '所属门店',
                key: 'shops'
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
                title: '最近登录',
                key: 'timelast'
            }],
            tableData: datas.tableData
        }
    },
    methods: {
        rowJump(item) {
            this.$router.push('/data/staff/details'+ item.weixinid)
        }
    }
}
</script>
