<template>
  <div id="home">
    <div class="flex">
      <div class="home-left">
        <SideNavi></SideNavi>
        <ShareMessage :userId="user_id" ></ShareMessage>
      </div>
      <div class="home-right">
        <p class="home-right-title">ホーム</p>
        <div class="message">
        <Message :shareData="shareList" :userName="user_name"></Message>
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
      shareList:[]
    };
  },
  async created(){
      await this.getShares()
  },
  props:["user_id","user_name"],
  methods:{
    fire(){
      console.log(this.user_id)
    },
   
    async getShares(){
      const share =await axios.get("https://gentle-citadel-82436.herokuapp.com/api/shares")
      this.shareList =share.data.data
    },
  },
  components:{
    SideNavi,
    ShareMessage,
    Message,
  }
}
</script>

<style>
.flex{
  width: 100%;
  display:flex ;
  justify-content: space-between;
}
.home-left{
  width: 25%;
}
.home-right{
  width: 70%;
}

</style>
