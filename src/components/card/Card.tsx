import cardChipImage from '../../assets/Chip_Card.svg';
import cardSymbolImage from '../../assets/cardsymbol.svg';
import blackCardChiplImage from '../../assets/bl_Chip_Card.svg';
import blackCardSymbolImage from '../../assets/bl_cardsym.svg';

interface CardProps {
  balance: number;
  isColorWhite: Boolean;
  cardName: string;
  validDate: string;
  cardNumber: string;
}
const DisplayCardNumber = (str: string) => {
  const parts = str.split(' ');
  return `${parts[0]} **** **** ${parts[3]}`;
};

export default function Card({
  balance,
  isColorWhite,
  cardName,
  validDate,
  cardNumber,
}: CardProps) {
  return (
    <div
      className={`${
        isColorWhite
          ? 'bg-white'
          : 'bg-gradient-to-tr from-[#5B5A6F] to-[#030303] text-white'
      } flex flex-col xl:gap-4 gap-2 border border-[#DFEAF2] rounded-[30px] w-full p-0 font-[Lato] min-w-[310px] `}
    >
      <div className="flex justify-between p-6">
        <div className="text-start">
          <p className="text-[12px] font-[400]">Balance</p>
          <p className="text-[20px] font-[600]">${balance.toLocaleString()}</p>
        </div>
        {isColorWhite ? (
          <img src={blackCardChiplImage} alt="chip" />
        ) : (
          <img src={cardChipImage} alt="chip" />
        )}
      </div>
      <div className="grid grid-cols-2 text-start px-6 py-2">
        <div>
          <p className="text-[12px] font-[400]">CARD HOLDER</p>
          <p className="text-[15px] font-[600]">{cardName}</p>
        </div>
        <div>
          <p className="text-[12px] font-[400]">VALID THRU</p>
          <p className="text-[15px] font-[600]">{validDate}</p>
        </div>
      </div>
      <div
        className={`${
          isColorWhite
            ? 'bg-white border-[#DFEAF2] border-t'
            : 'bg-gradient-to-br from-[#5B5A6F] to-[#030303] text-white'
        } flex justify-between items-center p-6 rounded-b-[30px]  `}
      >
        <p className="text-[22px] font-[600]">
          {DisplayCardNumber(cardNumber)}
        </p>
        {isColorWhite ? (
          <img src={blackCardSymbolImage} alt="symbol" />
        ) : (
          <img src={cardSymbolImage} alt="symbol" />
        )}
      </div>
    </div>
  );
}
