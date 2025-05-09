<!--管理员主页面-->
<template>
  <el-container>
    <el-header>
      <el-image :src="logo" class="img-logo" />
    </el-header>
    <el-container>
      <el-aside width="200px">
        <el-menu @select="handleMenuClick">
          <el-menu-item index="memberView">成员信息</el-menu-item>
          <el-menu-item index="manageView">成员管理</el-menu-item>
          <!-- 👉 你可以继续添加页面组件入口 -->
          <!-- <el-menu-item index="UserView">用户管理</el-menu-item> -->
        </el-menu>
      </el-aside>
      
      <el-main>
        <!-- 动态组件渲染 -->
        <component :is="currentView" />
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import ManageView from '@/views/admin/ManageView.vue'
import MemberView from "@/views/member/MemberView.vue";
// import UserView from '@/views/admin/UserView.vue'  // 后续你可以添加更多组件

export default {
  components: {
    manageView: ManageView,
    memberView: MemberView,
    // UserView
  },
  data() {
    return {
      logo: require('@/assets/logo.jpg'),
      currentView: 'manageView'  // 默认显示的组件名称（和组件名一致）
    };
  },
  methods: {
    handleMenuClick(index) {
      this.currentView = index
    }
  }
}
</script>

<style>
.img-logo {
  width: 200px;
  height: auto;
}
</style>