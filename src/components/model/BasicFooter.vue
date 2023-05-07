<template>
  <el-footer height="300px">
    <div class="footer_hd">
      <div class="links">
        <div v-for="(group, groupKey) in LinkGroupList" :key="groupKey" :class="group.class">
          <div class="groupTitle">{{group.title}}</div>
          <div class="groupItem">
            <ul>
              <li v-for="(item, itemkey) in group.LinkItemList" :key="itemkey">
                {{item}}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="footer_bd">
      夸夸队新闻网 www.smileye.cn
    </div>
  </el-footer>
</template>

<script>
export default {
  name: 'BasicFooter',
  data(){
    return{
      LinkGroupList:[
        {
          title: '关于我们',
          class: 'gywm',
          LinkItemList: [
            '总台之声', '总台总经理室', '关于CCTV', '广告', '网站声明'
          ]
        },
        {
          title: '业务概况',
          class: 'ywgk',
          LinkItemList: [
            '总台之声', '总台总经理室', '关于CCTV', '广告', '网站声明'
          ]
        },
        {
          title: '更多链接',
          class: 'gdlj',
          LinkItemList: [
            '总台之声', '总台总经理室', '关于CCTV', '广告', '网站声明'
          ]
        },
        {
          title: '其他链接',
          class: 'qtlj',
          LinkItemList: [
            '总台之声', '总台总经理室', '关于CCTV', '广告', '网站声明'
          ]
        },
      ]
    }
  }
}
</script>

<style scoped>

.footer_hd{
  height: 200px;
}

.links{
  display: flex;
  justify-content: space-around;
}

.groupTitle{
  font-size: 20px;
  font-weight: 600;
}

.groupItem{
  font-size: 14px;
  line-height: 30px;
}

li{
  list-style: none;
  
}

.footer_bd{
  height: 100px;
  display: flex;
  justify-content: center;
  line-height: 100px;
  font-size: 24px;
  font-weight: 600;
  color: rgb(191, 2, 20);
  /* background-color: #fff; */
  width: 100%;
}
</style>
