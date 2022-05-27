import Link from "next/link";
import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";

const V001Buttons = () => {
    return (
        <Container className="mb-2">
            <Row>
                <Col sm={6}>
                    <Link href="/">
                        <Button variant="secondary" size="lg">
                            戻る
                        </Button>
                    </Link>
                </Col>
            </Row>
        </Container>
    );
};

export default V001Buttons;
