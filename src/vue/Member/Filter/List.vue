<style lang="scss">
.member-filter-list{
    .actionsct{
        padding: 10px 20px;
    }
    .list{
        padding: 0 20px;
    }
    .myitem{
        display: inline-block;
        margin: 10px 1%;
        width: 23%;
        vertical-align: middle;
    }
}
</style>
<template>
    <div class="member-filter-list">

        <div class="u-breadcrumb">
            <span class="item active">过滤器</span>
        </div>
        <div class="actionsct f-cb">
            <router-link to="/member/filter/create">
                <Button class="f-fr" type="primary">创建过滤器</Button>
            </router-link>
        </div>

        <div class="list">
            <Myitem :key="itemKeyPrex+index" :datas="item" :index="index" classes="myitem" v-for="(item, index) in items"></Myitem>
        </div>
    </div>
</template>
<script>
import Myitem from './components/Item.vue'

import datas from '@/datas/memberFilter.js'

export default {
    name: 'memberFilterList',
    components: {
        Myitem
    },
    data() {
        return {
            itemKeyPrex: Math.random(),
            items: datas.items
        }
    },
    methods: {
    }
}
</script>
