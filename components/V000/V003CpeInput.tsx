import React, { memo, useState } from "react";
import { Button, Card, Form, Table } from "react-bootstrap";
import { Typeahead } from "react-bootstrap-typeahead";
import { useAppDispatch, useAppSelector } from "../../store";
import { setCpe, setReferences, V003CpeType, V003ReferencesType } from "../../store/V000/V003Reducer";

const V003CpeInput = () => {
    const dispatch = useAppDispatch();
    const cpe = useAppSelector((state) => state.v003.inputVulnData.cpe);

    const [cpeInput, setCpeInput] = useState(cpe.map((c) => ({ seq: c.seq, cpe23Uri: c.cpe23Uri, options: [] })));

    const handleChangeCpe = (sel: string[], seq: number) => {
        const newCpe = cpe.map((ref) => (ref.seq === seq ? ({ seq, cpe23Uri: sel[0] } as V003CpeType) : ref));
        dispatch(setCpe(newCpe));
    };
    const handleClickAddRow = (e: React.MouseEvent<HTMLButtonElement>) => {
        const maxSeq = cpe.map((ref) => ref.seq).reduce((max, seq) => Math.max(max, seq));
        dispatch(setCpe([...cpe, { seq: maxSeq + 1, cpe23Uri: "" }]));
    };
    const handleClickDelRow = (e: React.MouseEvent<HTMLButtonElement>) => {
        const delSeq = Number(e.currentTarget.value);
        const newCpe = cpe.filter((ref) => ref.seq !== delSeq);
        dispatch(setCpe(newCpe));
    };

    console.log("V003ReferencesInput");

    return (
        <div>
            <Card.Title className="fw-bold">CPE</Card.Title>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th className="bg-primary text-white w-100">CPE</th>
                        <th className="bg-primary text-white text-nowrap">削除</th>
                    </tr>
                </thead>
                <tbody>
                    {cpeInput.map((ref) => (
                        <tr key={ref.seq}>
                            <td className="text-break">
                                {/* <Form.Control type="text" value={ref.cpe23Uri} onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChangeCpe(e, ref.seq)} /> */}
                                <Typeahead options={[ref.options]} selected={[ref.cpe23Uri]} onChange={(sel) => handleChangeCpe(sel as string[], ref.seq)} />
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

export default memo(V003CpeInput);
