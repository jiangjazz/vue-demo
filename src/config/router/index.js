/********
* 基础结构
*/
import App from '@/vue/App.vue'
/********
* 首页
*/
import Home from '@/vue/Home.vue'
/********
* 数据中心
*/
import Data from '@/vue/Data/index.vue'
// 订单数据
import DataOrder from '@/vue/Data/Order/index.vue'
import DataOrderReport from '@/vue/Data/Order/Report.vue'
import DataOrderOnline from '@/vue/Data/Order/Online.vue'
import DataOrderOffline from '@/vue/Data/Order/Offline.vue'
// 会员与粉丝数据
import DataMember from '@/vue/Data/Member/index.vue'
import DataMemberReport from '@/vue/Data/Member/Report.vue'
// import DataMemberUsers from '@/vue/Data/Member/Users.vue'
// import DataMemberFans from '@/vue/Data/Member/Fans.vue'
// import DataMemberDetails from '@/vue/Data/Member/Details.vue'
// 线上活动数据
import DataActivity from '@/vue/Data/Activity/index.vue'
import DataActivityMarketing from '@/vue/Data/Activity/Marketing.vue'
// 员工与门店数据
import DataStaff from '@/vue/Data/Staff/index.vue'
import DataStaffReport from '@/vue/Data/Staff/Report.vue'
import DataStaffWorkers from '@/vue/Data/Staff/Workers.vue'
import DataStaffDetails from '@/vue/Data/Staff/WorkerDetails.vue'
import dataStaffShops from '@/vue/Data/Staff/Shops.vue'
/********
* 会员中心
*/
import Member from '@/vue/Member/index.vue'
// 会员列表
import MemberUsers from '@/vue/Member/Users/index.vue'
import MemberUsersList from '@/vue/Member/Users/List.vue'
// 粉丝列表
import MemberFans from '@/vue/Member/Fans/index.vue'
import MemberFansList from '@/vue/Member/Fans/List.vue'
import MemberFansDetails from '@/vue/Member/Fans/Details.vue'
// 会员分组
import MemberGroup from '@/vue/Member/Group/index.vue'
import MemberGroupList from '@/vue/Member/Group/List.vue'
import MemberGroupDetails from '@/vue/Member/Group/Details.vue'
// 过滤器
import MemberFilter from '@/vue/Member/Filter/index.vue'
import MemberFilterList from '@/vue/Member/Filter/List.vue'
import MemberFilterCreate from '@/vue/Member/Filter/Create.vue'
// 数据推送
import MemberPush from '@/vue/Member/Push/index.vue'
import MemberPushCreate from '@/vue/Member/Push/Create.vue'
// 微信群发
import MemberWeixin from '@/vue/Member/Weixin/index.vue'
import MemberWeixinSend from '@/vue/Member/Weixin/Send.vue'
// 生命周期
import MemberJourney from '@/vue/Member/Journey/index.vue'
import MemberJourneyManage from '@/vue/Member/Journey/Manage.vue'
/********
* O2O功能管理
*/
import O2o from '@/vue/O2o/index.vue'
// 礼品券管理
import O2oCoupon from '@/vue/O2o/Coupon/index.vue'
import O2oCouponList from '@/vue/O2o/Coupon/List.vue'
import O2oCouponCreate from '@/vue/O2o/Coupon/Create.vue'
/********
* 商城中心
*/
import Store from '@/vue/Store/index.vue'
// 商品管理
import StoreProduct from '@/vue/Store/Product/index.vue'
import StoreProductList from '@/vue/Store/Product/List.vue'
import StoreProductCreate from '@/vue/Store/Product/Create.vue'
// 订单管理
import StoreOrder from '@/vue/Store/Order/index.vue'
import StoreOrderList from '@/vue/Store/Order/List.vue'
/********
* 个人中心
*/
import Personal from '@/vue/Personal/index.vue'
// 我的礼品券
import PersonalCoupone from '@/vue/Personal/Coupon/index.vue'
import PersonalCouponeList from '@/vue/Personal/Coupon/List.vue'

// 有关vue的一些帮助文档
import Hello from '@/vue/Hello.vue'

export default (Vue, VueRouter) => {
  const router = new VueRouter({
    routes: [
        {
            path: "/404",
            name: "404",
            component: Hello
        },{
            path: "/help",
            name: "vuehrlp",
            component: Hello
        },{
            path: '/',
            name: 'home',
            component: Home
        },{
            path: '/data',
            component: Data,
            redirect: '/data/order',
            children: [
                {
                    path: 'order',
                    component: DataOrder,
                    children: [
                        {
                            path: '/',
                            name: 'dataOrderReport',
                            component: DataOrderReport
                        },{
                            path: 'online',
                            name: 'dataOrderOnline',
                            component: DataOrderOnline
                        },{
                            path: 'offline',
                            name: 'dataOrderOffline',
                            component: DataOrderOffline
                        }
                    ]
                },{
                    path: 'member',
                    component: DataMember,
                    children: [
                        {
                            path: '/',
                            name: 'dataMemberReport',
                            component: DataMemberReport
                        }
                        // ,{
                        //     path: 'users',
                        //     name: 'dataMemberUsers',
                        //     component: DataMemberUsers
                        // },{
                        //     path: 'fans',
                        //     name: 'dataMemberFans',
                        //     component: DataMemberFans
                        // },{
                        //     path: 'details:id',
                        //     name: 'dataMemberDetails',
                        //     component: DataMemberDetails
                        // }
                    ]
                },{
                    path: 'activity',
                    component: DataActivity,
                    children: [
                        {
                            path: '/',
                            name: 'dataActivityMarketing',
                            component: DataActivityMarketing
                        }
                    ]
                },{
                    path: 'staff',
                    component: DataStaff,
                    children: [
                        {
                            path: '/',
                            name: 'dataStaffReport',
                            component: DataStaffReport
                        },{
                            path: 'workers',
                            name: 'dataStaffWorkers',
                            component: DataStaffWorkers
                        },{
                            path: 'details:id',
                            name: 'dataStaffDetails',
                            component: DataStaffDetails
                        },{
                            path: 'shops',
                            name: 'dataStaffShops',
                            component: dataStaffShops
                        }
                    ]
                }
            ]
        },{
            path: '/member',
            component: Member,
            redirect: '/member/group/list',
            children: [
                {
                    path: 'users',
                    component: MemberUsers,
                    children: [
                        {
                            path: '/',
                            name: 'memberUsersList',
                            component: MemberUsersList,
                        }
                    ]
                },{
                    path: 'fans',
                    component: MemberFans,
                    children: [
                        {
                            path: '/',
                            name: 'memberFansList',
                            component: MemberFansList,
                        },
                        {
                            path: 'details:id',
                            name: 'memberFansDetails',
                            component: MemberFansDetails,
                        }
                    ]
                },
                // {
                //     // 借用
                //     path: 'users',
                //     // component: DataMemberUsers
                // },
                // {
                //     // 借用
                //     path: 'fans',
                //     // component: DataMemberFans
                // },
                {
                    path: 'group',
                    component: MemberGroup,
                    redirect: '/member/group/list',
                    children: [
                        {
                            path: 'list',
                            name: 'memberGroupList',
                            component: MemberGroupList,
                        },
                        {
                            path: 'details:id',
                            name: 'memberGroupDetails',
                            component: MemberGroupDetails,
                        }
                    ]
                },
                {
                    path: 'filter',
                    component: MemberFilter,
                    children: [
                        {
                            path: '/',
                            name: 'memberFilterList',
                            component: MemberFilterList,
                        },
                        {
                            path: 'create',
                            name: 'memberFilterCreate',
                            component: MemberFilterCreate,
                        }
                    ]
                },
                {
                    path: 'push',
                    component: MemberPush,
                    children: [
                        {
                            path: '/',
                            name: 'memberPushCreate',
                            component: MemberPushCreate,
                        }
                    ]
                },
                {
                    path: 'weixin',
                    component: MemberWeixin,
                    children: [
                        {
                            path: '/',
                            name: 'memberWeixinSend',
                            component: MemberWeixinSend,
                        }
                    ]
                },
                {
                    path: 'journey',
                    component: MemberJourney,
                    children: [
                        {
                            path: '/',
                            name: 'memberJourneyManage',
                            component: MemberJourneyManage,
                        }
                    ]
                }
            ]
        },{
            path: '/o2o',
            component: O2o,
            redirect: '/o2o/coupon',
            children: [
                {
                    path: 'coupon',
                    component: O2oCoupon,
                    children: [
                        {
                            path: '/',
                            name: 'o2oCouponList',
                            component: O2oCouponList,
                        },
                        {
                            path: 'create',
                            name: 'o2oCouponCreate',
                            component: O2oCouponCreate,
                        }
                    ]
                }
            ]
        },{
            path: '/store',
            component: Store,
            redirect: '/store/product',
            children: [
                {
                    path: 'product',
                    component: StoreProduct,
                    children: [
                        {
                            path: '/',
                            name: 'storeProductList',
                            component: StoreProductList,
                        },
                        {
                            path: 'create',
                            name: 'storeProductCreate',
                            component: StoreProductCreate,
                        }
                    ]
                },
                {
                    path: 'order',
                    component: StoreOrder,
                    children: [
                        {
                            path: '/',
                            name: 'storeOrderList',
                            component: StoreOrderList,
                        }
                    ]
                }
            ]
        },{
            path: '/personal',
            component: Personal,
            redirect: '/personal/coupon',
            children: [
                {
                    path: 'coupon',
                    component: PersonalCoupone,
                    children: [
                        {
                            path: '/',
                            name: 'personalCouponeList',
                            component: PersonalCouponeList,
                        }
                    ]
                }
            ]
        }
    ]
  })

  /**
   * 路由更改前
   * @param  {[type]} (to, from, next) to去的页面信息from目标页面信息next执行之后的程序
   *
   * 路由名称为user、orders、product不跳转页面
   */
  router.beforeEach((to, from, next) => {
      switch (to.name) {
          case null:
              next({name: 'home'});
              break;
          default:
              next();
              break;
      }
  });

  new Vue(Vue.util.extend({ router }, App)).$mount("#app")
}
