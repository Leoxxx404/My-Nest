<template>
  <div class="message-container" ref="messageContainer">
    <MessageArea
      title="留言板"
      :subTitle="`(${data.total})`"
      :list="data.rows"
      :isListLoading="isLoading"
      @submit="handleSubmit"
    />
  </div>
</template>

<script>
import MessageArea from "@/components/MessageArea";
import fetchData from "@/mixins/fetchData.js";
import * as msgApi from "@/api/message.js";
import mainScroll from "@/mixins/mainScroll.js";
export default {
  components: {
    MessageArea,
  },
  data() {
    return {
      page: 1,
      limit: 10,
    };
  },
  mixins: [fetchData({ total: 0, rows: [] }),mainScroll("messageContainer")],
  created() {
    this.$bus.$on("mainScroll",this.handleScroll)
  },
  destroyed() {
    this.$bus.$off("mainScroll",this.handleScroll)
  },
  computed: {
    hasMore() {
      return this.data.rows.length < this.data.total;
    }
  },
  methods: {
    handleScroll(dom) {
      if(this.isLoading || !dom) {
        return ;
      }

      const range= 100;
      const dec = Math.abs(dom.scrollTop + dom.clientHeight - dom.scrollHeight);
      if(dec <= range) {
        this.fetchMore();
      }
    },
    async fetchMore() {
      if (!this.hasMore) {
        // 没有更多啦
        return;
      }
      this.isLoading = true;
      this.page++;
      const resp = await this.fetchData();
      this.data.total = resp.total;
      this.data.rows = this.data.rows.concat(resp.rows);
      this.isLoading = false;
    },
    async fetchData() {
      return msgApi.getMessages(this.page, this.limit);
    },
    async handleSubmit(data,callback) {
      const resp = await msgApi.postMessage(data,callback);
      callback("感谢留言！");
      this.data.rows.unshift(resp);
    }
  },
};
</script>

<style scoped>
.message-container {
  width: 100%;
  height: 100%;
  overflow-y: auto;
  padding: 25px 0;
  box-sizing: border-box;
}

.message-area-container {
  width: 700px;
  margin: 0 auto;
}
</style>
