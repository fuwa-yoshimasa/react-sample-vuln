import React, { memo } from "react";
import { Card, Col, Form, Row } from "react-bootstrap";
import { useAppDispatch, useAppSelector } from "../../store";
import { setCvssV3, V003Cvss3MetricsType } from "../../store/V000/V003Reducer";
import V003MetricsButtons from "./V003MetricsButtons";

// CVSS3 metrics type
type Cvss3AttackVectorType = V003Cvss3MetricsType["attackVector"];
type Cvss3AttackComplexityType = V003Cvss3MetricsType["attackComplexity"];
type Cvss3PrivilegesRequiredType = V003Cvss3MetricsType["privilegesRequired"];
type Cvss3UserInteractionType = V003Cvss3MetricsType["userInteraction"];
type Cvss3ScopeType = V003Cvss3MetricsType["scope"];
type Cvss3ConfidentialityImpactType = V003Cvss3MetricsType["confidentialityImpact"];
type Cvss3IntegrityImpactType = V003Cvss3MetricsType["integrityImpact"];
type Cvss3AvailabilityImpactType = V003Cvss3MetricsType["availabilityImpact"];

// CVSS3 metrics option内容
const cvss3AttackVectorOptions: { key: Cvss3AttackVectorType; name: string }[] = [
    { key: "NETWORK", name: "Network" },
    { key: "ADJACENT_NETWORK", name: "Adjacent Network" },
    { key: "LOCAL", name: "Local" },
    { key: "PHYSICAL", name: "Physical" },
];
const cvss3AttackComplexityOptions: { key: Cvss3AttackComplexityType; name: string }[] = [
    { key: "LOW", name: "Low" },
    { key: "HIGH", name: "High" },
];
const cvss3PrivilegesRequiredOptions: { key: Cvss3PrivilegesRequiredType; name: string }[] = [
    { key: "NONE", name: "None" },
    { key: "LOW", name: "Low" },
    { key: "HIGH", name: "High" },
];
const cvss3UserInteractionOptions: { key: Cvss3UserInteractionType; name: string }[] = [
    { key: "NONE", name: "None" },
    { key: "REQUIRED", name: "Required" },
];
const cvss3ScopeOptions: { key: Cvss3ScopeType; name: string }[] = [
    { key: "UNCHANGED", name: "Unchanged" },
    { key: "CHANGED", name: "Changed" },
];
const cvss3ConfidentialityImpactOptions: { key: Cvss3ConfidentialityImpactType; name: string }[] = [
    { key: "NONE", name: "None" },
    { key: "LOW", name: "Low" },
    { key: "HIGH", name: "High" },
];
const cvss3IntegrityImpactOptions: { key: Cvss3IntegrityImpactType; name: string }[] = [
    { key: "NONE", name: "None" },
    { key: "LOW", name: "Low" },
    { key: "HIGH", name: "High" },
];
const cvss3AvailabilityImpactOptions: { key: Cvss3AvailabilityImpactType; name: string }[] = [
    { key: "NONE", name: "None" },
    { key: "LOW", name: "Low" },
    { key: "HIGH", name: "High" },
];

// CVSS V3分の入力コンポーネント
const V003CvssV3Input = () => {
    const dispatch = useAppDispatch();
    const cvssV3 = useAppSelector((state) => state.v003.inputVulnData.cvss.v3);

    // 入力受け取って、Storeへ登録
    const handleChangeBaseScore = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setCvssV3({ ...cvssV3, baseScore: e.target.value }));
    };
    const handleSelectV3AttackVector = (e: Cvss3AttackVectorType) => {
        dispatch(setCvssV3({ ...cvssV3, metrics: { ...cvssV3.metrics, attackVector: e } }));
    };
    const handleSelectV3AttackComplexity = (e: Cvss3AttackComplexityType) => {
        dispatch(setCvssV3({ ...cvssV3, metrics: { ...cvssV3.metrics, attackComplexity: e } }));
    };
    const handleSelectV3PrivilegesRequired = (e: Cvss3PrivilegesRequiredType) => {
        dispatch(setCvssV3({ ...cvssV3, metrics: { ...cvssV3.metrics, privilegesRequired: e } }));
    };
    const handleSelectV3UserInteraction = (e: Cvss3UserInteractionType) => {
        dispatch(setCvssV3({ ...cvssV3, metrics: { ...cvssV3.metrics, userInteraction: e } }));
    };
    const handleSelectV3Scope = (e: Cvss3ScopeType) => {
        dispatch(setCvssV3({ ...cvssV3, metrics: { ...cvssV3.metrics, scope: e } }));
    };
    const handleSelectV3ConfidentialityImpact = (e: Cvss3ConfidentialityImpactType) => {
        dispatch(setCvssV3({ ...cvssV3, metrics: { ...cvssV3.metrics, confidentialityImpact: e } }));
    };
    const handleSelectV3IntegrityImpact = (e: Cvss3IntegrityImpactType) => {
        dispatch(setCvssV3({ ...cvssV3, metrics: { ...cvssV3.metrics, integrityImpact: e } }));
    };
    const handleSelectV3AvailabilityImpact = (e: Cvss3AvailabilityImpactType) => {
        dispatch(setCvssV3({ ...cvssV3, metrics: { ...cvssV3.metrics, availabilityImpact: e } }));
    };

    return (
        <Card.Body>
            <Card.Title className="fw-bold">CVSS 3.x Severity and Metrics</Card.Title>
            <Form.Group as={Row}>
                <Form.Label className="fw-bolder" column sm={2}>
                    Base Score:
                </Form.Label>
                <Col sm={1}>
                    <Form.Control type="text" value={cvssV3.baseScore} onChange={handleChangeBaseScore} />
                </Col>
            </Form.Group>
            <Form.Group as={Row}>
                <Form.Label className="fw-bolder" column sm={2}>
                    Metrics:
                </Form.Label>
                <Col sm={10}>
                    <Form.Group as={Row} className="mb-1">
                        <Form.Label column sm={3}>
                            Attack Vector:
                        </Form.Label>
                        <Col sm={9}>
                            <V003MetricsButtons<Cvss3AttackVectorType>
                                options={cvss3AttackVectorOptions}
                                defaultValue={cvssV3.metrics.attackVector}
                                onChange={handleSelectV3AttackVector}
                                idPrefix="Cvss3AttackVector_"
                            />
                            {/* <V003MetricsButtons<Cvss3AttackVectorType>
                            options={cvss3AttackVectorOptions}
                            selector={(state) => state.v003.inputVulnData.cvss.v3.metrics.attackVector}
                            reducer={setCvssV3AttackVector}
                            idPrefix="Cvss3AttackVector_"
                            /> */}
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-1">
                        <Form.Label column sm={3}>
                            Attack Complexity :
                        </Form.Label>
                        <Col sm={9}>
                            <V003MetricsButtons<Cvss3AttackComplexityType>
                                options={cvss3AttackComplexityOptions}
                                defaultValue={cvssV3.metrics.attackComplexity}
                                onChange={handleSelectV3AttackComplexity}
                                idPrefix="Cvss3AttackComplexity_"
                            />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-1">
                        <Form.Label column sm={3}>
                            Privileges Required :
                        </Form.Label>
                        <Col sm={9}>
                            <V003MetricsButtons<Cvss3PrivilegesRequiredType>
                                options={cvss3PrivilegesRequiredOptions}
                                defaultValue={cvssV3.metrics.privilegesRequired}
                                onChange={handleSelectV3PrivilegesRequired}
                                idPrefix="Cvss3PrivilegesRequired_"
                            />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-1">
                        <Form.Label column sm={3}>
                            User Interaction :
                        </Form.Label>
                        <Col sm={9}>
                            <V003MetricsButtons<Cvss3UserInteractionType>
                                options={cvss3UserInteractionOptions}
                                defaultValue={cvssV3.metrics.userInteraction}
                                onChange={handleSelectV3UserInteraction}
                                idPrefix="Cvss3UserInteraction_"
                            />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-1">
                        <Form.Label column sm={3}>
                            Scope :
                        </Form.Label>
                        <Col sm={9}>
                            <V003MetricsButtons<Cvss3ScopeType>
                                options={cvss3ScopeOptions}
                                defaultValue={cvssV3.metrics.scope}
                                onChange={handleSelectV3Scope}
                                idPrefix="Cvss3Scope_"
                            ></V003MetricsButtons>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-1">
                        <Form.Label column sm={3}>
                            Confidentiality Impact :
                        </Form.Label>
                        <Col sm={9}>
                            <V003MetricsButtons<Cvss3ConfidentialityImpactType>
                                options={cvss3ConfidentialityImpactOptions}
                                defaultValue={cvssV3.metrics.confidentialityImpact}
                                onChange={handleSelectV3ConfidentialityImpact}
                                idPrefix="Cvss3ConfidentialityImpact_"
                            ></V003MetricsButtons>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-1">
                        <Form.Label column sm={3}>
                            Integrity Impact :
                        </Form.Label>
                        <Col sm={9}>
                            <V003MetricsButtons<Cvss3IntegrityImpactType>
                                options={cvss3IntegrityImpactOptions}
                                defaultValue={cvssV3.metrics.integrityImpact}
                                onChange={handleSelectV3IntegrityImpact}
                                idPrefix="Cvss3IntegrityImpact_"
                            />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-1">
                        <Form.Label column sm={3}>
                            Availability Impact :
                        </Form.Label>
                        <Col sm={9}>
                            <V003MetricsButtons<Cvss3AvailabilityImpactType>
                                options={cvss3AvailabilityImpactOptions}
                                defaultValue={cvssV3.metrics.availabilityImpact}
                                onChange={handleSelectV3AvailabilityImpact}
                                idPrefix="Cvss3AvailabilityImpact_"
                            />
                        </Col>
                    </Form.Group>
                </Col>
            </Form.Group>
        </Card.Body>
    );
};

export default memo(V003CvssV3Input);
