<template>
    <div class="page-wrapper">
        <el-page-header @back="goBack" content="关于我们"></el-page-header>
        
        <div class="login-container">
            <el-card class="login-card">
                <h2 class="title">用户登录</h2>
                <el-form :model="form" :rules="rules" ref="loginForm" label-width="80px">
                    <el-form-item label="用户名" prop="username">
                        <el-input v-model="form.username" prefix-icon="el-icon-user"></el-input>
                    </el-form-item>
                    <el-form-item label="密码" prop="password">
                        <el-input v-model="form.password" prefix-icon="el-icon-lock" show-password></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" :loading="loading" @click="handleLogin" class="custom-button">
                            登录
                        </el-button>
                    </el-form-item>
                </el-form>
            </el-card>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            form: {
                username: '',
                password: ''
            },
            loading: false,
            rules: {
                username: [{required: true, message: '请输入用户名', trigger: 'blur'}],
                password: [{required: true, message: '请输入密码', trigger: 'blur'}]
            }
        };
    },
    methods: {
        handleLogin() {
            this.$refs.loginForm.validate((valid) => {
                if (valid) {
                    this.loading = true;
                    // 发起 POST 请求
                    this.$axios.post('/api/logs', {
                        username: this.form.username,
                        password: this.form.password
                    }).then(response => {
                        this.loading = false;
                        const res = response.data;
                        
                        if (res.code === 1) {
                            const role = res.data.role;
                            this.$message.success('登录成功');
                            
                            // 统一先进入 home 页面（如果你有这个跳转需求）
                            //this.$router.push('/home');
                            
                            // 根据角色进一步跳转
                            if (role == 'admin') {
                                this.$router.push('/admin/home');
                            } else if (role == 'member') {
                                this.$router.push('/member/home');
                            }
                        } else {
                            this.$message.error(res.msg || '登录失败');
                        }
                    }).catch(error => {
                        this.loading = false;
                        this.$message.error('网络错误，请稍后重试');
                        console.error(error);
                    });
                }
            });
        },
        goBack() {
            this.$router.back();
        }
    }
};
</script>

<style scoped>

.login-container {
    margin-top: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.login-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background: #f2f2f2;
}

.login-card {
    width: 400px;
    padding: 30px;
    border-radius: 8px;
}

.title {
    text-align: center;
    margin-bottom: 20px;
}

.login-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background: #f2f2f2;
}

.el-form-item {
    text-align: center; /* 使按钮居中 */
}

.custom-button {
    position: absolute;
    top: 70%;
    left: 50%;
    transform: translate(-95%, -10%);
}

</style>
