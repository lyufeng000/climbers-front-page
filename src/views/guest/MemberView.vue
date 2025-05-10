<!--该页面为游客所见-->
<template>
    <el-container>
        <el-header>
            <el-page-header @back="goBack" content="成员信息" />
        </el-header>
        
        <el-main>
            <el-table :data="memberTable" style="width: 100%" align="center">
                <el-table-column prop="name" label="姓名" width="200" align="center"/>
                <el-table-column prop="gender" label="性别" width="100" align="center"/>
                <el-table-column prop="office" label="职位" width="100" align="center"/>
                <el-table-column prop="dept" label="部门" width="250" align="center"/>
                <el-table-column prop="hobby" label="爱好" width="300" align="center"/>
            </el-table>
        </el-main>
    </el-container>
</template>

<script>
import axios from "axios";

export default {
    data() {
        return {
            memberTable: []
        };
    },
    methods: {
        goBack() {
            this.$router.back();
        },
        fetchMember() {
            axios.get("/api/guest/members").then(response => {
                this.memberTable = response.data.data;
            }).catch(error => {
                this.$message.error("成员数据加载失败");
                console.error(error);
            });
        }
    },
    mounted() {
        this.fetchMember();
    }
};
</script>

<style scoped>

</style>
