import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withRouter } from 'react-router-dom';

import { Card, CardBody, Col, Row, CardTitle, CardSubtitle, Container, FormGroup,
    TabContent, TabPane, Form,  Nav, NavItem, NavLink, Button } from "reactstrap";

import classnames from 'classnames';
import axios from 'axios';

import './onBoard.scss';

class OnBoardPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeTab: 1,
            activeTabProgress: 1,
            progressValue: 25,
            dietRequest: {
                activeMetabolism: 'ACTIVE_LV0', // 활동대사량
                age: 0,                         // 나이
                bodyFatWeight: 0,               // 체지방량
                dietType: 'DECREASE_WEIGHT',    // 식단 유형
                gender: '',                     // 성별
                height: 0,                      // 키
                physiqueWeight: 0,              // 골격근량
                weight: 0,                      // 체중

            },
            dietList: [],
        };

        this.toggleTab.bind(this);
        this.toggleTabProgress.bind(this);
    }

    toggleTab(tab) {
        if (this.state.activeTab !== tab) {
            if (tab >= 1 && tab <= 3) {
                this.setState({
                    activeTab: tab
                });
            }
        }
    }

    toggleTabProgress(tab) {
        if (this.state.activeTabProgress !== tab) {
            if (tab >= 1 && tab <= 3) {
                this.setState({
                    activeTabProgress: tab
                });

                if (tab === 1) {
                    this.setState({progressValue: 25})
                }
                if (tab === 2) {
                    this.setState({progressValue: 50})
                }
                if (tab === 3) {
                    this.setState({progressValue: 75})
                }
            }
        }
    }

    // https://api.wellbeeing.xyz/api/today-diet
    onSubmitInput = () => {
        const { dietRequest } = this.state;
        console.log('=parameter==');
        console.log(dietRequest);
        console.log('=parameter==');
        // axios.post('/api/week-diet', { dietRequest: dietRequest
        // })
        //     .then(response => {
        //         const { dietList } = response.data;
        //         console.log('===');
        //         console.log(response.data);
        //         console.log(dietList);
        //         console.log('===');
        //         this.setState({
        //             dietList: dietList,
        //         })
        //         // this.handleGoHome();
        //     })
        //     .catch(error => {
        //         console.log("Error");
        //     });
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                console.log(response);
            });
    };

    handleGoHome = () => {
        this.props.history.push('/main');
    };

    onChangeInput = async (type, input) => {
        const { dietRequest } = this.state;
        dietRequest[type] = input;
        this.setState({
            dietRequest,
        });
    };

    render() {
        return (
          <React.Fragment>
              <div className="page-content">
                  <Container fluid={true}>
                      <TabContent activeTab={this.state.activeTab} className="twitter-bs-wizard-tab-content">
                          <TabPane tabId={1}>
                              <div className="onboardingForm">
                                  <h2> 반갑습니다. </h2>
                                  <h3> 인바디 정보를 입력하고 웰비잉의 건강식단을 받아보세요! </h3>
                              </div>
                          </TabPane>
                          <TabPane tabId={2}>
                              <div className="checkout-tabs">
                                  <h3> 식단 유형을 선택해주세요. </h3>
                                  <Row>
                                      <Col lg="2">
                                          <Nav className="flex-column" pills>
                                              <NavItem>
                                                  <NavLink
                                                      className={classnames({ active: this.state.activeTab === '1' })}
                                                      onClick={() => { this.toggleTab(this.state.activeTab + 1);} }
                                                  >
                                                      <i className="bx bx-group d-block check-nav-icon mt-4 mb-2"></i>
                                                      <p className="font-weight-bold mb-4">체중증가</p>
                                                  </NavLink>
                                              </NavItem>
                                              <NavItem>
                                                  <NavLink
                                                      className={classnames({ active: this.state.activeTab === '2' })}
                                                      onClick={() => { this.toggleTab(this.state.activeTab + 1);} }
                                                  >
                                                      <i className="bx bx-group d-block check-nav-icon mt-4 mb-2"></i>
                                                      <p className="font-weight-bold mb-4">체중유지</p>
                                                  </NavLink>
                                              </NavItem>
                                              <NavItem>
                                                  <NavLink
                                                      className={classnames({ active: this.state.activeTab === '2' })}
                                                      onClick={() => { this.toggleTab(this.state.activeTab + 1);} }
                                                  >
                                                      <i className="bx bx-group d-block check-nav-icon mt-4 mb-2"></i>
                                                      <p className="font-weight-bold mb-4">체중감소</p>
                                                  </NavLink>
                                              </NavItem>
                                          </Nav>
                                      </Col>
                                  </Row>
                              </div>
                          </TabPane>
                          <TabPane tabId={3}>
                              <Form>
                              <Row>
                                  <Col>
                                      <Card>
                                          <CardBody>
                                              <CardTitle> 인바디 정보 입력 </CardTitle>
                                              <CardSubtitle className="mb-3"> 정확한 식단 제공을 위해 인바디 정보를 입력해주세요. </CardSubtitle>
                                              <FormGroup>
                                                  <label htmlFor="example-text-input" className="col-md-2 col-form-label">체중</label>
                                                  <div className="col-md-10">
                                                      <input
                                                          className="form-control"
                                                          type="text"
                                                          placeholder="체중을 입력해주세요. "
                                                          onChange={(e) => this.onChangeInput('weight', e.target.value)}
                                                      />
                                                  </div>
                                              </FormGroup>
                                              <FormGroup>
                                                  <label htmlFor="example-text-input" className="col-md-2 col-form-label">나이</label>
                                                  <div className="col-md-10">
                                                      <input
                                                          className="form-control"
                                                          type="text"
                                                          placeholder="나이를 입력해주세요. "
                                                          onChange={(e) => this.onChangeInput('age', e.target.value)}
                                                      />
                                                  </div>
                                              </FormGroup>
                                              <FormGroup>
                                                  <label htmlFor="example-text-input" className="col-md-2 col-form-label">성별</label>
                                                  <div className="col-md-10">
                                                      <input
                                                          className="form-control"
                                                          type="text"
                                                          placeholder="성별을 입력해주세요. (ex. MAN/WOMAN) "
                                                          onChange={(e) => this.onChangeInput('gender', e.target.value)}
                                                      />
                                                  </div>
                                              </FormGroup>
                                              <FormGroup>
                                                  <label htmlFor="example-text-input" className="col-md-2 col-form-label">키(cm)</label>
                                                  <div className="col-md-10">
                                                      <input
                                                          className="form-control"
                                                          type="text"
                                                          placeholder="키를 입력해주세요. "
                                                          onChange={(e) => this.onChangeInput('height', e.target.value)}
                                                      />
                                                  </div>
                                              </FormGroup>
                                              <FormGroup>
                                                  <label htmlFor="example-text-input" className="col-md-2 col-form-label">골격근량(kg)</label>
                                                  <div className="col-md-10">
                                                      <input
                                                          className="form-control"
                                                          type="text"
                                                          placeholder="골격근량을 입력해주세요. "
                                                          onChange={(e) => this.onChangeInput('physiqueWeight', e.target.value)}
                                                      />
                                                  </div>
                                              </FormGroup>
                                              <FormGroup>
                                                  <label htmlFor="example-text-input" className="col-md-2 col-form-label">체지방량(kg)</label>
                                                  <div className="col-md-10">
                                                      <input
                                                          className="form-control"
                                                          type="text"
                                                          placeholder="체지방량을 입력해주세요. "
                                                          onChange={(e) => this.onChangeInput('bodyFatWeight', e.target.value)}
                                                      />
                                                  </div>
                                              </FormGroup>
                                              <Button> 이전 </Button>
                                              <Button
                                                  onClick={() => this.onSubmitInput()}>
                                                  저장
                                              </Button>
                                          </CardBody>
                                      </Card>
                                  </Col>
                              </Row>
                              </Form>
                          </TabPane>
                      </TabContent>
                      <ul className="pager wizard twitter-bs-wizard-pager-link">
                          <li className={this.state.activeTab === 1 ? "previous disabled" : "previous"}><Link to="#" onClick={() => { this.toggleTab(this.state.activeTab - 1);} }>Previous</Link></li>
                          <li className={this.state.activeTab === 3 ? "next disabled" : "next"}><Link to="#" onClick={() => { this.toggleTab(this.state.activeTab + 1);} }>Next</Link></li>
                      </ul>
                  </Container>
              </div>
          </React.Fragment>
        );
    }
}

export default withRouter(OnBoardPage);