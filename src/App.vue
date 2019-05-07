<template>
  <div id="login" >
    <div id="abc" v-if="showLogin">
    <form>
      <label for="username">用户名</label>
      <input type="text" v-model.trim="loginData.username" name="username">
      <br>
      <label for="password">密     码</label>
      <input type="text" v-model.trim="loginData.password" name="password">
      <br>
      <input type="button" value="登录" @click="doLogin">
    </form>

  </div>
  <router-view/>
  </div>
 
</template>

<script>
import utils from "./utils/utils.js";
import router from "./router/index.js";
import HelloWorld from './components/HelloWorld.vue';
import mainmenu from './components/MainMenu.vue';
export default {
 name:'App',
  data() {
    return {
      showLogin:true,
      loginData: {
        username: "",
        password: ""
      }
    };
  },
  methods: {
    
    doLogin() {
      let success = response => {
         
        alert(response.data.msg);
        if(response.data.code==2){
          this.$router.push({path:'/mainmenu'});
          this.showLogin=false;
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


