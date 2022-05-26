import { NextPageWithDefaultLayout } from "next";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import V003Loading from "../../components/V000/V003Loading";
import { useGetVulnData } from "../../hooks/V000/V003Hooks";
import { useAppDispatch } from "../../store";

const V003: NextPageWithDefaultLayout = () => {
    const router = useRouter();
    const getVulnData = useGetVulnData();

    const cve = router.query.cve as string;
    console.log(cve);

    // 入力対象データ取得
    useEffect(() => {
        if (cve) {
            getVulnData(cve);
        }
    }, [cve]);

    return (
        <div>
            <V003Loading />
        </div>
    );
};

V003.subTitle = "脆弱性編集";

export default V003;
