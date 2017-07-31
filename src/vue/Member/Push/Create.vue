<style lang="scss">
    .member-push-create{
        .filterFrom_ct{
            padding: 20px;
        }
        .filterFrom{
            margin: auto;
            padding: 10px 20px;
            width: 90%;
            min-width: 800px;
            max-width: 1200px;
        }
        .actBtn{
            width: 80px;
        }
    }
</style>
<template>
    <div class="member-push-create">
        <Mybreadcrumb :items="breadcrumbList"></Mybreadcrumb>

        <Alert closable>数据推送器是将选定的数据，以固定的频率推送的目标服务器中。从而帮助企业实现自动化营销和管理的需求。</Alert>
        <div class="filterFrom_ct">
            <div class="u-box-block">
                <Form class="filterFrom" :model="formItem" label-position="left" :label-width="100">
                    <Form-item label="数据推送目标组">
                        <Row>
                            <Col span="14">
                                <Select v-model="formItem.select" placeholder="请选择要推送的用户组">
                                    <Option value="member">微信会员组</Option>
                                </Select>
                            </Col>
                            <Col span="10" style="padding: 0 15px;">
                                例： 微信会员组
                            </Col>
                        </Row>
                    </Form-item>
                    <Form-item label="过滤器">
                        <Row>
                            <Col span="14">
                                <Select v-model="formItem.select" placeholder="请选择要应用的过滤器">
                                    <Option value="member">48小时内有互动的人</Option>
                                </Select>
                            </Col>
                            <Col span="10" style="padding: 0 15px;">
                                例： 48小时内有互动的人
                            </Col>
                        </Row>
                    </Form-item>
                    <Form-item label="推送字段">
                        <Row>
                            <Col span="14">
                                <Select v-model="formItem.select" placeholder="请点击加载字段，并勾选推送所需字段。">
                                    <Option value="member">微信ID</Option>
                                </Select>
                            </Col>
                            <Col span="10" style="padding: 0 15px;">
                                例： 微信ID，手机，姓名
                            </Col>
                        </Row>
                    </Form-item>
                    <Form-item label="接收数据服务器">
                        <Row>
                            <Col span="14">
                                <Select v-model="formItem.select" placeholder="请填写回调URL，回调方式为HTTP POST">
                                    <Option value="member">URL</Option>
                                </Select>
                            </Col>
                            <Col span="10" style="padding: 0 15px;">
                                例： https://journey.dmavip.com/uid=cus1?=token1?=group1
                            </Col>
                        </Row>
                    </Form-item>
                    <Form-item label="推送周期">
                        <Row>
                            <Col span="14">
                                <Row>
                                    <Col span="8">
                                        <Radio label="male">固定日期（单次）</Radio>
                                    </Col>

                                    <Col span="1"></Col>
                                    <Col span="7">
                                        <Date-picker type="date" placeholder="选择日期" v-model="formItem.date"></Date-picker>
                                    </Col>
                                    <Col span="1" style="text-align: center">-</Col>
                                    <Col span="7">
                                        <Time-picker type="time" placeholder="选择时间" v-model="formItem.time"></Time-picker>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col span="8">
                                        <Radio label="male">周期推送（多次）</Radio>
                                    </Col>

                                    <Col span="1"></Col>
                                    <Col span="7">
                                        <Select v-model="formItem.select" placeholder="选择频率">
                                            <Option value="member">1周1次</Option>
                                        </Select>
                                    </Col>
                                    <Col span="1" style="text-align: center">-</Col>
                                    <Col span="7">
                                        <Time-picker type="time" placeholder="选择时间" v-model="formItem.time"></Time-picker>
                                    </Col>
                                </Row>
                            </Col>
                            <Col span="10" style="padding: 0 15px;">
                                例： 每48小时、 上午10点
                            </Col>
                        </Row>
                    </Form-item>

                    <Form-item label="数据推送器名称">
                        <Row>
                            <Col span="14">
                                <Input v-model="formItem.input" placeholder="请为该数据推送器命名"></Input>
                            </Col>
                            <Col span="10" style="padding: 0 15px;">
                                例： 48小时有互动微信会员
                            </Col>
                        </Row>
                    </Form-item>

                    <Form-item>
                        <Button class="actBtn" type="warning">测试</Button>
                        <Button class="actBtn" type="primary" style="margin-left: 8px">保存</Button>
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
    name: 'memberPushCreate',
    components: {
        Mybreadcrumb,
    },
    data() {
        return {
            breadcrumbList: [
                {
                    text: '数据推送'
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
    }
}
</script>
