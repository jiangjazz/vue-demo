<style lang="scss">
    .store-product-list{
        .actionct{
            padding: 10px 20px;
        }
        .action-tab{
            width: 200px;
        }
    }
</style>
<template>
    <div class="store-product-list">
        <div class="u-breadcrumb">
            <span class="item active">商品管理</span>
        </div>

        <div class="actionct f-cb">
            <router-link to="/store/product/create">
                <Button class="f-fr" type="primary">添加商品</Button>
            </router-link>
        </div>

        <TableTemp :tableHead="tableHead" :tableData="tableData"></TableTemp>

    </div>
</template>
<script>
import TableTemp from '@/components/TableTemp.vue'
import datas from '@/datas/storeProduct.js'

export default {
    name: 'storeProductList',
    components: {
        TableTemp
    },
    data() {
        return {
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
                                    size: 'small'
                                },
                                style: 'margin: 5px;'
                            }, '查看'),
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
                    }
                }
            ],
            tableData: datas.tableData
        }
    }
}
</script>
