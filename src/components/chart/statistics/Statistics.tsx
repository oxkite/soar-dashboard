import Chart from 'react-apexcharts';

// categories: ['Entertainment', 'Bill Expense', 'Others', 'Investment'],
const schema = {
  series: [30, 15, 35, 20],
  chartOptions: {
    labels: ['Entertainment', 'Bill Expense', 'Others', 'Investment'],
    plotOptions: {
      pie: {
        // size: 100,
        customScale: 1,
        donut: {
          size: '1%',
        },
      },
    },
    colors: ['#343C6A', '#FC7900', '#232323', '#396AFF'],
  },
};

export default function Statistic() {
  return (
    <Chart options={schema.chartOptions} series={schema.series} type="donut" />
  );
}
