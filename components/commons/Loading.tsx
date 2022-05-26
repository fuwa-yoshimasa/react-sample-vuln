import React from "react";
import { Modal, Spinner } from "react-bootstrap";
import { RootState, useAppSelector } from "../../store";

type PropsType = {
    loading?: boolean;
    selector?: (state: RootState) => boolean;
};

const Loading: React.FC<PropsType> = ({ loading, selector }) => {
    const loadingSelector = selector ?? ((state) => state.app.loading);
    const storeLoading = useAppSelector(loadingSelector);

    let isLoading = loading;
    if (isLoading == undefined) {
        isLoading = storeLoading;
    }

    console.log(`Loading = ${isLoading}`);
    return (
        <Modal show={isLoading} size="sm" centered={true}>
            <Modal.Body className="text-center">
                <div>
                    <Spinner animation="border" />
                </div>
            </Modal.Body>
        </Modal>
    );
};

export default Loading;
