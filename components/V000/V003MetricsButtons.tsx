import { Action, ActionCreatorWithOptionalPayload, AnyAction } from "@reduxjs/toolkit";
import React, { memo } from "react";
import { ToggleButton, ToggleButtonGroup } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { RootState, useAppSelector } from "../../store";
import { V003Cvss3MetricsType } from "../../store/V000/V003Reducer";

// Propsでデータもらうバージョン
// 引数の型
type PropType<Tkey extends string | undefined> = {
    options: { key: Tkey; name: string }[];
    defaultValue: Tkey;
    onChange: (v: Tkey) => void;
    idPrefix: string;
};

// Metricsボタン用のコンポーネント
const V003MetricsButtons = <Tkey extends string | undefined>({ options, defaultValue, onChange, idPrefix }: PropType<Tkey>) => {
    console.log(`defaultValue:${defaultValue}`);
    return (
        <ToggleButtonGroup type="radio" name={idPrefix + "_buttonGroup"} value={defaultValue} onChange={onChange} size="sm">
            {options.map((option) => {
                return (
                    <ToggleButton key={idPrefix + option.key} type="radio" variant="outline-primary" value={option.key ?? ""} id={idPrefix + option.key}>
                        {option.name}
                    </ToggleButton>
                );
            })}
        </ToggleButtonGroup>
    );
};

// Reduxの情報もらうバージョン
// 引数の型
// type PropType<Tkey extends string | undefined> = {
//     options: { key: Tkey; name: string }[];
//     selector: (state: RootState) => Tkey;
//     reducer: ActionCreatorWithOptionalPayload<Tkey, string>;
//     idPrefix: string;
// };

// // Metricsボタン用のコンポーネント
// const V003MetricsButtons = <Tkey extends string | undefined>({ options, selector, reducer, idPrefix }: PropType<Tkey>) => {
//     const dispatch = useDispatch();
//     const value = useAppSelector(selector);

//     const handleChange = (e: Tkey) => {
//         dispatch(reducer(e));
//     };

//     console.log(`defaultValue:${value}`);
//     return (
//         <ToggleButtonGroup type="radio" name={idPrefix + "_buttonGroup"} value={value} onChange={handleChange}>
//             {options.map((option) => {
//                 return (
//                     <ToggleButton key={idPrefix + option.key} type="radio" variant="outline-primary" value={option.key ?? ""} id={idPrefix + option.key}>
//                         {option.name}
//                     </ToggleButton>
//                 );
//             })}
//         </ToggleButtonGroup>
//     );
// };
export default memo(V003MetricsButtons) as typeof V003MetricsButtons;
