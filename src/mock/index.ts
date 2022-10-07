// const Mock =  require('mockjs');
import Mock from 'mockjs'

import {getHomeData} from '@/api/home'

const basUrl = 'http://localhost:8080'

Mock.mock(basUrl+'/home/getSwiperList', 'get', getHomeData);
