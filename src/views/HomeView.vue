<template>
    <el-container>
        <el-header>
            <el-container>
                <el-header>
                  <el-container>
                      <el-aside width="200px">
                          <el-image :src = logo />
                      </el-aside>
                        <el-main>
                            <el-menu mode="horizontal">
                                <el-menu-item index="1" class = "menu-item" @click="$router.push('/about')">关于我们</el-menu-item>
                                <el-menu-item index="2" class = "menu-item" @click="$router.push('/member')">成员信息</el-menu-item>
                                <el-menu-item index="3" class = "menu-item" @click="$router.push('/contact')">联系我们</el-menu-item>
                                <el-button type="primary" size="medium" icon="el-icon-user" class="log" @click="$router.push('/logIn')">登录</el-button>
                            </el-menu>
                        </el-main>
                    </el-container>
                </el-header>
            </el-container>
        </el-header>
        
        
        
        
        
        
        
        
        <!--主展示区-->
        <el-main>
            <div class="block">
                
                <el-carousel height="300px" class="my-carousel">
                    <el-carousel-item v-for="item in 4" :key="item" >
                        <h3 class="small">{{ item }}</h3>
                    </el-carousel-item>
                </el-carousel>
            </div>
        </el-main>
    </el-container>
</template>

<script>
    export default {
        data() {
            return {
                logo : require('@/assets/logo.jpg')
            }
        }
    }

</script>




<style scoped>
.menu-item {
    margin-right: 20px;
}

.log{
    float:right;
}

.my-carousel {
    width: 1000px;
    margin: 0 auto;
    height: 300px;
}

 .el-carousel__item h3 {
     color: #475669;
     font-size: 14px;
     opacity: 0.75;
     line-height: 150px;
     margin: 0;
 }

.el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
}

</style>