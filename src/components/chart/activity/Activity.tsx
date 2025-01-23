import { useEffect, useState } from 'react';
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

export default function Activity() {
  const [activityData, setActivityData] = useState([]);
  useEffect(() => {
    const fetchActivityData = async () => {
      try {
        const response = await fetch('/api/activities');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log('Data is here', data);
        setActivityData(data.activities);
      } catch (error) {
        console.log('Error!!!!');
      } finally {
      }
    };

    fetchActivityData();
  }, []);

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
          borderRadius: 4,
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
        data: activityData.slice(0, 7).map((tx: any) => tx.deposit),
      },
      {
        name: 'withdraw',
        data: activityData.slice(0, 7).map((tx: any) => tx.withdraw),
      },
    ],
  };

  return (
    <div>
      <Chart
        options={schema.options}
        series={schema.series}
        type="bar"
        height={350}
      />
    </div>
  );
}
