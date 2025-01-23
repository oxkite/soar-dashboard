import { Chart } from 'react-google-charts';

export const data = [
  ['Statistics', 'Expense'],
  ['Entertainment', 30],
  ['Other', 15],
  ['Bill Expense', 35],
  ['Investment', 20],
];

export const options = {
  title: '',
  legend: 'none',
  pieSliceText: 'label',
  slices: {
    0: { offset: 0.05 },
    1: { offset: 0.13 },
    2: { offset: 0.005 },
    3: { offset: 0.08 },
  },
};

export default function Statistic() {
  return (
    <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width={'100%'}
      height={'100%'}
      className='p-1'
    />
  );
}
