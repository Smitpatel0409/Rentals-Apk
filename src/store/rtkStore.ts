import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import userSlice from './slices/user/userSlice';
import { serverApi } from './serverApi';

const appReducer = combineReducers({
    [serverApi.reducerPath]: serverApi.reducer,
    userInfo: userSlice
});
const rootReducer = (state: any, action: any) => {
    return appReducer(state, action);
};
export const rtkStore = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(serverApi.middleware)
});

setupListeners(rtkStore.dispatch);
