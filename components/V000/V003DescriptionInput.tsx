import { NextComponentType } from "next";
import React from "react";
import { Form, Card } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../../store";
import { setDescription } from "../../store/V000/V003Reducer";

const V003DescriptionInput = () => {
    const dispatch = useDispatch();
    const description = useAppSelector(
        (state) => state.v003.inputVulnData.description
    );

    return (
        <>
            <Card.Title className="fw-bold">内容</Card.Title>
            <Form.Control
                as="textarea"
                rows={3}
                value={description}
                onChange={(e) => dispatch(setDescription(e.target.value))}
            />
        </>
    );
};

export default V003DescriptionInput;
