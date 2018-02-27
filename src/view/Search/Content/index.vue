<template>
  <div>
    这是子组件
    <div style="color:#f36">{{zyChild}}</div>
    <div>
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

