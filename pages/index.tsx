import type { NextPage, NextPageWithDefaultLayout } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import {
    Alert,
    Card,
    Col,
    Container,
    ListGroup,
    Navbar,
    Row,
} from "react-bootstrap";
import styles from "../styles/Home.module.css";

const Home: NextPageWithDefaultLayout = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <Card style={{ width: "18rem" }}>
                            <Card.Header>Menu</Card.Header>
                            <ListGroup variant="flush">
                                <ListGroup.Item>
                                    <Link href={"/V000/V001"}>
                                        Vulnerabilities
                                    </Link>
                                </ListGroup.Item>
                            </ListGroup>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};
Home.subTitle = "Menu";

export default Home;
