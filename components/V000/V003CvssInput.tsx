import React, { useState } from "react";
import {
    ButtonGroup,
    Card,
    Col,
    Form,
    Row,
    Tab,
    TabContent,
    Tabs,
    ToggleButton,
    ToggleButtonGroup,
} from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../../store";
import { setCvssV2, setCvssV3 } from "../../store/V000/V003Reducer";

const V003CvssInput = () => {
    const dispatch = useDispatch();
    const [cvssKey, setCvssKey] = useState("cvss3");
    const cvss = useAppSelector((state) => state.v003.inputVulnData.cvss);

    const handleSelectV3AttackVector = (
        e: React.ChangeEvent<HTMLButtonElement>
    ) => {
        dispatch(
            setCvssV3({
                baseScore: cvss.v3.baseScore,
                metrics: { ...cvss.v3.metrics, attackVector: e.target.value },
            })
        );
    };

    return (
        <>
            <Card.Title className="fw-bold">重大度</Card.Title>
            <Tabs
                activeKey={cvssKey}
                id="uncontrolled-tab-example"
                onSelect={(k) => setCvssKey(k ?? "")}
            >
                <Tab eventKey="cvss3" title="CVSS 3">
                    <TabContent className="border-start border-bottom border-end">
                        <Card.Body>
                            <Card.Title className="fw-bold">
                                CVSS 3.x Severity and Metrics
                            </Card.Title>
                            <Form.Group as={Row}>
                                <Form.Label className="fw-bolder" column sm={2}>
                                    Base Score:
                                </Form.Label>
                                <Col sm={1}>
                                    <Form.Control
                                        value={cvss.v3.baseScore}
                                        onChange={(e) =>
                                            dispatch(
                                                setCvssV3({
                                                    ...cvss.v3,
                                                    baseScore: e.target.value,
                                                })
                                            )
                                        }
                                    />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row}>
                                <Form.Label className="fw-bolder" column sm={2}>
                                    Metrics:
                                </Form.Label>
                                <Col sm={10}>
                                    <Form.Group as={Row}>
                                        <Form.Label column sm={2}>
                                            attackVector:
                                        </Form.Label>
                                        <ButtonGroup>
                                            <ToggleButton
                                                type="radio"
                                                variant="outline-dark"
                                                value="NETWORK"
                                                checked={
                                                    "NETWORK" ===
                                                    cvss.v3.metrics.attackVector
                                                }
                                                onChange={
                                                    handleSelectV3AttackVector
                                                }
                                            >
                                                Network
                                            </ToggleButton>
                                            <ToggleButton
                                                type="radio"
                                                variant="outline-dark"
                                                value="ADJACENT_NETWORK"
                                                checked={
                                                    "ADJACENT_NETWORK" ===
                                                    cvss.v3.metrics.attackVector
                                                }
                                                onChange={
                                                    handleSelectV3AttackVector
                                                }
                                            >
                                                Adjacent Network
                                            </ToggleButton>
                                        </ButtonGroup>
                                    </Form.Group>
                                </Col>
                            </Form.Group>
                        </Card.Body>
                    </TabContent>
                </Tab>
                <Tab eventKey="cvss2" title="CVSS 2">
                    <TabContent className="border-start border-bottom border-end">
                        <Card.Body>
                            <Card.Title className="fw-bold">
                                CVSS 2.0 Severity and Metrics
                            </Card.Title>
                            <Card.Text>
                                <Form.Label className="fw-bolder">
                                    Base Score:
                                </Form.Label>
                                <Form.Control
                                    as="text"
                                    value={cvss.v2.baseScore}
                                    onChange={(e) =>
                                        dispatch(
                                            setCvssV2({
                                                ...cvss.v2,
                                                baseScore: e.target.value,
                                            })
                                        )
                                    }
                                />
                            </Card.Text>
                            <Card.Text>
                                <span className="fw-bolder">Vector:</span>
                                {
                                    "cveItem?.impact?.baseMetricV2?.cvssV2?.vectorString"
                                }
                            </Card.Text>
                        </Card.Body>
                    </TabContent>
                </Tab>
            </Tabs>
        </>
    );
};

export default V003CvssInput;
