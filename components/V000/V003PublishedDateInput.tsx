import React, { ChangeEvent, useState } from "react";
import { Card, Col, Form, Row } from "react-bootstrap";
import { useAppSelector } from "../../store";
import Datetime from "react-datetime";
import moment from "moment";
import { useDispatch } from "react-redux";
import { setPublishedDate } from "../../store/V000/V003Reducer";

const V003PublishedDateInput = () => {
    const dispatch = useDispatch();
    const publishedDate = useAppSelector((state) => state.v003.inputVulnData.publishedDate);

    const [pubDate, setPubDate] = useState(moment(publishedDate));

    const hadleChangePublishedDate = (value: string | moment.Moment) => {
        const newPubdate = moment(value);
        setPubDate(newPubdate);
        dispatch(setPublishedDate(newPubdate.format()));
    };

    return (
        <>
            <Card.Title className="fw-bold">発効日時</Card.Title>
            <Form.Group as={Row}>
                <Col sm={6} md={4} lg={3}>
                    <Datetime value={pubDate} utc onChange={hadleChangePublishedDate} dateFormat="YYYY-MM-DD" timeFormat="HH:mm:ss" />
                </Col>
            </Form.Group>
        </>
    );
};

export default V003PublishedDateInput;
