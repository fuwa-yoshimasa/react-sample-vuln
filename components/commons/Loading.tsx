import React from "react";
import { Modal, Spinner } from "react-bootstrap";
import { useAppSelector } from "../../store";

type PropsType = {
    loading?: boolean;
};

const Loading: React.FC<PropsType> = ({ loading = false }) => {
    const globalLoading = useAppSelector((state) => state.app.loading);
    console.log(`Loading = ${loading || globalLoading}`);
    return (
        <Modal show={loading || globalLoading} size="sm" centered={true}>
            <Modal.Body className="text-center">
                <div>
                    <Spinner animation="border" />
                </div>
            </Modal.Body>
        </Modal>
    );
};

export default Loading;
