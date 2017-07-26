<style lang="scss" scoped>
    .member-fans-list{
        background-color: #ffffff;
        .ivu-alert{
            padding-left: 20px;
        }
    }
</style>
<template>
    <div class="member-fans-list">
        <Mybreadcrumb :items="breadcrumbList"></Mybreadcrumb>
        <Alert banner closable>最近一次成功更新数据的时间是： 2017-03-15-10:05:47</Alert>
        <div class="m-table-ct">
            <TableTemp :rowJump="rowJump" :tableHead="tableHead" :tableData="tableData"></TableTemp>
        </div>
    </div>
</template>
<script>

import Mybreadcrumb from '@/components/Breadcrumb.vue'
import TableTemp from '@/components/TableTemp.vue'

import datas from '@/datas/memberFansList.js'

export default {
    name: 'memberFansList',
    components: {
        Mybreadcrumb,
        TableTemp
    },
    data() {
        return {
            breadcrumbList: [
                {
                    text: '粉丝列表'
                }
            ],
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
                key: 'tag',
                render(createElement, obj) {
                    return createElement('Button', {
                        class: 'f-ib purple',
                        props: {
                            shape: 'circle',
                            size: 'small'
                        },
                        style: 'margin: 5px;'
                    }, obj.row.tag)
                }
            }],
            tableData: datas.tableData
        }
    },
    methods: {
        rowJump(item) {
            this.$router.push('/member/fans/details'+ item.weixinid)
        }
    }
}
</script>
