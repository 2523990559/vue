<template>
<div>
  <div v-for="temp in list" :key="temp">
    <div>{{temp.name}}</div>
    <div>{{temp.zy}}</div>
    <div v-for="tmp in listSort">{{tmp}}</div>
  </div>

</div>
</template>
<script>
export default {
  data() {
    return {
      list: [{
          name: '张阳0',
          zy: '前端'
        },
        {
          name: '张阳1',
          zy: '前端初级工程师'
        },
        {
          name: '张阳2',
          zy: '前端中级工程师'
        },
      ],
      listSort:[34,12,34,454,3,45]
    }
  },
  mounted() {
    this.changeNumGroupone();
    this.changeNumGrouptwo();
    this.changeNumGroupthree();
    this.changeNumfour();
    this.changeNumfive();
    this.changeNumsix();
    this.changeNumseven();
  },
  methods: {
    changeNumGroupone() {
      //改变数组中的内容
       this.$set(this.list, 2, {name: 'abc数组改变了',zy:'努力奋斗中'});
      //改变数组长度
      this.list.splice(3);
    },
    changeNumGrouptwo(){
      //数组末尾插入一条数据
      this.list.push({name:'张启强',zy:'学生'})
    },
    changeNumGroupthree(){
      //删除数组末尾的一条数据
      this.list.pop();
    },
    changeNumfour(){
      //删除数组开始的第一条数据
      this.list.shift();
    },
    changeNumfive(){
      //新增数据开始的第一条数据
      this.list.unshift({name:'张启强',zy:'学生'})
    },
    //让整个数组顺序排列
    changeNumsix(){
      this.listSort.sort();
    },
    //让整个数组倒序
    changeNumseven(){
      this.listSort.reverse();
    }
  }
}
</script>
