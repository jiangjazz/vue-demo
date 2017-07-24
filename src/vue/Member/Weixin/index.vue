<style lang="scss">
    .member-weixin{
        height: 100%;
        .member-content{
            height: 100%;
        }
        .u-breadcrumb{
            margin-bottom: 10px;
            padding: 10px 20px;
            background-color: rgb(242, 242, 242);
            border-bottom: 1px solid #cccccc;
        }
    }
</style>
<template>
    <div class="member-weixin">
        <div class="member-content">
            <router-view></router-view>
        </div>
    </div>
</template>
<script>
export default {
    name: 'memberWeixin',
    components: {
    },
    data() {
        return {
        }
    }
}
</script>
