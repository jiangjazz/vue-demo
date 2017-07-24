<style lang="scss">
    .u-breadcrumb{
        .item{
            display: inline-block;
            margin: 0 5px;
            vertical-align: middle;
            font-size: 16px;
        }
        a{
            color: #495060;
            &:hover{
                color: #2d8cf0;
            }
        }
        .separator{
            color: #888888;
        }
    }
</style>
<template>
    <router-view></router-view>
</template>
<script>

    export default {
        name: 'personal'
    }
</script>
