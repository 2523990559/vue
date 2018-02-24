<template>
  <div>
    <div style="background:#fff">
      <Row style="padding:10px" :gutter="24">
        <Col span="3">
        <Input v-model="name" placeholder="请输入姓名"></Input>
        </Col>
        <Col span="3">
        <Input v-model="password" placeholder="请输入密码"></Input>
        </Col>
        <Col>
        <Button type="primary" @click="change">新增</Button>
        <Button type="success" @click="say('hi')">小试牛刀</Button>
        </Col>
        <Col span="3">
        </Col>
      </Row>
      <Row style="padding:10px" :gutter="24">
        <Col span="8">
        <RadioGroup v-model="man">
          性别：
          <Radio label="男"></Radio>
          <Radio label="女"></Radio>
        </RadioGroup>
        </Col>
      </Row>
    </div>
    <div style="margin-top:10px;background:#fff ">
      <Row style="padding:10px" :gutter="24">
        <Col span="16">
        <CheckboxGroup>
          爱吃的水果：
          <Checkbox label="香蕉"></Checkbox>
          <Checkbox label="苹果"></Checkbox>
          <Checkbox label="西瓜"></Checkbox>
        </CheckboxGroup>
        </Col>
      </Row>

    </div>

  </div>
</template>
<script>
export default {
  data() {
    return {
      name: "",
      password: "",
      add: "vue.js",
      man: "男",
    };
  },
  mounted() {},
  methods: {
    change(event) {
      alert("Hello" + this.add + "!");
    },
    say(msg) {
      alert(msg);
    }
  }
};
</script>

