import { IGlobalState } from './../index';
import { CATOGRORY_TYPES, IHomeState } from './../../typings/home';
import { Module } from "vuex"


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

const home: Module<IHomeState, IGlobalState> = {
    namespaced: true,
    state,

}

export default home