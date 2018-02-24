<template>
  <div>
    <div style="color:red">这是搜索</div>
    <div>
      <Content :zyChild="Child"></Content>
    </div>
    </div>
</template>
<script>
import Content from '@/view/Search/Content/index'
export default {
  components:{
    Content
  },
  data(){
    return{
      Child:'我是孩子'
    }
  }
}
</script>
<style scoped>

</style>


