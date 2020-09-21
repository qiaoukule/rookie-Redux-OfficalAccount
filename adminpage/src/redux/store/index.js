
import { createStore, applyMiddleware , compose } from 'redux';
import thunk from 'redux-thunk';   //用于异步请求 在actionCreators
import reducers  from '../reducers'

//拓展程序的插件用法  增强函数
const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const enhancer = composeEnhancers(applyMiddleware(thunk))  //增强函数

const store = createStore(reducers,  enhancer );//创建store，只接受两个变量，
export default store;