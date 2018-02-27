<template>
    <div>
        <div :list="list">
            <div>
                <slot name="small">
                    <p> {{list[0].name}}</p>
                    <p>{{list[0].age}}</p>
                </slot>
            </div>
            <div>
                <slot name="large">
                    <p> {{list[1].name}}</p>
                    <p>{{list[1].age}}</p>
                </slot>
            </div>

        </div>

    </div>
</template>
<script>
export default {
  data() {
    return {
      list: [{ name: "小小", age: "11" }, { name: "大大", age: "33" }]
    };
  }
};
</script>
<style scoped>

</style>


