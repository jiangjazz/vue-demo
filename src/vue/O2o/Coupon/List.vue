<style lang="scss">
.o2o-coupon-list{
    .actionct{
        padding: 10px 20px;
    }
    .action-tab{
        width: 320px;
    }
}
</style>
<template>
    <div class="o2o-coupon-list">

        <div class="u-breadcrumb">
            <span class="item active">礼品券管理</span>
        </div>

        <div class="actionct f-cb">
            <router-link to="/o2o/coupon/create">
                <Button class="f-fr" type="primary">创建礼品券</Button>
            </router-link>
        </div>

        <TableTemp :tableHead="tableHead" :tableData="tableData"></TableTemp>
    </div>
</template>
<script>
import TableTemp from '@/components/TableTemp.vue'
import datas from '@/datas/o2oCoupon.js'

export default {
    name: 'o2oGroupList',
    components: {
        TableTemp
    },
    data() {
        return {
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
                                    size: 'small'
                                },
                                style: 'margin: 5px;'
                            }, '编辑'),
                            createElement('Button', {
                                class: 'f-ib',
                                props: {
                                    type: 'primary',
                                    shape: 'circle',
                                    size: 'small'
                                },
                                style: 'margin: 5px;'
                            }, '分配'),
                            createElement('Button', {
                                class: 'f-ib',
                                props: {
                                    type: 'primary',
                                    shape: 'circle',
                                    size: 'small'
                                },
                                style: 'margin: 5px;'
                            }, '生成二维码'),
                            createElement('Button', {
                                class: 'f-ib',
                                props: {
                                    shape: 'circle',
                                    size: 'small'
                                },
                                style: 'margin: 5px;'
                            }, '删除')
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
