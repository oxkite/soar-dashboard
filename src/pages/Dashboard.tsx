import React, { useState, useEffect } from 'react';
import { useDraggable } from 'react-use-draggable-scroll';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

import Card from '../components/card/Card';
import Transactions from '../components/transaction/Transaction';
import Activity from '../components/chart/activity/Activity';
import Statistic from '../components/chart/statistics/Statistics';
import QuickTransfer from '../components/transfer/QuickTransfer';
import BalanceHistory from '../components/chart/balance/BalanceChart';


export default function Dashboard() {
  const ref =
    useRef<HTMLDivElement>() as React.MutableRefObject<HTMLInputElement>;
  const { events } = useDraggable(ref);

  const [cardData, setCardData] = useState([]);
  useEffect(() => {
    const fetchCardData = async () => {
      try {
        const response = await fetch('/api/cards');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setCardData(data.cards); // Set the activity data
      } catch (error) {
        console.log('Error!!!!');
      } finally {
      }
    };

    fetchCardData();
  }, []);

    const [transactionData, setTransactionData] = useState([]);
    useEffect(() => {
      const fetchTransactionData = async () => {
        try {
          const response = await fetch('/api/txs');
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const data = await response.json();
          setTransactionData(data.transactions); // Set the activity data
        } catch (error) {
          console.log('Error!!!!');
        } finally {
        }
      };

      fetchTransactionData();
    }, []);
  return (
    <div
      aria-label="Dashboard page"
      className="flex flex-col gap-6 w-full h-full"
    >
      <div className="grid grid-cols-6 gap-6">
        <div className="lg:col-span-4 col-span-6">
          <div className=" flex justify-between items-center mb-4">
            <p className="text-[22px] font-[600] text-[#343C6A]">My Cards</p>
            <Link to={'/overview/cards'}>
              <button
                aria-label="All cards"
                className="text-[17px] font-[600] text-[#343C6A] hover:text-[#707ab6] hover:text-[18px] focus:text-[#1e223a]"
              >
                See All
              </button>
            </Link>
          </div>
          <div
            className="flex gap-4 overflow-x-scroll scrollbar-hide hidden-scrollbar"
            style={{ cursor: 'grab' }}
            {...events}
            ref={ref}
          >
            {cardData.map((card: any) => {
              return (
                <Card
                  balance={card.balance}
                  isColorWhite={card.isColorWhite}
                  cardName={card.cardName}
                  validDate={card.validDate}
                  cardNumber={card.cardNumber}
                />
              );
            })}
          </div>
        </div>
        <div className="justify-start lg:col-span-2 col-span-6">
          <p className="text-[22px] font-[600] text-[#343C6A] text-start mb-4">
            Recent Transcation
          </p>
          <div
            className="flex flex-col gap-7 bg-white rounded-[30px] md:p-6 p-4 h-[270px] justify-between overflow-x-scroll scrollbar-hide hidden-scrollbar"
            style={{ cursor: 'grab' }}
            {...events}
            ref={ref}
          >
            {transactionData.map((tx: any) => {
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
        <div className="lg:col-span-4 col-span-6 text-start">
          <p className="text-[22px] font-[600] text-[#343C6A] pb-4">
            Weekly Activity
          </p>
          <div className="border rounded-2xl bg-white">
            <Activity />
          </div>
        </div>
        <div className="text-start h-full lg:col-span-2 md:col-span-3 col-span-6">
          <p className="text-[22px] font-[600] text-[#343C6A] pb-4">
            Expense Statistics
          </p>
          <div className="border rounded-2xl bg-white h-[405px]">
            <Statistic />
          </div>
        </div>
        <div className="text-start lg:col-span-2 md:col-span-3 col-span-6">
          <p className="text-[22px] font-[600] text-[#343C6A] pb-4">
            Quick Transfer
          </p>
          <div className="border rounded-2xl bg-white p-4">
            <QuickTransfer />
          </div>
        </div>
        <div className="lg:col-span-4 col-span-6 text-start pb-6">
          <p className="text-[22px] font-[600] text-[#343C6A] pb-4">Balance</p>
          <div className="border rounded-2xl bg-white p-4">
            <BalanceHistory />
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  );
}
