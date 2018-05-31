<template>
  <div>
      <button @click="iclick">点一下就传</button>
  </div>
</template>
<script>
export default {
    data(){
        return{

        }
    },  
    methods:{
        iclick(){
            this.$emit('ievent','我是子元素传过来的')
            alert("我是子组件传递过来的！")
        }
    }
}
</script>
<style scoped>

</style>

