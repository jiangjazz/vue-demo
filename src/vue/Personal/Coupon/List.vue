<style lang="scss" scoped>
    .personal-coupon-list{
        .actionct{
            padding: 10px 20px;
        }
        .list{
            padding: 0 20px;
        }
        .myitem{
            display: inline-block;
            width: 25%;
            vertical-align: middle;
            float: left;
            padding: 10px;
        }
        .block{
            margin: 20px 20px;
            background: #ffffff;
        }
        .title{
            padding: 10px 20px;
            font-size: 18px;
        }

        .vertical-center-modal{
            display: flex;
            align-items: center;
            justify-content: center;

            .ivu-modal{
                top: 0;
            }
            .action-tab{
                width: 200px;
            }
        }


    }
</style>
<template>
    <div class="personal-coupon-list">
        <Mybreadcrumb :items="breadcrumbList"></Mybreadcrumb>

        <div class="actionct f-cb">
            <Button @click="modal2=true" class="f-fr" type="primary">使用礼品券</Button>
        </div>

        <div class="block">
            <div class="title">
                可领取的礼品券：
            </div>
            <div class="list f-cb">
                <div class="myitem" v-for="(item, index) in items" :key="itemKeyPrex+index">
                    <Myitem :viewDetails="viewDetails" :key="itemKeyPrex+index" :datas="item" :index="index" :istotal="true"></Myitem>
                </div>

            </div>
        </div>

        <div class="block">
            <div class="title">
                我的礼品券：
            </div>
            <div class="list f-cb">
                <div class="myitem" v-for="(item, index) in items" :key="itemKeyPrex+index">
                    <Myitem :viewDetails="viewDetails" :key="itemKeyPrex+index" :datas="item" :index="index"></Myitem>
                </div>
            </div>
        </div>

        <Modal
            title="礼品券详情"
            width="800"
            v-model="modal1"
            class-name="vertical-center-modal">
            <div class="" style="margin-bottom: 15px;padding: 10px 20px;">
                <Row>
                    <Col span="10">可用礼品券： 34/50</Col>
                    <Col span="14">
                        <Checkbox >只显示可用礼品券</Checkbox>
                    </Col>
                </Row>
            </div>

            <Table :columns="columns1" :data="data1"></Table>
            <div class="f-cb" style="margin-top: 20px;">
                <Page class="f-fr" :current="2" :total="50" simple ></Page>
            </div>
        </Modal>

        <Modal
            title="使用礼品券"
            v-model="modal2"
            class-name="vertical-center-modal">
            <Form :model="formItem" :label-width="80">
                <Form-item label="礼品券">
                    <Input placeholder="请输入礼品券"></Input>
                </Form-item>
                <Form-item label="客户手机">
                    <Input placeholder="请输入手机号码"></Input>
                </Form-item>
            </Form>
        </Modal>

    </div>
</template>
<script>
import Mybreadcrumb from '@/components/Breadcrumb.vue'
import Myitem from './components/Item.vue'

import datas from '@/datas/personalCoupon.js'

export default {
    name: 'personalCouponList',
    components: {
        Mybreadcrumb,
        Myitem
    },
    data() {
        return {
            breadcrumbList: [
                {
                    text: '我的礼品券'
                }
            ],
            itemKeyPrex: Math.random(),
            items: datas.items,
            modal1: false,
            modal2: false,
            columns1: [
                {
                    title: '礼品券代码',
                    key: 'code'
                },
                {
                    title: '使用时间',
                    key: 'time'
                },
                {
                    title: '使用者',
                    key: 'user'
                },
                {
                    title: '操作',
                    key: 'actions',
                    className: 'action-tab',
                    render(createElement, obj) {
                        return createElement('div', {
                            style: {
                                width: '200px'
                            },
                            on: {
                                click(event) {
                                    event.stopPropagation()
                                }
                            }
                        }, [
                            createElement('Button', {
                                class: 'f-ib',
                                props: {
                                    type: 'primary',
                                    shape: 'circle',
                                    size: 'small'
                                },
                                style: 'margin: 5px;'
                            }, '复制'),
                            createElement('Button', {
                                class: 'f-ib',
                                props: {
                                    type: 'primary',
                                    shape: 'circle',
                                    size: 'small'
                                },
                                style: 'margin: 5px;'
                            }, '二维码'),
                            createElement('Button', {
                                class: 'f-ib',
                                props: {
                                    type: 'primary',
                                    shape: 'circle',
                                    size: 'small'
                                },
                                style: 'margin: 5px;'
                            }, '邮件')
                        ])
                    }
                }
            ],
            data1: [
                {
                    code: '2FmtHTJD',
                    time: '\\',
                    user: '\\',
                    actions: ''
                },
                {
                    code: '4un4dzfd',
                    time: '\\',
                    user: '\\',
                    actions: ''
                },
                {
                    code: 'LvJrXZyZ',
                    time: '\\',
                    user: '\\',
                    actions: ''
                },
                {
                    code: 'PXzv9UBS',
                    time: '\\',
                    user: '\\',
                    actions: ''
                },
                {
                    code: 'vQwLJ7jv',
                    time: '\\',
                    user: '\\',
                    actions: ''
                },
                {
                    code: 'mSCpGaUT',
                    time: '\\',
                    user: '\\',
                    actions: ''
                },
                {
                    code: 'v3dSuADs',
                    time: '\\',
                    user: '\\',
                    actions: ''
                },
                {
                    code: 'whHGhwsM',
                    time: '\\',
                    user: '\\',
                    actions: ''
                }
            ],
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
    methods: {
        viewDetails(item) {
            console.log(item)
            this.modal1 = true
        }
    }
}
</script>
