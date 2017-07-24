<style lang="scss">
.personal-list-item{
    position: relative;
    overflow: hidden;
    background-color: #ffffff;
    box-shadow: 3px 2px 3px #cccccc;
    border-radius: 3px;
    &-head{
        padding: 15px 16px;
        font-size: 16px;
        font-weight: bold;
        border: 1px dashed #cccccc;
    }
    &-ct{
        padding: 8px 16px;
        border: 1px dashed #cccccc;
        border-top: none;
        .details{
            .title{
                padding: 10px 0;
                line-height: 2.5em;
                font-weight: bold;
                font-size: 14px;
            }
            .lict{
                height: 60px;
                overflow: hidden;
            }
            .li{
                font-size: 12px;
                line-height: 20px;
            }
            .time{
                margin-top: 10px;
                line-height: 2em;
                font-size: 12px;
                color: #888888;
            }
        }
    }
    &-foot{
        padding: 8px 16px;
        background-color: #ffffff;
        text-align: center;
        color: #ffffff;
        .result{
            font-size: 14px;
            font-weight: bold;
            line-height: 2em;
        }
    }
    &-actions{
        position: absolute;
        top: -120%;
        left: 0;
        bottom: 0;
        right: 0;
        background: rgba(0, 0, 0, .4);
        color: #ffffff;
        display: flex;
        align-items: center;
        justify-content: center;
        opacity: 0;
        transition: all .3s ease;
        li{
            margin: 15px 0;
            text-align: center;
        }
        .actbtn{
            width: 100px;
        }
    }
    &:hover{
        .personal-list-item-actions{
            top: 0;
            opacity: 1;
        }
    }
}
</style>
<template>
    <div :class="itemCls">
        <div :class="prefixCls+'-head'">
            {{ datas.name }}
        </div>
        <div :class="prefixCls+'-ct'">
            <div class="details">
                <div class="title">礼券条件：</div>
                <ul class="lict">
                    <li class="li" v-for="ite in datas.conditions ">{{ ite }}</li>
                </ul>
                <div class="time">{{ `${datas.createtime} 至 ${datas.lasttime}` }}</div>
            </div>
        </div>
        <div :class="prefixCls+'-foot'" :style="{ background: istotal?'rgb(22, 155, 213)': 'rgb(0, 175, 120)'}">
            <div class="result">
                {{ `${istotal?'剩余':'可用'}：${datas.num}张` }}
            </div>
        </div>

        <div :class="prefixCls+'-actions'">
            <ul>
                <li><Button @click="viewDetails(datas)" class="actbtn" type="primary">查看详情</Button></li>
                <li><Button class="actbtn" type="primary">快速二维码</Button></li>
                <li><Button class="actbtn" >删除</Button></li>
            </ul>
        </div>
    </div>
</template>
<script>
const prefixCls = 'personal-list-item'

export default {
    name: 'memberFilterListItem',
    props: {
        classes: {
            default: ''
        },
        index: {
            type: Number,
            default: 0
        },
        datas: {
            type: Object,
            default() {
                return {}
            }
        },
        istotal: {
            default: false
        },
        viewDetails: {
            default() {
                return function() {}
            }
        }
    },
    data() {
        return {
            prefixCls
        }
    },
    computed: {
        itemCls() {
            return [
                `${prefixCls}`,
                `${this.classes}`
            ]
        }
    },
    methods: {
    }
}
</script>
