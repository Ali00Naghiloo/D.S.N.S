import Chart from "react-apexcharts";
import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          id: "basic-bar",
        },
        xaxis: {
          categories: [1991, 1992, 1993, 1194, 1995],
        },
      },
      series: [
        {
          name: "data",
          data: [30, 40, 45, 45, 45],
        },
      ],
    };
  }

  render() {
    return (
      <div className="app">
        <div className="row">
          <div className="mixed-chart">
            <Chart
              options={this.state.options}
              series={this.state.series}
              type="bar"
              width="100%"
              height="300px"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
