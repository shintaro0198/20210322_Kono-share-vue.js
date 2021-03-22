<template>
  <div id="sideNavi">
    <div class="sideNavi-title title click" @click="toHome">
      <img src="../assets/logo.png">
    </div>
    <div class="sideNavi-content click" @click="toHome">
      <div class="sideNavi_img">
        <img src="../assets/home.png">
      </div>
      <p class="sideNavi-content-title" >ホーム</p>
    </div>
    <div class="sideNavi-content click" @click="toProfile">
      <div class="sideNavi_img">
        <img src="../assets/profile.png">
      </div>
      <p class="sideNavi-content-title">プロフィール</p>
    </div>
    <div class="sideNavi-content click" @click="toLogin">
      <div class="sideNavi_img">
        <img src="../assets/logout.png">
      </div>
      <p class="sideNavi-content-title" >ログアウト</p>
    </div>
  </div>
</template>

<script>
import axios from "axios"
export default {
  methods:{
    toHome(){
      this.$router.push({name:"Home"});
    },
    toProfile(){
      this.$router.push({name:"Profile"})
    },
    async logout(){
      await axios.post("https://gentle-citadel-82436.herokuapp.com/api/logout")
    },
    toLogin(){
      this.logout()
      this.$router.push({
        name:"Login"
      })
    }
  }
}
</script>

<style>
#sideNavi{
  padding: 20px;
  width: 100%
}
.sideNavi-title{
  width: 90px;
  margin-bottom: 20px;
}
.sideNavi-content{
  display: flex;
  line-height: 20px;
  margin: 15px 0;
}
.sideNavi-content-title{
  font-size: 13px;
  font-weight: 600;
  margin: 0 15px;
}
.sideNavi_img{
  width: 20px;
  height: 20px;
}
</style>