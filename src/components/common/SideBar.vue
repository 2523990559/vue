<template>
    <div class="sidebar">
        <Menu :theme="color" :active-name="activeName" @on-select="change">
            <MenuGroup title="张阳日常练习" style='background:#495060;width: 242px;'>
                <MenuItem name="日期">
                <Icon type="document-text"></Icon>
                日期
                </MenuItem>
                <MenuItem name="搜索">
                <Icon type="chatbubbles"></Icon>
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
      activeName: ""
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


