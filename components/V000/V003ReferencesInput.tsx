import React, { memo } from "react";
import { Button, Card, Form, Table } from "react-bootstrap";
import { useAppDispatch, useAppSelector } from "../../store";
import { setReferences, V003ReferencesType } from "../../store/V000/V003Reducer";

const V003ReferencesInput = () => {
    const dispatch = useAppDispatch();
    const references = useAppSelector((state) => state.v003.inputVulnData.references);

    const handleChangeReference = (e: React.ChangeEvent<HTMLInputElement>, seq: number) => {
        const newReferences = references.map((ref) => (ref.seq === seq ? ({ seq, url: e.target.value } as V003ReferencesType) : ref));
        dispatch(setReferences(newReferences));
    };
    const handleClickAddRow = (e: React.MouseEvent<HTMLButtonElement>) => {
        const maxSeq = references.map((ref) => ref.seq).reduce((max, seq) => Math.max(max, seq));
        dispatch(setReferences([...references, { seq: maxSeq + 1, url: "" }]));
    };
    const handleClickDelRow = (e: React.MouseEvent<HTMLButtonElement>) => {
        const delSeq = Number(e.currentTarget.value);
        const newReferences = references.filter((ref) => ref.seq !== delSeq);
        dispatch(setReferences(newReferences));
    };

    console.log("V003ReferencesInput");

    return (
        <div>
            <Card.Title className="fw-bold">References to Advisories, Solutions, and Tools</Card.Title>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th className="bg-primary bg-gradient text-white bg-opacity-75 w-100">References</th>
                        <th className="bg-primary bg-gradient text-white bg-opacity-75 text-nowrap">削除</th>
                    </tr>
                </thead>
                <tbody>
                    {references.map((ref) => (
                        <tr key={ref.seq}>
                            <td className="text-break">
                                <Form.Control type="text" value={ref.url} onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChangeReference(e, ref.seq)} />
                            </td>
                            <td className="text-nowrap">
                                <Button variant="danger" onClick={handleClickDelRow} value={ref.seq}>
                                    削除
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            <Card.Text className="d-flex justify-content-end">
                <Button variant="primary" onClick={handleClickAddRow} className="me-1">
                    追加
                </Button>
            </Card.Text>
        </div>
    );
};

export default memo(V003ReferencesInput);
