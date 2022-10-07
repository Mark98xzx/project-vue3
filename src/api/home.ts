import axios from ".";

// 获取轮播图
export function getSwiper<T>() {
    return axios.get<T, T>('/slider/list');
}

export function getHomeData() {
    return {
        code: 200,
        data: {
            // tableData: [
                // {
                //     name: '张三',
                //     sex: '男',
                //     phone: '13465876789'
                // },
                // {
                //     name: '小红',
                //     sex: '女',
                //     phone: '13465870645'
                // },
                // {
                //     name: '李四',
                //     sex: '男',
                //     phone: '13465870645'
                // }
            // ]
            data: [
                // {
                //     // https://img0.baidu.com/it/u=3963544801,594968789&fm=253&fmt=auto&app=138&f=JPEG?w=499&h=261
                //     url: 'https://img0.baidu.com/it/u=1472391233,99561733&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500',
                // },
                // {
                //     url: 'https://img1.baidu.com/it/u=3622442929,3246643478&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500',
                // },
                // {
                //     url: 'https://img0.baidu.com/it/u=4008146120,512111027&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500',
                // },
                // {
                //     url: 'https://img2.baidu.com/it/u=1893470775,4143435497&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500',
                // },
                // {
                //     url: 'https://img2.baidu.com/it/u=4147884680,3389833900&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500',
                // }
                { url: 'https://img0.baidu.com/it/u=1819100723,1073692710&fm=253&fmt=auto&app=138&f=PNG?w=500&h=200' },
                { url: 'https://img1.baidu.com/it/u=674632116,602740840&fm=253&fmt=auto&app=138&f=GIF?w=500&h=200' },
                { url: 'https://img2.baidu.com/it/u=2828370237,2730413258&fm=253&fmt=auto&app=138&f=GIF?w=500&h=200' },
                { url: 'https://img1.baidu.com/it/u=4043943216,833589559&fm=253&fmt=auto&app=120&f=GIF?w=500&h=200' },
                { url: 'https://img2.baidu.com/it/u=1099267,2826022952&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=200' },
            ]
        }
    }
}
