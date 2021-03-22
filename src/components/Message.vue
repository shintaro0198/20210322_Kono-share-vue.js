<template>
  <div id="message">
    <table  v-if="go">
      <tr>
        <h1>{{userName}}</h1>
        <th>
        <button class="button profile-button">変更する</button>
        <p>{{userName}}</p>
        </th>
      </tr>
    </table>
    <table v-for="(item,index) in shareData" :key="index">
      <tr class="message-table-title">
        <td>{{userName}}</td>
        <th>
          <div class="message_img click" @click="addHeart"><img src="../assets/heart.png"></div>
          <span>{{shareHeart}}</span>
          <div class="message_img click" @click="deleteShare(item.id)"><img src="../assets/cross.png"></div>
          <div class="message_img click" @click="toDetail(item.id)"><img src="../assets/detail.png"></div>
        </th>
      </tr>
      <tr>
        <p>{{item.share}}</p>
      </tr>
    </table>
    <table v-if="open">
      <tr>
        <td>{{userName}}</td>
        <th><div class="message_img click" @click="addHeart"><img src="../assets/heart.png"></div>
          <span>{{shareHeart}}</span>
        <p>{{shareContent}}</p>
        </th>
      </tr>
      <p @click="fire">cdpdsc</p>
    </table>
  </div>
</template>

<script>
import axios from "axios"
export default {
  data(){
    return {
      shareHeart:"0",
    }
  },
  props:["shareData","shareContent","open","userId","userName","go"],
  methods:{
    toDetail(id){
      this.$router.push({name:"Detail", params:{id:id,}});
    },
    
    async getShares(){
      const share =await axios.get("https://gentle-citadel-82436.herokuapp.com/api/shares")
      this.shareList =share.data.data
    },
    fire(){
      console.log(this.userName)
      console.log(this.open)
    },
    addHeart(){
      return this.shareHeart ++;
    },
    async deleteShare(id){
      console.log("おにぎり")
      await axios.delete("https://gentle-citadel-82436.herokuapp.com/api/shares/" +id);
      console.log(id)
      this.getShares();
      
      
    }
  },
}
</script>

<style>
#message{
  width: 100%;
  font-size: 14px;
  font-weight: 600;
}
#message table{
  width: 100%;
  border: solid 1px rgba(250, 250, 250, 0.7);
}
#message tr{
  display: flex;
  align-items: center;
  margin: 5px 10px;
}
#message th *{
  margin: 0 5px;
}
.message-table-title{
  margin: 20px;
}
.message-table-title td{
  font-size: 15px;
}
.message_img{
  display: inline-block;
  width: 15px;
}
</style>