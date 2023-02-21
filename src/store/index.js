import {applyMiddleware, createStore} from 'redux';
import Thunk from 'redux-thunk';
import reducer from './reducers.js';
import {persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage'; //localStorage机制

const storageConfig = {
  key: 'root', // 必须有的
  storage: storage, // 缓存机制
  // blacklist: ['index'] // reducer 里不持久化的数据,除此外均为持久化数据
  // 必须为跟store，不能是某个属性
  whitelist: ['topHeader'], // reducer 里持久化的数据,除此外均为不持久化数据
};
const myPersistReducer = persistReducer(storageConfig, reducer);
const store = createStore(myPersistReducer, applyMiddleware(Thunk));
export const persistor = persistStore(store);
export default store;