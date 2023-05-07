<template>
  <el-main class="main" :style="{ backgroundImage: 'url(' + bgUrl + ')' }">
    <!-- 顶部的大展示区 -->
    <div
      class="space_white"
      style="height: 80px; background-color: rgb(7, 25, 99)"
    ></div>

    <div class="HeadNews">
      <!-- 轮播图 -->
      <div class="Slide">
        <ul ref="showImg">
          <!-- key是当前图片的索引，selected是被选中图片的索引 -->
          <li
            v-for="(item, key) in HeadNewsList"
            :key="key"
            :class="{ currentImg: key === selected }"
            v-show="key == selected"
            @mouseover="stopAuto"
            @mouseleave="startAuto"
          >
            <el-image :src="item.ImgUrl" style="height: 28.125rem;" :fit="fit"></el-image>
          </li>
          <!-- 第一张图片复制一份到最后，实现循环滚动无回滚 -->
          <!-- <li>
            <el-image :src="HeadNewsList[0].ImgUrl"></el-image>
          </li> -->
        </ul>
      </div>
      <div class="SlideSide">
        <ol>
          <li
            v-for="(item, key) in HeadNewsList"
            :key="key"
            :class="{ currentLi: key === selected }"
            @click="switchImg(key)"
          >
            <div
              :class="{ currentdiv: key === selected }"
              class="SlideSideItem"
            >
              <span class="ItemTitle">{{ item.title }}</span
              ><br />
              <span class="ItemIntro" v-show="key == selected"
                ><br />{{ item.intro }}</span
              >
            </div>
          </li>
        </ol>
      </div>
    </div>

    <!-- 占位 -->
    <div
      class="space"
      :style="{ backgroundImage: 'url(' + spaceUrl + ')' }"
    ></div>

    <div class="MainBody">
      <el-row :gutter="20">
        <el-col :span="16">
          <NewsList></NewsList>
        </el-col>
        <el-col :span="8">
          <div class="About">
            广告位
          </div>
        </el-col>
      </el-row>
    </div>
  </el-main>
</template>

<script>
import NewsList from '../List/NewsList.vue';

export default {
  name: "TestBody",
  components: {NewsList},
  data() {
    return {
      bgUrl: require("../../assets/img/bg1.jpg"),
      spaceUrl: require("../../assets/img/space.png"),
      HeadNewsList: [
        {
          ImgUrl: require("@/assets/img/HeadNews/HeadNews1.jpg"),
          title: "一季度个人住房贷款投放力度加大",
          intro:
            "我国支持改善民生力度不断加大，个人住房贷款92%用于支持购买首套房。",
          links: "#",
        },
        {
          ImgUrl: require("@/assets/img/HeadNews/HeadNews2.jpg"),
          title: "保险资金为实体经济融资超21万亿元",
          intro:
            "保险资金投向碳中和、碳达峰、制造业、战略性新兴产业等领域，有力支持了实体经济发展。",
          links: "#",
        },
        {
          ImgUrl: require("@/assets/img/HeadNews/HeadNews3.jpg"),
          title: "统筹推进智能网联汽车高质量发展",
          intro:
            "工信部：我国智能网联汽车已经从小范围测试验证转入技术快速发展、生态加速构建的新阶段。",
          links: "#",
        },
        {
          ImgUrl: require("@/assets/img/HeadNews/HeadNews4.jpg"),
          title: "我国全面实现不动产登记",
          intro:
            "从分散到统一，从城市到农村，涵盖所有不动产物权的不动产统一登记制度在全面建立。",
          links: "#",
        },
        {
          ImgUrl: require("@/assets/img/HeadNews/HeadNews5.jpg"),
          title: "商务部：跨境电商5年增长近10倍",
          intro: "跨境电商成外贸增长点，今年我国将加快培育一批骨干企业。",
          links: "#",
        },
        {
          ImgUrl: require("@/assets/img/HeadNews/HeadNews6.jpg"),
          title: "可再生能源制氢增长潜力巨大",
          intro: "绿氢产能占比不足1%，市场潜力巨大，垃圾制氢开启新赛道！",
          links: "#",
        },
      ],
      fit: "cover",
      selected: 0, // 当前选中的图片
      flag: true,
      imgwidth: "800px",
    };
  },
  methods: {
    load() {
      if (this.count < 12) this.count += 2;
      else return false;
    },
    switchImg(index) {
      if (index < this.HeadNewsList.length) {
        this.selected = index;
      } else {
        this.selected = 0;
      }
    },
    startAuto() {
      // 鼠标离开，再次自动轮播
      this.autoSwitch = setInterval(() => {
        // 自动切换
        this.switchImg(this.selected + 1);
      }, 2000);
    },
    stopAuto() {
      // 鼠标移动，暂停自动轮播
      clearInterval(this.autoSwitch);
    },
  },
  mounted() {
    this.autoSwitch = setInterval(() => {
      this.switchImg(this.selected + 1);
    }, 2000);
  },
};
</script>

<style scoped>
.main {
  width: 100%;
  padding: 0;
  margin: 0;
  background-repeat: no-repeat;
  background-position: top;
  background-color: rgb(245, 245, 245);
}

ul,
ol {
  padding: 0;
  margin: 0;
}
li {
  list-style: none;
}

el-image{
  height: 28.125rem;
}

.HeadNews {
  height: 28.125rem;
  /* background-color: #bc9b9b; */
  margin: 0 auto;
  display: flex;
  justify-content: center;
}

.Slide {
  width: 800px;
  height: 25rem;
  padding: 0;
  margin: 0;
}

.SlideSide {
  background-color: rgb(0, 17, 95);
  height: 28.125rem;
  width: 25rem;
}

.currentLi {
  display: block;
}
.SlideSideItem {
  padding: 1.25rem;
}

.SlideSideItem .ItemTitle {
  color: rgb(255, 255, 255);
  font-weight: 700;
  line-height: 100%;
}

.SlideSideItem .ItemIntro {
  font-size: 0.875rem;
  color: #dbdbdb;
}

.currentdiv {
  background-color: rgb(244, 220, 182);
}

.currentdiv .ItemTitle {
  color: rgb(0, 0, 0);
}

.currentdiv .ItemIntro {
  color: rgb(88, 88, 88);
}

.space {
  width: 75rem;
  height: 31.25rem;
  background-repeat: no-repeat;
  margin: 0.5rem auto;
}

.MainBody {
  margin: 0 auto;
  width: 75rem;
}

.NewsList {
  background-color: #fff;
  /* height: 200vh; */
  width: 100%;
}

.About {
  background-color: #fff;
  width: 100%;
  height: 100px;
}
</style>
