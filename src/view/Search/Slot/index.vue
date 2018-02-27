<template>
<div> 
    <div>
        <slot></slot>
    </div>
    <div >
        <slot name="two"></slot>
    </div>
    <div>
        <slot name="one"></slot>
    </div>
</div>  
</template>
<script>
export default {
  
}
</script>
<style scoped>

</style>

