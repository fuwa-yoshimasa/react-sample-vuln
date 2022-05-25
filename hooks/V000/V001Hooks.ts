import { TypedUseSelectorHook } from "react-redux";
import { useAppDispatch } from "../../store";
import { searchVulnData, setSearchText } from "../../store/V000/V001Reducer";

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

    const searcher = (searchText: string, startIndex: number) => {
        dispatch(searchVulnData({ searchText, startIndex }));
    };
    return searcher;
};
