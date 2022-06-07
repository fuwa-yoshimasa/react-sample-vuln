export interface JSONSchemaForNVDCVEApplicabilityStatementCPEDataFeedVersion10 {
    /**
     * Array of CPE match strings
     */
    matches: DefCpeMatch[];
    [k: string]: unknown;
}
/**
 * CPE match string or range
 */
export interface DefCpeMatch {
    vulnerable?: boolean;
    cpe22Uri?: string;
    cpe23Uri: string;
    versionStartExcluding?: string;
    versionStartIncluding?: string;
    versionEndExcluding?: string;
    versionEndIncluding?: string;
    cpe_name?: DefCpeName[];
    [k: string]: unknown;
}
/**
 * CPE name
 */
export interface DefCpeName {
    cpe22Uri?: string;
    cpe23Uri: string;
    [k: string]: unknown;
}
