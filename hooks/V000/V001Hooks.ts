import { TypedUseSelectorHook } from "react-redux";
import { useAppDispatch } from "../../store";
import {
    searchVulnDataThunk,
    setSearchText,
} from "../../store/V000/V001Reducer";

// hooks

// 検索文字列保存
export const useSetSearchText = () => {
    const dispatch = useAppDispatch();
    const setter = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setSearchText(e.target.value));
    };
    return setter;
};

// 脆弱性検索
export const useSearchVulnData = () => {
    const dispatch = useAppDispatch();

    const searchVulnData = (searchText: string, startIndex: number) => {
        dispatch(searchVulnDataThunk({ searchText, startIndex }));
    };
    return searchVulnData;
};
