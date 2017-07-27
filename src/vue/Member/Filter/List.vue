<style lang="scss">
.member-filter-list{
    .actionsct{
        padding: 10px 20px;
    }
    .list{
        padding: 0 10px;
    }
    .myitem{
        display: inline-block;
        width: 25%;
        vertical-align: middle;
        float: left;
        padding: 10px;
    }
}
</style>
<template>
    <div class="member-filter-list">
        <Mybreadcrumb :items="breadcrumbList"></Mybreadcrumb>
        <div class="actionsct f-cb">
            <router-link to="/member/filter/create">
                <Button class="f-fr" type="primary" icon="android-bar">创建过滤器</Button>
            </router-link>
        </div>

        <div class="list f-cb">
            <div class="myitem" v-for="(item, index) in items" :key="itemKeyPrex+index">
                <Myitem :datas="item" :index="index" ></Myitem>
            </div>

        </div>
    </div>
</template>
<script>
import Mybreadcrumb from '@/components/Breadcrumb.vue'
import Myitem from './components/Item.vue'

import datas from '@/datas/memberFilter.js'

export default {
    name: 'memberFilterList',
    components: {
        Mybreadcrumb,
        Myitem
    },
    data() {
        return {
            breadcrumbList: [
                {
                    text: '过滤器'
                }
            ],
            itemKeyPrex: Math.random(),
            items: datas.items
        }
    },
    methods: {
    }
}
</script>
