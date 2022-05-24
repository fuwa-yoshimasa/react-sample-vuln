import type { NextPage } from "next";
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

const Home: NextPage = () => {
    return (
        <div>
            <header>
                <Navbar bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="#home">
                            Vulnerabilities Sample
                        </Navbar.Brand>
                    </Container>
                </Navbar>
            </header>
            <Container>
                <Row>
                    <Col>
                        <Card style={{ width: "18rem" }}>
                            <Card.Header bg="primary">Menu</Card.Header>
                            <ListGroup variant="flush">
                                <ListGroup.Item>
                                    <Link href={"/V000/V001"}>
                                        Vulnerabilities
                                    </Link>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <Link href={"/V000useContext/V001"}>
                                        Vulnerabilities (useContext)
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

export default Home;
