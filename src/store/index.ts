import {applyMiddleware, createStore} from 'redux';
import type {Store} from 'redux'
import Thunk from 'redux-thunk';
import reducer from './reducers';
import {persistStore, persistReducer,} from 'redux-persist';
import type {PersistConfig} from 'redux-persist';
import storage from 'redux-persist/lib/storage'; //localStorage机制


const storageConfig: PersistConfig<any> = {
  key: 'root', // 必须有的
  storage: storage, // 缓存机制
  // blacklist: ['index'] // reducer 里不持久化的数据,除此外均为持久化数据
  whitelist: ['topHeader', "theme"], // reducer 里持久化的数据,除此外均为不持久化数据
};
const myPersistReducer = persistReducer(storageConfig, reducer);
const store: Store = createStore(myPersistReducer, applyMiddleware(Thunk));
export const persistor = persistStore(store);
export type State = ReturnType<typeof store.getState>
export default store;