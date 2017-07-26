<style lang="scss" scoped>
    .member-fans-details{
        .details_content{
            padding: 20px;
        }
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
        .col-right{
            border: 1px solid #f1f1f1;
        }
    }
</style>
<template>
    <div class="member-fans-details">
        <Mybreadcrumb :items="breadcrumbList"></Mybreadcrumb>
        <div class="details_content">
            <Row class="u-box-block">
                <Col span="9">
                    <dl class="details-list">
                        <dt>
                            <img :src="member_details_1" />
                        </dt>
                        <dd>
                            近30天订单量
                            <Button class="f-fr" type="primary" shape="circle">23</Button>
                        </dd>
                        <dd>
                            近30天订单金额
                            <Button class="f-fr" type="primary" shape="circle">￥2,344.00</Button>
                        </dd>
                        <dd>
                            回复消息
                            <Button class="f-fr" type="primary" shape="circle">43</Button>
                        </dd>
                        <dd>
                            点击菜单
                            <Button class="f-fr" type="primary" shape="circle">76</Button>
                        </dd>
                        <dd>
                            查阅图文消息
                            <Button class="f-fr" type="primary" shape="circle">143</Button>
                        </dd>
                        <dd>
                            关注日期
                            <Button class="f-fr" type="primary" shape="circle">2017-01-23</Button>
                        </dd>
                        <dd>
                            所在地
                            <Button class="f-fr" type="primary" shape="circle">中国 上海</Button>
                        </dd>
                    </dl>
                </Col>
                <Col span="1">&nbsp;</Col>
                <Col span="14" class="col-right">
                    <Card dis-hover>
                        <p slot="title">会员行为</p>
                        <img :src="member_details_2" width="80%" />
                    </Card>
                </Col>
            </Row>
        </div>
    </div>
</template>
<script>
import member_details_1 from '@/assets/data/member_details_1.png'
import member_details_2 from '@/assets/data/member_details_2.png'

import Mybreadcrumb from '@/components/Breadcrumb.vue'
// import datas from '@/datas/dataMemberFans.js'

export default {
    name: 'memberFansDetails',
    components: {
        Mybreadcrumb,
    },
    data() {
        return {
            breadcrumbList: [
                {
                    text: '粉丝列表',
                    to: '/member/fans'
                },{
                    text: '详情'
                }
            ],
            member_details_1,
            member_details_2
        }
    }
}
</script>
