import { NextPageWithLayout } from "next";
import React from "react";
import { Col, Container, Modal, Row, Spinner } from "react-bootstrap";
import Loading from "../../components/commons/Loading";
import Layout from "../../components/Layout";
import V001SearchInput from "../../components/V000/V001SearchInput";
import V001VulnList from "../../components/V000/V001VulnList";
import { useAppSelector } from "../../store";

const V001: NextPageWithLayout = () => {
    const loading = useAppSelector((state) => state.v001.loading);
    console.log("V001");
    return (
        <>
            <Container>
                <Row xxl={1}>
                    <Col>
                        <V001SearchInput />
                    </Col>
                </Row>
                <Row xxl={1}>
                    <Col>
                        <V001VulnList />
                    </Col>
                </Row>
                <Loading loading={loading} />
            </Container>
        </>
    );
};

V001.getLayout = (page) => <Layout subTitle="脆弱性検索">{page}</Layout>;

export default V001;
