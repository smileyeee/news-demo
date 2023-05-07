<template>
  <el-container direction="vertical">
    <BasicHeader></BasicHeader>
    <el-container direction="vertical">
      <el-main class="main">
        <div class="articleBody">
          <!-- <img :src="article.picture" alt="" /> -->
          <div class="articleTitle">{{ article.title || ''}}</div>
          <div class="articleTime">{{ article.ctime || ''}}</div>
          <div class="articleContent" v-html="article.content"></div>
          <div class="articleLink">原文链接: <a :href="url">{{url || ''}}</a></div>
        </div>
      </el-main>
      <BasicFooter class="footer"></BasicFooter>
    </el-container>
  </el-container>
</template>

<script>
import BasicHeader from "@/components/model/BasicHeader.vue";
import BasicFooter from "@/components/model/BasicFooter.vue";
import axios from "axios";

export default {
  name: "ArticlesView",
  data() {
    return {
      DataApiKey: this.$store.state.Data_Api_KEY,
      HtmlTextURL: this.$store.state.Data_HtmlText_URL,
      url: "",
      article: "",
    };
  },
  components: { BasicHeader, BasicFooter }, // 放一个其他推荐的
  methods: {
    // 有的路径没有http前缀，必须加上才能获取
    addHttp(url) {
      if (url.startsWith("https://") || url.startsWith("http://")) {
        return url;
      }
      if (url.startsWith("//")) {
        return "https:" + url;
      }
      return "https://" + url;
    },
  },
  mounted() {
    if (this.$route.query.url) {
      console.log("成功", this.$route.query.url);
      this.$data.url = this.$route.query.url;

      axios
        .get(this.HtmlTextURL, {
          params: {
            key: this.DataApiKey,
            url: this.addHttp(this.$route.query.url),
          },
        })
        // 请求成功
        .then((response) => {
          console.log("成功， 新闻正文", response);
          this.$data.article = response.data.result;
        })
        // 请求失败
        .catch(function (error) {
          console.log("失败, 新闻正文", error);
          this.$notify({
            title: "失败",
            message: "网络请求失败，请刷新网页重试",
            type: "error",
          });
        });
    } else {
      console.log("失败");
    }
  },
};
</script>

<style scoped>
.footer {
  background-color: rgb(51, 51, 51);
  color: #fff;
}

.main {
  background-color: #fff;
}

.articleBody {
  margin: 10px auto;
  width: 50rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
  padding: 20px;
}

.articleTitle{
    width: 100%;
    font-size: 40px;
    font-weight: 800;
    text-align: center;
    margin-bottom: 40px;
}

.articleContent>>>p{
    text-indent: 2em;
    font-size: 14px;
}

.articleContent>>>img{
    margin: 10px auto;
    width: 600px;
}

.articleLink{
    font-size: 12px;
    color: rgb(195, 195, 195);
}

.articleLink a{
    text-decoration: none;
    color: rgb(195, 195, 195);
}
</style>
