<style lang="scss" scoped>
    .data-staff-details{
        padding: 20px 20px;
        background-color: #ffffff;
        .details-list{
            padding: 0;
            border: 1px solid #f1f1f1;
            img{
                display: block;
                width: 100%;
                height: 100%;
                outline: 0;
            }
            dd{
                padding: 10px 0;
                text-indent: 2em;
                border-top: 1px solid #f1f1f1;
                font-size: 14px;
                line-height: 32px;
                .ivu-btn{
                    margin-right: 20px;
                    vertical-align: middle;
                }
            }
        }
        .card-title{
            padding: 15px 20px;
            color: #ffffff;
            font-size: 16px;
        }
        .card-1{
            margin-top: 20px;
            .card-title{
                background-color: rgb(22, 117, 206);
            }
        }
        .card-2{
            margin-top: 20px;
            .card-title{
                background-color: rgb(76, 174, 58);
            }
        }
        .col-right{
            border: 1px solid #f1f1f1;
        }
        .row-title{
            margin-bottom: 15px;
            font-size: 16px;
            font-weight: bold;
        }
        .row1{
            margin-top: 30px;
            padding: 20px 30px;
            background: #ffffff;
            border-top: 5px solid rgb(239, 113, 152);
        }
        .row2{
            margin-top: 30px;
            padding: 20px 30px;
            background: #ffffff;
            border-top: 5px solid rgb(71, 163, 98);
        }
    }
</style>
<template>
    <div class="data-staff-details">
        <Row>
            <Col span="9">
                <dl class="details-list">
                    <dt>
                        <img :src="staff_workerdetails_1" />
                    </dt>
                    <dd>
                        成单数
                        <Button class="f-fr" type="primary" shape="circle">23</Button>
                    </dd>
                    <dd>
                        成单金额
                        <Button class="f-fr" type="primary" shape="circle">￥32,344.00</Button>
                    </dd>
                    <dd>
                        预约完成
                        <Button class="f-fr" type="primary" shape="circle">30</Button>
                    </dd>
                    <dd>
                        客户满意度
                        <Button class="f-fr" type="primary" shape="circle">96%</Button>
                    </dd>
                    <dd>
                        关联客户
                        <Button class="f-fr" type="primary" shape="circle">37</Button>
                    </dd>
                    <dd>
                        综合排名
                        <Button class="f-fr" type="primary" shape="circle">5</Button>
                    </dd>
                </dl>
                <div class="card-1">
                    <div class="card-title">
                        刘文茗 - 客户复购排行榜TOP5
                    </div>
                    <!-- 表格区域 -->
                    <Table border :columns="tableHead1" :data="tableData1"></Table>
                </div>

                <div class="card-2">
                    <div class="card-title">
                        刘文茗 - 客户复购排行榜TOP5
                    </div>
                    <!-- 表格区域 -->
                    <Table border :columns="tableHead2" :data="tableData2"></Table>
                </div>
            </Col>
            <Col span="1">&nbsp;</Col>
            <Col span="14" class="col-right">
                <div class="row1">
                    <Echart :options="echartsOpts[0]" :chartHeight="320" style="margin-bottom: 20px">
                    </Echart>
                    <Echart :options="echartsOpts[1]" :chartHeight="320">
                    </Echart>
                </div>

                <div class="row2">
                    <Echart :options="echartsOpts[2]" :chartHeight="320" style="margin-bottom: 20px">
                    </Echart>
                    <Echart :options="echartsOpts[3]" :chartHeight="320">
                    </Echart>
                </div>

            </Col>
        </Row>
    </div>
</template>
<script>
import staff_workerdetails_1 from '@/assets/data/staff_workerdetails_1.png'

import Echart from '@/components/Echarts.vue'

import datas from '@/datas/dataStaffDetails.js'

export default {
    name: 'dataStaffDetails',
    components: {
        Echart
    },
    data() {
        return {
            staff_workerdetails_1,
            echartsOpts: datas.echartsOpts,
            tableHead1:[
                {
                    title: '客户手机',
                    key: 'phone'
                },
                {
                    title: '客户姓名',
                    key: 'name'
                },
                {
                    title: '购买次数',
                    key: 'time'
                },
            ],
            tableData1: datas.tableData1,
            tableHead2: [
                {
                    title: '粉丝手机',
                    key: 'phone'
                },
                {
                    title: '微信名',
                    key: 'weixinname'
                },
                {
                    title: '购买次数',
                    key: 'time'
                }
            ],
            tableData2: datas.tableData2
        }
    },
    mounted() {}
}
</script>
