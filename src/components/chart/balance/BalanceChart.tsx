import { useEffect, useState } from 'react';
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

export default function Activity() {
    const [balanceData, setBalanceData] = useState([]);
    useEffect(() => {
      const fetchBalanceData = async () => {
        try {
          const response = await fetch('/api/balances');
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const data = await response.json();
          setBalanceData(data.balance); 
        } catch (error) {
          console.log('Error!!!!');
        } finally {
        }
      };

      fetchBalanceData();
    }, []);

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
        data: balanceData.slice(0, 7).map((tx: any) => tx.balance),
      },
    ],
  };
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
