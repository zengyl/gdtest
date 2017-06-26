<template>
    <div class="login-wrap">
        <div class="ms-login">
          <!-- <div class="ms-title">工单系统</div> -->
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="0px" class="demo-ruleForm">
                <div class="ms-title-1">工单系统</div>
                <el-form-item prop="username">
                    <el-input v-model="ruleForm.username" placeholder="用户名（企业邮箱前缀）或企业邮箱"></el-input>
                </el-form-item>
                <el-form-item prop="password">
                    <el-input type="password" placeholder="密码" v-model="ruleForm.password" @keyup.enter.native="submitForm('ruleForm')"></el-input>
                </el-form-item>
                <div class="tips">
                  <span ><el-checkbox v-model="ruleForm.checked">记住我</el-checkbox></span>
                  <span style="float:right;color:blue;">忘记密码?</span>
                  <span style="float:right;color:blue;">解锁账号？</span>
                </div>
                <div class="login-btn">
                    <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
                </div>
                <div class="ms-title-2">E袋洗用户管理系统</div>
            </el-form>
        </div>
    </div>
</template>

<script>
    export default {
        data: function(){
            return {
                ruleForm: {
                    username: '',
                    password: '',
                    checked: false,
                },
                rules: {
                    username: [
                        { required: true, message: '请输入用户名', trigger: 'blur' }
                    ],
                    password: [
                        { required: true, message: '请输入密码', trigger: 'blur' }
                    ]
                }
            }
        },
        methods: {
            submitForm(formName) {
                const self = this;
                self.$refs[formName].validate((valid) => {
                    if (valid) {
                      console.log(self.ruleForm.username+'---'+self.ruleForm.password+'---'+self.ruleForm.checked)
                        localStorage.setItem('ms_username',self.ruleForm.username);
                        self.$router.push('/home');
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            }
        }
    }
</script>

<style scoped>
    .login-wrap,.demo-ruleForm{
        position: relative;
        width:100%;
        height:100%;
    }
    .ms-title-1{
        text-align: center;
        font-size:20px;
        color: #000;
        margin-bottom: 30px;
    }
    .ms-title-2 {
      font-size: 16px;
      margin-top: 20px;
      text-align: center;
      color: #000;
    }
    .tips {
      margin-top:12px;
      font-size:14px;
      line-height:30px;
      color:#999;
    }
    .ms-login{
        position: absolute;
        left:50%;
        top:50%;
        width:300px;
        height:300px;
        margin:-150px 0 0 -190px;
        padding:40px;
        border-radius: 5px;
        background: #fff;
    }
    .login-btn{
        margin-top: 20px;
        text-align: center;
    }
    .login-btn button{
        width:20%;
        height:36px;
    }
</style>
