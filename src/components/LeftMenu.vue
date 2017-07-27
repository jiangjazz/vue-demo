<style lang="scss">
    .m-LeftMenu{
        width: $navWidth;
        position: absolute;
        top: $headerHeight;
        left: 0;
        bottom: 0;
        background: $white;
        overflow-y: auto;
        z-index: 10;
        @include box-shadow(0 0 20px $shadow);
        .ivu-menu{
            .ivu-menu-item{
                color: $text-disabled;
            }
            .ivu-icon{
                color: $text-normal;
            }
            &.ivu-menu-vertical{
                .ivu-menu-item{
                    color: $text-normal;
                }
            }
            .ivu-menu-submenu-title{
                color: $text-normal;
                &:hover{
                    background: $navActive;
                    color: $text-important;
                    .ivu-icon{
                        color: $text-important;
                    }
                }
            }

            .ivu-menu-opened{
                .ivu-menu-submenu-title{
                    background: $navActive;
                }
                .ivu-menu-item{
                    background: $navActive;
                }
            }
            .ivu-menu-submenu{
                .ivu-menu-item{
                    padding-top: 8px;
                    padding-bottom: 8px;
                    font-size: $f-h6;
                    border-left: 4px solid transparent;
                    &:hover{
                        color: $text-important;
                    }
                }
                .ivu-menu-item-active{
                    border-left: 4px solid $main;
                }
            }
            .homelink{
                border-left: 4px solid transparent;
                &:hover{
                    color: $text-important;
                    background: $navActive;
                }
            }
        }
        .ivu-menu-light.ivu-menu-vertical .ivu-menu-item-active:not(.ivu-menu-submenu){
            border-right: 0;
            border-left: 4px solid $main;
            background: $navActive;
            color: $text-important;
            font-weight: bold;
            .ivu-icon{
                color: $text-important;
            }
        }
        .ivu-menu-vertical.ivu-menu-light{
            background: transparent;
            &:after{
                background: transparent;
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
            padding: 0 0 15px 0;
        }
        .routerClass{
            display: block;
        }
    }
</style>
<template>
    <div class="m-LeftMenu" :style="menuBg">
        <div class="user">
            <div>
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
        <div class="search f-cb">
            <Input class="searchIpt f-fr" placeholder="请输入..." icon="ios-search" onclick="searchIconClick">

            </Input>
        </div>
        <Menu :open-names="['0']" accordion style="width: 200px">

            <router-link class="routerClass" to="/">
                <Menu-item :class="'homelink'" name="0">
                    <Icon type="ios-home"></Icon>
                    首页
                </Menu-item>
            </router-link>

            <Submenu name="1">
                <template slot="title">
                    <Icon type="ios-pie"></Icon>
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
                    <Menu-item name="2-4">多维分析</Menu-item>
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
                    <Icon type="ios-briefcase"></Icon>
                    商城中心
                </template>
                <router-link class="routerClass" to="/store/product">
                    <Menu-item name="4-1">商品管理</Menu-item>
                </router-link>
                <router-link class="routerClass" to="/store/order">
                    <Menu-item name="4-2">订单管理</Menu-item>
                </router-link>
            </Submenu>
            <Submenu name="5">
                <template slot="title">
                    <Icon type="person"></Icon>
                    个人中心
                </template>
                <router-link class="routerClass" to="/personal/coupon">
                    <Menu-item name="5-3">我的礼品卷</Menu-item>
                </router-link>
            </Submenu>
        </Menu>
    </div>
</template>

<script>
import nav_bg from '@/assets/nav-bg.png'

export default {
    props: [''],
    data() {
      return {
          nav_bg,
          searchActive: false
        }
    },
    computed: {
        menuBg() {
            return {
                backgroundImage: 'url('+ nav_bg +')',
                backgroundPosition: 'bottom center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: '100% auto',
            }
        }
    },
    methods: {
        nopageInfo(nodesc) {
            this.$Notice.info({
                title: '暂无此页面，敬请期待',
                desc: nodesc ? '' : '暂无此页面，敬请期待'
            })
        },
    }
}
</script>
