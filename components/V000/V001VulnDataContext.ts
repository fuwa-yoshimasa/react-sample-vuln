import React, { createContext } from "react";
import { CveResponse } from "../../types/public_api/cve-apires-types";

export enum V001VulnDataActionEnum {
    SET_VULN_DATA = "SET_VULN_DATA",
}

export type V001VulnDataActionType = {
    type: V001VulnDataActionEnum.SET_VULN_DATA;
    vulnData?: CveResponse;
};

export type V001VulnDataContextType = {
    vulnData?: CveResponse;
    dispatchVulnData: React.Dispatch<V001VulnDataActionType>;
};

export const V001VulnDataContext = createContext({} as V001VulnDataContextType);

export const V001VulnDataReducer: React.Reducer<
    CveResponse | undefined,
    V001VulnDataActionType
> = (vulnData, action) => {
    switch (action.type) {
        case V001VulnDataActionEnum.SET_VULN_DATA:
            return action.vulnData;
        default:
            return vulnData;
    }
};
