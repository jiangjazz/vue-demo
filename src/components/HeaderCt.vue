<style lang="scss" scoped>
    .m-header{
        height: $headerHeight;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        @include background-image($main $sub, left);
        .logo{
            display: inline-block;
            padding: 0;
            width: $navWidth;
            color: #ffffff;
            line-height: $headerHeight;
            font-size: 24px;
            font-weight: bold;
            vertical-align: middle;
            .ivu-btn{
                margin-bottom: 4px;
            }
        }
        .img_head_1{
            vertical-align: middle;
            float: right;
            line-height: $headerHeight;
            color: $white;
            padding: 0 20px;
            font-size: $f-h4;
        }
    }
</style>
<template>
  <div class="m-header">
      <div class="logo">
          <i-button type="text" @click="toggleFN">
              <Icon type="navicon" size="24" color="#ffffff"></Icon>
          </i-button>
          SCRM
      </div>
      <div class="img_head_1">
          Good morning, <b>Vincent Li</b>
          <i-button type="text" >
              <Icon type="chevron-down" color="#ffffff"></Icon>
          </i-button>

      </div>
      <!-- <img class="img_head_1" :src="img_head_1" height="48" alt=""> -->
  </div>
</template>

<script>
import img_head_1 from '@/assets/head_1.png'

export default {
  props: ['toggleFN'],
  data() {
    return {
      img_head_1
    }
  }
}
</script>
