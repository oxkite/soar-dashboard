import Chart from 'react-apexcharts';
const getFromThisMonth = () => {
  const displayMonth = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  const today = new Date();
  const currentMonthIndex = today.getMonth();

  const daysFromToday = [
    ...displayMonth.slice(currentMonthIndex),
    ...displayMonth.slice(0, currentMonthIndex),
  ];

  return daysFromToday;
};
const displayMonth = getFromThisMonth();

const schema = {
  options: {
    chart: {
      id: 'basic-bar',
    },
    xaxis: {
      categories: [
        displayMonth[6],
        displayMonth[7],
        displayMonth[8],
        displayMonth[9],
        displayMonth[10],
        displayMonth[11],
        displayMonth[0],
      ],
    },
    colors: ['#1814F3'],
  },
  stroke: {
    curve: 'smooth',
  },
  dataLabels: {
    enabled: false,
  },
  series: [
    {
      name: 'deposit',
      data: [0, 150, 305, 200, 230, 500, 35],
    },
  ],
};

export default function Activity() {
  return (
    <div>
      <Chart
        options={schema.options}
        series={schema.series}
        type="area"
        height={220}
      />
    </div>
  );
}
