import React, { memo, useEffect, useState } from "react";
import {
    Card,
    Col,
    Container,
    Form,
    Nav,
    Row,
    Tab,
    TabContent,
    Table,
    TabPane,
    Tabs,
} from "react-bootstrap";
import { useGetCveItem } from "../../hooks/V000/V002Hooks";
import { DefCveItem } from "../../types/public_api/cve-types";
import { useAppDispatch } from "../../store";
import { setLoading } from "../../store/AppStore";

type PropType = {
    cve: string;
};

const V002Detail: React.FC<PropType> = ({ cve }) => {
    console.log(`V002Detail = ${cve}`);
    const [cveItem, setCveItem] = useState<DefCveItem | undefined>(undefined);
    const [cvssKey, setCvssKey] = useState<string>("cvss3");

    const getCveItem = useGetCveItem();

    useEffect(() => {
        if (cve) {
            getCveItem(cve)
                .then((item) => setCveItem(item))
                .catch(() => setCveItem(undefined));
        }
    }, [cve]);

    return (
        <div>
            <Form>
                <Container>
                    <Row>
                        <Col sm={12}>
                            <Card>
                                <Card.Header className="fs-2">
                                    {cve} 詳細
                                </Card.Header>
                                <Card.Body>
                                    <Card.Title className="fw-bold">
                                        内容
                                    </Card.Title>
                                    <Card.Text>
                                        {
                                            cveItem?.cve?.description
                                                ?.description_data[0]?.value
                                        }
                                    </Card.Text>
                                </Card.Body>
                                <Card.Body>
                                    <Card.Title className="fw-bold">
                                        重大度
                                    </Card.Title>
                                    <Tabs
                                        activeKey={cvssKey}
                                        id="uncontrolled-tab-example"
                                        onSelect={(k) => setCvssKey(k ?? "")}
                                    >
                                        <Tab eventKey="cvss3" title="CVSS 3">
                                            <TabContent className="border-start border-bottom border-end">
                                                <Card.Body>
                                                    <Card.Title className="fw-bold">
                                                        CVSS 3.x Severity and
                                                        Metrics
                                                    </Card.Title>
                                                    <Card.Text>
                                                        <span className="fw-bolder">
                                                            Base Score:
                                                        </span>
                                                        {
                                                            cveItem?.impact
                                                                ?.baseMetricV3
                                                                ?.impactScore
                                                        }
                                                    </Card.Text>
                                                    <Card.Text>
                                                        <span className="fw-bolder">
                                                            Vector:
                                                        </span>
                                                        {
                                                            cveItem?.impact
                                                                ?.baseMetricV3
                                                                ?.cvssV3
                                                                ?.vectorString
                                                        }
                                                    </Card.Text>
                                                </Card.Body>
                                            </TabContent>
                                        </Tab>
                                        <Tab eventKey="cvss2" title="CVSS 2">
                                            <TabContent className="border-start border-bottom border-end">
                                                <Card.Body>
                                                    <Card.Title className="fw-bold">
                                                        CVSS 2.0 Severity and
                                                        Metrics
                                                    </Card.Title>
                                                    <Card.Text>
                                                        <span className="fw-bolder">
                                                            Base Score:
                                                        </span>
                                                        {
                                                            cveItem?.impact
                                                                ?.baseMetricV2
                                                                ?.impactScore
                                                        }
                                                    </Card.Text>
                                                    <Card.Text>
                                                        <span className="fw-bolder">
                                                            Vector:
                                                        </span>
                                                        {
                                                            cveItem?.impact
                                                                ?.baseMetricV2
                                                                ?.cvssV2
                                                                ?.vectorString
                                                        }
                                                    </Card.Text>
                                                </Card.Body>
                                            </TabContent>
                                        </Tab>
                                    </Tabs>
                                </Card.Body>
                                <Card.Body>
                                    <Card.Title className="fw-bold">
                                        References to Advisories, Solutions, and
                                        Tools
                                    </Card.Title>
                                    <Table striped bordered hover size="sm">
                                        <thead>
                                            <tr>
                                                <th className="bg-primary bg-gradient text-white bg-opacity-75">
                                                    References
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {cveItem?.cve?.references?.reference_data?.map(
                                                (d) => (
                                                    <tr key={d.url}>
                                                        <td className="text-break">
                                                            {d.url}
                                                        </td>
                                                    </tr>
                                                )
                                            )}
                                        </tbody>
                                    </Table>
                                </Card.Body>
                                <Card.Body>
                                    <Card.Title className="fw-bold">
                                        発効日時
                                    </Card.Title>
                                    <Card.Text>
                                        {cveItem?.publishedDate}
                                    </Card.Text>
                                </Card.Body>
                                <Card.Body>
                                    <Card.Title className="fw-bold">
                                        最終更新日時
                                    </Card.Title>
                                    <Card.Text>
                                        {cveItem?.lastModifiedDate}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </Form>
        </div>
    );
};

export default memo(V002Detail);
