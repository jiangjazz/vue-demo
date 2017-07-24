<style lang="scss">
.member-filter-create{
    .filterFrom{
        margin: auto;
        padding: 10px 20px;
        max-width: 800px;
    }
    .action-tab{
        width: 80px;
    }
}
</style>
<template>
    <div class="member-filter-create">
        <div class="u-breadcrumb">
            <router-link to="/member/filter" class="item">过滤器</router-link>
            <span class="separator">></span>
            <span class="item active">创建过滤器</span>
        </div>

        <Alert style="margin-top: -10px;" closable>过滤器是根据所设定的多种条件组合，将符合条件的数据筛选出来的工具。</Alert>

        <Form class="filterFrom" :model="formItem" label-position="left" :label-width="100">
            <Form-item label="过滤器目标">
                <Select style="width: 350px;" v-model="formItem.select" placeholder="请选择过滤器应用目标（会员、微信粉丝、店铺、销售员...">
                    <Option value="member">会员</Option>
                    <Option value="weixinfansi">微信粉丝</Option>
                    <Option value="shops">店铺</Option>
                    <Option value="saler">销售员</Option>
                </Select>
            </Form-item>

            <Form-item label="过滤规则">
                <!-- 表格区域 -->
                <Table style="margin-bottom: 24px;" border :columns="tableHead" :data="tableData"></Table>
            </Form-item>

            <Form-item label="过滤器名称">
                <Input style="width: 350px;" v-model="formItem.input" placeholder="请为该过滤器命名"></Input>
            </Form-item>
            <Form-item>
                <Button type="primary">提交</Button>
                <Button type="ghost" style="margin-left: 8px">取消</Button>
            </Form-item>
        </Form>
    </div>
</template>
<script>

export default {
    name: 'memberFilterCreate',
    components: {
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
                                fontSize: '20px'
                            },
                            props: {
                                type: 'text',
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
