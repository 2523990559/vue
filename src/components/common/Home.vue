<template>
    <div>
        <SideBar></SideBar>
        <div class="content">
            <router-view></router-view>
        </div>
    </div>
</template>
<script>
import SideBar from "@/components/common/SideBar";
export default {
  data() {
    return {};
  },
  components: {
    SideBar
  }
};
</script>

