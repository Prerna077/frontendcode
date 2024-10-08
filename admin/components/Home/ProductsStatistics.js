import React from "react";
// import ReactDOM from 'react-dom';
// import ApexCharts from 'apexcharts';
// import ReactApexCharts from 'react-apexcharts';

// class ApexChart extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
    
//       series: [{
//         name: 'Net Profit',
//         data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
//       }, {
//         name: 'Revenue',
//         data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
//       }, {
//         name: 'Free Cash Flow',
//         data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
//       }],
//       options: {
//         chart: {
//           type: 'bar',
//           height: 350
//         },
//         plotOptions: {
//           bar: {
//             horizontal: false,
//             columnWidth: '55%',
//             endingShape: 'rounded'
//           },
//         },
//         dataLabels: {
//           enabled: false
//         },
//         stroke: {
//           show: true,
//           width: 2,
//           colors: ['transparent']
//         },
//         xaxis: {
//           categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
//         },
//         yaxis: {
//           title: {
//             text: '$ (thousands)'
//           }
//         },
//         fill: {
//           opacity: 1
//         },
//         tooltip: {
//           y: {
//             formatter: function (val) {
//               return "$ " + val + " thousands"
//             }
//           }
//         }
//       },
    
    
//     };
//   }



//   render() {
//     return (
//       <div>
//         <div id="chart">
//           <ReactApexChart options={this.state.options} series={this.state.series} type="bar" height={350} />
//         </div>
//         <div id="html-dist"></div>
//       </div>
//     );
//   }
// }

// const domContainer = document.querySelector('#app');
// ReactDOM.render(React.createElement(ApexChart), domContainer);

const ProductsStatistics = () => {
  return (
    <div className="col-xl-6 col-lg-12">
      <div className="card mb-4 shadow-sm">
        <article className="card-body">
          <h5 className="card-title">Products statistics</h5>
          <img
            style={{ width: "100%", height: "350px", objectFit: "contain" }}
            src="/images/product.jpg"
          />
        </article>
      </div>
    </div>
  );
};

export default ProductsStatistics;
