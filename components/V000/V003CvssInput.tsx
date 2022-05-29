import React, { useState } from "react";
import { ButtonGroup, Card, Col, Form, Row, Tab, TabContent, Tabs, ToggleButton, ToggleButtonGroup } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../../store";
import { setCvssV2, setCvssV3, setCvssV3AttackComplexity, setCvssV3AttackVector, V003Cvss3MetricsType } from "../../store/V000/V003Reducer";
import V003CvssV2Input from "./V003CvssV2Input";
import V003CvssV3Input from "./V003CvssV3Input";
import V003MetricsButtons from "./V003MetricsButtons";

// CVSS入力部分
const V003CvssInput = () => {
    const dispatch = useDispatch();
    const [cvssKey, setCvssKey] = useState("cvss3");
    const cvss = useAppSelector((state) => state.v003.inputVulnData.cvss);

    return (
        <>
            <Card.Title className="fw-bold">重大度</Card.Title>
            <Tabs activeKey={cvssKey} id="uncontrolled-tab-example" onSelect={(k) => setCvssKey(k ?? "")}>
                <Tab eventKey="cvss3" title="CVSS 3">
                    <TabContent className="border-start border-bottom border-end">
                        <V003CvssV3Input />
                    </TabContent>
                </Tab>
                <Tab eventKey="cvss2" title="CVSS 2">
                    <TabContent className="border-start border-bottom border-end">
                        <V003CvssV2Input />
                    </TabContent>
                </Tab>
            </Tabs>
        </>
    );
};

export default V003CvssInput;
