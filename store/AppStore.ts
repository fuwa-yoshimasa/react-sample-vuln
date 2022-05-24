import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";

export type AppStateType = {
    loading: boolean;
    test: string;
};

const initialState: AppStateType = {
    loading: false,
    test: "",
};

export const AppSlice = createSlice({
    name: "app",
    initialState,
    reducers: {
        setLoading: (state: AppStateType, action: PayloadAction<boolean>) => {
            state.loading = action.payload;
            console.log(`setLoading : ${state.loading}`);
        },
        addTest: (state: AppStateType) => {
            state.test = state.test + "@";
        },
    },
});

export const { setLoading, addTest } = AppSlice.actions;
export default AppSlice.reducer;
