<!--管理员主页面-->
<template>
  <el-container>
    <el-header>
      <el-container>
        <el-aside>
          <el-image :src="logo"></el-image>
        </el-aside>
        <el-main>
          <el-menu mode="horizontal">
            <el-menu-item index="1" @click="$router.push('/admin/member')">成员管理</el-menu-item>
          </el-menu>
        </el-main>
      </el-container>
    </el-header>


    <!--主展示区-->
    <el-main>main</el-main>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      logo: require('@/assets/logo.jpg')
    }
  }
}
</script>