import { Col, Container, Row } from "react-bootstrap";
import { useAppSelector } from "../../store";
import Loading from "../commons/Loading";
import V001Buttons from "./V001Buttons";
import V001SearchInput from "./V001SearchInput";
import V001VulnList from "./V001VulnList";

const V001Loading: React.FC = () => {
    const loading = useAppSelector((state) => state.v001.loading);

    console.log("V001Loading");
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
                <Loading loading={loading} />
            </Container>
            <V001Buttons />
        </>
    );
};

export default V001Loading;
