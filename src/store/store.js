// vuex进行集中式数据管理

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

var store = new Vuex.Store({
    state: {
        // 用于请求公共数据接口申请的一个key
        Data_Api_KEY: '72821055dd0ced0141c8f4768aee5f6a', 
        // 请求综合新闻的url
        Data_GeneralNews_URL: 'https://apis.tianapi.com/generalnews/index',
        // 请求新闻正文的url
        Data_HtmlText_URL: 'https://apis.tianapi.com/htmltext/index',

        
        // chatgpt的key
        Chat_Api_KEY: 'Bearer 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',
        // chatgpt的url
        Chat_Api_URL: 'https://wangjiayang.com.cn/v1/chat/completions'
        


    },
    mutations:{}, // 使用vuex中的方法
    getters:{}, // 对state中的数据进行加工，返回加工后的数据
    actions:{} // 对vuex中的方法进行加工，返回新的方法
})

export default store
