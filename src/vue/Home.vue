<style lang="scss" scoped>
    .home{
        padding: 20px 25px;
    }
    .echart1{
        padding: 10px;
        background: #ffffff;
        border-top: 5px solid rgb(111, 182, 133);
    }
    .echart2{
        padding: 10px;
        background: #ffffff;
        border-top: 5px solid rgb(189, 65, 30);
    }
    .echart3{
        padding: 10px;
        background: #ffffff;
        border-top: 5px solid rgb(59, 126, 206);
    }
    .echart4{
        padding: 10px;
        background: #ffffff;
        border-top: 5px solid rgb(214, 166, 78);
    }
    .echart5{
        padding: 10px;
        background: #ffffff;
        border-top: 5px solid rgb(112, 250, 206);
    }
    .echart6{
        padding: 10px;
        background: #ffffff;
        border-top: 5px solid rgb(239, 113, 152);
        img{
            margin:auto;
            max-width: 100%;
        }
    }
</style>
<template>
    <div class="home">

        <div class="f-cb" style="paddingBottom: 10px">
            <Button :class="'f-fr'" type="ghost" size="small" icon="android-calendar">昨天</Button>
        </div>

        <Row style="paddingBottom: 30px">
            <Col span="1">&nbsp;</Col>
            <Col span="5">
                <img :src="home_1" height="78" alt="">
            </Col>
            <Col span="5" class="f-cb">
                <img class="f-fr" :src="home_2" height="78" alt="">
            </Col>
            <Col span="2">&nbsp;</Col>
            <Col span="5">
                <img :src="home_3" height="78" alt="">
            </Col>
            <Col span="5" class="f-cb">
                <img class="f-fr" :src="home_4" height="78" alt="">
            </Col>
        </Row>

        <Row style="paddingBottom: 30px">
            <Col span="1">&nbsp;</Col>
            <Col class="echart1" span="10" >
                <Echart :options="echartsOpts[0]">
                </Echart>
            </Col>
            <Col span="2">&nbsp;</Col>
            <Col class="echart2" span="10">
                <Echart :options="echartsOpts[1]">
                </Echart>
            </Col>
        </Row>

        <Row style="paddingBottom: 30px">
            <Col span="1">&nbsp;</Col>
            <Col class="echart3" span="10" >
                <Echart :options="echartsOpts[2]">
                </Echart>
            </Col>
            <Col span="2">&nbsp;</Col>
            <Col class="echart4" span="10">
                <Echart :options="echartsOpts[3]">
                </Echart>
            </Col>
        </Row>

        <Row style="paddingBottom: 30px">
            <Col span="1">&nbsp;</Col>
            <Col class="echart5" span="10" >
                <Echart :options="echartsOpts[4]">
                </Echart>
            </Col>
            <Col span="2">&nbsp;</Col>
            <Col class="echart6" span="10">
                <img :src="home_member" alt="" height="400" />
            </Col>
        </Row>

    </div>
</template>

<script>
import home_1 from '@/assets/home/home_1.png'
import home_2 from '@/assets/home/home_2.png'
import home_3 from '@/assets/home/home_3.png'
import home_4 from '@/assets/home/home_4.png'
import home_member from '@/assets/home/home_member.png'

import Echart from '@/components/Echarts.vue'

import datas from '@/datas/home.js'

export default {
    replace: false,
    name: 'home',
    components: {
        Echart
    },
    data() {
        return {
            /**
            * 这里都是图片
            */
            home_1,
            home_2,
            home_3,
            home_4,
            home_member,

            echartsOpts: datas.echartsOpts
        }
    },
    mounted() {
        console.log(datas)
    }
}
</script>
