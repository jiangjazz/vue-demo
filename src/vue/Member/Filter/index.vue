<style lang="scss">
    .member-filter{
        .u-breadcrumb{
            margin-bottom: 10px;
            padding: 10px 20px;
            background-color: rgb(242, 242, 242);
            border-bottom: 1px solid #cccccc;
        }
    }
</style>
<template>
    <div class="member-filter">
        <div class="member-content">
            <router-view></router-view>
        </div>
    </div>
</template>
<script>
export default {
    name: 'memberFilter',
    components: {
    },
    data() {
        return {
        }
    }
}
</script>
