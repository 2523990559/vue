<template>
  <div>
    <div style="margin:50px">
      <Row>
        <Col span="8">
        <Menu>
          <Menu active-name="1-2" :open-names="['1']" v-for="temp in data" :key="temp.label">
            <Submenu name="1">
              <template slot="title">
                <Icon type="ios-filing"></Icon>
                {{temp.label}}
              </template>
              <Submenu name="2">
                <template slot="title">{{temp.children[0].label}}</template>
                <MenuItem name="2-2">{{temp.children[0].children[0].label}}</MenuItem>
              </Submenu>
            </Submenu>
          </Menu>
        </Menu>
        </Col>
      </Row>
    </div>
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
      data: [
        {
          label: "一级 1",
          children: [
            {
              label: "二级 1-1",
              children: [
                {
                  label: "三级 1-1-1"
                }
              ]
            }
          ]
        },
        {
          label: "一级 2",
          children: [
            {
              label: "二级 2-1",
              children: [
                {
                  label: "三级 2-1-1"
                }
              ]
            },
            {
              label: "二级 2-2",
              children: [
                {
                  label: "三级 2-2-1"
                }
              ]
            }
          ]
        },
        {
          label: "一级 3",
          children: [
            {
              label: "二级 3-1",
              children: [
                {
                  label: "三级 3-1-1"
                }
              ]
            },
            {
              label: "二级 3-2",
              children: [
                {
                  label: "三级 3-2-1"
                }
              ]
            }
          ]
        }
      ]
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

