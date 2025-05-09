<template>
  <el-container>
    <!--    <el-page-header @back="goBack" content="成员管理"/>-->
    
    <el-header>
      <div style="font-family: 'Microsoft YaHei',fangsong; font-size: 30px" align="center">成员管理页面</div>
    </el-header>
    <el-main>
      <el-container>
        <el-header>
          <el-button style="float: right" @click="add" type="primary">添加</el-button>
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
            <el-table-column prop="hobby" label="爱好" width="250px" align="center"/>
            <el-table-column prop="status" label="状态" width="100px" align="center">
              <template v-slot="scope">
                <div v-if="scope.row.status == true">空闲</div>
                <div v-else>忙碌</div>
              </template>
            </el-table-column>
            <el-table-column label="操作" width="150px" align="center">
              <template v-slot="scope">
                <el-button type="text" size="medium" @click="edit(scope.row)">编辑</el-button>
                <el-button type="text" size="medium" style="color: red">删除</el-button>
              </template>
            </el-table-column>
          </el-table>
        </el-main>
      </el-container>
    
    
    </el-main>
    
    <!-- 隐藏的 Form -->
    <el-dialog title="添加成员" :visible.sync="dialogVisible" width="1000px">
      <el-form :model="form" :rules="rules" ref="form" label-width="80px">
        <el-form-item label="ID" prop="id">
          <el-input v-model="form.id" :disabled="true" class="form"/>
        </el-form-item>
        
        <el-form-item label="姓名" prop="name">
          <el-input v-model="form.name" class="form"/>
        </el-form-item>
        
        <el-form-item label="性别" prop="gender">
          <el-select v-model="form.gender" placeholder="请选择性别" class="form">
            <el-option label="男" value="男"></el-option>
            <el-option label="女" value="女"></el-option>
          </el-select>
        </el-form-item>
        
        <el-form-item label="职位" prop="office">
          <el-input v-model="form.office" class="form"/>
        </el-form-item>
        
        <el-form-item label="部门" prop="dept">
          <el-input v-model="form.dept" class="form"/>
        </el-form-item>
        
        <el-form-item label="电话" prop="phone">
          <el-input v-model="form.phone" class="form">
            <template slot="prepend">+86</template>
          </el-input>
        </el-form-item>
        
        <el-form-item label="邮箱" prop="email">
          <el-input v-model="form.email" class="form"/>
        </el-form-item>
        
        <el-form-item label="爱好" prop="hobby">
          <el-input v-model="form.hobby" class="form"/>
        </el-form-item>
        
        <el-form-item label="状态" prop="status">
          <el-switch v-model="form.status" active-text="空闲" inactive-text="忙碌"/>
        </el-form-item>
      
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取消</el-button>
        <el-button type="primary" @click="submitForm">确认</el-button>
      </div>
    </el-dialog>
  </el-container>

</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      isEdit: false,
      tableData: [],
      dialogVisible: false,
      form: {
        id: '',
        name: '',
        gender: '',
        office: '',
        dept: '',
        phone: '',
        email: '',
        hobby: '',
        status: false,
      },
      rules:{
        name:[{required:true, message:"姓名不能为空", trigger: 'blur'}],
        gender:[{required:true, message:"性别不能为空", trigger: 'change'}],
        office:[{required:true, message:"职位不能为空", trigger: 'blur'}],
        dept:[{required:true, message:"部门不能为空", trigger: 'blur'}],
      }
    }
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    add() {
      this.isEdit = false;
      this.resetForm();
      this.dialogVisible = true;
    },
    submitForm() {
      if (this.isEdit) {
        this.$refs.form.validate((valid)=>{
          if (valid){
            console.log('提交表单内容：', this.form);
            this.dialogVisible = false; // ✅ 只有校验通过才关闭
            axios.put("/api/admin/members", this.form).then(()=>{
              this.fetchData();
            })
          }else {
            console.log('❌ 表单校验失败，未提交');
            return false;
          }
        })
      }
      this.$refs.form.validate((valid) => {
        if (valid) {
          console.log('提交表单内容：', this.form);
          this.dialogVisible = false; // ✅ 只有校验通过才关闭
          axios.post('/api/admin/members',this.form).then(()=>{
            this.fetchData();
          })
        } else {
          console.log('❌ 表单校验失败，未提交');
          return false;
        }
      });
    },
    edit(row) {
      this.isEdit = true;
      this.form = JSON.parse(JSON.stringify(row));
      this.dialogVisible = true;
    },
    fetchData() {
      axios.get('/api/admin/members').then(
        (response) => {
          this.tableData = response.data.data;
        }
      )
    },
    resetForm(){
      this.form={
        id: '',
        name: '',
        gender: '',
        office: '',
        dept: '',
        phone: '',
        email: '',
        hobby: '',
        status: false,
      }
    }
  }
}
</script>

<style>
.form {
  width: 80%;
}
</style>