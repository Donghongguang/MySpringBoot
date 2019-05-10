<template>
  <div id="login" class="mycontainer">
    <div id="mainmenu">
      <span>welcome to the vue World</span>
      <input type="button" value="跳转" @click="changeTo">
      <input type="button" value="返回" @click="backtoApp">
      <input type="button" value="退出登录" @click="exitLogin">
    </div>
    <div id="usertable">
      <input type="button" @click="addUser" value="增加">
      <input type="text"  placeholder="请输入要查询的内容" v-model.trim="selectOption"/>
      <input type="button" @click="selectUser" value="查询"/>
      <table id="userInfoTable">
        <tr>
          <td>数据序号</td>
          <td>用户名&emsp;</td>
          <td>手机号码</td>
          <td>&emsp;操作&emsp;</td>
        </tr>
        <tbody>
          <tr v-for="(item,index) in list" :key="item.userId">
            <td>{{index+1}}</td>
            <td>{{item.username}}</td>
            <td>{{item.telephone}}</td>
            <td>
              <input type="button" @click="editUser(index)" value="编辑">
              <input type="button" @click="deleteUser(index)" value="删除"/>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div id="editUserDiv" v-if="showEditUserDiv" :data="editList">
      <label for="editUsername">用户名：</label>
      <input type="text" v-model="editList.username" id="editUsername">
      <br>
      <label for="editTelephone">手机号码：</label>
      <input type="text" v-model="editList.telephone" id="editTelephone">
      <br>
      <input type="button" @click="closeDiv" value="关闭">
      <input type="button" @click="modify(editIndex)" value="提交">
    </div>
    <div id="editUserDiv" v-if="showAddUserDiv" :data="addList">
      <label for="editUsername">用户名：</label>
      <input type="text" v-model="addList.username" id="addUsername">
      <br>
      <label for="editTelephone">手机号码：</label>
      <input type="text" v-model="addList.telephone" id="addTelephone">
      <br>
      <input type="button" @click="closeAddDiv" value="关闭">
      <input type="button" @click="addUserInfo" value="提交">
    </div>
  </div>
</template>

<script>
import utils from "@/utils/utils.js";
import App from "@/App"

export default {
  inject: ['reload'],
  name: "MainMenu",
  data() {
    return {
      list: [],
      editList: [],
      editIndex: "",
      showEditUserDiv: false,
      showAddUserDiv: false,
      addList: {
        username: "",
        telephone: ""
      },
      user: {
        userId: "",
        username:""
      },
      selectOption:""
    };
  },
  created() {
    this.getData();
  },
  methods: {
    changeTo() {
      this.$router.push({ path: "/helloWorld" });
    },
    backtoApp() {
      this.$router.push({ path: "/goback" });
    },
    editUser(index) {
      this.editIndex = index;
      this.editList = this.list[index];
      this.showEditUserDiv = true;
    
    },
    closeDiv() {
      this.showEditUserDiv = false;
    },
    modify(editIndex) {
      console.log(editIndex);
      this.editList = this.list[editIndex];

      let success = response => {
        alert(response.data.msg);

        if (response.data.code == 3) {
          this.showEditUserDiv = false;
        }
      };
      utils.axiosMethod({
        method: "POST",
        url: "/user/editUser",
        data: this.editList,
        callback: success
      });
    },
    addUser() {
      this.showAddUserDiv = true;
    },
    closeAddDiv() {
      this.showAddUserDiv = false;
    },
    addUserInfo() {
      console.log(this.addList);
      let success = response => {
        alert(response.data.msg);
        if (response.data.code == 0) {
          this.showAddUserDiv = false;
          // this.reload();
        }
      };
      utils.axiosMethod({
        method: "POST",
        url: "/user/addUser",
        data: this.addList,
        callback: success
      });
    },
    getData() {
      let success = response => {
        alert(response.data.msg);
        this.list = response.data.list;
      };
      utils.axiosMethod({
        method: "POST",
        url: "/user/getuserList",
        callback: success
      });
    },
    exitLogin() {
      console.log("退出登录");

      console.log(typeof localStorage.getItem("userId"));

      this.user["userId"] = localStorage.getItem("userId");
      let success = response => {
        alert(response.data.msg);
        if (response.data.code == 0) {
       
          this.$router.push({
            path: "/login"
          });
          localStorage.removeItem("token");
          localStorage.removeItem("userId");
        }
      };
      utils.axiosMethod({
        method: "POST",
        url: "/user/exitLogin",
        data: this.user,
        callback: success
      });
    },
    selectUser(){
      console.log(this.selectOption)
      this.user['username']=this.selectOption;
      let success=response =>{
        alert(response.data.msg);
       
          this.list=response.data.list;
        
      }
       utils.axiosMethod({
         method:"POST",
         url:"/user/searchLike",
         data:this.user,
         callback:success
       })
    },
    deleteUser(index){
      console.log(this.list[index])
      let success=response=>{
         
        alert(response.data.msg);
        if(response.data.code==0){
          console.log("aaaaaaaaaaaaaaaaa")
          this.reload()
        }
       
      }
        utils.axiosMethod({
          method:'POST',
          url:"/user/deleteUser",
          data:this.list[index],
          callback:success
        })
    }
  }
};
</script>
