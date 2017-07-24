<style lang="scss">
    .store-order{
        .u-breadcrumb{
            margin-bottom: 10px;
            padding: 10px 20px;
            background-color: rgb(242, 242, 242);
            border-bottom: 1px solid #cccccc;
        }
    }
</style>
<template>
    <div class="store-order">
        <div class="member-content">
            <router-view></router-view>
        </div>
    </div>
</template>
<script>
export default {
    name: 'storeOrder',
    components: {
    },
    data() {
        return {
        }
    }
}
</script>
