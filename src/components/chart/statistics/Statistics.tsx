// import Chart from 'react-apexcharts';
import { Chart } from 'primereact/chart';
import { useState, useEffect } from 'react';

// const schema = {
//   series: [30, 15, 35, 20],
//   chartOptions: {
//     labels: ['Entertainment', 'Bill Expense', 'Others', 'Investment'],
//     plotOptions: {
//       pie: {
//         customScale: 1,
//         donut: {
//           size: '1%',
//         },
//       },
//     },
//     colors: ['#343C6A', '#FC7900', '#232323', '#396AFF'],
//   },
// };

export default function Statistic() {
  const [chartData, setChartData] = useState({});
  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border');
    const data = {
      datasets: [
        {
          data: [22, 18, 20, 18],
          backgroundColor: ['#343C6A', '#FC7900', '#232323', '#396AFF'],
          label: 'My dataset',
        },
      ],
      labels: ['Entertainment', 'Bill Expense', 'Others', 'Investment'],
      
    };
    const options = {
      plugins: {
        legend: {
          labels: {
            color: textColor,
          },
        },
      },
      scales: {
        r: {
          grid: {
            color: surfaceBorder,
          },
        },
      },
    };

    setChartData(data);
    setChartOptions(options);
  }, []);
  return (
    <>
      <div className="card flex justify-content-center">
        <Chart
          type="polarArea"
          data={chartData}
          options={chartOptions}
          style={{ position: 'relative', width: '100%'}}
        />
      </div>
    </>
  );
}
{/* <Chart
  options={schema.chartOptions}
  series={schema.series}
  type="donut"
/> */}
// export default function Statistic() {
//   const [chartData, setChartData] = useState({});
//   const [chartOptions, setChartOptions] = useState({});

//   useEffect(() => {
//     const documentStyle = getComputedStyle(document.documentElement);
//     const textColor = documentStyle.getPropertyValue('--text-color');
//     const surfaceBorder = documentStyle.getPropertyValue('--surface-border');
//     const data = {
//       datasets: [
//         {
//           data: [11, 16, 7, 3, 14],
//           backgroundColor: [
//             documentStyle.getPropertyValue('--red-500'),
//             documentStyle.getPropertyValue('--green-500'),
//             documentStyle.getPropertyValue('--yellow-500'),
//             documentStyle.getPropertyValue('--bluegray-500'),
//             documentStyle.getPropertyValue('--blue-500'),
//           ],
//           label: 'My dataset',
//         },
//       ],
//       labels: ['Red', 'Green', 'Yellow', 'Grey', 'Blue'],
//     };
//     const options = {
//       plugins: {
//         legend: {
//           labels: {
//             color: textColor,
//           },
//         },
//       },
//       scales: {
//         r: {
//           grid: {
//             color: surfaceBorder,
//           },
//         },
//       },
//     };

//     setChartData(data);
//     setChartOptions(options);
//   }, []);

//   return (
//     <div className="card flex justify-content-center">
//       <Chart
//         type="polarArea"
//         data={chartData}
//         options={chartOptions}
//         style={{ position: 'relative', width: '40%' }}
//       />
//     </div>
//   );
// }
