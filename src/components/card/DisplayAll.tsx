import { useState, useEffect } from 'react';

import Card from './Card';

export default function DisplayAllCards() {
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
  return (
    <div className="space-y-4">
      {cardData.map((card: any) => {
        return (
          <div key={card.id}>
            <Card
              balance={card.balance}
              isColorWhite={card.isColorWhite}
              cardName={card.cardName}
              validDate={card.validDate}
              cardNumber={card.cardNumber}
            />
          </div>
        );
      })}
    </div>
  );
}
