import React, { createContext } from "react";
import { CveResponse } from "../../types/public_api/cve-apires-types";

export type V001StateType = {
    searchText: string;
    vulnData?: CveResponse;
};

export enum V001ActionEnum {
    SET_SEARCH_TEXT = "SET_SEARCH_TEXT",
    SET_VULN_DATA = "SET_VULN_DATA",
}

export type V001ActionType =
    | {
          type: V001ActionEnum.SET_SEARCH_TEXT;
          searchText: string;
      }
    | {
          type: V001ActionEnum.SET_VULN_DATA;
          vulnData?: CveResponse;
      };

export type V001ContextType = {
    state: V001StateType;
    dispatch: React.Dispatch<V001ActionType>;
};

export const V001Context = createContext({} as V001ContextType);

export const V001Reducer: React.Reducer<V001StateType, V001ActionType> = (
    state,
    action
) => {
    switch (action.type) {
        case V001ActionEnum.SET_SEARCH_TEXT:
            return { vulnData: state.vulnData, searchText: action.searchText };
        case V001ActionEnum.SET_VULN_DATA:
            return { vulnData: action.vulnData, searchText: state.searchText };
        default:
            return state;
    }
};
