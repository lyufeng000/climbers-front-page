<template>
    <el-page-header @back="goBack" content="联系我们">
    </el-page-header>
</template>


<script>
export default {
    methods:{
        goBack(){
            this.$router.back();
        }
    }
}
</script>