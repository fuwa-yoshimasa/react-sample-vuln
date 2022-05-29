import React from "react";
import { Card, Col, Container, Form, Row } from "react-bootstrap";
import V003CvssInput from "./V003CvssInput";
import V003DescriptionInput from "./V003DescriptionInput";
import V003ReferencesInput from "./V003ReferencesInput";

type PropType = {
    cve: string;
};

const V003Form = ({ cve }: PropType) => {
    console.log("V003Form");
    return (
        <>
            <Form>
                <Container>
                    <Row sm={1}>
                        <Col>
                            <Card>
                                <Card.Header className="fs-2">{cve} 編集</Card.Header>
                                <Card.Body>
                                    <V003DescriptionInput />
                                </Card.Body>
                                <Card.Body>
                                    <V003CvssInput />
                                </Card.Body>
                                <Card.Body>
                                    <V003ReferencesInput />
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </Form>
        </>
    );
};

export default V003Form;
