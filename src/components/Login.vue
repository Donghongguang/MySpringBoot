<template>

  <div id="login" class="mycontainer">
    <router-view v-if="isRouterAlive"/>
    <form >
      <div id="abc"  class="logincontainer">
      <label for="username" >用户名:</label>
      <input type="text" v-model.trim="loginData.username" name="username">
      <br>
      <label for="password" >密&emsp;码:</label>
      <input type="text" v-model.trim="loginData.password" name="password">
      <br>
      <input type="button" value="登录" @click="doLogin" class="myloginbtn">
      <input type="reset" value="重置" class="myresetbtn"/>
      </div>
    </form>
 
  </div>
</template>
<style>
.mycontainer{
position: fixed;
top: 50%;
left: 50%;
background-color:white;
height:400px;
width:500px;
};
.logincontainer{
  position: absolute;


}
.myloginbtn{
  margin-left: 55px;
}
.myresetbtn{
  margin-left:82px;
}
</style>
<script>
import utils from "@/utils/utils.js";
import router from "@/router/index.js";
import HelloWorld from '@/components/HelloWorld.vue';
export default {
 name:'login',
 provide(){
return {
    reload:this.reload
}
 },
  data() {
 
    return {
      loginData: {
        username: "",
        password: "",
       
      },
      isRouterAlive:true
    };
  },
  methods: {
       reload() {
      this.isRouterAlive = false
      this.$nextTick(function () {
        this.isRouterAlive = true
      })
    },
    doLogin() {
      let success = response => {
        alert(response.data.msg);
        if(response.data.code==2){
          this.$router.push({
            path:'mainmenu'
           });
         
        }
      }
      utils.axiosMethod({
        method: "POST",
        url: "/user/login",
        data: this.loginData,
        callback: success
      })
    }
  }
};
</script>


