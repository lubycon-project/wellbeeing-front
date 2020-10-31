import React, { Component } from "react";
import { Container, Row, Col, Button, Card, CardBody, Modal, ModalHeader, ModalBody, ModalFooter, Media, Table } from "reactstrap";
import { withStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import InbodyProfile from "./InbodyProfile";
import InbodyList from "./InbodyList";
import axios from "axios";

const styles = theme => ({
    root: {
        width: '100%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        flexBasis: '33.33%',
        flexShrink: 0,
    },
    secondaryHeading: {
        fontSize: theme.typography.pxToRem(15),
        color: theme.palette.text.secondary,
    },
});

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            diet: [
                {title: "아침", iconClass: "bx bx-sun", description: "삶은 고구마&감자 410Kcal"},
                {title: "점심", iconClass: "bx bx-star", description: "삶은 고구마&감자"},
                {title: "저녁", iconClass: "bx bx-moon", description: "삶은 고구마&감자"}
            ],
            email: [
                {title: "Week", linkto: "#", isActive: false},
                {title: "Month", linkto: "#", isActive: false},
                {title: "Year", linkto: "#", isActive: true}
            ],
            modal: false,
            expanded: '',
            setExpanded: '',
            todayDietList: [],
            weekDietList: [],
            inbodyResult: [],
        };
        this.togglemodal.bind(this);
    }

    componentDidMount() {
        const { dietRequest, inbodyRequest } = this.props.location.state;
        this.lazyLoading(dietRequest, inbodyRequest);
    }

    lazyLoading = (dietRequest, inbodyRequest) => {
        // 오늘의 식단 리스트 넘기기
        axios.post('https://api.wellbeeing.xyz/api/today-diet', dietRequest)
            .then(response => {
                const { dietList } = response.data;
                this.setState({
                    todayDietList: dietList[0].oneDayDietList,
                })
            })
            .catch(error => {
                console.log("Error");
            });

        // 이번주 식단
        axios.post('https://api.wellbeeing.xyz/api/week-diet', dietRequest)
            .then(response => {
                const { dietList } = response.data;
                this.setState({
                    weekDietList: dietList,
                })
            })
            .catch(error => {
                console.log("Error");
            });

        // 인바디 정보
        axios.post('https://api.wellbeeing.xyz/api/inbody-result', inbodyRequest)
            .then(response => {
                const { inbodyResult } = response.data;
                this.setState({
                    inbodyResult: inbodyResult,
                })
            })
            .catch(error => {
                console.log("Error");
            });
    };

    handleChange = (panel) => (event, isExpanded) => {
        this.setState({
            expanded: isExpanded ? panel : false,
        });
    };

    togglemodal = () => {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    };

    render() {
        const { classes } = this.props;
        const { expanded } = this.state;
        const { todayDietList, weekDietList, inbodyResult } = this.state;
        console.log('== render ==');
        console.log(inbodyResult);
        console.log('== render ==');
        const today = todayDietList.map((today) => {
            let food;
            food = today.foodList.map((food) => food.name)
            return {
                type: today.type,
                foodList: food[0],
            }
        });
        const weekList = weekDietList.map((week, index) =>
            (
                <Accordion key={index} expanded={expanded === 'panel1'} onChange={this.handleChange('panel1')}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1bh-content"
                        id="panel1bh-header"
                    >
                        <Typography className={classes.heading}>{week.date}</Typography>
                        <Typography className={classes.secondaryHeading}>하루 식단</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        {
                            week.oneDayDietList.map((week, index) =>
                            <Col md="4" key={"_col_" + index}>
                                <Card className="mini-stat-wid">
                                    <CardBody>
                                        <Media>
                                            <Media body>
                                                <h4 className="text-muted font-weight-medium">{week.type}</h4>
                                                {week.foodList.map((food, index) => <p key={index} className="mb-0"> {food.name} {food.quantity + "개"} {food.calorie +"cal"}<br/></p>)}
                                            </Media>
                                        </Media>
                                    </CardBody>
                                </Card>
                            </Col>
                            )
                        }
                    </AccordionDetails>
                </Accordion>
            )
        );
        return (
            <React.Fragment>
                <div className="page-content">
                    <Container fluid>
                        <Row>
                            <Col xl="8">
                                <Row>
                                    {
                                        today.map((diet, key) =>
                                            <Col md="4" key={"_col_" + key}>
                                                <Card className="mini-stats-wid">
                                                    <CardBody>
                                                        <div className="mini-stat-icon avatar-sm rounded-circle bg-primary align-self-center">
                                                                <span className="avatar-title">
                                                                    <i className={"bx " + "bx bx-sun" + " font-size-24"}></i>
                                                                </span>
                                                        </div>
                                                        <Media>
                                                            <Media body>
                                                                <p className="text-muted font-weight-medium">{diet.type}</p>
                                                                <h4 className="mb-0">{diet.foodList}</h4>
                                                            </Media>
                                                        </Media>
                                                    </CardBody>
                                                </Card>
                                            </Col>
                                        )
                                    }
                                </Row>
                                <div className={classes.root}>
                                    {weekList}
                                    {/*<Accordion expanded={expanded === 'panel1'} onChange={this.handleChange('panel1')}>*/}
                                        {/*<AccordionSummary*/}
                                            {/*expandIcon={<ExpandMoreIcon />}*/}
                                            {/*aria-controls="panel1bh-content"*/}
                                            {/*id="panel1bh-header"*/}
                                        {/*>*/}
                                            {/*<Typography className={classes.heading}>2020.09.04</Typography>*/}
                                            {/*<Typography className={classes.secondaryHeading}>식단</Typography>*/}
                                        {/*</AccordionSummary>*/}
                                        {/*<AccordionDetails>*/}
                                           {/*{*/}
                                                {/*this.state.diet.map((diet, key) =>*/}
                                                    {/*<Col md="4" key={"_col_" + key}>*/}
                                                        {/*<Card className="mini-stats-wid">*/}
                                                            {/*<CardBody>*/}
                                                                {/*<div className="mini-stat-icon avatar-sm rounded-circle bg-primary align-self-center">*/}
                                                                {/*<span className="avatar-title">*/}
                                                                    {/*<i className={"bx " + diet.iconClass + " font-size-24"}></i>*/}
                                                                {/*</span>*/}
                                                                {/*</div>*/}
                                                                {/*<Media>*/}
                                                                    {/*<Media body>*/}
                                                                        {/*<p className="text-muted font-weight-medium">{diet.title}</p>*/}
                                                                        {/*<h4 className="mb-0">{diet.description}</h4>*/}
                                                                    {/*</Media>*/}
                                                                {/*</Media>*/}
                                                            {/*</CardBody>*/}
                                                        {/*</Card>*/}
                                                    {/*</Col>*/}
                                                {/*)*/}
                                            {/*}*/}
                                        {/*</AccordionDetails>*/}
                                    {/*</Accordion>*/}
                                    {/*<Accordion expanded={expanded === 'panel2'} onChange={this.handleChange('panel2')}>*/}
                                        {/*<AccordionSummary*/}
                                            {/*expandIcon={<ExpandMoreIcon />}*/}
                                            {/*aria-controls="panel2bh-content"*/}
                                            {/*id="panel2bh-header"*/}
                                        {/*>*/}
                                            {/*<Typography className={classes.heading}>2020.09.03</Typography>*/}
                                            {/*<Typography className={classes.secondaryHeading}>식단</Typography>*/}
                                        {/*</AccordionSummary>*/}
                                        {/*<AccordionDetails>*/}
                                            {/*{*/}
                                                {/*this.state.diet.map((diet, key) =>*/}
                                                    {/*<Col md="4" key={"_col_" + key}>*/}
                                                        {/*<Card className="mini-stats-wid">*/}
                                                            {/*<CardBody>*/}
                                                                {/*<div className="mini-stat-icon avatar-sm rounded-circle bg-primary align-self-center">*/}
                                                                {/*<span className="avatar-title">*/}
                                                                    {/*<i className={"bx " + diet.iconClass + " font-size-24"}></i>*/}
                                                                {/*</span>*/}
                                                                {/*</div>*/}
                                                                {/*<Media>*/}
                                                                    {/*<Media body>*/}
                                                                        {/*<p className="text-muted font-weight-medium">{diet.title}</p>*/}
                                                                        {/*<h4 className="mb-0">{diet.description}</h4>*/}
                                                                    {/*</Media>*/}
                                                                {/*</Media>*/}
                                                            {/*</CardBody>*/}
                                                        {/*</Card>*/}
                                                    {/*</Col>*/}
                                                {/*)*/}
                                            {/*}*/}
                                        {/*</AccordionDetails>*/}
                                    {/*</Accordion>*/}
                                    {/*<Accordion expanded={expanded === 'panel3'} onChange={this.handleChange('panel3')}>*/}
                                        {/*<AccordionSummary*/}
                                            {/*expandIcon={<ExpandMoreIcon />}*/}
                                            {/*aria-controls="panel3bh-content"*/}
                                            {/*id="panel3bh-header"*/}
                                        {/*>*/}
                                            {/*<Typography className={classes.heading}>2020.09.02</Typography>*/}
                                            {/*<Typography className={classes.secondaryHeading}>식단</Typography>*/}
                                        {/*</AccordionSummary>*/}
                                        {/*<AccordionDetails>*/}
                                            {/*{*/}
                                                {/*this.state.diet.map((diet, key) =>*/}
                                                    {/*<Col md="4" key={"_col_" + key}>*/}
                                                        {/*<Card className="mini-stats-wid">*/}
                                                            {/*<CardBody>*/}
                                                                {/*<div className="mini-stat-icon avatar-sm rounded-circle bg-primary align-self-center">*/}
                                                                {/*<span className="avatar-title">*/}
                                                                    {/*<i className={"bx " + diet.iconClass + " font-size-24"}></i>*/}
                                                                {/*</span>*/}
                                                                {/*</div>*/}
                                                                {/*<Media>*/}
                                                                    {/*<Media body>*/}
                                                                        {/*<p className="text-muted font-weight-medium">{diet.title}</p>*/}
                                                                        {/*<h4 className="mb-0">{diet.description}</h4>*/}
                                                                    {/*</Media>*/}
                                                                {/*</Media>*/}
                                                            {/*</CardBody>*/}
                                                        {/*</Card>*/}
                                                    {/*</Col>*/}
                                                {/*)*/}
                                            {/*}*/}
                                        {/*</AccordionDetails>*/}
                                    {/*</Accordion>*/}
                                    {/*<Accordion expanded={expanded === 'panel4'} onChange={this.handleChange('panel4')}>*/}
                                        {/*<AccordionSummary*/}
                                            {/*expandIcon={<ExpandMoreIcon />}*/}
                                            {/*aria-controls="panel4bh-content"*/}
                                            {/*id="panel4bh-header"*/}
                                        {/*>*/}
                                            {/*<Typography className={classes.heading}>2020.09.01</Typography>*/}
                                            {/*<Typography className={classes.secondaryHeading}>식단</Typography>*/}
                                        {/*</AccordionSummary>*/}
                                        {/*<AccordionDetails>*/}
                                            {/*{*/}
                                                {/*this.state.diet.map((diet, key) =>*/}
                                                    {/*<Col md="4" key={"_col_" + key}>*/}
                                                        {/*<Card className="mini-stats-wid">*/}
                                                            {/*<CardBody>*/}
                                                                {/*<div className="mini-stat-icon avatar-sm rounded-circle bg-primary align-self-center">*/}
                                                                {/*<span className="avatar-title">*/}
                                                                    {/*<i className={"bx " + diet.iconClass + " font-size-24"}></i>*/}
                                                                {/*</span>*/}
                                                                {/*</div>*/}
                                                                {/*<Media>*/}
                                                                    {/*<Media body>*/}
                                                                        {/*<p className="text-muted font-weight-medium">{diet.title}</p>*/}
                                                                        {/*<h4 className="mb-0">{diet.description}</h4>*/}
                                                                    {/*</Media>*/}
                                                                {/*</Media>*/}
                                                            {/*</CardBody>*/}
                                                        {/*</Card>*/}
                                                    {/*</Col>*/}
                                                {/*)*/}
                                            {/*}*/}
                                        {/*</AccordionDetails>*/}
                                    {/*</Accordion>*/}
                                </div>
                            </Col>
                            <Col xl="4">
                                <InbodyProfile />
                                <InbodyList />
                            </Col>
                        </Row>
                    </Container>
                </div>
                <Modal isOpen={this.state.modal} role="dialog" autoFocus={true} centered={true} className="exampleModal" tabindex="-1" toggle={this.togglemodal}>
                    <div className="modal-content">
                        <ModalHeader toggle={this.togglemodal}>
                            Order Details
                        </ModalHeader >
                        <ModalBody>
                            <p className="mb-2">Product id: <span className="text-primary">#SK2540</span></p>
                            <p className="mb-4">Billing Name: <span className="text-primary">Neal Matthews</span></p>

                            <div className="table-responsive">
                                <Table className="table table-centered table-nowrap">
                                    <thead>
                                    <tr>
                                        <th scope="col">Product</th>
                                        <th scope="col">Product Name</th>
                                        <th scope="col">Price</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        {/*<th scope="row">*/}
                                            {/*<div>*/}
                                                {/*<img src={modalimage1} alt="" className="avatar-sm" />*/}
                                            {/*</div>*/}
                                        {/*</th>*/}
                                        <td>
                                            <div>
                                                <h5 className="text-truncate font-size-14">Wireless Headphone (Black)</h5>
                                                <p className="text-muted mb-0">$ 225 x 1</p>
                                            </div>
                                        </td>
                                        <td>$ 255</td>
                                    </tr>
                                    <tr>
                                        {/*<th scope="row">*/}
                                            {/*<div>*/}
                                                {/*<img src={modalimage2} alt="" className="avatar-sm" />*/}
                                            {/*</div>*/}
                                        {/*</th>*/}
                                        <td>
                                            <div>
                                                <h5 className="text-truncate font-size-14">Hoodie (Blue)</h5>
                                                <p className="text-muted mb-0">$ 145 x 1</p>
                                            </div>
                                        </td>
                                        <td>$ 145</td>
                                    </tr>
                                    <tr>
                                        <td colspan="2">
                                            <h6 className="m-0 text-right">Sub Total:</h6>
                                        </td>
                                        <td>$ 400</td>
                                    </tr>
                                    <tr>
                                        <td colspan="2">
                                            <h6 className="m-0 text-right">Shipping:</h6>
                                        </td>
                                        <td>Free</td>
                                    </tr>
                                    <tr>
                                        <td colspan="2">
                                            <h6 className="m-0 text-right">Total:</h6>
                                        </td>
                                        <td>$ 400</td>
                                    </tr>
                                    </tbody>
                                </Table>
                            </div>
                        </ModalBody>
                        <ModalFooter>
                            <Button type="button" color="secondary" onClick={this.togglemodal}>Close</Button>
                        </ModalFooter>
                    </div>
                </Modal>
            </React.Fragment>
        );
    }
}

export default withStyles(styles, { withTheme: true })(Main);
