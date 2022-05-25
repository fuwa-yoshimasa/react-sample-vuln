import { PayloadAction, createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useAppDispatch } from "..";
import { useEndLoading, useStartLoading } from "../../hooks/AppHooks";
import { CveResponse } from "../../types/public_api/cve-apires-types";

// この画面専用のStateの型
export type V001StateType = {
    searchText: string;
    vulnData?: CveResponse;
    loading: boolean;
};

// Stateの初期値
const initialState: V001StateType = {
    searchText: "",
    vulnData: undefined,
    loading: false,
};

// この画面のSlice、ここメイン、主にAction定義する
export const V001Slice = createSlice({
    name: "V001",
    initialState,
    reducers: {
        setSearchText: (
            state: V001StateType,
            action: PayloadAction<string>
        ) => {
            state.searchText = action.payload;
        },
        setVulnData: (
            state: V001StateType,
            action: PayloadAction<CveResponse>
        ) => {
            state.vulnData = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(searchVulnData.pending, (state: V001StateType) => {
            state.loading = true;
        });
        builder.addCase(
            searchVulnData.fulfilled,
            (state: V001StateType, action: PayloadAction<CveResponse>) => {
                state.vulnData = action.payload;
                state.loading = false;
            }
        );
        builder.addCase(searchVulnData.rejected, (state: V001StateType) => {
            console.log("reject");
            state.loading = false;
        });
    },
});

// 脆弱性検索の引数
type SearchVulnDataArgs = {
    searchText: string;
    startIndex: number;
};

// 非同期のAction
export const searchVulnData = createAsyncThunk<CveResponse, SearchVulnDataArgs>(
    "V001/searchVulnData",
    async ({ searchText = "", startIndex = 0 }) => {
        return await fetch(
            `https://services.nvd.nist.gov/rest/json/cves/1.0/?startIndex=${startIndex}&keyword=${searchText}`
        ).then((r) => {
            return r.json();
        });
    }
);

// このStateのAction
export const { setSearchText, setVulnData } = V001Slice.actions;

// このStateのReducer
export default V001Slice.reducer;
