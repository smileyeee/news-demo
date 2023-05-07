<template>
  <div class="chat">
    <JwChat
      ref="jwChat"
      v-model="inputMsg"
      :config="config"
      :taleList="taleList"
      :scrollType="scrollType"
      :placeholder="placeholder"
      :quickList="quickList"
      @enter="bindEnter"
    ></JwChat>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: "ChatView",
  data() {
    return {
      gptImg: require("@/assets/gpt.jpg"),
      userImg: require("@/assets/user.jpg"),
      ChatApiKey: this.$store.state.Chat_Api_KEY,
      ChatApiURL: this.$store.state.Chat_Api_URL,

      time: '',

      scrollType: "noroll", // scroll  noroll 俩种类型
      placeholder: "请输入...",
      inputMsg: "",
      taleList: [],
      quickList: [
        { text: "这里是jwchat，您想了解什么问题。" },
        { text: "jwchat是最好的聊天组件" },
        { text: "谁将烟焚散，散了纵横的牵绊；听弦断，断那三千痴缠。" },
        { text: "长夏逝去。山野间的初秋悄然涉足。" },
        { text: "江南风骨，天水成碧，天教心愿与身违。" },
        { text: "总在不经意的年生。回首彼岸。纵然发现光景绵长。" },
        { text: "外面的烟花奋力的燃着，屋里的人激情的说着情话" },
        { text: "假如你是云，我就是雨，一生相伴，风风雨雨；" },
        {
          text: "即使泪水在眼中打转，我依旧可以笑的很美，这是你学不来的坚强。",
        },
        { text: " 因为不知来生来世会不会遇到你，所以今生今世我会加倍爱你。" },
      ],
      config: {
        historyConfig: {
          show: true,
          tip: "没有更多消息了",
          
        },
      },
    };
  },
  methods: {
    bindEnter() {
      const msg = this.inputMsg;
      if (!msg) return;

      // 添加消息
      this.taleList.push({
        date: "2020/05/20 23:19:07",
        text: { text: msg },
        mine: true,
        name: "",
        img: this.userImg,
      });
    
      axios
        .post(
          "https://wangjiayang.com.cn/v1/chat/completions",
          {
            model: "gpt-3.5-turbo",
            messages: [{ role: "user", content: msg }],
            temperature: 1.0,
            top_p: 1.0,
            n: 1,
            user: "0",
          },
          {
            headers: {
              Authorization:
                "Bearer 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",
              "Content-Type": "application/json",
            },
          }
        )
        .then((res) => {
          console.log('成功，会话回应',res.data.choices[0]);
          const answer = res.data.choices[0].message.content;
          
          this.taleList.push({
          date: "2020/05/20 23:19:07",
          text: { text: answer },
          mine: false,
          name: "",
          img: this.gptImg,
      });

          
        })
        .catch(error =>{
          console.log('失败，会话回应', error)
        })
    },
    
  },
  mounted() {
    // 初始化对话列表
    const list = [
      {
        date: "2020/04/16 21:19:07",
        text: { text: "起床不" },
        mine: false,
        name: "",
        img: this.gptImg,
      },
      {
        date: "2020/04/16 21:19:07",
        text: {
          text: "等我一下",
        },
        mine: true,
        name: "",
        img: this.userImg,
      },
    ];
    this.taleList = list;
  },
};
</script>

<style>
.chat {
  position: fixed;
  width: 300px;
  bottom: 6.25rem;
  right: 21rem;
}
</style>
