<template>
    <div class="sidebar">
        <!-- on-select选择菜单Menu时候触发 -->
        <Menu :theme="color" :active-name="activeName" @on-select="change">
            <MenuGroup title="张阳日常练习" style='background:#495060;width: 242px;'>
                <MenuItem name="日期">
                日期
                </MenuItem>
                <MenuItem name="搜索">
                搜索
                </MenuItem>
            </MenuGroup>
        </Menu>
    </div>
</template>
<script>
export default {
  data() {
    return {
      color: "dark",
    // activeName为了激活菜单的name值
      activeName: "",
    };
  },
  watch: {
    $router: "getRouteName"
  },
  mounted() {
    this.getRouteName();
  },
  methods: {
    change(name) {
      this.$router.push({ name: name });
    },
    getRouteName() {
      const path = this.$route.meta.activeName;
      this.activeName = path;
    }
  }
};
</script>
<style scoped>
.sidebar {
  display: block;
  position: absolute;
  width: 240px;
  left: 0;
  top: 0;
  bottom: 0;
  background: #495060;
  overflow-y: auto;
}
</style>


