<template>
  <div id="app">
    <!-- <div>
  <span>这个是App界面</span></div>
 <ul class="navList">
 <li><router-link to="/login">Login</router-link></li>
    </ul>-->
    <router-view v-if="isTouterActive"></router-view>
  </div>
</template>
   
<script>
export default {
  name: "App",
  provide() {
    return {
      reload: this.reload
    };
  },
  data() {
    return {
      isTouterActive: true
    };
  },
  watch: {
    $route(to, from) {
      console.log(to.path);
      console.log(from.path);
    },
    methods: {
      reload() {
        
        this.isTouterActive = true;
        this.$nextTick(function() {
          this.isTouterActive = true;
        });
      }
    }
  }
};
</script>
<style></style>


