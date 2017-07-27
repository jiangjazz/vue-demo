<style lang="scss">
.list-item{
    position: relative;
    overflow: hidden;
    @include box-shadow(1px 1px 5px $shadow);
    &-head{
        padding: 15px 16px;
        color: $white;
        font-size: $f-h4;
        font-weight: bold;
        @include background-image($purple $purple-hover);
    }
    &-ct{
        padding: 8px 16px;
        background-color: $white;
        .details{
            .title{
                padding: 10px 0;
                line-height: 2.5em;
                font-weight: bold;
                font-size: $f-h5;
                &_target{
                    color: $main;
                }
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
        background-color: #ffffff;
        border-top: 1px dashed #cccccc;
        .result{
            padding: 10px 0;
            font-size: 14px;
            font-weight: bold;
            line-height: 2em;
            &_num{
                color: $main;
            }
        }
        .usetime{
            font-size: 12px;
            color: #888888;
            line-height: 2em;
        }
    }
    &-actions{
        display: none;
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
    // &:hover{
    //     .list-item-actions{
    //         top: 0;
    //         opacity: 1;
    //     }
    // }
}
</style>
<template>
    <div :class="itemCls">
        <div :class="prefixCls+'-head'" :style="headStyle">
            {{ datas.name }}
        </div>
        <div :class="prefixCls+'-ct'">
            <div class="details">
                <div class="title">应用对象：
                    <span class="title_target">{{ datas.target }}</span>
                </div>
                <ul class="lict">
                    <li class="li" v-for="ite in datas.conditions ">{{ ite }}</li>
                </ul>
                <div class="time">创建时间：{{ datas.createtime }}</div>
            </div>
        </div>
        <div :class="prefixCls+'-foot'">
            <div class="result">
                筛选结果：
                <span class="result_num">{{ datas.result }}</span>
            </div>
            <div class="usetime">
                应用时间：{{ datas.usetime }}
            </div>
        </div>

        <div :class="prefixCls+'-actions'">
            <ul>
                <li><Button class="actbtn" type="primary">应用</Button></li>
                <li><Button class="actbtn" type="primary">编辑</Button></li>
                <li><Button class="actbtn" type="primary">智能分组</Button></li>
                <li><Button class="actbtn" type="primary">导出……</Button></li>
                <li><Button class="actbtn" >删除</Button></li>
            </ul>
        </div>
    </div>
</template>
<script>
const prefixCls = 'list-item'

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
        }
    },
    data() {
        return {
            prefixCls,
            color: ['rgb(96, 92, 168)', 'rgb(216, 27, 98)', 'rgb(0, 166, 90)', 'rgb(22, 155, 213)', 'rgb(230, 147, 17)', 'rgb(221, 75, 57)']
        }
    },
    computed: {
        itemCls() {
            return [
                `${prefixCls}`,
                `${this.classes}`
            ]
        },
        headStyle() {
            return {
                // backgroundColor: color[index]
            }
        }
    },
    methods: {
    }
}
</script>
