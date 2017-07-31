<style lang="scss">
.personal-list-item{
    position: relative;
    overflow: hidden;
    @include box-shadow(1px 1px 5px $shadow);
    &-head{
        padding: 15px 16px;
        color: $white;
        font-size: $f-h4;
        font-weight: bold;
        @include background-image($orange $orange-hover);
    }
    &-ct{
        padding: 8px 16px;
        // border: 1px dashed #cccccc;
        background-color: $white;
        .details{
            .title{
                padding: 10px 0;
                line-height: 2.5em;
                font-weight: bold;
                font-size: $f-h5;
            }
            .lict{
                height: 60px;
                overflow: hidden;
            }
            .li{
                font-size: $f-h6;
                line-height: 20px;
            }
            .time{
                margin-top: 10px;
                line-height: 2em;
                font-size: $f-h6;
                color: #888888;
            }
        }
    }
    &-foot{
        padding: 8px 16px;
        background-color: $white;
        border-top: 1px dashed $border-default;
        .result{
            font-size: $f-h5;
            font-weight: bold;
            line-height: 2em;
            &_num{
                color: $main;
            }
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
    &.type2{
        .personal-list-item-head{
            @include background-image($purple $purple-hover);
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
        <div :class="prefixCls+'-foot'">
            <div class="result">
                {{ `${istotal?'剩余':'可用'}：` }}
                <span class="result_num">{{ datas.num }}张</span>
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
                `${this.classes}`,
                this.istotal? ``: 'type2'
            ]
        }
    },
    methods: {
    }
}
</script>
