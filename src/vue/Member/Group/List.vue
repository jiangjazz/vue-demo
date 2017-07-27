<style lang="scss">
.member-group-list{
    .actions{
        display: inline;
        margin-left: 20px;
    }
    .checkbox-tab{
        width: 70px;
        border-right: 1px solid $border-default;
    }
    .action-tab{
        width: 180px;
        border-left: 1px solid $border-default;
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
    <div class="member-group-list">
        <Mybreadcrumb :items="breadcrumbList"></Mybreadcrumb>
        <div class="m-table-ct">
            <TableTemp :rowJump="rowJump" :tableHead="tableHead" :tableData="tableData">
                <div class="actions" slot="actions">
                    <Button-group>
                        <Button class="actionbtn" size="small" icon="ios-folder" title="添加分组"></Button>
                        <Button class="actionbtn" size="small" icon="ios-cloud-download" title="导入数据"></Button>
                        <Button @click="modal1 = true" class="actionbtn" size="small" icon="ios-cloud-upload" title="导出数据"></Button>
                    </Button-group>
                </div>
            </TableTemp>
        </div>

        <!-- 导出 -->
        <Modal
            title="导出"
            v-model="modal1"
            class-name="vertical-center-modal">

            <Form :model="formItem" label-position="left" :label-width="100">
                <Form-item label="导出文件格式">
                    <Select v-model="formItem.select" placeholder="请选择">
                        <Option value="beijing">excel</Option>
                        <Option value="shanghai">csv</Option>
                    </Select>
                </Form-item>
                <Form-item label="导出字段">
                    <Checkbox-group v-model="formItem.checkbox">
                        <Checkbox label="全字段"></Checkbox>
                        <Checkbox label="微信ID"></Checkbox>
                        <Checkbox label="手机号"></Checkbox>
                        <Checkbox label="订单量"></Checkbox>
                        <Checkbox label="所在地"></Checkbox>
                        <Checkbox label="订单金额"></Checkbox>
                        <Checkbox label="性别"></Checkbox>
                        <Checkbox label="注册日期"></Checkbox>
                        <Checkbox label="等级"></Checkbox>
                        <Checkbox label="积分"></Checkbox>
                        <Checkbox label="标签数"></Checkbox>
                        <Checkbox label="区域"></Checkbox>
                        <Checkbox label="邮箱地址"></Checkbox>
                    </Checkbox-group>
                </Form-item>
                <Form-item label="接收邮箱">
                    <Input v-model="formItem.input" placeholder="请填写接受导出文件的邮箱"></Input>
                </Form-item>
                <p style="margin-bottom:15px;color: #bbbbbb;">
                    当导出的文件较大时，系统需要较长的时间处理数据，为了避免等待时间过长，请填写邮箱地址，当文件处理好时会第一时间通过邮件发到指定邮箱。
                </p>
            </Form>

        </Modal>
    </div>
</template>
<script>
import Mybreadcrumb from '@/components/Breadcrumb.vue'
import TableTemp from '@/components/TableTemp.vue'

import datas from '@/datas/memberGroup.js'
export default {
    name: 'memberGroupList',
    components: {
        Mybreadcrumb,
        TableTemp
    },
    data() {
        let _this = this

        return {
            breadcrumbList: [
                {
                    text: '会员分组'
                }
            ],
            tableHead: [
                {
                    title: '全选',
                    key: 'checkbox',
                    className: 'checkbox-tab',
                    // type: 'selection',
                    render(createElement, obj) {
                        return createElement( 'div', {
                            on: {
                                click(event) {
                                    event.stopPropagation()

                                }
                            }
                        }, [
                            createElement('Checkbox')
                        ])
                    },
                    className: 'checkbox-tab'
                },
                {
                    title: '会员组名称',
                    key: 'groupname',
                    sortable: true
                },
                {
                    title: '数据量',
                    key: 'num',
                    sortable: true
                },
                {
                    title: '拥有邮箱',
                    key: 'emailnum',
                    sortable: true
                },
                {
                    title: '拥有微信',
                    key: 'weixinnum',
                    sortable: true
                },
                {
                    title: '拥有手机',
                    key: 'phonenum',
                    sortable: true
                },
                {
                    title: '创建日期',
                    key: 'creatdate',
                    sortable: true
                },
                {
                    title: '更新时间',
                    key: 'lastdate',
                    sortable: true
                },
                {
                    title: '操作',
                    key: 'actions',
                    className: 'action-tab',
                    render(createElement, obj) {
                        return createElement('div', {
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
                                    size: 'small',
                                    icon: 'ios-cloud-upload'
                                },
                                style: 'margin: 5px;',
                                on: {
                                    click() {
                                        _this.modal1 = true
                                    }
                                }
                            }),
                            createElement('Button', {
                                class: 'f-ib',
                                props: {
                                    type: 'primary',
                                    shape: 'circle',
                                    size: 'small',
                                    icon: 'loop'
                                },
                                style: 'margin: 5px;'
                            }),
                            createElement('Button', {
                                class: 'f-ib',
                                props: {
                                    type: 'primary',
                                    shape: 'circle',
                                    size: 'small',
                                    icon: 'edit'
                                },
                                style: 'margin: 5px;'
                            }),
                            createElement('Button', {
                                class: 'f-ib',
                                props: {
                                    shape: 'circle',
                                    size: 'small',
                                    icon: 'android-delete'
                                },
                                style: 'margin: 5px;'
                            })
                        ])
                    },
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
    methods: {
        rowJump(item) {
            this.$router.push({ name: 'memberGroupDetails', params: {id: item.groupname}, query: item})
        }
    }
}
</script>
