<template>
  <div id="login">
    <HeaderAuth></HeaderAuth>
    <div class="login_block">
      <h2 class="login_block-title">
        ログイン
      </h2>
      <input type="email" name="email" class="input" placeholder="メールアドレス" v-model="email">
      <input type="password" name="password" class="input" placeholder="パスワード" v-model="password">
      <button @click="login()" class="button">ログイン
      </button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import HeaderAuth from '../components/HeaderAuth.vue'
export default {
  data(){
    return {
      email : "",
      password :  "",
      userOne:"",
      userName:"",
    }
  },
  methods:{
    async login(){
      const loginData = {
        email : this.email,
        password : this.password,
      };
      await axios.post("https://gentle-citadel-82436.herokuapp.com/api/login", loginData);
      await this.serchUser();
       console.log(this.userOne)
      await this.$router.push({name:"Home",params:{user_id:this.userOne,user_name:this.userName}})
     
    },
    async serchUser(){
      const userData =await axios.get("https://gentle-citadel-82436.herokuapp.com/api/user")
      console.log(userData)
      const user = userData.data.data
      for (let i =0;i<user.length;i++){
        user[i].email===this.email
        this.userOne = "user"+user[i].id
        this.userName =user[i].name
        console.log(this.userName)
        return console.log(this.userOne)

      }
    }
  },
  components:{
    HeaderAuth
  }
}

</script>

<style>
.login_block *{
  display: block;
  margin: 10px auto;

}
.login_block{
  width: 300px;
  padding: 10px;
  margin: auto;
  background-color: white;
  text-align: center;
  border-radius: 5px;
  margin-top: 5%;
}
.login_block-title{
  color: black;
  margin-bottom: 20px;
}
.input{
  width: 85%;
  border-radius: 7px;
  border: solid 1px black;
  font-size: 15px;
  height: 25px;
}
.button{
  background-color: #4169E1;
  color:#F8F8FF;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 600;
  padding: 7px 13px;
  border: solid 1px black;
  cursor: pointer;
}
#login{
  height: 100%;
  width: 100%;
}
</style>