import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { type } from "os";
import { CveResponse } from "../../types/public_api/cve-apires-types";
import { JSONSchemaForCommonVulnerabilityScoringSystemVersion20, JSONSchemaForCommonVulnerabilityScoringSystemVersion31 } from "../../types/public_api/cve-types";

// CVSS3用
export type V003Cvss3MetricsType = Pick<
    JSONSchemaForCommonVulnerabilityScoringSystemVersion31,
    "attackVector" | "attackComplexity" | "privilegesRequired" | "userInteraction" | "scope" | "confidentialityImpact" | "integrityImpact" | "availabilityImpact"
>;

// CVSS2用
export type V003Cvss2MetricsType = Pick<
    JSONSchemaForCommonVulnerabilityScoringSystemVersion20,
    "accessVector" | "accessComplexity" | "authentication" | "confidentialityImpact" | "integrityImpact" | "availabilityImpact"
>;
export type V003CvssV3Type = {
    baseScore: string;
    metrics: V003Cvss3MetricsType;
};

export type V003CvssV2Type = {
    baseScore: string;
    metrics: V003Cvss2MetricsType;
};

export type V003ReferencesType = {
    seq: number;
    url: string;
};

// 入力用脆弱性情報
export type V003InputVulnType = {
    description: string;
    cvss: {
        v3: V003CvssV3Type;
        v2: V003CvssV2Type;
    };
    references: V003ReferencesType[];
    publishedDate: string | undefined;
    lastModifiedDate: string | undefined;
};

// この画面専用のStateの型
export type V003StateType = {
    inputVulnData: V003InputVulnType;
    loading: boolean;
};

// Stateの初期値
const initialState: V003StateType = {
    inputVulnData: {
        description: "",
        cvss: {
            v3: {
                baseScore: "",
                metrics: {},
            },
            v2: {
                baseScore: "",
                metrics: {},
            },
        },
        references: [],
        publishedDate: undefined,
        lastModifiedDate: undefined,
    },
    loading: false,
};

export const V003Slice = createSlice({
    name: "V003",
    initialState,
    reducers: {
        setDescription: (state: V003StateType, action: PayloadAction<string>) => {
            state.inputVulnData.description = action.payload;
        },
        setCvssV3: (state: V003StateType, action: PayloadAction<V003CvssV3Type>) => {
            state.inputVulnData.cvss.v3 = action.payload;
        },
        setCvssV2: (state: V003StateType, action: PayloadAction<V003CvssV2Type>) => {
            state.inputVulnData.cvss.v2 = action.payload;
        },
        setReferences: (state: V003StateType, action: PayloadAction<V003ReferencesType[]>) => {
            state.inputVulnData.references = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getVulnDataThunk.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(getVulnDataThunk.fulfilled, (state, action) => {
            state.inputVulnData = action.payload;
            state.loading = false;
        });
        builder.addCase(getVulnDataThunk.rejected, (state) => {
            console.log("reject");
            state.loading = false;
        });
    },
});

// 非同期処理
// 脆弱性情報取得
export const getVulnDataThunk = createAsyncThunk<V003InputVulnType, string>("V003/getVulnData", async (cve) => {
    const url = `https://services.nvd.nist.gov/rest/json/cve/1.0/${cve}?addOns=dictionaryCpes`;
    return await fetch(url).then(async (r) => {
        const resVuln = (await r.json()) as CveResponse;
        const cveItem = resVuln?.result?.CVE_Items[0];
        const inputVulnData: V003InputVulnType = {
            description: cveItem?.cve?.description?.description_data[0]?.value,
            cvss: {
                v3: {
                    baseScore: cveItem?.impact?.baseMetricV3?.impactScore?.toString() ?? "0",
                    metrics: {
                        attackVector: cveItem?.impact?.baseMetricV3?.cvssV3?.attackVector,
                        attackComplexity: cveItem?.impact?.baseMetricV3?.cvssV3?.attackComplexity,
                        privilegesRequired: cveItem?.impact?.baseMetricV3?.cvssV3?.privilegesRequired,
                        userInteraction: cveItem?.impact?.baseMetricV3?.cvssV3?.userInteraction,
                        scope: cveItem?.impact?.baseMetricV3?.cvssV3?.scope,
                        confidentialityImpact: cveItem?.impact?.baseMetricV3?.cvssV3?.confidentialityImpact,
                        integrityImpact: cveItem?.impact?.baseMetricV3?.cvssV3?.integrityImpact,
                        availabilityImpact: cveItem?.impact?.baseMetricV3?.cvssV3?.availabilityImpact,
                    },
                },
                v2: {
                    baseScore: cveItem?.impact?.baseMetricV2?.impactScore?.toString() ?? "0",
                    metrics: {
                        accessVector: cveItem?.impact?.baseMetricV2?.cvssV2?.accessVector,
                        accessComplexity: cveItem?.impact?.baseMetricV2?.cvssV2?.accessComplexity,
                        authentication: cveItem?.impact?.baseMetricV2?.cvssV2?.authentication,
                        confidentialityImpact: cveItem?.impact?.baseMetricV2?.cvssV2?.confidentialityImpact,
                        integrityImpact: cveItem?.impact?.baseMetricV2?.cvssV2?.integrityImpact,
                        availabilityImpact: cveItem?.impact?.baseMetricV2?.cvssV2?.availabilityImpact,
                    },
                },
            },
            references: cveItem?.cve?.references?.reference_data?.map((d, index) => ({ seq: index, url: d.url })),
            publishedDate: cveItem?.publishedDate,
            lastModifiedDate: cveItem?.lastModifiedDate,
        };
        return inputVulnData;
    });
});

// このStateのAction
export const { setDescription, setCvssV3, setCvssV2, setReferences } = V003Slice.actions;

// このStateのReducer
export default V003Slice.reducer;
