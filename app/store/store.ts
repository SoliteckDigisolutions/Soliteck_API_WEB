import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import respSlice from "./slices/respSlice";

import { persistStore, persistReducer } from "redux-persist";
import { combineReducers } from "redux";

import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

// Client-side only storage to avoid SSR issues
const noopStorage = {
  getItem: () => Promise.resolve(null),
  setItem: () => Promise.resolve(),
  removeItem: () => Promise.resolve(),
};

const storage =
  typeof window !== "undefined"
    ? require("redux-persist/lib/storage").default
    : noopStorage;

const appReducer = combineReducers({
  auth: authReducer,
  responseData: respSlice,
});

const rootReducer = (state: any, action: any) => {
  if (action.type === "RESET_APP") {
    state = undefined; // clears all redux state
  }

  return appReducer(state, action);
};

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);