import { IHomeState } from './../typings/home';
import { createStore } from 'vuex'
import home from './modules/home'

export interface IGlobalState {
  home: IHomeState, // 某个页面，某个模块可以在这里增加
}

export default createStore<IGlobalState>({
  // state: {
  // },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    home
  }
})
