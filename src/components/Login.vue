<template>

  <div id="login" class="mycontainer">
   
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

<script>
import utils from "@/utils/utils.js";
import router from "@/router/index.js";
import HelloWorld from '@/components/HelloWorld.vue';
export default {
 name:'login',
  data() {
    return {
      loginData: {
        username: "",
        password: "",
       
      },
     
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
          
          console.log(response.data.obj['apiToken']);
          localStorage.setItem('token',response.data.obj['apiToken']);
          localStorage.setItem('userId',response.data.obj['userId']);
        
             console.log("登陆成功之后跳转");
               this.$router.push({
                 path:"/mainmenu"
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


