import Card from '../components/card/Card';
import Transactions from '../components/transaction/Transaction';
import Activity from '../components/chart/activity/Activity';
import Statistic from '../components/chart/statistics/Statistics';
import QuickTransfer from '../components/transfer/QuickTransfer';
import BalanceHistory from '../components/chart/balance/BalanceChart';

import RecentTx from '../data/tx.json';

export default function Dashboard() {
  return (
    <div className="flex flex-col gap-6 w-full h-full">
      <div className="grid grid-cols-3 gap-6">
        <div className="col-span-2">
          <div className=" flex justify-between items-center mb-4">
            <p className="text-[22px] font-[600] text-[#343C6A]">My Cards</p>
            <p className="text-[17px] font-[600] text-[#343C6A]">See All</p>
          </div>
          <div className="flex gap-4">
            <Card
              balance={5756}
              isColorWhite={false}
              cardName="Eddy Cusuma"
              validDate="12/22"
              cardNumber="8547 5411 5587 2441"
            />
            <Card
              balance={5756}
              isColorWhite={true}
              cardName="Eddy Cusuma"
              validDate="12/22"
              cardNumber="8547 5411 5587 2441"
            />
          </div>
        </div>
        <div className="justify-start">
          <p className="text-[22px] font-[600] text-[#343C6A] text-start mb-4">
            Recent Transcation
          </p>
          <div className="flex flex-col gap-11 bg-white rounded-[30px] px-6 py-4 justify-between">
            {RecentTx.slice(0, 3).map((tx: any) => {
              return (
                <Transactions
                  txType={tx.txType}
                  date={tx.date}
                  amount={tx.amount}
                />
              );
            })}
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-6">
        <div className="col-span-2 text-start">
          <p className="text-[22px] font-[600] text-[#343C6A] pb-4">
            Weekly Activity
          </p>
          <div className="border rounded-2xl bg-white">
            <Activity />
          </div>
        </div>
        <div className="text-start h-full">
          <p className="text-[22px] font-[600] text-[#343C6A] pb-4">
            Expense Statistics
          </p>
          <div className="border rounded-2xl bg-white h-[87%]">
            <Statistic />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-6 pb-6">
        <div className="text-start">
          <p className="text-[22px] font-[600] text-[#343C6A] pb-4">
            Quick Transfer
          </p>
          <div className="border rounded-2xl bg-white p-4">
            <QuickTransfer />
          </div>
        </div>
        <div className="col-span-2 text-start">
          <p className="text-[22px] font-[600] text-[#343C6A] pb-4">Balance</p>
          <div className="border rounded-2xl bg-white p-4">
            <BalanceHistory />
          </div>
        </div>
      </div>
    </div>
  );
}
