<template>
  <div class="app-container">
    <Layout>
      <template #left>
        <div class="aside">
          <SiteAside />
        </div>
      </template>
      <template #default>
        <RouterView />
      </template>
    </Layout>
    <ToTop/>
  </div>
</template>

<script>
import Layout from "./components/Layout";
import SiteAside from "./components/SiteAside";
import ToTop from "./components/ToTop";
export default {
  components: {
    Layout,
    SiteAside,
    ToTop
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/mixin.less";
@import "~@/styles/var.less";
.app-container {
  .self-fill(fixed);
  // background: @dark;
}
.aside {
  width: 250px;
  height: 100%;
}
</style>
