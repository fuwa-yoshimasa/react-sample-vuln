import Link from "next/link";
import { useRouter } from "next/router";
import React, { memo } from "react";
import { DefCveItem } from "../../types/public_api/cve-types";
import styles from "./V002Detail.module.css";

export type V001VulnRowProps = {
    cveItem: DefCveItem;
};

const V001VulnRow: React.FC<V001VulnRowProps> = ({ cveItem }) => {
    const router = useRouter();

    const cve = cveItem.cve?.CVE_data_meta?.ID;

    const href = { pathname: `/V000/V002`, query: { cve } };

    const handleClickCve = () => {
        router.push({ pathname: `/V000/V002`, query: { cve } });
    };

    console.log("V001VulnRow");
    return (
        <tr>
            <td>
                <Link href={href}>{cve}</Link>
            </td>
            <td className={"text-truncate " + styles.description}>
                {cveItem.cve?.description?.description_data[0]?.value}
            </td>
            <td>{cveItem.impact?.baseMetricV3?.impactScore}</td>
            <td>{cveItem.lastModifiedDate}</td>
        </tr>
    );
};

export default memo(V001VulnRow);
