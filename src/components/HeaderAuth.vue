<template>
  <div id="header">
    <div class="header-title title click" @click="toLogin">
      <img src="../assets/logo.png">
    </div>
    <div class="header-contents">
      <p class="header-contents-signup click" @click="toSignup">
        新規登録
      </p>
      <p class="header-contents-login click" @click="toLogin">
        ログイン
      </p>
    </div>
  </div>
</template>

<script>
export default {
  methods:{
    toSignup(){
      this.$router.push({name:'Signup'})
    },
    toLogin(){
      this.$router.push({name:'Login'})
    },
  }
  
}
</script>

<style>
#header{
  display: flex;
  justify-content: space-between;
  line-height: 50px;
  padding: 10px 30px;
}
.header-title{
  width: 100px;
}
.header-contents{
  display: flex;
}
.header-contents-signup{
  margin-right: 20px;
}
.header-contents-signup,.header-contents-login{
  font-size: 15px;
}
</style>