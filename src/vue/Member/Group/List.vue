<style lang="scss">
.member-group-list{
    .actions{
        padding: 0 20px;
        margin-bottom: 10px;
    }
    .actionbtn{
        margin-left: 10px;
        float: right;
    }
    .checkbox-tab{
        width: 80px;
        .ivu-table-cell{
            width: 80px;
        }
    }
    .action-tab{
        width: 260px;
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

        <div class="u-breadcrumb">
            <span class="item active">会员分组</span>
        </div>

        <TableTemp :rowJump="rowJump" :tableHead="tableHead" :tableData="tableData">
            <div class="actions f-cb" slot="actions">
                <Button class="actionbtn" shape="circle" type="primary">添加分组</Button>
                <Button class="actionbtn" shape="circle" type="primary">导入数据</Button>
                <Button @click="modal1 = true" class="actionbtn" shape="circle" type="primary">导出数据</Button>
            </div>
        </TableTemp>

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
import TableTemp from '@/components/TableTemp.vue'

import datas from '@/datas/memberGroup.js'
export default {
    name: 'memberGroupList',
    components: {
        TableTemp
    },
    data() {
        let _this = this

        return {
            tableHead: [
                {
                    title: '全选',
                    key: 'checkbox',
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
                                    size: 'small'
                                },
                                style: 'margin: 5px;',
                                on: {
                                    click() {
                                        _this.modal1 = true
                                    }
                                }
                            }, '导出'),
                            createElement('Button', {
                                class: 'f-ib',
                                props: {
                                    type: 'primary',
                                    shape: 'circle',
                                    size: 'small'
                                },
                                style: 'margin: 5px;'
                            }, '同步'),
                            createElement('Button', {
                                class: 'f-ib',
                                props: {
                                    type: 'primary',
                                    shape: 'circle',
                                    size: 'small'
                                },
                                style: 'margin: 5px;'
                            }, '编辑'),
                            createElement('Button', {
                                class: 'f-ib',
                                props: {
                                    shape: 'circle',
                                    size: 'small'
                                },
                                style: 'margin: 5px;'
                            }, '删除')
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
