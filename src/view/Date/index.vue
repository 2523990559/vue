<template>
  <div style="background:#fff">
    <Row  style="padding:10px" :gutter="24">
      <Col span="3">
      <Input v-model="name" placeholder="请输入姓名"></Input>
      </Col>
      <Col span="3">
      <Input v-model="password" placeholder="请输入密码"></Input>
      </Col>
      <Col span="3">
       <Button type="primary" @click="change">新增</Button>
       <Button type="success" @click="say('hi')">小试牛刀</Button>
      </Col>
      <Col span="3">
    
      </Col>
    </Row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      name: "",
      password:"",
      add:'vue.js'
    };
  },
  mounted(){},
  methods:{
  change(event){
    alert("Hello"+this.add+'!')
  },
  say(msg){
    alert(msg)
  },
 
  },
};
</script>

