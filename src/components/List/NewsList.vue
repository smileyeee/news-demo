<template>
  <div class="NewsList">
    <!-- <el-button @click="BtnClick"><router-link class="titlelink" to="/article">跳转</router-link></el-button> -->
    <div class="NewsCard" v-for="(item, key) in newslist" :key="key">
      <img :src="item.picUrl" :alt="item.title" class="NewsCardImg" />
      <div class="NewsCardText">
        <div class="NewsCardTitle" @click="goToArticle(item.url)">
          {{ item.title }}
        </div>
        <div class="NewsCardLabel">{{ item.source }}</div>
        <div class="NewsCardShare">
          <share :config="share_config"></share>
        </div>
      </div>
    </div>
    <div class="loadmore">
      <el-button type="text" @click="loadMore" :loading="loading" >加载更多</el-button>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "NewsList",
  components:{},
  data() {
    return {
      page: 1,
      loading: false,
      DataApiKey: this.$store.state.Data_Api_KEY,
      GeneralNewsURL: this.$store.state.Data_GeneralNews_URL,
      newslist: [],
      share_config: {
        // 网址，使用window.location.href
        url: `${location.href}`,
        // 来源，QQ空间会用到，默认取head标签
        source: "",
        // 标题，默认取document.title
        title: "",
        // 描述，默认取head标签
        description: "",
        // 图片，默认取网页第一个img标签
        image: "",
        // 启用的站点
        sites: ["weibo", "wechat", "qzone", "qq"],
        // disabled: ["google", "facebook", "twitter"], // 禁用的站点
        // 微信二维码的提示文字
        wechatQrcodeTitle: "使用微信扫一扫分享给朋友",
        wechatQrcodeHelper:
          "<p>微信里点“发现”，扫一下</p><p>二维码便可将本文分享至朋友圈。</p>",
      },
      
    };
  },
  methods: {
    getNewsList(num) {
      axios
        .get(this.GeneralNewsURL, {
          params: {
            key: this.DataApiKey,
            num,
            page: this.page
          },
        })
        // 请求成功
        .then((response) => {
          this.newslist.push.apply(this.newslist, response.data.result.newslist);
          this.page++;
          this.$data.loading = false;
          console.log("成功， 新闻列表", response.data.result, this.page);
        })
        // 请求失败
        .catch(function (error) {
          console.log("失败, 新闻列表", error);
          this.$notify({
            title: "失败",
            message: "网络请求失败，请刷新网页重试",
            type: "error",
          });
        });
    },
    showNews() {
      if (this.newslist.length <= 0) {
        this.$notify({
          title: "失败",
          message: "这是一条成功的提示消息",
          type: "success",
        });
      } else {
        this.$notify({
          title: "成功",
          message: this.newslist[0].title,
          type: "success",
        });
      }
    },
    goToArticle(value) {
      this.$router.push({
        path: "article",
        query: {
          url: value,
        },
      });
    },
    loadMore(){
      this.$data.loading = true;
      this.getNewsList(5);
    }
  },
  mounted() {
    this.getNewsList(2);
    if (this.newslist.length > 0) {
      this.$data.isShow = true;
    }
  },
};
</script>

<style scoped>
.NewsList {
  width: 100%;
  height: 100%;
}

.BtnGet {
  margin: 0 auto;
}

.NewsCard {
  border: 1px solid rgb(245, 245, 245);
  padding: 10px;
  margin: 5px;
  display: flex;
}

.titlelink {
  text-decoration: none;
  color: black;
}

.NewsCard .NewsCardImg {
  /* width: 200px; */
  height: 7.5rem;
}

.NewsCard .NewsCardText {
  float: right;
  width: 100%;
  height: 7.5rem;
  /*这两行代码可以解决大部分场景下的换行问题*/
  word-break: break-all;
  word-wrap: break-word;
  /*但在有些场景中，还需要加上下面这行代码*/
  white-space: normal;
  position: relative;
}

.NewsCardTitle {
  margin: 10px;
  font-size: 20px;
  display: -webkit-inline-box;
  overflow: hidden;
  -webkit-line-clamp: 2;
  text-overflow: ellipsis;
  box-orient: vertical;
  cursor: pointer;
}

.NewsCardLabel {
  position: absolute;
  bottom: 10px;
  left: 10px;
  border: 1px solid rgb(234, 234, 234);
  background-color: #cecece;
  border-radius: 10px;
  padding: 4px;
  font-size: 14px;
}

.NewsCardShare {
  position: absolute;
  bottom: 10px;
  right: 10px;
}

.loadmore{
  width: 100%;
  display: flex;
  justify-content: center;
}

el-button{
  color: #cecece;

}
</style>
