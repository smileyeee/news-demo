<template>
  <el-header height="50px" class="header">
    <!-- 放logo -->
    <div class="logo">
      <img :src="logoUrl" alt="" />
    </div>
    <div class="nav">
      <ul>
        <li
          v-for="(item, key) of MenuItemList"
          :key="key"
        >
          {{ item.titel }}
        </li>
      </ul>
    </div>

    <div class="divider">
      <el-divider direction="vertical"></el-divider>
    </div>
    
    <div class="search">
      <input type="text" placeholder="请输入关键词">
      <button><i class="el-icon-search"></i></button> 
    </div>

    <div class="divider">
      <el-divider direction="vertical"></el-divider>
    </div>

    <div class="user">
      
      <i class="el-icon-user"></i>
      <i class="el-icon-menu"></i>
      <i></i>
    </div>

    
  </el-header>
</template>

<script>
import logoUrl from "@/assets/img/logo1.jpg";

export default {
  name: "BasicHeader",
  data() {
    return {
      activeIndex: "1",
      logoUrl,
      MenuItemList: [
        { titel: "首页" },
        { titel: "CCTV-2直播" },
        { titel: "金融" },
        { titel: "企业" },
        { titel: "云顶对话" },
        { titel: "ESG在中国" },
        { titel: "大国保险" },
        { titel: "银行服务国家战略展播" },
        { titel: "专精待新" },
      ],
    };
  },
};
</script>

<style scoped>
.header {
  background: rgb(24, 24, 24);
  width: 100vw;
  color: #fff;
  display: flex;
  justify-content: space-between;
}

.divider{
  line-height: 45px;
}

.nav{
  margin-left: 10px;
  /* overflow: hidden; */
  text-align: center;
}


.nav ul li{
  float: left;
  margin: 0 15px;
  list-style: none;
  font-size: 14px;
  height: 50px;
  vertical-align: middle;
  /* line-height: 50px; */
}

.nav ul li:hover{
  color: rgb(191, 2, 20);
}


.user{
  float: right;
  display: flex;
  align-items: center;
}

.user i{
  font-size: 20px;
  color: red;
  margin: 5px;
}

.search{
  float: right;
  height: 50px;
  font-size: 16px;
  display: flex;
  align-items: center;
}


</style>
