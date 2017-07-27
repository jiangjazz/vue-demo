<style lang="scss">
.member-group-details{
    .actions{
        display: inline;
        margin-left: 20px;
    }
    .checkbox-tab{
        width: 80px;
    }
    .time-tab{
        width: 250px;
    }
    .sub-title{
        font-size: 14px;
        line-height: 2em;
    }
    .vertical-center-modal{
        display: flex;
        align-items: center;
        justify-content: center;
        .ivu-modal{
            top: 0;
        }
    }
}
</style>
<template>
    <div class="member-group-details">
        <Mybreadcrumb :items="breadcrumbList"></Mybreadcrumb>

        <!-- <div class="u-breadcrumb">
            <router-link to="/member/group/list" class="item">会员分组</router-link>
            <span class="separator">></span>
            <span class="item active">详情</span>
        </div> -->
        <div class="m-table-ct">
            <TableTemp :tableHead="tableHead" :tableData="tableData" :total="item.num">
                <div class="actions" slot="actions">
                    <Button-group>
                        <Button @click="modal1 = true" class="actionbtn" size="small" icon="ios-pricetag" title="加标签"></Button>
                        <Button class="actionbtn" size="small" icon="android-delete" title="删除"></Button>
                    </Button-group>
                </div>
            </TableTemp>
        </div>

        <!-- 导出 -->
        <Modal
            title="添加标签"
            v-model="modal1"
            ok-text="添加"
            class-name="vertical-center-modal">

            <Form :model="formItem" label-position="top">
                <Form-item label="会员ID为6723, 835, 5634, 3123,185等14位会员已选中">
                    <Input v-model="formItem.textarea" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="请输入要添加的标签，用小写逗号来分割。"></Input>
                </Form-item>
                <Form-item label="常用标签：">
                    <Button style="width: 60px;" type="primary" shape="circle" size="small">VIP</Button>
                    <Button style="width: 60px;" type="info" shape="circle" size="small">微信控</Button>
                    <Button style="width: 60px;" type="success" shape="circle" size="small">活跃</Button>
                    <Button style="width: 60px;" type="warning" shape="circle" size="small">高价值</Button>
                </Form-item>
            </Form>

        </Modal>
    </div>
</template>
<script>
import Mybreadcrumb from '@/components/Breadcrumb.vue'
import TableTemp from '@/components/TableTemp.vue'

import datas from '@/datas/memberGroupDetails.js'
export default {
    name: 'memberGroupDetails',
    components: {
        Mybreadcrumb,
        TableTemp
    },
    data() {
        return {

            tableHead: [
                {
                    title: '全选',
                    key: 'checkbox',
                    className: 'checkbox-tab',
                    type: 'selection',
                    render(createElement, obj) {
                        return createElement( 'div', {}, [
                            createElement('Checkbox')
                        ])
                    },
                },{
                    title: '会员ID',
                    key: 'uid'
                },
                {
                    title: '微信ID',
                    key: 'weixinid'
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
                    title: '所在地',
                    key: 'addr'
                },
                {
                    title: '邮箱',
                    key: 'email'
                },
                {
                    title: '积分',
                    key: 'intergal'
                },
                {
                    title: '订单量',
                    key: 'num'
                },
                {
                    title: '订单金额',
                    key: 'sum'
                },
                {
                    title: '会员日',
                    key: 'memberday',
                    className: 'time-tab'
                }
            ],
            tableData: datas.tableData,
            modal1: false,
            formItem: {
                input: '',
                select: '',
                radio: 'male',
                checkbox: [],
                switch: true,
                date: '',
                time: '',
                slider: [20, 50],
                textarea: ''
            }
        }
    },
    computed: {
        id() {
            return this.$route.params.id
        },
        item() {
            return this.$route.query
        },
        breadcrumbList() {
            return [
                {
                    text: '会员分组',
                    to: '/member/group/list'
                },{
                    text: this.$route.params.id
                }
            ]
        }
    }
}
</script>
