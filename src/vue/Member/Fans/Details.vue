<style lang="scss" scoped>
    .member-fans-details{
        .details_content{
            padding: 15px 10px;
            background-color: $bg-content;
        }
        .col-left,
        .col-right{
            padding: 10px;
            .ivu-card-bordered{
                border: none;
            }
        }
        .details-list{
            padding: 0;
            .img_ct{
                padding: 20px 0;
            }
            img{
                display: block;
                margin: auto;
                width: 120px;
                outline: 0;
            }
            dd{
                padding: 10px 20px;
                border-top: 1px solid $border-default;
                font-size: $f-h5;
                line-height: 32px;
                .ivu-btn{
                    margin-right: 20px;
                    vertical-align: middle;
                }
            }
            .t_name{
                color: $text-normal;
                font-size: $f-h4;
            }
            .t_id{
                color: $text-disabled;
                font-size: $f-h5;
                line-height: 2em;
            }
            .t_tags{
                margin: 10px auto;
            }
            .span{
                font-weight: bold;
            }
        }
    }
</style>
<template>
    <div class="member-fans-details">
        <Mybreadcrumb :items="breadcrumbList"></Mybreadcrumb>
        <div class="details_content">
            <Row>
                <Col span="9" class="col-left">
                    <dl class="details-list u-box-block">
                        <dt class="f-tac">
                            <div class="img_ct">
                                <img :src="member_head" />
                            </div>
                            <p class="t_name">Fancy Moon</p>
                            <p class="t_id">ID: ASFHO33233WEREW </p>
                            <div class="t_tags">
                                <Button class="purple" size="small" shape="circle">VIP</Button>
                                <Button class="success" size="small" shape="circle">微信控</Button>
                                <Button class="warning" size="small" shape="circle">活跃</Button>
                                <Button class="primary" size="small" shape="circle">高价值</Button>
                            </div>
                        </dt>
                        <dd>
                            近30天订单量
                            <span class="f-fr span">23</span>
                        </dd>
                        <dd>
                            近30天订单金额
                            <span class="f-fr span">￥2,344.00</span>
                        </dd>
                        <dd>
                            回复消息
                            <span class="f-fr span">43</span>
                        </dd>
                        <dd>
                            点击菜单
                            <span class="f-fr span">76</span>
                        </dd>
                        <dd>
                            查阅图文消息
                            <span class="f-fr span">143</span>
                        </dd>
                        <dd>
                            关注日期
                            <span class="f-fr span">2017-01-23</span>
                        </dd>
                        <dd>
                            所在地
                            <span class="f-fr span">中国 上海</span>
                        </dd>
                    </dl>
                </Col>
                <Col span="15" class="col-right">
                    <div class="u-box-block" style="padding: 0;">
                        <Card dis-hover>
                            <p slot="title">会员行为</p>
                            <img :src="member_details_2" width="80%" />
                        </Card>
                    </div>
                </Col>
            </Row>
        </div>
    </div>
</template>
<script>
import member_head from '@/assets/data/member_head.png'
import member_details_2 from '@/assets/data/member_details_2.jpg'

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
            member_head,
            member_details_2
        }
    }
}
</script>
