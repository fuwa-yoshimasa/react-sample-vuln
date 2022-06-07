import React, { ChangeEvent, useState } from "react";
import { Card, Col, Form, Row } from "react-bootstrap";
import { useAppSelector } from "../../store";
import Datetime from "react-datetime";
import moment from "moment";

const V003LastModifiedDateInput = () => {
    const lastModifiedDate = useAppSelector((state) => state.v003.inputVulnData.lastModifiedDate);

    const [modDate, setModDate] = useState(moment(lastModifiedDate));

    const hadleChangeLastModifiedDate = (value: string | moment.Moment) => {
        setModDate(moment(value));
    };

    return (
        <>
            <Card.Title className="fw-bold">最終更新日時</Card.Title>
            <Form.Group as={Row}>
                <Col sm={6} md={4} lg={3}>
                    <Datetime value={modDate} onChange={hadleChangeLastModifiedDate} dateFormat="YYYY-MM-DD" timeFormat="HH:mm:ss" />
                </Col>
            </Form.Group>
        </>
    );
};

export default V003LastModifiedDateInput;
