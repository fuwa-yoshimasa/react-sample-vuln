import React, { createContext } from "react";
import { CveResponse } from "../../types/public_api/cve-apires-types";

export enum V001SearchTextActionEnum {
    SET_SEARCH_TEXT = "SET_SEARCH_TEXT",
}

export type V001SearchTesxtActionType = {
    type: V001SearchTextActionEnum.SET_SEARCH_TEXT;
    searchText: string;
};

export type V001SearchTextContextType = {
    searchText: string;
    dispatchSearchText: React.Dispatch<V001SearchTesxtActionType>;
};

export const V001SearchTextContext = createContext(
    {} as V001SearchTextContextType
);

export const V001SearchTextReducer: React.Reducer<
    string,
    V001SearchTesxtActionType
> = (searchText, action) => {
    switch (action.type) {
        case V001SearchTextActionEnum.SET_SEARCH_TEXT:
            return action.searchText;
        default:
            return searchText;
    }
};
