import React, { Component } from "react";
import { Card, CardBody, Progress } from "reactstrap";


class InbodyList extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <React.Fragment>
                <Card>
                    <CardBody>
                        <div className="table-responsive mt-4">
                            <table className="table table-centered table-nowrap mb-2">
                                <tbody>
                                    <tr>
                                        <td style={{ width: "30%" }} >
                                            <p className="mb-0">체중</p>
                                        </td>
                                        <td style={{ width: "25%" }} >
                                            <h5 className="mb-0">50kg</h5></td>
                                        <td>
                                            <Progress value="54" color="primary" className="bg-transparent" size="sm" />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <p className="mb-0">골격근량</p>
                                        </td>
                                        <td>
                                            <h5 className="mb-0">50kg</h5>
                                        </td>
                                        <td>
                                            <Progress value="42" color="success" className="bg-transparent" size="sm" />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <p className="mb-0">체지방량</p>
                                        </td>
                                        <td>
                                            <h5 className="mb-0">50kg</h5>
                                        </td>
                                        <td>
                                            <Progress value="40" color="warning" className="bg-transparent" size="sm" />
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </CardBody>
                </Card>
            </React.Fragment>
        );
    }
}

export default InbodyList;
