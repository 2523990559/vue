<template>
  <div>
    <div style="color:red">这是搜索</div>
    <div>
      <Content :zyChild="Child"></Content>
      <!-- 多个插槽也叫具名插槽 -->
      <!-- 具名插槽就是将某个名字的内容插到子组件对应的名字里面去 -->
      <Slottofather style="color:green">
        <!-- 这个div会替换掉子组件里name="one"的slot标签 -->
        <div slot="one">
          <span>one</span>
          <span>第一个</span>
        </div>
        <div>
          <span>此div没有slot</span>
          <!-- 这个div没有名字会替换掉子组件里没有name属性 -->
        </div>
        <div slot="two">
          <span>two</span>
          <span>第二个</span>
        </div>
      </Slottofather>
    </div>

    <!-- 将子组件的值传到父组件中供使用 -->
    <div>
      <slot-child :items="items">
         <template slot-scope="props">
         <span>{{ props.addr }}</span>
         <span>{{ props.cname }}</span>
         <span>{{ props.age }}</span>
       </template>
      </slot-child>
    </div>
    <!-- 将子组件的值传到父组件中去使用不使用props -->
    <div>
        <Child></Child>
    </div>
    <!-- 子组件向父组件传值 -->
    <div>
      <ctoparent @ievent="ievent"></ctoparent>
    </div>
  </div>
</template>
<script>
import Content from "@/view/Search/Content/index";
import Slottofather from "@/view/Search/Slot/index";
import slotChild from "@/view/Search/SlotChild/index";
import Child from "@/view/Search/Child/index";
import Ctoparent from "@/view/Search/Ctoparent/index";
export default {
  components: {
    Content,
    Slottofather,
    slotChild,
    Child,
    Ctoparent
  },
  data() {
    return {
      Child: '父组件传递数据到子组件',
       items:[
        { text:'文字1' , cname:'tom' , addr:'usa' },
        { text:'文字2' , cname:'wangwu' , addr:'uk' },
        { text:'文字3' , cname:'zhangsan' , addr:'安庆' }
      ]
    };
  },
  methods:{
    ievent:function(data){
      console.log(data);
    }
  }
};
</script>
<style scoped>

</style>


