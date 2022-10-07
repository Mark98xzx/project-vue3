<template>
    <div class="home">
        <!-- 头部 -->
        <!-- {{category}} -->
        <Header
            :category="category"
            @setCurrentCategory="setCurrentCategory" />
        <div class="home-container" style="margin-top: 65px;">

        </div>
        <!-- 轮播图 -->
        <Suspense>
            <template #default>
                <Swiper />
            </template>
            <template #fallback>
                <div>loading...</div>
            </template>
        </Suspense>
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
import { Store, useStore } from 'vuex';
import { CATOGRORY_TYPES } from '@/typings/home';
import * as Types from '@/store/action-types'
function useCategory(store: Store<IGlobalState>) {
    let category = computed(() => { // vuex 中的状态
        return store.state.home.currentCategory
    });

    function setCurrentCategory(category: CATOGRORY_TYPES) {
        // console.log(category, "category");
        store.commit(`home/${Types.SET_CATEGORY}`, category)
    }
    console.log(store, "80080");
    
    return {
        category,
        setCurrentCategory
    }
}
export default defineComponent({
    components: {
        Header, Swiper, List
    },
    setup() {
        // 获取 vuex 中的分类状态，更改状态功能
        let store = useStore<IGlobalState>();
        let { category, setCurrentCategory} = useCategory(store);

        // let category = computed(() => {
        //     return store.state.home.currentCategory
        // })

        return {
            category,
            setCurrentCategory
        }
        
        
    }
})
</script>
