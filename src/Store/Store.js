import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistStore, persistReducer } from 'redux-persist';
import MySaga from './Sagas/index';
import RootReducer from './Reducers/RootReducer';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: ['filters']
};

const persistedReducer = persistReducer(persistConfig, RootReducer);
const sagaMiddleware = createSagaMiddleware();
const Store = () => {
  const store = createStore(persistedReducer, applyMiddleware(sagaMiddleware));
  sagaMiddleware.run(MySaga);
  const persistor = persistStore(store);
  return { store, persistor };
};
export default Store;
