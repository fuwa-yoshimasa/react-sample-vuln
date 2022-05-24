import React, { useContext, useState } from "react";
import { Button, Col, FloatingLabel, Form, Row } from "react-bootstrap";
import { CveResponse } from "../../types/public_api/cve-apires-types";
import { V001ActionEnum, V001Context } from "./V001Context";

const V001SearchInput: React.FC = () => {
    const {
        state: { searchText },
        dispatch,
    } = useContext(V001Context);

    const handleChangeSearchText = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: V001ActionEnum.SET_SEARCH_TEXT,
            searchText: e.target.value,
        });
    };

    const handleClickSearchButton = async () => {
        const fetchCve = (): Promise<CveResponse> =>
            fetch(
                "https://services.nvd.nist.gov/rest/json/cves/1.0/"
            ).then((r) => r.json());
        const cveResult = await fetchCve();
        dispatch({ type: V001ActionEnum.SET_VULN_DATA, vulnData: cveResult });
    };

    console.log("V001SearchInput useContext");
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
                            >
                                Primary
                            </Button>
                        </Form.Group>
                    </Col>
                </Row>
            </Form>
        </>
    );
};

export default V001SearchInput;
