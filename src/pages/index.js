import React, {Fragment} from 'react';
import {Row, Col, Container, Button} from 'reactstrap';
import {Link} from '../components/Router'
import InterviewDemo from '../components/InterviewDemo/InterviewDemo';

import EdgewareLogo from '../components/EdgewareLogo';
import EtherizeLogo from '../components/EtherizeLogo';

import './index.scss';
import JurisLogo from '../components/JurisLogo';

const InterviewLoader = () => <div className="d-flex align-items-middle">
    <Spinner />
</div>;

export default () => {
    return (
        <Fragment>
        <Row className="home-demo-hero">
            <Col className="d-flex align-items-center flex-column justify-content-center" md={12} lg={6} style={{maxHeight: "100%"}}>
                <h1 className="text-center">A Bridge Between Legal and Crypto<br></br></h1>
              </Col>
            <Col className="p-4" md={12} lg={6} style={{maxHeight: "100%"}}>
                <InterviewDemo />
            </Col>
        </Row>
        <div className="pt-4 pb-5 dark-bg">
            <h3 className="text-center pb-5">Powered By</h3>
            <Container>
                <Row>
                    <Col className="text-center">
                        <EdgewareLogo className="tech-logo" />
                        <p>A community run Substrate blockchain at the edge of what is possible. </p>
                    </Col>
                    <Col className="text-center">
                        <EtherizeLogo className="tech-logo" />
                        <p>Create legal entities on-demand using the magic of blockchain.</p>
                    </Col>
                    <Col className="text-center">
                        <JurisLogo className="tech-logo ml-auto mr-auto" />
                        <p>Open source client-side legal document automation.</p>
                    </Col>
                </Row>
            </Container>

        </div>
        </Fragment>
    )
}
