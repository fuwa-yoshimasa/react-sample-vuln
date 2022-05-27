import React from "react";
import { Button, Col, FloatingLabel, Form, Row } from "react-bootstrap";
import {
    useSearchVulnData,
    useSetSearchText,
} from "../../hooks/V000/V001Hooks";
import { useAppDispatch, useAppSelector } from "../../store";

const V001SearchInput = () => {
    const dispatch = useAppDispatch();

    const searchText = useAppSelector((state) => state.v001.searchText);
    const searchVulnData = useSearchVulnData();

    const handleChangeSearchText = useSetSearchText();

    const handleClickSearchButton = () => {
        searchVulnData(searchText, 0);
    };

    console.log("V001SearchInput");
    return (
        <>
            <Form>
                <Row>
                    <Col>
                        <Form.Group controlId="formGroupSearchText">
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Search text"
                                className="mb-2"
                            >
                                <Form.Control
                                    type="text"
                                    placeholder="Search text"
                                    value={searchText}
                                    onChange={handleChangeSearchText}
                                />
                            </FloatingLabel>
                        </Form.Group>
                    </Col>
                    <Col className="d-flex align-items-end">
                        <Form.Group controlId="formGroupSubmit">
                            <Button
                                variant="primary"
                                className="mb-2"
                                onClick={handleClickSearchButton}
                                size="lg"
                            >
                                検索
                            </Button>
                        </Form.Group>
                    </Col>
                </Row>
            </Form>
        </>
    );
};

export default V001SearchInput;
