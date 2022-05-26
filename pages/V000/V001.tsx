import { NextPageWithDefaultLayout, NextPageWithLayout } from "next";
import { useRouter } from "next/router";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Loading from "../../components/commons/Loading";
import V001Buttons from "../../components/V000/V001Buttons";
import V001SearchInput from "../../components/V000/V001SearchInput";
import V001VulnList from "../../components/V000/V001VulnList";
import { useAppDispatch, useAppSelector } from "../../store";
import { clearVulnData } from "../../store/V000/V001Reducer";

const V001: NextPageWithDefaultLayout = () => {
    const router = useRouter();
    const dispatch = useAppDispatch();

    const loadingSelector = (state) => state.v001.loading;

    if (!router.query.back) {
        dispatch(clearVulnData());
    }

    console.log("V001");
    return (
        <>
            <Container>
                <Row sm={1}>
                    <Col>
                        <V001SearchInput />
                    </Col>
                </Row>
                <Row sm={1}>
                    <Col>
                        <V001VulnList />
                    </Col>
                </Row>
                <Loading selector={loadingSelector} />
            </Container>
            <V001Buttons />
        </>
    );
};

V001.subTitle = "脆弱性検索";

export default V001;
