<template>
    <div class=" bg-sky-500 lg:relative  w-60 text-white  p-3 sticky top-0 h-screen ">
        <div class="profile_info">
            <img src="@/assets/male_logo.jpg" class="w-2/5 rounded-full m-auto mt-5">
        </div>
        <aside class="p-5 m-auto">
          <ul class="font-bold text-white">
            <li class="p-4 " @click="checkOnPage(1)" :class="{'bg-white text-black':onPage==1}"><router-link to="/managestudent">  Manage Student</router-link></li>
            <li class="p-4" @click="checkOnPage(2)" :class="{'bg-white text-black':onPage==2}"><router-link to="/manageteacher">  Manage Teacher</router-link></li>
            <li class="p-4" @click="checkOnPage(3)" :class="{'bg-white text-black':onPage==3}"><a href="">Student Follow up</a></li>
            <li class="p-4" @click="checkOnPage(4)" :class="{'bg-white text-black':onPage==4}"><a href="">Follow up Histor</a></li>
          </ul>
        </aside>
      </div>
</template>
<script>
  export default{
      data(){
        return{
          onPage:1,
        }
    },
    methods:{
      checkOnPage(data){
        let myOnPage = sessionStorage.getItem('onPage')
        if(myOnPage > 0){
          sessionStorage.setItem("onPage", data)
          this.onPage = sessionStorage.getItem("onPage")
        }else{
          sessionStorage.setItem('onPage', data)
        }
      }
    },
    mounted(){
      let myOnPage = sessionStorage.getItem('onPage')
      if(myOnPage){
        this.checkOnPage(myOnPage)
      }else{
        this.checkOnPage(1)
      }
    }
  }
</script>
