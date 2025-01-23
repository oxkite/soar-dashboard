import { Server, Response } from 'miragejs';

let profile = [
  {
    id: 0,
    name: 'Charlene Reed',
    userName: 'Charlene Reed',
    email: 'charlenereed@gmail.com',
    password: '123456789',
    dateOfBirth: '25 January 1990',
    presentAddress: 'San Jose, California, USA',
    permanentAddress: 'San Jose, California, USA',
    city: 'San Jose',
    postalCode: '45962',
    country: 'USA',
  },
];
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
    id: 0,
    cardNumber: '8547 5411 5587 2441',
    cardName: 'Eddy Cusuma',
    balance: 5756,
    isColorWhite: false,
    validDate: '12/22',
  },
  {
    id: 1,
    cardNumber: '5587 5411 5587 5587',
    cardName: 'Rafa Rosa',
    balance: 96586,
    isColorWhite: true,
    validDate: '12/22',
  },
  {
    id: 2,
    cardNumber: '5411 5587 5587 5587',
    cardName: 'Eddy Cusuma',
    balance: 576,
    isColorWhite: true,
    validDate: '12/22',
  },
  {
    id: 3,
    cardNumber: '2441 5411 5587 5411',
    cardName: 'Eddy Cusuma',
    balance: 5756,
    isColorWhite: false,
    validDate: '12/22',
  },
];

let transactions = [
  {
    id: 0,
    txType: 'Depoist from my Card',
    date: '27/01/2021',
    amount: -850,
  },
  {
    id: 1,
    txType: 'Depoist Paypal',
    date: '25/01/2021',
    amount: 2500,
  },
  {
    id: 2,
    txType: 'Jemi Wilson',
    date: '12/01/2021',
    amount: 5400,
  },
  {
    id: 3,
    txType: 'Depoist Paypal',
    date: '15/01/2021',
    amount: -2500,
  },
  {
    id: 4,
    txType: 'Jemi Wilson',
    date: '12/01/2021',
    amount: 5400,
  },
];

let members = [
  {
    id: 0,
    name: 'Livia Bator',
    role: 'CEO',
    avatar: 'https://i.postimg.cc/qqnDyYZK/member1.png',
  },
  {
    id: 1,
    name: 'Randy Press',
    role: 'Director',
    avatar: 'https://i.postimg.cc/G3s5W8hp/member2.png',
  },
  {
    id: 2,
    name: 'Workman',
    role: 'Desinger',
    avatar: 'https://i.postimg.cc/RV5D4SNL/member3.png',
  },
  {
    id: 3,
    name: 'Randy Press',
    role: 'CTO',
    avatar: 'https://i.postimg.cc/G3s5W8hp/member2.png',
  },
  {
    id: 4,
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
      //POST REQUEST
      this.post('/api/members', (_schema, request) => {
        try {
          let attrs = JSON.parse(request.requestBody);

          const memberIndex = profile.findIndex(
            (member) => member.id === attrs.id
          );

          if (memberIndex !== -1) {
            profile[memberIndex] = { ...profile[memberIndex], ...attrs };
            return { profile };
          } else {
            return new Response(404, {}, { error: 'Member not found' });
          }
        } catch (error) {
          console.error('Error parsing request body:', error);
          return new Response(400, {}, { error: 'Invalid request body' });
        }
      });
    },
  });

  return server;
}
