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
            font-size: $f-h1;
            font-weight: bold;
            vertical-align: middle;
            .ivu-btn{
                margin-bottom: 4px;
            }
        }
        .user_desc{
            vertical-align: middle;
            float: right;
            line-height: $headerHeight;
            color: $white;
            padding: 0 20px;
            font-size: $f-h5;
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
      <div class="user_desc">
          Good morning, <b>Vincent Li</b>
          <i-button type="text" >
              <Icon type="chevron-down" color="#ffffff"></Icon>
          </i-button>

      </div>
  </div>
</template>

<script>

export default {
  props: ['toggleFN'],
  data() {
    return {
    }
  }
}
</script>
