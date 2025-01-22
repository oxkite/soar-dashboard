import Card from "./Card"
import Cardinfo from "../../data/card.json"

export default function DisplayAllCards(){
  return (
    <div className="">
      {Cardinfo.map((card) => {
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
  );
}