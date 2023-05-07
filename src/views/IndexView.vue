<template>
  <el-container direction="vertical">
    <BasicHeader></BasicHeader>
    <el-container direction="vertical">
      <BasicBody></BasicBody>
      <BasicFooter class="footer"></BasicFooter>
    </el-container>
  </el-container>
</template>

<script>
import BasicHeader from '@/components/model/BasicHeader.vue';
import BasicBody from '@/components/model/BasicBody.vue';
import BasicFooter from '@/components/model/BasicFooter.vue';

export default {
  name: "IndexView",
  components:{BasicHeader, BasicBody, BasicFooter}
};
</script>

<style scoped>
.footer{
    background-color: rgb(51, 51, 51);
    color: #fff;
}

</style>
