import CardImage from '../../assets/deposit_tx.svg';
import PaypalImage from '../../assets/deposit_paypal.svg';
import PersonalTxImage from '../../assets/tx_personal.svg';

interface TransactionProps {
  txType: string;
  date: string;
  amount: number;
}

const AmountDisplay = ({ amount }: { amount: number }) => {
  const isPositive = amount > 0;
  const displayNumber = isPositive
    ? `+$${amount.toLocaleString()}`
    : `-$${Math.abs(amount).toLocaleString()}`;
  const colorStyle = isPositive ? { color: '#41D4A8' } : { color: '#FF4B4A' };

  return (
    <p className="text-[16px] font-[500]" style={colorStyle}>
      {isPositive ? displayNumber : displayNumber}
    </p>
  );
};
export default function Transactions({
  txType,
  date,
  amount,
}: TransactionProps) {
  const imageMap: any = {
    'Depoist from my Card': CardImage,
    'Depoist Paypal': PaypalImage,
  };
  return (
    <div className="flex items-center justify-between h-full">
      <div className="flex gap-6">
        <img src={imageMap[txType] || PersonalTxImage} alt={txType} />
        <div className="text-start">
          <p className="text-[16px] font-[500] text-[#232323] truncate overflow-hidden">
            {txType}
          </p>
          <p className="text-[15px] font-[400] text-[#718EBF]">{date}</p>
        </div>
      </div>
      <AmountDisplay amount={amount} />
    </div>
  );
}
