<template>
  <div style="background:#fff">
    <Row  style="padding:10px" :gutter="24">
      <Col span="3">
      <Input v-model="name" placeholder="请输入姓名" maxlength="4"></Input>
      </Col>
      <Col span="3">
      <Input v-model="password" placeholder="请输入密码" maxlength="8"></Input>
      </Col>
      <Col span="3">
       <Button type="primary" @click="change">新增</Button>
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
    };
  },
  mounted(){},
  methods:{
  change(){
    alert("新增成功!")
  }
  },
};
</script>

