import React, { memo, useContext } from "react";
import { Table } from "react-bootstrap";
import { useSelector } from "react-redux";
import { CveResponse } from "../../types/public_api/cve-apires-types";
import store, { useAppSelector } from "../../store";
import Pagenation from "../commons/Pagenation";
import V001VulnRow from "./V001VulnRow";

const V001VulnList = () => {
    const vulnData = useAppSelector((state) => state.v001.vulnData);
    console.log(vulnData);
    const handleSelectPage = (page: number, startIndex: number) => {
        console.log(page);
        console.log(startIndex);
    };

    console.log("V001VulnList");
    return (
        <>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th className="bg-primary bg-gradient text-white bg-opacity-75">
                            CVE
                        </th>
                        <th className="bg-primary bg-gradient text-white bg-opacity-75">
                            概要
                        </th>
                        <th className="bg-primary bg-gradient text-white bg-opacity-75">
                            CVSS3
                        </th>
                        <th className="bg-primary bg-gradient text-white bg-opacity-75">
                            最終更新日時
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {vulnData?.result?.CVE_Items.map((item) => (
                        <React.Fragment key={item?.cve?.CVE_data_meta?.ID}>
                            <V001VulnRow cveItem={item} />
                        </React.Fragment>
                    ))}
                </tbody>
            </Table>
            <Pagenation
                perPage={vulnData?.resultsPerPage ?? 0}
                index={vulnData?.startIndex ?? 0}
                totalResults={vulnData?.totalResults ?? 0}
                clickPage={handleSelectPage}
            />
        </>
    );
};

export default memo(V001VulnList);
