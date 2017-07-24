<style lang="scss" scoped>
    .data-activity-marketing{
        padding: 20px 25px;
        .row1{
            margin-top: 20px;
            border-top: 5px solid rgb(243, 157, 57);
            .rowct{
                margin-bottom: 20px;
                padding: 10px 0;
                background-color: #ffffff;
            }
        }
        .chartTitle{
            img{
                vertical-align: middle;
            }
        }
    }
</style>
<template>
    <div class="data-activity-marketing">
        <div class="f-cb">
            <Select style="width:200px">
                <Option v-for="item in selectOpt" :value="item.value" :key="item">{{ item.text }}</Option>
            </Select>
            <div class="f-fr">
                <Date-picker class="f-ib" format="yyyy年MM月dd日" type="date" placeholder="选择日期" style="width: 200px"></Date-picker>
                ——
                <Date-picker class="f-ib" format="yyyy年MM月dd日" type="date" placeholder="选择日期" style="width: 200px"></Date-picker>
            </div>
        </div>

        <div class="row1">
            <Row class="rowct">
                <Col span="11">
                    <div class="chartTitle">
                        <Button type="text" size="large">渠道发送趋势
                            <Icon type="ios-help-outline"></Icon>
                        </Button>
                        <img class="f-fr" :src="activity_1" alt="" height="38" />
                    </div>
                    <Echart :options="echartsOpts[0]" :chartHeight="290">
                    </Echart>
                </Col>
                <Col span="2">&nbsp;</Col>
                <Col span="11">
                    <div class="chartTitle">
                        <Button type="text" size="large">渠道发送次数
                            <Icon type="ios-help-outline"></Icon>
                        </Button>
                    </div>
                    <Echart :options="echartsOpts[1]" :chartHeight="290">
                    </Echart>
                </Col>
            </Row>

            <Row class="rowct">
                <Col span="11">
                    <div class="chartTitle">
                        <Button type="text" size="large">活跃转化漏斗
                            <Icon type="ios-help-outline"></Icon>
                        </Button>
                    </div>
                    <Echart :options="echartsOpts[2]" :chartHeight="290">
                    </Echart>
                </Col>
                <Col span="2">&nbsp;</Col>
                <Col span="11">
                    <div class="chartTitle">
                        <Button type="text" size="large">活跃人数趋势
                            <Icon type="ios-help-outline"></Icon>
                        </Button>
                    </div>
                    <Echart :options="echartsOpts[3]" :chartHeight="290">
                    </Echart>
                </Col>
            </Row>

            <Row class="rowct">
                <Col span="11">
                    <div class="chartTitle">
                        <Button type="text" size="large">渠道到达率
                            <Icon type="ios-help-outline"></Icon>
                        </Button>
                    </div>
                    <Echart :options="echartsOpts[4]" :chartHeight="290">
                    </Echart>
                </Col>
                <Col span="2">&nbsp;</Col>
                <Col span="11">
                    <div class="chartTitle">
                        <Button type="text" size="large">渠道退订数
                            <Icon type="ios-help-outline"></Icon>
                        </Button>
                    </div>
                    <Echart :options="echartsOpts[5]" :chartHeight="290">
                    </Echart>
                </Col>
            </Row>

            <div class="rowct">
                <div class="chartTitle">
                    <Button type="text" size="large">渠道发送记录
                        <Icon type="ios-help-outline"></Icon>
                    </Button>
                </div>
                <!-- 表格区域 -->
                <Table border :columns="tableHead" :data="tableData"></Table>
            </div>
        </div>
    </div>
</template>
<script>
import activity_1 from '@/assets/data/activity_1.png'

import Echart from '@/components/Echarts.vue'

import datas from '@/datas/dataActivity.js'

export default {
    name: 'dataActivityMarketing',
    components: {
        Echart
    },
    data() {
        return {
            activity_1,
            selectOpt: [{
                text: 'journey-618大促销',
                value: '1'
            }, {
                text: 'journey-双11大促销',
                value: '2'
            }],
            echartsOpts: datas.echartsOpts,
            tableHead: [{
                title: '发送名称',
                key: 'name'
            },{
                title: '发送时间',
                key: 'time'
            },{
                title: '发送渠道',
                key: 'ways'
            },{
                title: '发送人数',
                key: 'sendnum'
            },{
                title: '活跃人数',
                key: 'activenum'
            },{
                title: '发送数量',
                key: 'num'
            },{
                title: '送达率',
                key: 'deliveryrate'
            }],
            tableData: datas.tableData
        }
    }
}
</script>
