<style lang="scss">
.o2o-coupon-create{
    .actionct{
        padding: 10px 20px;
    }
    .filterFrom{
        margin: auto;
        padding: 10px 20px;
        width: 90%;
        max-width: 800px;
    }
    .vertical-center-modal{
        display: flex;
        align-items: center;
        justify-content: center;
        .ivu-modal{
            top: 0;
        }
        p{
            line-height: 2em;
        }
    }
}
</style>
<template>
    <div class="o2o-coupon-create">

        <div class="u-breadcrumb">
            <router-link to="/o2o/coupon" class="item">礼品券管理</router-link>
            <span class="separator">></span>
            <span class="item active">创建礼品券</span>
        </div>

        <Form class="filterFrom" :model="formItem" label-position="left" :label-width="80">
            <Form-item label="礼品券ID">
                12125
            </Form-item>
            <Form-item label="名称">
                <Input v-model="formItem.input" placeholder="请输入名称"></Input>
            </Form-item>
            <Form-item label="数量">
                <Input v-model="formItem.input" placeholder="请填写1-99999正整数。填0代表无限数量"></Input>
            </Form-item>
            <Form-item label="有效期">
                <Row>
                    <Col span="11">
                        <Date-picker type="date" placeholder="选择日期"></Date-picker>
                    </Col>
                    <Col span="2" style="text-align: center">-</Col>
                    <Col span="11">
                        <Date-picker type="date" placeholder="选择日期"></Date-picker>
                    </Col>
                </Row>
            </Form-item>
            <Form-item label="可领取">
                <i-switch v-model="formItem.switch" size="large">
                    <span slot="open">开启</span>
                    <span slot="close">关闭</span>
                </i-switch>
            </Form-item>
            <Form-item label="礼券规则">
                <Select v-model="formItem.select" placeholder="请选择规则">
                    <Option value="beijing">满减</Option>
                    <Option value="shanghai">满赠</Option>
                </Select>
            </Form-item>
            <Form-item label="满足条件">
                <Row>
                    <Col span="22">
                        <Row>
                            <Col span="8" style="padding-right: 15px;">
                                <Select placeholder="请选择条件">
                                </Select>
                            </Col>
                            <Col span="8" style="padding-right: 15px;">
                                <Select placeholder="大于">
                                </Select>
                            </Col>
                            <Col span="8">
                                <Input v-model="formItem.input" placeholder="请填写内容"></Input>
                            </Col>
                        </Row>
                    </Col>
                    <Col span="2" style="text-align: center;">
                        <Button type="text" shape="circle" size="large" icon="android-add-circle"></Button>
                    </Col>
                </Row>
            </Form-item>
            <Form-item label="奖励内容">
                <Row>
                    <Col span="22">
                        <Select placeholder="请选择内容（商品、积分、折扣、现金......">
                        </Select>
                    </Col>
                    <Col span="2" style="text-align: center;">
                        <Button type="text" shape="circle" size="large" icon="android-add-circle"></Button>
                    </Col>
                </Row>
            </Form-item>
            <Form-item label="限制条件">
                <i-switch size="large">
                    <span slot="open">开启</span>
                    <span slot="close">关闭</span>
                </i-switch>
            </Form-item>
            <Form-item>
                <Button type="primary">保存</Button>
                <Button type="ghost" style="margin-left: 8px">取消</Button>
                <Button class="f-fr" type="primary" @click="modal1 = true">内容预览</Button>
            </Form-item>
        </Form>

        <Modal
            title="满 ¥2000 赠 Paco mont 50ml"
            v-model="modal1"
            class-name="vertical-center-modal">
            <p>礼券条件：</p>
            <p>满2000赠 Paco mont 50ml，</p>
            <p>限制条件：除北京、上海外的其他城市；</p>
            <p>会员等级大于1级；</p>
            <p>2016-03-04   至   2017-12-31</p>
        </Modal>
    </div>
</template>
<script>
import TableTemp from '@/components/TableTemp.vue'
import datas from '@/datas/o2oCoupon.js'

export default {
    name: 'o2oGroupCreate',
    components: {
    },
    data() {
        return {
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
            },
            modal1: false
        }
    },
    methods: {
    }
}
</script>
