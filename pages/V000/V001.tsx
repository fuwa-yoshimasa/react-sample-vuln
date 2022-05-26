import { NextPageWithDefaultLayout, NextPageWithLayout } from "next";
import { useRouter } from "next/router";
import React from "react";
import V001Loading from "../../components/V000/V001Loading";
import { useAppDispatch, useAppSelector } from "../../store";
import { clearVulnData } from "../../store/V000/V001Reducer";

const V001: NextPageWithDefaultLayout = () => {
    const router = useRouter();
    const dispatch = useAppDispatch();

    if (!router.query.back) {
        dispatch(clearVulnData());
    }

    console.log("V001");
    return (
        <>
            <V001Loading />
        </>
    );
};

V001.subTitle = "脆弱性検索";

export default V001;
