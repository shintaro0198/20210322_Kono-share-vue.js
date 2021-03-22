<template>
  <div id="detail">
    <div class="flex">
      <div class="home-left">
        <SideNavi></SideNavi>
        <ShareMessage></ShareMessage>
      </div>
      <div class="home-right">
        <p class="home-right-title">ホーム</p>
        <div class="message">
        <Message :shareContent="shareOne" :open="show" :userName="user_name"></Message>
        </div>
        <p class="home-right-title comment">コメント</p>
        <textarea class="home-right_textarea textarea"></textarea>
        <div class="home-right_button">
        <button class="button">コメント</button>
        <p @click="bomb">dcscbd</p>
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
      shareOne:"",
      show:true,
    }
  },
  components:{
    SideNavi,
    ShareMessage,
    Message,
  },
  props:["id","user_name"],
  async created(){
    console.log(this.id)
    this.show = true;
    await this.getShare(this.id);
  },
  methods:{
    bomb(){
      console.log(this.id)
      console.log(this.user_name)
    },
    async getShare(id){
      const share = await axios.get("https://gentle-citadel-82436.herokuapp.com/api/shares/"+id);
      console.log(share)
      this.shareOne= share.data.data.share
      console.log(this.show)
    },
    
  },
}

</script>

<style>
.fuge{
  font-size: 30px;
  background-color: red;
}
#detail{
  font-size: 13px;
  font-weight: 600;
}
.home-right_textarea{
  width: 95%;
}
.home-right-title{
  border: solid 1px rgba(250, 250, 250, 0.7);
  padding: 10px 10px;
  color: rgba(250, 250, 250, 0.8);
}
.home-right_textarea,.home-right p{
  margin-bottom: 10px;
}
.home-right_button{
  text-align: right;
}
</style>