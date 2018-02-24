<template>
    <div>
        这是子组件
        <div>{{zyChild}}</div>
    </div>
</template>

<script>
export default {
  props: ['zyChild'],
  data() {
    return {};
  }
};
</script>

<style>

</style>

