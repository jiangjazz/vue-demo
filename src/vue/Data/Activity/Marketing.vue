<style lang="scss" scoped>
    .data-activity-marketing{
        padding: 20px 25px;
        .rowct{
            margin-bottom: 20px;
            padding: 10px 0;
            .col-pad{
                padding: 0 10px;
                &:first-child{
                    padding-left: 0;
                }
                &:last-child{
                    padding-right: 0;
                }
            }
        }
        .chartTitle{
            img{
                vertical-align: middle;
            }
        }
        .table_ct{
            padding: 0 10px;
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
                至
                <Date-picker class="f-ib" format="yyyy年MM月dd日" type="date" placeholder="选择日期" style="width: 200px"></Date-picker>
            </div>
        </div>

        <Row class="rowct">
            <Col class="col-pad" span="12">
                <div class="u-box-block">
                    <div class="chartTitle">
                        <Button type="text" size="large">渠道发送趋势
                            <Icon type="ios-help-outline"></Icon>
                        </Button>
                        <img class="f-fr" :src="activity_1" alt="" height="38" />
                    </div>
                    <Echart :options="echartsOpts[0]" :chartHeight="290">
                    </Echart>
                </div>
            </Col>
            <Col class="col-pad" span="12">
                <div class="u-box-block">
                    <div class="chartTitle">
                        <Button type="text" size="large">渠道发送次数
                            <Icon type="ios-help-outline"></Icon>
                        </Button>
                    </div>
                    <Echart :options="echartsOpts[1]" :chartHeight="290">
                    </Echart>
                </div>
            </Col>
        </Row>

        <Row class="rowct">
            <Col class="col-pad" span="8">
                <div class="u-box-block">
                    <div class="chartTitle">
                        <Button type="text" size="large">活跃转化漏斗
                            <Icon type="ios-help-outline"></Icon>
                        </Button>
                    </div>
                    <Echart :options="echartsOpts[2]" :chartHeight="290">
                    </Echart>
                </div>
            </Col>
            <Col class="col-pad" span="16">
                <div class="u-box-block">
                    <div class="chartTitle">
                        <Button type="text" size="large">活跃人数趋势
                            <Icon type="ios-help-outline"></Icon>
                        </Button>
                    </div>
                    <Echart :options="echartsOpts[3]" :chartHeight="290">
                    </Echart>
                </div>
            </Col>
        </Row>

        <Row class="rowct">
            <Col class="col-pad" span="12">
                <div class="u-box-block">
                    <div class="chartTitle">
                        <Button type="text" size="large">渠道到达率
                            <Icon type="ios-help-outline"></Icon>
                        </Button>
                    </div>
                    <Echart :options="echartsOpts[4]" :chartHeight="290">
                    </Echart>
                </div>
            </Col>
            <Col class="col-pad" span="12">
                <div class="u-box-block">
                    <div class="chartTitle">
                        <Button type="text" size="large">渠道退订数
                            <Icon type="ios-help-outline"></Icon>
                        </Button>
                    </div>
                    <Echart :options="echartsOpts[5]" :chartHeight="290">
                    </Echart>
                </div>
            </Col>
        </Row>

        <div class="rowct u-box-block">
            <div class="chartTitle">
                <Button type="text" size="large">渠道发送记录
                    <Icon type="ios-help-outline"></Icon>
                </Button>
            </div>
            <!-- 表格区域 -->
            <div class="table_ct">
                <Table :columns="tableHead" :data="tableData"></Table>
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
