<template>
  <div class="container">
    <div class="tools">
      <!-- 点击登录 -->
      <div class="load" @click="toLogin">登录</div>
      <!-- chatGPT工具入口 -->
      <div class="chatgpt" @click="toChat">
        <i class="el-icon-chat-line-square"></i>
      </div>
      <!-- 回到顶部 -->
      <div @click="toTop" class="toTop" v-show="topShow">
        <i class="el-icon-caret-top"></i>
      </div>


    </div>

    <ChatView v-show="chatShow"></ChatView>
  </div>
</template>

<script>
import ChatView from '@/views/ChatView.vue';

export default {
  name: "GoTop",
  components: {ChatView},
  data() {
    return {
      topShow: false,
      chatShow: false
    };
  },
  methods: {
    toTop() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
      this.topShow = false;
    },
    needToTop() {
      let currentHeight =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;

      if (currentHeight > 400) {
        this.topShow = true;
      } else {
        this.topShow = false;
      }
    },
    toChat() {
      this.$data.chatShow = !this.$data.chatShow;
    },
    toLogin(){
      this.$router.push({
        path: '/login'
      })
    }
  },
  mounted() {
    // 等整个视图都渲染完毕
    this.$nextTick(function () {
      window.addEventListener("scroll", this.needToTop, true);
    });
  },
};
</script>

<style scoped>
.tools {
  position: fixed;
  width: 50px;
  /* background-color: rgb(245, 245, 245); */
  bottom: 6.25rem;
  right: 1.6rem;
}

.toTop,
.chatgpt,
.load {
  width: 100%;
  height: 50px;
  background-color: rgb(245, 245, 245);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
  border-radius: 0.6rem;
  text-align: center;
  margin-bottom: 0.1rem;
  cursor: pointer;
}

.load {
  font-size: 1.3rem;
  line-height: 50px;
  color: rgb(128, 128, 128);
}

i {
  font-size: 3rem;
  line-height: 50px;
  color: rgb(128, 128, 128);
}

</style>
