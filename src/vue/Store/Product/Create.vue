<style lang="scss">
    .store-product-create{
        .filterFrom_ct{
            padding: 20px;
        }
        .filterFrom{
            margin: auto;
            padding: 10px 20px;
            width: 90%;
            max-width: 800px;
        }
        .actBtn{
            width: 80px;
        }
    }
</style>
<template>
    <div class="store-product-create">
        <Mybreadcrumb :items="breadcrumbList"></Mybreadcrumb>

        <div class="filterFrom_ct">
            <div class="u-box-block">
                <Form class="filterFrom" :model="formItem" label-position="left" :label-width="80">
                    <Form-item label="商品ID">
                        12125
                    </Form-item>
                    <Form-item label="名称">
                        <Input v-model="formItem.input" placeholder="请输入名称"></Input>
                    </Form-item>
                    <Form-item label="商品类别">
                        <Select placeholder="请选择商品所属类别">
                        </Select>
                    </Form-item>
                    <Form-item label="商品价格">
                        <Input v-model="formItem.input" placeholder="请填写商品价格"></Input>
                    </Form-item>
                    <Form-item label="兑换积分">
                        <Input v-model="formItem.input" placeholder="请填写等价积分量"></Input>
                    </Form-item>
                    <Form-item label="库存">
                        <Input v-model="formItem.input" placeholder="请填写商品库存"></Input>
                    </Form-item>
                    <Form-item label="排序">
                        <Input v-model="formItem.input" placeholder="请填写商品排序 （数字越小代表显示位置越靠前）"></Input>
                    </Form-item>
                    <Form-item label="状态">
                        <Radio-group v-model="formItem.radio">
                            <Radio label="male">销售中</Radio>
                            <Radio label="female">下架</Radio>
                        </Radio-group>
                    </Form-item>
                    <Form-item label="商品图片">
                        <!-- <img :src="picview" alt="" height="92"> -->
                        <Upload action="/pic/post">
                            <Button type="ghost" class="main" icon="ios-cloud-upload-outline">上传图片</Button>
                        </Upload>
                    </Form-item>
                    <Form-item label="商品描述">
                        <Input v-model="formItem.textarea" type="textarea" :autosize="{minRows: 4,maxRows: 5}" placeholder="请填写商品描述"></Input>
                    </Form-item>

                    <Form-item>
                        <Button class="actBtn" type="primary">保存</Button>
                        <Button class="actBtn" type="ghost" style="margin-left: 8px">取消</Button>
                    </Form-item>
                </Form>
            </div>
        </div>
    </div>

</template>
<script>
import Mybreadcrumb from '@/components/Breadcrumb.vue'

import picview from '@/assets/store/picview.png'
export default {
    name: 'storeProductCreate',
    components: {
        Mybreadcrumb,
    },
    data() {
        return {
            breadcrumbList: [
                {
                    text: '商品管理',
                    to: '/store/product'
                },
                {
                    text: '添加商品'
                }
            ],
            picview,
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
    }
}
</script>
