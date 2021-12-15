import { configureStore, combineReducers } from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import { apiSlice } from './api'
import { authSlice, logout } from './authSlice'
import { pageSlice } from './pageSlice'
import { setupListeners } from '@reduxjs/toolkit/dist/query'

const combinedReducer = combineReducers({
  [apiSlice.reducerPath]: apiSlice.reducer,
  [authSlice.name]: authSlice.reducer,
  [pageSlice.name]: pageSlice.reducer,
})

const rootReducer = (state, action) => {
  if (action.type === logout.toString()) {
    // check for action type
    state = undefined
  }
  return combinedReducer(state, action)
}

// Configure redux-persist
const persistConfig = {
  key: 'root',
  storage,
  blacklist: [apiSlice.reducerPath, pageSlice.name],
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(apiSlice.middleware),
})

export const persistor = persistStore(store)

// enable listener behavior for the store
setupListeners(store.dispatch)
