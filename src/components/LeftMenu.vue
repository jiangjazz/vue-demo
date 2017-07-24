<style lang="scss" scoped>
    .m-LeftMenu{
        width: 200px;
        position: absolute;
        top: 48px;
        left: 0;
        bottom: 0;
        background: $white;
        overflow-y: auto;
        .ivu-menu-dark{
            background: $white;
            .ivu-menu-item{
                color: #ffffff;
            }
            &.ivu-menu-vertical{
                .ivu-menu-item{
                    color: #ffffff;
                }
                .ivu-menu-opened{
                    background: rgb(44, 59, 65);
                }
                .homelink{
                    color: #80848f;
                }
            }
            .ivu-menu-submenu{
                .ivu-menu-item{
                    padding-top: 8px;
                    padding-bottom: 8px;
                    font-size: 12px;
                }
            }

            .homelink{
                text-indent: 22px;
                color: #80848f;
                background: rgb(34, 45, 50);
                &.ivu-menu-item-selected{
                    color: #ffffff;
                }
            }
        }
        .user{
            padding: 15px 15px;
            text-align: center;
            position: relative;
            &-ico{
                display: inline-block;
                margin: auto;
                width: 50px;
                height: 50px;
                color: $text-white;
                line-height: 50px;
                font-size: $f-h3;
                cursor: pointer;
                @include border-radius(50%);
                @include background-image($sub $main, left);
                @include box-shadow(0 0 3px $shadow);
                &:hover{
                    @include box-shadow(0 0 5px $sub*0.81);
                }
            }
            &-name{
                font-size: $f-h5;
                line-height: 1.5em;
            }
            &-type{
                font-size: $f-h6;
            }
            &-actions{
                position: absolute;
                top: 6px;
                right: 10px;
                &-action{
                    padding: 3px;
                    cursor: pointer;
                }
            }
        }
        .search{
            padding: 0 0 15px 24px;
        }
        .title{
            color: #ffffff;
            padding-left: 24px;
            line-height: 30px;
            background: rgb(26, 24, 38);
        }
        .routerClass{
            display: block;
        }
    }
</style>
<template>
    <div class="m-LeftMenu">
        <div class="user">
            <div class="">
                <div class="user-ico">
                    VL
                </div>
            </div>
            <p class="user-name">Vincent Li</p>
            <p class="user-type">系统管理员</p>
            <div class="user-actions">
                <Icon class="user-actions-action" size="14" type="android-settings"></Icon>
                <Icon class="user-actions-action" size="14" type="ios-bell"></Icon>
            </div>
        </div>
        <div class="search">
            <Input :class="'searchIpt'" icon="ios-search" placeholder="请输入..." style="width: 150px"></Input>
        </div>
        <div class="title">
            主菜单
        </div>
        <Menu :theme="'dark'" :open-names="['0']" accordion style="width: 200px">

            <router-link class="routerClass" to="/">
                <Menu-item :class="'homelink'" name="0">首页</Menu-item>
            </router-link>

            <Submenu name="1">
                <template slot="title">
                    <Icon type="ios-paper"></Icon>
                    数据中心
                </template>
                <router-link class="routerClass" to="/data/order">
                    <Menu-item name="1-1">订单数据</Menu-item>
                </router-link>
                <router-link class="routerClass" to="/data/member">
                    <Menu-item name="1-2">会员与粉丝数据</Menu-item>
                </router-link>
                <router-link class="routerClass" to="/data/activity">
                    <Menu-item name="1-3">线上活动数据</Menu-item>
                </router-link>
                <!-- <Menu-item name="1-4" @click="nopageInfo(false)">O2O数据（暂无）</Menu-item>
                <Menu-item name="1-5" @click="nopageInfo(false)">商城数据（暂无）</Menu-item> -->
                <router-link class="routerClass" to="/data/staff">
                    <Menu-item name="1-6">员工与门店数据</Menu-item>
                </router-link>
            </Submenu>

            <Submenu name="2">
                <template slot="title">
                    <Icon type="ios-people"></Icon>
                    会员中心
                </template>


                <router-link class="routerClass" to="/member/users">
                    <Menu-item name="2-1">会员列表</Menu-item>
                </router-link>
                <router-link class="routerClass" to="/member/fans">
                    <Menu-item name="2-2">粉丝列表</Menu-item>
                </router-link>

                <router-link class="routerClass" to="/member/group">
                    <Menu-item name="2-3">会员分组</Menu-item>
                </router-link>
                <router-link class="routerClass" to="/member/filter">
                    <Menu-item name="2-4">过滤器</Menu-item>
                </router-link>
                <router-link class="routerClass" to="/member/push">
                    <Menu-item name="2-5">数据推送</Menu-item>
                </router-link>
                <router-link class="routerClass" to="/member/weixin">
                    <Menu-item name="2-6">微信群发</Menu-item>
                </router-link>
                <router-link class="routerClass" to="/member/journey">
                    <Menu-item name="2-7">生命周期管理</Menu-item>
                </router-link>
            </Submenu>
            <Submenu name="3">
                <template slot="title">
                    <Icon type="stats-bars"></Icon>
                    O2O功能中心
                </template>
                <!-- <Menu-item name="3-1">创建预约规则（暂无）</Menu-item>
                <Menu-item name="3-2">预约管理（暂无）</Menu-item> -->
                <router-link class="routerClass" to="/o2o/coupon">
                    <Menu-item name="3-3">礼品券管理</Menu-item>
                </router-link>

                <!-- <Menu-item name="3-4">门店管理（暂无）</Menu-item>
                <Menu-item name="3-5">员工管理（暂无）</Menu-item>
                <Menu-item name="3-6">员工提醒规则（暂无）</Menu-item> -->
            </Submenu>
            <Submenu name="4">
                <template slot="title">
                    <Icon type="stats-bars"></Icon>
                    商城中心
                </template>
                <router-link class="routerClass" to="/store/product">
                    <Menu-item name="4-1">商品管理</Menu-item>
                </router-link>
                <router-link class="routerClass" to="/store/order">
                    <Menu-item name="4-2">订单管理</Menu-item>
                </router-link>
                <!-- <Menu-item name="4-3">红包兑换规则（暂无）</Menu-item>
                <Menu-item name="4-4">积分管理（暂无）</Menu-item> -->
            </Submenu>
            <Submenu name="5">
                <template slot="title">
                    <Icon type="stats-bars"></Icon>
                    个人中心
                </template>
                <!-- <Menu-item name="5-1">我的预约（暂无）</Menu-item>
                <Menu-item name="5-2">我的积分（暂无）</Menu-item> -->
                <router-link class="routerClass" to="/personal/coupon">
                    <Menu-item name="5-3">我的礼品卷</Menu-item>
                </router-link>

                <!-- <Menu-item name="5-4">我的业绩与指标（暂无）</Menu-item>
                <Menu-item name="5-5">修改个人信息（暂无）</Menu-item>
                <Menu-item name="5-6">角色与权限（仅管理员）（暂无）</Menu-item>
                <Menu-item name="5-7">用户管理（仅管理员）（暂无）</Menu-item> -->
            </Submenu>
        </Menu>
    </div>
</template>

<script>

export default {
    props: [''],
    data() {
      return {
        }
    },
    methods: {
        nopageInfo(nodesc) {
            this.$Notice.info({
                title: '暂无此页面，敬请期待',
                desc: nodesc ? '' : '暂无此页面，敬请期待'
            })
        }
    }
}
</script>
