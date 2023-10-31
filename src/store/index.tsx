import {
  configureStore,
  type ThunkDispatch,
  type AnyAction,
} from '@reduxjs/toolkit';
import {
  useDispatch as useDispatchHook,
  useSelector as useSelectorHook,
} from 'react-redux';
import rootReducer from './reducers';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = ThunkDispatch<RootState, undefined, AnyAction>;
export const useDispatch = useDispatchHook<AppDispatch>;
export const useSelector = useSelectorHook<RootState>;

export const persistor = persistStore(store);
