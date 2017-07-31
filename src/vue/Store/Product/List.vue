<style lang="scss">
    .store-product-list{
        .actionct{
            padding: 10px 20px;
        }
        .action-tab{
            width: 140px;
            border-left: 1px solid $border-default;
        }
    }
</style>
<template>
    <div class="store-product-list">
        <Mybreadcrumb :items="breadcrumbList"></Mybreadcrumb>

        <div class="actionct f-cb">
            <router-link to="/store/product/create">
                <Button class="f-fr" type="primary" icon="plus">添加商品</Button>
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
import datas from '@/datas/storeProduct.js'

export default {
    name: 'storeProductList',
    components: {
        Mybreadcrumb,
        TableTemp
    },
    data() {
        return {
            breadcrumbList: [
                {
                    text: '商品管理'
                }
            ],
            tableHead: [
                {
                    title: '商品ID',
                    key: 'id'
                },
                {
                    title: '商品名称',
                    key: 'name'
                },
                {
                    title: '商品类别',
                    key: 'type'
                },
                {
                    title: '商品价格',
                    key: 'price'
                },
                {
                    title: '兑换积分',
                    key: 'intergal'
                },
                {
                    title: '库存',
                    key: 'total'
                },
                {
                    title: '状态',
                    key: 'state'
                },
                {
                    title: '排序',
                    key: 'used'
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
                                    icon: 'eye'
                                },
                                title: '查看',
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
                                title: '编辑',
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
    }
}
</script>
