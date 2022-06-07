import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { clearInputData } from "../../store/V000/V003Reducer";

type PropType = {
    cve: string;
};

const V003Buttons = ({ cve }: PropType) => {
    const router = useRouter();
    const dispatch = useDispatch();

    const handleClickCancelButton = () => {
        router.push({ pathname: "/V000/V002", query: { cve } });
        dispatch(clearInputData());
    };

    return (
        <Container className="mt-2 mb-2">
            <Row>
                <Col sm={6}>
                    <Button variant="secondary" size="lg" onClick={handleClickCancelButton}>
                        キャンセル
                    </Button>
                </Col>
                <Col sm={6} className="d-flex flex-row-reverse">
                    <Button variant="primary" size="lg">
                        登録
                    </Button>
                </Col>
            </Row>
        </Container>
    );
};

export default V003Buttons;
