import { NextPageWithDefaultLayout } from "next";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Loading from "../../components/commons/Loading";
import V003InputDescription from "../../components/V000/V003InputDescription";
import { useGetVulnData } from "../../hooks/V000/V003Hooks";
import { useAppDispatch, useAppSelector } from "../../store";

const V003: NextPageWithDefaultLayout = () => {
    const router = useRouter();
    const getVulnData = useGetVulnData();
    const test = useAppSelector((state) => state.v003.inputVulnData);

    const loadingSelector = (state) => state.v003.loading;

    const cve = router.query.cve as string;
    console.log(cve);

    // 入力対象データ取得
    useEffect(() => {
        if (cve) {
            getVulnData(cve);
        }
    }, [cve]);

    return (
        <>
            <Container>
                <Row sm={1}>
                    <Col>
                        <V003InputDescription />
                    </Col>
                </Row>
                <Loading selector={loadingSelector} />
            </Container>
        </>
    );
};

V003.subTitle = "脆弱性編集";

export default V003;
