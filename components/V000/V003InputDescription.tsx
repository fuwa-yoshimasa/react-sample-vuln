import { NextComponentType } from "next";
import React from "react";
import { Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../../store";
import { setDescription } from "../../store/V000/V003Reducer";

const V003InputDescription = () => {
    const dispatch = useDispatch();
    const description = useAppSelector(
        (state) => state.v003.inputVulnData.description
    );

    return (
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>内容</Form.Label>
            <Form.Control
                as="textarea"
                rows={3}
                value={description}
                onChange={(e) => dispatch(setDescription(e.target.value))}
            />
        </Form.Group>
    );
};

export default V003InputDescription;
