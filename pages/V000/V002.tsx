import { NextPageWithLayout } from "next";
import { useRouter } from "next/router";
import React from "react";
import Layout from "../../components/Layout";
import V002Buttons from "../../components/V000/V002Buttons";
import V002Detail from "../../components/V000/V002Detail";

type V002QueryType = {
    cve: string;
};

const V002: NextPageWithLayout = () => {
    const router = useRouter();
    const cve = router.query.cve as string;
    return (
        <div>
            <V002Detail cve={cve} />
            <V002Buttons cve={cve} />
        </div>
    );
};

V002.getLayout = (page) => <Layout subTitle="脆弱性詳細">{page}</Layout>;

export default V002;
