import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AppSlice } from "./AppStore";
import { V001Slice } from "./V000/V001Reducer";

// 全体のStoreを合体
const store = configureStore({
    reducer: {
        app: AppSlice.reducer,
        v001: V001Slice.reducer,
    },
});

// Storeのtype
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// hooks
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
