<style lang="scss">
    .member-journey-manage{
        height: 100%;
        overflow: auto;
        iframe{
            width: 100%;
            min-height: 100%;
            height: auto;
        }
    }
</style>
<template>
    <div class="member-journey-manage">
        <iframe src="https://admin.dmacloud.com/login" frameborder="0"  scrolling="auto"></iframe>
    </div>
</template>
<script>
export default {
    name: 'memberJourneyManage',
    components: {
    },
    data() {
        return {
        }
    }
}
</script>
