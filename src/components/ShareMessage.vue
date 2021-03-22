<template>
  <div id="shareMessage" >
    <p class="shareMessage-title">
      シェア
    </p>
    <textarea class="shareMessage_textarea textarea" v-model="shareText">
    </textarea>
    <div class="shareMessage_button">
      <button class="button click" @click="storeShare">シェアする</button>
    </div>
  </div>
</template>

<script>
import axios from "axios"
export default {
  data(){
    return{
      shareText: "",
    }
  },
  props:["userId"],
  methods:{
    async storeShare(){
      console.log(this.userId)
      const shareData = {
        share : this.shareText,
        user_id : this.userId
      }
      await axios.post("https://gentle-citadel-82436.herokuapp.com/api/shares" ,shareData)
      await axios.get("https://gentle-citadel-82436.herokuapp.com/api/shares");
      return this.shareText = "";
    },
  }
}
</script>

<style>
#shareMessage{
  width: 100%;
  padding: 0 20px;
}
#shareMessage *{
  margin: 5px 0;
}
.shareMessage_textarea{
  width: 90%;
  height: 130px;
}
.textarea{
  border-radius: 5px;
  border: solid 1px rgba(250, 250, 250, 0.7);
  background-color:#15202b;
  resize: none;
}
.shareMessage_button{
  text-align: right;
}

</style>