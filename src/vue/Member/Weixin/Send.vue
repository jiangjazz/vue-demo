<style lang="scss">
    .member-weixin-send{
        height: 100%;
        overflow: auto;
        iframe{
            height: 1080px;
        }
    }
</style>
<template>
    <div class="member-weixin-send">
        <iframe src="http://dev.qdum.com:9000/" width="100%" scrolling="auto"></iframe>
    </div>
</template>
<script>
export default {
    name: 'memberWeixinSend',
    components: {
    },
    data() {
        return {
        }
    }
}
</script>
