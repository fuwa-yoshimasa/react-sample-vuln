import { useCallback } from "react";
import { useAppDispatch, useAppSelector } from "../store";
import { setLoading } from "../store/AppStore";

// ローディング開始
export const useStartLoading = () => {
    const dispatch = useAppDispatch();
    const func = () => {
        dispatch(setLoading(true));
    };
    return func;
};

// ローディング終了
export const useEndLoading = () => {
    const dispatch = useAppDispatch();
    const func = () => {
        dispatch(setLoading(false));
    };
    return func;
};

export const useLoading = (loading: boolean) => {
    const dispatch = useAppDispatch();
    dispatch(setLoading(loading));
};
