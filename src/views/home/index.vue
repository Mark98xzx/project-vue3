<template>
    <div class="home">
        <!-- 头部 -->
        {{category}}
        <Header />
        <!-- 轮播图 -->
        <Swiper />
        <!-- 列表 -->
        <List />
    </div>
</template>

<script lang="ts">
import { IGlobalState } from '@/store'
import { computed, defineComponent } from 'vue';
import Header from './components/header.vue';
import Swiper from './components/swiper.vue';
import List from './components/list.vue';
import { useStore } from 'vuex';
export default defineComponent({
    components: {
        Header, Swiper, List
    },
    setup() {
        let store = useStore<IGlobalState>()
        // let store = useStore()

        let category = computed(() => {
            return store.state.home.currentCategory
        })

        return {
            category
        }
        
    }
})
</script>
