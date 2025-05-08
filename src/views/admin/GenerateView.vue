<template>
  <el-container>
    <el-page-header @back="goBack" content="成员管理"/>

    <el-header>
      <div style="font-family: 'Microsoft YaHei',fangsong; font-size: 30px" align="center">成员管理页面</div>
    </el-header>
    <el-main>
      <el-container>
        <el-header>
          <el-button style="float: right">
           添加
          </el-button>
        </el-header>
        <el-main>
          <el-table :data="tableData" border style="width: 100%" align="center">
            <el-table-column prop="id" label="ID" width="50px" align="center"/>
            <el-table-column prop="name" label="姓名" width="100px" align="center"/>
            <el-table-column prop="gender" label="性别" width="80px" align="center"/>
            <el-table-column prop="office" label="职位" width="100px" align="center"/>
            <el-table-column prop="dept" label="部门" width="250px" align="center"/>
            <el-table-column prop="phone" label="电话" width="150px" align="center"/>
            <el-table-column prop="email" label="邮箱" width="200px" align="center"/>
            <el-table-column prop="hobby" label="爱好" width="200px" align="center"/>
            <el-table-column prop="status" label="状态" width="100px" align="center">
              <template v-slot="scope">
                <div v-if="scope.row.status == true">空闲</div>
                <div v-else>忙碌</div>
              </template>
            </el-table-column>
            <el-table-column prop="action" label="操作" width="150px" align="center"/>
          </el-table>
        </el-main>
      </el-container>


    </el-main>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      tableData: require('@/assets/tableTemplate.json'),
    }
  },

  methods: {
    goBack() {
      this.$router.back();
    },
  }
}
</script>
