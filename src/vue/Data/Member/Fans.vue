<style lang="scss" scoped>
    .data-member-fans{
        background-color: #ffffff;
        .ivu-alert{
            padding-left: 20px;
        }
    }
</style>
<template>
    <div class="data-member-fans">
        <Alert banner closable type="success">最近一次成功更新数据的时间是： 2017-03-15-10:05:47</Alert>
        <TableTemp :rowJump="rowJump" :tableHead="tableHead" :tableData="tableData"></TableTemp>
    </div>
</template>
<script>

import TableTemp from '@/components/TableTemp.vue'

import datas from '@/datas/dataMemberFans.js'

export default {
    name: 'dataMemberFans',
    components: {
        TableTemp
    },
    data() {
        return {
            tableHead: [{
                title: '头像',
                key: 'head'
            }, {
                title: '昵称',
                key: 'name'
            }, {
                title: '微信ID',
                key: 'weixinid'
            }, {
                title: '所在地',
                key: 'addr'
            }, {
                title: '会员ID',
                key: 'userid'
            }, {
                title: '订单数',
                key: 'num'
            }, {
                title: '订单金额',
                key: 'sum'
            }, {
                title: '积分',
                key: 'intergal'
            }, {
                title: '关注时间',
                key: 'time'
            }, {
                title: '标签',
                key: 'tag'
            }],
            tableData: datas.tableData
        }
    },
    methods: {
        rowJump(item) {
            this.$router.push('/data/member/details'+ item.weixinid)
        }
    }
}
</script>
