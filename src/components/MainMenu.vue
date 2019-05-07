<template>
    <div id="mainmenu" v-if="showmain">
        <span>welcome to the vue World</span>
       
        <input type="button" value="跳转" @click="changeTo" />
    </div>
</template>
<script>

export default {
    name:"MainMenu",
    data(){
        return {
            showmain:true
        };
    },
    methods:{
         changeTo(){
             this.$router.push({path:'/helloWorld'});
             this.showmain=false;
         }
    }
}
</script>
