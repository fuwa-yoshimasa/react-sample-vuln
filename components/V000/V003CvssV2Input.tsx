import React, { memo } from "react";
import { Card, Col, Form, Row } from "react-bootstrap";
import { useAppDispatch, useAppSelector } from "../../store";
import { setCvssV2, V003Cvss2MetricsType } from "../../store/V000/V003Reducer";
import V003MetricsButtons from "./V003MetricsButtons";

// CVSS2 metrics type
type Cvss2AccessVectorType = V003Cvss2MetricsType["accessVector"];
type Cvss2AccessComplexityType = V003Cvss2MetricsType["accessComplexity"];
type Cvss2AuthenticationType = V003Cvss2MetricsType["authentication"];
type Cvss2ConfidentialityImpactType = V003Cvss2MetricsType["confidentialityImpact"];
type Cvss2IntegrityImpactType = V003Cvss2MetricsType["integrityImpact"];
type Cvss2AvailabilityImpactType = V003Cvss2MetricsType["availabilityImpact"];

// CVSS2 metrics option内容
const cvss2AccessVectorOptions: { key: Cvss2AccessVectorType; name: string }[] = [
    { key: "LOCAL", name: "Local" },
    { key: "ADJACENT_NETWORK", name: "Adjacent Network" },
    { key: "NETWORK", name: "Network" },
];
const cvss2AccessComplexityOptions: { key: Cvss2AccessComplexityType; name: string }[] = [
    { key: "HIGH", name: "Hign" },
    { key: "MEDIUM", name: "Medium" },
    { key: "LOW", name: "Low" },
];
const cvss2AuthenticationOptions: { key: Cvss2AuthenticationType; name: string }[] = [
    { key: "MULTIPLE", name: "Multiple" },
    { key: "SINGLE", name: "Single" },
    { key: "NONE", name: "None" },
];
const cvss2ConfidentialityImpactOptions: { key: Cvss2ConfidentialityImpactType; name: string }[] = [
    { key: "NONE", name: "None" },
    { key: "PARTIAL", name: "Partial" },
    { key: "COMPLETE", name: "Complete" },
];
const cvss2IntegrityImpactOptions: { key: Cvss2IntegrityImpactType; name: string }[] = [
    { key: "NONE", name: "None" },
    { key: "PARTIAL", name: "Partial" },
    { key: "COMPLETE", name: "Complete" },
];
const cvss2AvailabilityImpactOptions: { key: Cvss2AvailabilityImpactType; name: string }[] = [
    { key: "NONE", name: "None" },
    { key: "PARTIAL", name: "Partial" },
    { key: "COMPLETE", name: "Complete" },
];

const V003CvssV2Input = () => {
    const dispatch = useAppDispatch();
    const cvssV2 = useAppSelector((state) => state.v003.inputVulnData.cvss.v2);

    // 入力受け取って、Storeへ登録
    const handleChangeBaseScore = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setCvssV2({ ...cvssV2, baseScore: e.target.value }));
    };
    const handleSelectV2AccessVector = (e: Cvss2AccessVectorType) => {
        dispatch(setCvssV2({ ...cvssV2, metrics: { ...cvssV2.metrics, accessVector: e } }));
    };
    const handleSelectV2AccessComplexity = (e: Cvss2AccessComplexityType) => {
        dispatch(setCvssV2({ ...cvssV2, metrics: { ...cvssV2.metrics, accessComplexity: e } }));
    };
    const handleSelectV2Authentication = (e: Cvss2AuthenticationType) => {
        dispatch(setCvssV2({ ...cvssV2, metrics: { ...cvssV2.metrics, authentication: e } }));
    };
    const handleSelectV2ConfidentialityImpact = (e: Cvss2ConfidentialityImpactType) => {
        dispatch(setCvssV2({ ...cvssV2, metrics: { ...cvssV2.metrics, confidentialityImpact: e } }));
    };
    const handleSelectV2IntegrityImpact = (e: Cvss2IntegrityImpactType) => {
        dispatch(setCvssV2({ ...cvssV2, metrics: { ...cvssV2.metrics, integrityImpact: e } }));
    };
    const handleSelectV2AvailabilityImpact = (e: Cvss2AvailabilityImpactType) => {
        dispatch(setCvssV2({ ...cvssV2, metrics: { ...cvssV2.metrics, availabilityImpact: e } }));
    };

    return (
        <Card.Body>
            <Card.Title className="fw-bold">CVSS 2 Severity and Metrics</Card.Title>
            <Form.Group as={Row}>
                <Form.Label className="fw-bolder" column sm={2}>
                    Base Score:
                </Form.Label>
                <Col sm={1}>
                    <Form.Control type="text" value={cvssV2.baseScore} onChange={handleChangeBaseScore} />
                </Col>
            </Form.Group>
            <Form.Group as={Row}>
                <Form.Label className="fw-bolder" column sm={2}>
                    Metrics:
                </Form.Label>
                <Col sm={10}>
                    <Form.Group as={Row} className="mb-1">
                        <Form.Label column sm={3}>
                            Access Vector :
                        </Form.Label>
                        <Col sm={9}>
                            <V003MetricsButtons<Cvss2AccessVectorType>
                                options={cvss2AccessVectorOptions}
                                defaultValue={cvssV2.metrics.accessVector}
                                onChange={handleSelectV2AccessVector}
                                idPrefix="Cvss2AccessVector_"
                            />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-1">
                        <Form.Label column sm={3}>
                            Access Complexity :
                        </Form.Label>
                        <Col sm={9}>
                            <V003MetricsButtons<Cvss2AccessComplexityType>
                                options={cvss2AccessComplexityOptions}
                                defaultValue={cvssV2.metrics.accessComplexity}
                                onChange={handleSelectV2AccessComplexity}
                                idPrefix="Cvss2AccessComplexity_"
                            />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-1">
                        <Form.Label column sm={3}>
                            Authentication :
                        </Form.Label>
                        <Col sm={9}>
                            <V003MetricsButtons<Cvss2AuthenticationType>
                                options={cvss2AuthenticationOptions}
                                defaultValue={cvssV2.metrics.authentication}
                                onChange={handleSelectV2Authentication}
                                idPrefix="Cvss2Authentication_"
                            />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-1">
                        <Form.Label column sm={3}>
                            Confidentiality Impact :
                        </Form.Label>
                        <Col sm={9}>
                            <V003MetricsButtons<Cvss2ConfidentialityImpactType>
                                options={cvss2ConfidentialityImpactOptions}
                                defaultValue={cvssV2.metrics.confidentialityImpact}
                                onChange={handleSelectV2ConfidentialityImpact}
                                idPrefix="Cvss2ConfidentialityImpact_"
                            />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-1">
                        <Form.Label column sm={3}>
                            Integrity Impact :
                        </Form.Label>
                        <Col sm={9}>
                            <V003MetricsButtons<Cvss2IntegrityImpactType>
                                options={cvss2IntegrityImpactOptions}
                                defaultValue={cvssV2.metrics.integrityImpact}
                                onChange={handleSelectV2IntegrityImpact}
                                idPrefix="Cvss2IntegrityImpact_"
                            />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-1">
                        <Form.Label column sm={3}>
                            Availability Impact :
                        </Form.Label>
                        <Col sm={9}>
                            <V003MetricsButtons<Cvss2AvailabilityImpactType>
                                options={cvss2AvailabilityImpactOptions}
                                defaultValue={cvssV2.metrics.availabilityImpact}
                                onChange={handleSelectV2AvailabilityImpact}
                                idPrefix="Cvss2AvailabilityImpact_"
                            />
                        </Col>
                    </Form.Group>
                </Col>
            </Form.Group>
        </Card.Body>
    );
};

export default memo(V003CvssV2Input);
