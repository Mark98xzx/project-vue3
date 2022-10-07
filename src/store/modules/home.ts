import { ISwiper } from '@/typings/home';
import { IGlobalState } from './../index';
import { CATOGRORY_TYPES, IHomeState } from './../../typings/home';
import { Module } from "vuex"

import * as Types from '../action-types'
import { getSwiper } from '@/api/home';

// 首页数据存储
const state: IHomeState = {
    currentCategory: CATOGRORY_TYPES.ALL,
    swiperList: [],
    lessons: {
        hasMore: true, // 有没有更多数据
        loading: false, // 默认没有正在加载
        offset: 0,
        limit: 10,
        list: [] // 当前已经显示到页面的课程有哪些
    }
}

// Module 里的参数 1）自己状态 2）全局状态
const home: Module<IHomeState, IGlobalState> = {
    namespaced: true,
    state,
    mutations: {
        [Types.SET_CATEGORY](state, payload: CATOGRORY_TYPES){
            state.currentCategory = payload
        },
        [Types.SET_SWIPER_LIST](state, payload: ISwiper[]){
            state.swiperList = payload
        }
    },
    actions: {
        async [Types.SET_SWIPER_LIST]({commit}) {
            let swiper = await getSwiper<ISwiper>();
            commit(Types.SET_SWIPER_LIST, swiper)

        }
    }
}

export default home