import React, { Component } from 'react';
import ReactApexChart from 'react-apexcharts';
import "./Main.scss";

class ApexRadial extends Component {
    constructor(props) {
        super(props);
        this.state = {
            options: '',
            series: [],
        }
    }

    renderChart = (inbodyResult) => {
        const { inbodyScore, inbodyBodyType } = inbodyResult;
        const type = [];
        type.push(inbodyBodyType);

        const options = {
            plotOptions: {
                radialBar: {
                    startAngle: -135,
                    endAngle: 135,
                    dataLabels: {
                        name: {
                            fontSize: "13px",
                            color: void 0,
                            offsetY: 60
                        },
                        value: {
                            offsetY: 22,
                            fontSize: "16px",
                            color: void 0,
                            formatter: function (e) {
                                return e + "%"
                            }
                        }
                    }
                }
            },
            colors: ["#20c997"],
            fill: {
                type: "gradient",
                gradient: {
                    shade: "dark",
                    shadeIntensity: .15,
                    inverseColors: !1,
                    opacityFrom: 1,
                    opacityTo: 1,
                    stops: [0, 50, 65, 91]
                }
            },
            stroke: {
                dashArray: 4
            },
            // labels: ["마른비만형 70/100점"]
            labels: [type]
        };
        const score = [];
        score.push(inbodyScore);
        const series = [score];

        return (
            <ReactApexChart options={options} series={series} type="radialBar" height="143" />
        )
    };

    render() {
        const { inbodyResult } = this.props;
        return (
            <React.Fragment>
                {this.renderChart(inbodyResult)}
            </React.Fragment>
        );
    }
}

export default ApexRadial;
