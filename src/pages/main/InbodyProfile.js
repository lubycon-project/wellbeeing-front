import React, { Component } from "react";

import { Row, Col, Card, CardBody, CardTitle } from "reactstrap";

import ApexRadial from "./ApexRadial";

class InbodyProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <React.Fragment> <Card>
                <CardBody>
                    <CardTitle className="mb-4">
                        나의 인바디
                    </CardTitle>
                    <Row>
                        <Col sm="12">
                            <div className="mt-4 mt-sm-0">
                                <ApexRadial />
                            </div>
                        </Col>
                    </Row>
                    <p className="text-muted mt-4 mb-3">인바디 업데이트하기</p>
                </CardBody>
            </Card>
            </React.Fragment>
        );
    }
}

export default InbodyProfile;
