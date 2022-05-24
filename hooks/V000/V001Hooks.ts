import { TypedUseSelectorHook } from "react-redux";
import { useAppDispatch } from "../../store";
import { searchVulnData, setSearchText } from "../../store/V000/V001Reducer";
import { useEndLoading, useStartLoading } from "../AppHooks";

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

    const searcher = (setSearchText: string) => {
        dispatch(searchVulnData(setSearchText));
    };
    return searcher;
};
