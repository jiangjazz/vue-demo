<style lang="scss">
.o2o-coupon-list{
    .actionct{
        padding: 10px 20px;
    }
    .action-tab{
        width: 180px;
        border-left: 1px solid $border-default;
    }
}
</style>
<template>
    <div class="o2o-coupon-list">
        <Mybreadcrumb :items="breadcrumbList"></Mybreadcrumb>

        <div class="actionct f-cb">
            <router-link to="/o2o/coupon/create">
                <Button class="f-fr" type="primary" icon="plus">创建礼品券</Button>
            </router-link>
        </div>

        <div class="m-table-ct">
            <TableTemp :tableHead="tableHead" :tableData="tableData"></TableTemp>
        </div>
    </div>
</template>
<script>
import Mybreadcrumb from '@/components/Breadcrumb.vue'
import TableTemp from '@/components/TableTemp.vue'

import datas from '@/datas/o2oCoupon.js'

export default {
    name: 'o2oGroupList',
    components: {
        Mybreadcrumb,
        TableTemp
    },
    data() {
        return {
            breadcrumbList: [
                {
                    text: '礼品券管理'
                }
            ],
            tableHead: [
                {
                    title: '礼品券ID',
                    key: 'id'
                },
                {
                    title: '名称',
                    key: 'name'
                },
                {
                    title: '内容',
                    key: 'content'
                },
                {
                    title: '限制',
                    key: 'limit'
                },
                {
                    title: '有效期',
                    key: 'inuse'
                },
                {
                    title: '生成量',
                    key: 'total'
                },
                {
                    title: '已分配',
                    key: 'assigned'
                },
                {
                    title: '已使用',
                    key: 'used'
                },
                {
                    title: '可领取',
                    key: 'prereceive'
                },
                {
                    title: '操作',
                    key: 'action',
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
                                    icon: 'edit'
                                },
                                title: '修改',
                                style: 'margin: 5px;'
                            }),
                            createElement('Button', {
                                class: 'f-ib',
                                props: {
                                    type: 'primary',
                                    shape: 'circle',
                                    size: 'small',
                                    icon: 'ios-infinite-outline'
                                },
                                title: '分配',
                                style: 'margin: 5px;'
                            }),
                            createElement('Button', {
                                class: 'f-ib',
                                props: {
                                    type: 'primary',
                                    shape: 'circle',
                                    size: 'small',
                                    icon: 'grid'
                                },
                                title: '生成二维码',
                                style: 'margin: 5px;'
                            }),
                            createElement('Button', {
                                class: 'f-ib',
                                props: {
                                    shape: 'circle',
                                    size: 'small',
                                    icon: 'android-delete'
                                },
                                title: '删除',
                                style: 'margin: 5px;'
                            })
                        ])
                    }
                }
            ],
            tableData: datas.tableData
        }
    },
    methods: {
    }
}
</script>
