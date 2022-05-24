import Link from "next/link";
import React from "react";
import { Button } from "react-bootstrap";

type PropType = {
    cve: string;
};

const V002Buttons: React.FC<PropType> = ({ cve }) => {
    return (
        <div>
            <Button variant="primary position-fixed bottom-0 end-0 me-2 mb-2">
                編集
            </Button>
        </div>
    );
};

export default V002Buttons;
