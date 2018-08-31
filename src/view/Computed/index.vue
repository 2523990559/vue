<template>
  <div>这是计算属性
    <div>{{allName}}</div>
    <div @click="handleClick">检测web storage的浏览器支持情况</div>
    <div class="bg">
        <div :class='"bg"+list' v-for="(list,index) in '123'" :key="index" >
    </div>
    <div ></div>

    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
     startName:'zhang',
     endName:'yang',
     allName:'',
     list:[1,2,3,4,5]
    }
  },
  mounted() {

  },
  computed: {
    fullName:function(){
    this.allName=this.startName+''+this.endName
    }
  },
  methods:{
    handleClick(){
      if(window.localStorage){
        alert('浏览支持localStorage')
      }else{
        alert('浏览暂时不支持localStorage')
      }
    }
  }
  }
</script>
<style scoped>
.bg{
  width: 800px;
  height: 100px;
}
.bg1{
  background:url(./images/bgone.png)no-repeat;
  background-size:100% 100%;
}
.bg2{
  width:74px;
  height:78px;
  background:url(./images/icon2.png)no-repeat;
  background-size:100% 100%;
}
.bg3{
  width:74px;
  height:78px;
  background:url(./images/icon3.png)no-repeat;
  background-size:100% 100%;
}
</style>
