export interface ISwiper {
    url: string
}

export interface ILessons {
    hasMore: boolean, // 有没有更多数据
    loading: boolean, // 默认没有正在加载
    offset: number,
    limit: number,
    list: [] // 当前已经显示到页面的课程有哪些
}

export interface list {
    title: string,
    video: string,
    poster: string,
    price: number,
    category?: string,
}

export interface IHomeState {
    currentCategory: CATOGRORY_TYPES,
    swiperList: ISwiper[]
    lessons: ILessons
}

export enum CATOGRORY_TYPES {
    ALL,
    REACT,
    VUE,
    NODE
}