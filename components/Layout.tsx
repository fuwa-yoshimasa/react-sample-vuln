import React, { ReactNode } from "react";
import ReactLoading from "react-loading";
import { Container, Navbar, Spinner } from "react-bootstrap";
import { Provider, useDispatch, useSelector } from "react-redux";
import store, { useAppSelector } from "../store";
import Loading from "./commons/Loading";

type Props = {
    children: ReactNode;
    subTitle?: string;
};

const Layout: React.FC<Props> = ({ children, subTitle = "" }) => {
    return (
        <div>
            <header>
                <Navbar bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand>
                            Vulnerabilities Sample [{subTitle}]
                        </Navbar.Brand>
                    </Container>
                </Navbar>
            </header>
            <main className="mt-3">{children}</main>
            <Loading />
        </div>
    );
};

export default Layout;
