<style lang="scss" scoped>
    .data-staff-details{
        padding: 20px 20px;
        // background-color: #ffffff;
        .details-list{
            padding: 0;
            border: 1px solid #f1f1f1;
            .img_ct{
                padding: 20px 0;
            }
            img{
                display: block;
                margin: 20px auto;
                width: 120px;
                outline: 0;
            }
            dd{
                padding: 15px 20px;
                border-top: 1px solid $border-default;
                font-size: $f-h5;
                line-height: 32px;
                .ivu-btn{
                    margin-right: 20px;
                    vertical-align: middle;
                }
            }
        }
        .col-left,
        .col-right{
            padding: 10px;
        }
        .card-title{
            padding: 0 0 10px 0;
            color: $text-normal;
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

        .t_name{
            color: $text-normal;
            font-size: $f-h4;
        }
        .t_desc{
            padding: 10px 0 30px 0;
            font-size: $f-h5;
            color: $disabled;
        }
        .span{
            font-weight: bold;
        }
        .row-title{
            margin-bottom: 15px;
            font-size: 16px;
            font-weight: bold;
        }
    }
</style>
<template>
    <div class="data-staff-details">
        <Row>
            <Col span="9" class="col-left">
                <dl class="details-list u-box-block">
                    <dt class="f-tac">
                        <div class="img_ct">
                            <img :src="member_head" />
                        </div>
                        <p class="t_name">Fancy Moon</p>
                        <div class="t_desc">
                            <p class="t_desc_item">中国 -上海 - IAPM</p>
                            <p class="t_desc_item">13888888888</p>
                            <p class="t_desc_item">liu.wenming@163.om</p>
                        </div>

                    </dt>
                    <dd>
                        成单数
                        <span class="f-fr span">23</span>
                    </dd>
                    <dd>
                        成单金额
                        <span class="f-fr span">￥32,344.00</span>
                    </dd>
                    <dd>
                        预约完成
                        <span class="f-fr span">30</span>
                    </dd>
                    <dd>
                        客户满意度
                        <span class="f-fr span">96%</span>
                    </dd>
                    <dd>
                        关联客户
                        <span class="f-fr span">37</span>
                    </dd>
                    <dd>
                        综合排名
                        <span class="f-fr span">5</span>
                    </dd>
                </dl>
            </Col>
            <Col span="15" class="col-right">
                <div class="u-box-block" style="margin-bottom: 20px;">
                    <div class="card-title">
                        刘文茗 - 客户复购排行榜TOP5
                    </div>
                    <!-- 表格区域 -->
                    <Table :columns="tableHead1" :data="tableData1"></Table>
                </div>

                <div class="u-box-block">
                    <div class="card-title">
                        刘文茗 - 客户复购排行榜TOP5
                    </div>
                    <!-- 表格区域 -->
                    <Table :columns="tableHead2" :data="tableData2"></Table>
                </div>

            </Col>
        </Row>

        <div class="u-box-block" style="margin: 20px 10px;">
            <div class="card-title">
                刘文茗 - 客户复购排行榜TOP5
            </div>
            <Row>
                <Col span="10">
                    <Echart :options="echartsOpts[0]" :chartHeight="320" style="margin-bottom: 20px">
                    </Echart>
                </Col>
                <Col span="1">&nbsp;</Col>
                <Col span="13">
                    <Echart :options="echartsOpts[1]" :chartHeight="320">
                    </Echart>
                </Col>
            </Row>
        </div>

        <div class="u-box-block" style="margin: 20px 10px;">
            <div class="card-title">
                刘文茗  本年度周排行情况：
            </div>
            <Row>
                <Col span="10">
                    <Echart :options="echartsOpts[2]" :chartHeight="320" style="margin-bottom: 20px">
                    </Echart>
                </Col>
                <Col span="1">&nbsp;</Col>
                <Col span="13">
                    <Echart :options="echartsOpts[3]" :chartHeight="320">
                    </Echart>
                </Col>
            </Row>
        </div>
    </div>
</template>
<script>
import member_head from '@/assets/data/member_head.png'

import Echart from '@/components/Echarts.vue'

import datas from '@/datas/dataStaffDetails.js'

export default {
    name: 'dataStaffDetails',
    components: {
        Echart
    },
    data() {
        return {
            member_head,
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
