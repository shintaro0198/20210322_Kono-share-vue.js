<template>
  <div id="profile">
    <div class="flex">
      <div class="home-left">
        <SideNavi></SideNavi>
        <ShareMessage></ShareMessage>
      </div>
      <div class="home-right">
        <p class="home-right-title">プロフィール</p>
        <div class="message">
        <Message :shareData="shareList" :userName="user_name" :go="show"></Message>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios"
import SideNavi from "../components/SideNavi"
import ShareMessage from "../components/ShareMessage"
import Message from "../components/Message"
export default {
  data(){
    return {
      shareList:"",
      show:false
    }
  },
  props:["user_id","user_name"],
  components:{
    SideNavi,
    ShareMessage,
    Message
  },
  methods:{
    async getShareForProfile(){
      console.log(this.user_id)
      const shareForProfile = await axios.get("https://gentle-citadel-82436.herokuapp.com/api/shares")
      this.shareList=shareForProfile.data.data
      this.show=true
      console.log(this.show)
    },
  },
  async created(){
    console.log(this.user_id)
    await this.getShareForProfile()
  }
}
</script>

<style>

</style>