<template>
  <div id="signup">
    <HeaderAuth></HeaderAuth>
    <div class="login_block">
      <h2 class="login_block-title">
        新規登録
      </h2>
      <input type="text" name="userName"  class="input" placeholder="ユーザーネーム" v-model="userName">
      <input type="text" name="profile" class="input" placeholder="プロフィール" v-model="profile">
      <input type="email" name="email" class="input" placeholder="メールアドレス" v-model="email">
      <input type="password" name="password"  class="input" placeholder="パスワード" v-model="password">
      <button @click="signup" class="button">新規登録</button>
    </div>
  </div>
</template>

<script>
import axios from "axios"
import HeaderAuth from "../components/HeaderAuth"
export default {
  data(){
    return {
      userName: "",
      profile: "",
      email: "",
      password: "",
    }
  },
  methods:{
    async signup(){
    const sendUserData = {
      name:this.userName,
      profile:this.profile,
      email:this.email,
      password:this.password
    }
    await axios.post("https://gentle-citadel-82436.herokuapp.com/api/register" ,sendUserData);
    return this.$router.push({ name:"Home"});
  },
  },
  components:{
    HeaderAuth
  }
}
</script>

<style>
.login_block input{
  color: black;
}
</style>