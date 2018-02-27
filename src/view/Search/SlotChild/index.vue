<template>
  <div class="hello" style="color:blue">
    <slot :cname="items[2].cname"></slot> 
    <slot :addr="items[2].addr"></slot> 
    <slot age="18"></slot> 
  </div>
</template>

<script>
export default {

  data () {
    return {
      num:100
    }  
  },
  props:['items'],
  methods:{

  },
  created(){
    console.log('items',this.$props.items);
  }
}
</script>

<style scoped>

</style>
