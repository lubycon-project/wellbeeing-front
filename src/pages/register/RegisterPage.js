import React, { Component } from "react";
import { Card, CardBody, Col, Row, CardTitle, CardSubtitle, Container, FormGroup, Button } from "reactstrap";

class RegisterPage extends Component {
    render() {
        return (
          <React.Fragment>
              <div className="page-content">
                  <Container fluid={true}>
                      <Row>
                          <Col>
                              <Card>
                                  <CardBody>
                                      <CardTitle> 인바디 정보 입력 </CardTitle>
                                      <CardSubtitle className="mb-3"> 정확한 식단 제공을 위해 인바디 정보를 입력해주세요. </CardSubtitle>
                                      <FormGroup>
                                          <label htmlFor="example-text-input" className="col-md-2 col-form-label">체중</label>
                                          <div className="col-md-10">
                                              <input className="form-control" type="text" placeholder="체중을 입력해주세요. " />
                                          </div>
                                      </FormGroup>
                                      <FormGroup>
                                          <label htmlFor="example-text-input" className="col-md-2 col-form-label">골격근량</label>
                                          <div className="col-md-10">
                                              <input className="form-control" type="text" placeholder="골격근량을 입력해주세요. " />
                                          </div>
                                      </FormGroup>
                                      <FormGroup>
                                          <label htmlFor="example-text-input" className="col-md-2 col-form-label">체지방량</label>
                                          <div className="col-md-10">
                                              <input className="form-control" type="text" placeholder="체지방량을 입력해주세요. " />
                                          </div>
                                      </FormGroup>
                                      <FormGroup>
                                          <label htmlFor="example-text-input" className="col-md-2 col-form-label">다리근육량</label>
                                          <div className="col-md-10">
                                              <input className="form-control" type="text" placeholder="다리근육량을 입력해주세요. " />
                                          </div>
                                      </FormGroup>
                                      <FormGroup>
                                          <label htmlFor="example-text-input" className="col-md-2 col-form-label">팔근육량</label>
                                          <div className="col-md-10">
                                              <input className="form-control" type="text" placeholder="팔근육량을 입력해주세요. " />
                                          </div>
                                      </FormGroup>
                                      <FormGroup>
                                          <label htmlFor="example-text-input" className="col-md-2 col-form-label">BMI</label>
                                          <div className="col-md-10">
                                              <input className="form-control" type="text" placeholder="BMI을 입력해주세요. " />
                                          </div>
                                      </FormGroup>
                                      <FormGroup>
                                          <label htmlFor="example-text-input" className="col-md-2 col-form-label">체지방률</label>
                                          <div className="col-md-10">
                                              <input className="form-control" type="text" placeholder="체지방률을 입력해주세요. " />
                                          </div>
                                      </FormGroup>
                                      <FormGroup>
                                          <label htmlFor="example-text-input" className="col-md-2 col-form-label">세포외수분비</label>
                                          <div className="col-md-10">
                                              <input className="form-control" type="text" placeholder="세포외수분비을 입력해주세요. " />
                                          </div>
                                      </FormGroup>
                                      <Button type="submit">이전</Button>
                                      <Button color="success" type="submit">다음</Button>
                                  </CardBody>
                              </Card>
                          </Col>
                      </Row>
                  </Container>
              </div>
          </React.Fragment>
        );
    }
}

export default RegisterPage;