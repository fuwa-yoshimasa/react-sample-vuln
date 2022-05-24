import React, { memo, useContext } from "react";
import { Table } from "react-bootstrap";
import { V001Context } from "./V001Context";
import V001VulnRow from "./V001VulnRow";

const V001VulnList = () => {
    const {
        state: { vulnData },
    } = useContext(V001Context);

    console.log("V001VulnList useContext");
    return (
        <>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>CVE</th>
                        <th>概要</th>
                        <th>CVSS3</th>
                        <th>最終更新日時</th>
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
        </>
    );
};

export default memo(V001VulnList);
