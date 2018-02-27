<template>
  <div>
    这是子组件
    <div>{{zyChild}}</div>
    <div>
      <Row :gutter="24">
        <Col span="8">
        <div>
          <Card>
           <svg width="960" height="500"></svg>
          </Card>
        </div>
        </Col>
        <Col span="8">
        <div>
          <Card>ddd</Card>
        </div>
        </Col>
        <Col span="8">
        <div>
          <Card>ddd</Card>
        </div>
        </Col>

      </Row>
    </div>
  </div>
</template>

<script>
export default {
  props: ["zyChild"],
  data() {
    return {};
  }
};
</script>

<style>

</style>

