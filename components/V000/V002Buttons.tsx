import Link from "next/link";
import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";

type PropType = {
    cve: string;
};

const V002Buttons: React.FC<PropType> = ({ cve }) => {
    return (
        <Container className="mt-2">
            <Row>
                <Col sm={6}>
                    <Link
                        href={{
                            pathname: "/V000/V001",
                            query: { back: true },
                        }}
                    >
                        <Button variant="secondary" size="lg">
                            戻る
                        </Button>
                    </Link>
                </Col>
                <Col sm={6} className="d-flex flex-row-reverse">
                    <Button variant="primary" size="lg">
                        編集
                    </Button>
                </Col>
            </Row>
        </Container>
    );
};

export default V002Buttons;
