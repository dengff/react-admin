import {applyMiddleware, createStore} from "redux";
import Thunk from "redux-thunk";
import reducer from "./reducers";
import {persistStore, persistReducer,} from "redux-persist";
import storage from "redux-persist/lib/storage"; //localStorage机制
import type {AnyAction} from "redux";
import type {PersistConfig} from "redux-persist";
import type {ThunkAction, ThunkDispatch} from "redux-thunk";


const storageConfig: PersistConfig<any> = {
  key: "root", // 必须有的
  storage: storage, // 缓存机制
  // blacklist: ['index'] // reducer 里不持久化的数据,除此外均为持久化数据
  whitelist: ["topHeader", "theme"], // reducer 里持久化的数据,除此外均为不持久化数据
};
const _persistReducer = persistReducer(storageConfig, reducer);
const store = createStore(_persistReducer, applyMiddleware(Thunk));
export const persistor = persistStore(store);
export type RootState = ReturnType<typeof reducer>;
// export type AppDispatch = typeof store.dispatch
export type AppDispatch = ThunkDispatch<RootState, void, AnyAction>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType,
  RootState,
  unknown,
  AnyAction>;
export default store;