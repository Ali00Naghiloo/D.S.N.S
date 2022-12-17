// import Chart from "react-apexcharts";
// import React, { Component } from "react";

// class App extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       options: {
//         chart: {
//           id: "basic-bar",
//         },
//         xaxis: {
//           categories: [1991, 1992, 1993, 1194, 1995],
//         },
//       },
//       series: [
//         {
//           name: "data",
//           data: [30, 40, 45, 45, 45],
//         },
//       ],
//     };
//   }

//   render() {
//     return (
//       <div>
//         <div>
//           <div>
//             <Chart
//               options={this.state.options}
//               series={this.state.series}
//               type="bar"
//               width="100%"
//               height="300px"
//             />
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// export default App;

import Chart from "react-apexcharts";
import { useState } from "react";

const Charts = () => {
  const [options, setOptions] = useState({
    chart: {
      id: "basic-bar",
    },
    xaxis: {
      categories: [1991, 1992, 1993, 1994, 1995, 1996, 1998],
    },
  });

  const [series, setSeries] = useState([
    {
      name: "Power",
      data: [30, 40, 100, 45, 45, 10, 50],
    },
  ]);

  return (
    <div className="portfolio-chart">
      <Chart
        className="chart"
        width="500"
        options={options}
        series={series}
        type="line"
      />
    </div>
  );
};

export default Charts;
