<style lang="scss">
.member-filter-create{
    .filterFrom_ct{
        padding: 20px;
    }
    .filterFrom{
        margin: 20px auto;
        padding: 10px 20px;
        max-width: 800px;
        background-color: $white;
    }
    .action-tab{
        width: 80px;
    }
    .actBtn{
        width: 80px;
    }
}
</style>
<template>
    <div class="member-filter-create">
        <Mybreadcrumb :items="breadcrumbList"></Mybreadcrumb>

        <Alert closable>多维分析是根据所设定的多种条件组合，将符合条件的数据筛选出来的工具。</Alert>
        <div class="filterFrom_ct">
            <div class="u-box-block">
                <Form class="filterFrom " :model="formItem" label-position="left" :label-width="100">
                    <Form-item label="多维分析目标">
                        <Select style="width: 350px;" v-model="formItem.select" placeholder="请选择多维分析应用目标（会员、微信粉丝、店铺、销售员...">
                            <Option value="member">会员</Option>
                            <Option value="weixinfansi">微信粉丝</Option>
                            <Option value="shops">店铺</Option>
                            <Option value="saler">销售员</Option>
                        </Select>
                    </Form-item>

                    <Form-item label="规则" style="margin-bottom: 0;">
                        <!-- 表格区域 -->
                        <Table style="margin-bottom: 24px;" border :columns="tableHead" :data="tableData"></Table>
                    </Form-item>

                    <Form-item label="名称">
                        <Input style="width: 350px;" v-model="formItem.input" placeholder="请为该多维分析命名"></Input>
                    </Form-item>
                    <Form-item>
                        <Button class="actBtn" type="primary">提交</Button>
                        <Button class="actBtn" type="ghost" style="margin-left: 8px">取消</Button>
                    </Form-item>
                </Form>
            </div>
        </div>

    </div>
</template>
<script>

import Mybreadcrumb from '@/components/Breadcrumb.vue'

export default {
    name: 'memberFilterCreate',
    components: {
        Mybreadcrumb,
    },
    data() {
        const _this = this

        // 构建listtab
        function listRender(createElement, obj, listName){
            let { row } = obj
            return row.action === 'isnew'? row[listName]:
                createElement('Select', {
                    style: {
                        width: '100%'
                    }
                }, _this[ `${listName}List`].map( (item, index)=>{
                    return createElement('Option', {
                        props: {
                            key: '_'+listName+ index,
                            value: item.value
                        }
                    }, item.label)
                } ))
        }

        return {
            breadcrumbList: [
                {
                    text: '多维分析',
                    to: '/member/filter'
                },
                {
                    text: '创建多维分析'
                }
            ],
            relationList: [
                {
                    value: 'and',
                    label: 'AND'
                },
                {
                    value: 'or',
                    label: 'OR'
                }
            ],
            nameList: [
                {
                    value: 'city',
                    label: '城市'
                },
                {
                    value: 'level',
                    label: '会员等级'
                }
            ],
            rulesList: [
                {
                    value: 'contain',
                    label: '包含'
                },
                {
                    value: 'equal',
                    label: '等于'
                }
            ],
            resultList: [
                {
                    value: 'shanghai',
                    label: '上海'
                },
                {
                    value: 'vip',
                    label: 'VIP'
                }
            ],
            tableHead: [
                {
                    title: '逻辑关系',
                    key: 'relation',
                    render(createElement, obj){
                        return listRender(createElement, obj, 'relation')
                    }
                },
                {
                    title: '字段名称',
                    key: 'name',
                    render(createElement, obj){
                        return listRender(createElement, obj, 'name')
                    }
                },
                {
                    title: '运算规则',
                    key: 'rules',
                    render(createElement, obj){
                        return listRender(createElement, obj, 'rules')
                    }
                },
                {
                    title: '结果',
                    key: 'result',
                    render(createElement, obj){
                        return listRender(createElement, obj, 'result')
                    }
                },
                {
                    title: '操作',
                    key: 'action',
                    className: 'action-tab',
                    render(createElement, obj) {
                        return createElement('Button', {
                            style: {
                                fontSize: '20px',
                                border: 'none'
                            },
                            props: {
                                type: 'ghost',
                                shape: 'circle',
                                size: 'large',
                                icon: obj.row.action === 'isnew'? 'android-remove-circle': 'android-add-circle'
                            }
                        })
                    }
                }
            ],
            tableData: [
                {
                    relation: 'AND',
                    name: '会员等级',
                    rules: '等于',
                    result: 'VIP',
                    action: 'isnew'
                },
                {
                    relation: 'AND',
                    name: '会员等级',
                    rules: '等于',
                    result: 'VIP',
                    action: ''
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

    }
}
</script>
