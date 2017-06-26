<template>
    <div class="login-wrap">
        <el-form ref="ruleForm" label-width="0px">
            <div class="login-btn">
                <el-button type="primary" @click="submitForm('ruleForm')">登录工单</el-button>
            </div>
        </el-form>
    </div>
</template>

<script>
    export default {
        data: function(){
            return {

            }
        },
        methods: {
            submitForm(formName) {
                this.$router.push('/login');
            }
        }
    }
</script>

<style scoped>
    .login-wrap {
        position: relative;
        width:100%;
        height:100%;
        background: #fff;
    }
    .login-btn{
      position: absolute;
      left:50%;
      top:20%;
      text-align: center;
    }
    .login-btn button{
      font-size: 18px;
      width: 120px;
      height: 50px;
    }
</style>
