import WeeklyActivity from '../../../data/activity.json';
import Chart from 'react-apexcharts';

const getDaysFromToday = () => {
  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const today = new Date();
  const currentDayIndex = today.getDay();

  const daysFromToday = [
    ...daysOfWeek.slice(currentDayIndex),
    ...daysOfWeek.slice(0, currentDayIndex),
  ];

  return daysFromToday;
};
const daysOfWeek = getDaysFromToday();
const WeeklyActivityTransactions = WeeklyActivity.slice(0, 7);

const schema = {
  options: {
    chart: {
      id: 'basic-bar',
    },
    xaxis: {
      categories: [
        daysOfWeek[1],
        daysOfWeek[2],
        daysOfWeek[3],
        daysOfWeek[4],
        daysOfWeek[5],
        daysOfWeek[6],
        daysOfWeek[0],
      ],
    },
    colors: ['#232323', '#396AFF'],
    plotOptions: {
      bar: {
        columnWidth: '20%',
        borderRadius: 6,
        dataLabels: {
          position: 'top',
          enabled: false,
        },
      },
    },
    dataLabels: {
      enabled: false,
    },
  },
  series: [
    {
      name: 'deposit',
      data: WeeklyActivityTransactions.map((tx: any) => tx.deposit),
    },
    {
      name: 'withdraw',
      data: WeeklyActivityTransactions.map((tx: any) => tx.withdraw),
    },
  ],
};

export default function Activity() {
  return (
    <div>
      <Chart
        options={schema.options}
        series={schema.series}
        type="bar"
        height={300}
      />
    </div>
  );
}
