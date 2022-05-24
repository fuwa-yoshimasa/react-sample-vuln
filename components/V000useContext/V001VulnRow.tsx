import React, { memo } from "react";
import { DefCveItem } from "../../types/public_api/cve-types";

export type V001VulnRowProps = {
    cveItem: DefCveItem;
};

const V001VulnRow: React.FC<V001VulnRowProps> = ({ cveItem }) => {
    console.log("V001VulnRow useContext");
    return (
        <tr>
            <td>{cveItem.cve?.CVE_data_meta?.ID}</td>
            <td>{cveItem.cve?.description?.description_data[0]?.value}</td>
            <td>{cveItem.impact?.baseMetricV3?.impactScore}</td>
            <td>{cveItem.lastModifiedDate}</td>
        </tr>
    );
};

export default memo(V001VulnRow);
