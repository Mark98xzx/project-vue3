<template>
  <div>
    <van-swipe v-if="swipeListData.length">
      <van-swipe-item v-for="(item) in swipeListData" :key="item.url">
        <img :src="item.url" style="max-width: 100%">
      </van-swipe-item>
    </van-swipe>

    <!-- 或是使用 keep-alive -->
    <!-- <router-view v-slot="{ComponentId}">
      <keep-alive>
        <component :is="ComponentId"></component>
      </keep-alive>
    </router-view> -->
  </div>
</template>

<script lang="ts">
import { IGlobalState } from '@/store'
import { computed, defineComponent, onMounted, reactive, ref } from 'vue'
import { useStore } from 'vuex'
import * as Types from '@/store/action-types'
import axios from 'axios'

export default defineComponent({
  setup() {
    let swipeListData = ref()
    swipeListData.value = []
    const getSwiperList = async () => {
      
      await axios.get("http://localhost:8080/home/getSwiperList").then((res) => {
        console.log(res);
        swipeListData.value = res.data
        
      }).catch((err) => {
        console.log(err);
        
      }).finally(() => {        
      })
    }
    
    onMounted(() => {
      getSwiperList()
    })

    return {
      swipeListData
    }
  }
  // async setup() {
  //   // 页面一加载就需要获取数据
  //   let store = useStore<IGlobalState>()
  //   let swipeList = computed(() => store.state.home.swiperList)
    
  //   // 缓存 如果数据没有获取过才进行获取
  //   if (swipeList.value.length == 0) {
  //     // await store.dispatch(`home/${Types.SET_SWIPER_LIST}`)
  //   }
    
    

  //   return {
  //     swipeList
  //   }
  // },
})
</script>


<style>

</style>