import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { SidebarSlice } from "./sidebar/sidebar.slice";
import { AuthSlice } from "./auth/auth.slice";

const combinedReducer = combineReducers({
  auth: AuthSlice.reducer,
  sidebar: SidebarSlice.reducer,
});

const rootReducer = (state: any, action: any) => {
  if (action.type === "Auth/logout") {
    state = undefined;
  }
  return combinedReducer(state, action);
};

export const store = configureStore({
  reducer: rootReducer,
  devTools: false,
  preloadedState: {},
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [],
        ignoredPaths: [],
      },
    }),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
