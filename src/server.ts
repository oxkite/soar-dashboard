import { Server } from 'miragejs';

let activities = [
  { date: '01/23/2025', deposit: 450, withdraw: 260 },
  { date: '01/22/2025', deposit: 370, withdraw: 400 },
  { date: '01/21/2025', deposit: 320, withdraw: 270 },
  { date: '01/20/2025', deposit: 480, withdraw: 365 },
  { date: '01/19/2025', deposit: 140, withdraw: 230 },
  { date: '01/18/2025', deposit: 390, withdraw: 280 },
  { date: '01/17/2025', deposit: 350, withdraw: 210 },
  { date: '01/16/2025', deposit: 150, withdraw: 260 },
  { date: '01/15/2025', deposit: 40, withdraw: 360 },
  { date: '01/14/2025', deposit: 150, withdraw: 230 },
];

let cards = [
  {
    cardNumber: '8547 5411 5587 2441',
    cardName: 'Eddy Cusuma',
    balance: 5756,
    isColorWhite: false,
    validDate: '12/22',
  },
  {
    cardNumber: '5587 5411 5587 5587',
    cardName: 'Rafa Rosa',
    balance: 96586,
    isColorWhite: true,
    validDate: '12/22',
  },
  {
    cardNumber: '5411 5587 5587 5587',
    cardName: 'Eddy Cusuma',
    balance: 576,
    isColorWhite: true,
    validDate: '12/22',
  },
  {
    cardNumber: '2441 5411 5587 5411',
    cardName: 'Eddy Cusuma',
    balance: 5756,
    isColorWhite: false,
    validDate: '12/22',
  },
];

let transactions = [
  {
    txType: 'Depoist from my Card',
    date: '27/01/2021',
    amount: -850,
  },
  {
    txType: 'Depoist Paypal',
    date: '25/01/2021',
    amount: 2500,
  },
  {
    txType: 'Jemi Wilson',
    date: '12/01/2021',
    amount: 5400,
  },
  {
    txType: 'Depoist Paypal',
    date: '15/01/2021',
    amount: -2500,
  },
  {
    txType: 'Jemi Wilson',
    date: '12/01/2021',
    amount: 5400,
  },
];

let members = [
  {
    name: 'Livia Bator',
    role: 'CEO',
    avatar: 'https://i.postimg.cc/qqnDyYZK/member1.png',
  },
  {
    name: 'Randy Press',
    role: 'Director',
    avatar: 'https://i.postimg.cc/G3s5W8hp/member2.png',
  },
  {
    name: 'Workman',
    role: 'Desinger',
    avatar: 'https://i.postimg.cc/RV5D4SNL/member3.png',
  },
  {
    name: 'Randy Press',
    role: 'CTO',
    avatar: 'https://i.postimg.cc/G3s5W8hp/member2.png',
  },
  {
    name: 'Workman',
    role: 'HR',
    avatar: 'https://i.postimg.cc/RV5D4SNL/member3.png',
  },
];

let balance = [
  {
    month: 'Jan',
    balance: 0,
  },
  {
    month: 'Dec',
    balance: 150,
  },
  {
    month: 'Nov',
    balance: 305,
  },
  {
    month: 'Oct',
    balance: 200,
  },
  {
    month: 'Sep',
    balance: 230,
  },
  {
    month: 'Aug',
    balance: 500,
  },
  {
    month: 'Jul',
    balance: 35,
  },
  {
    month: 'Jun',
    balance: 120,
  },
  {
    month: 'May',
    balance: 90,
  },
];
export function makeServer() {
  let server = new Server({
    routes() {
      // GET REQUEST
      this.get('/api/activities', () => {
        return {
          activities,
        };
      });
      this.get('/api/cards', () => {
        return {
          cards,
        };
      });
      this.get('/api/txs', () => {
        return {
          transactions,
        };
      });
      this.get('/api/members', () => {
        return {
          members,
        };
      });
      this.get('/api/balances', () => {
        return {
          balance,
        };
      });
    },
  });

  return server;
}
