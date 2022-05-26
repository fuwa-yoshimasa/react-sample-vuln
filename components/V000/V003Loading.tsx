import { Col, Container, Row } from "react-bootstrap";
import { useAppSelector } from "../../store";
import Loading from "../commons/Loading";

const V003Loading: React.FC = () => {
    const loading = useAppSelector((state) => state.v003.loading);
    const test = useAppSelector((state) => state.v003.inputVulnData);

    console.log("V003Loading");
    return (
        <>
            <Container>
                <Row sm={1}>
                    <Col>{test.description}</Col>
                </Row>
                <Loading loading={loading} />
            </Container>
        </>
    );
};

export default V003Loading;
