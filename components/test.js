const transfer = [0, 2];

const tickets = [
  { stops: 0 },
  { stops: 1 },
  { stops: 2 },
  { stops: 2 },
  { stops: 1 },
  { stops: 0 },
  { stops: 3 },
];

// console.log all elements that have `stops` equal any element of an array `transfer`

// let result = [];

const result = tickets.filter((ticket) => {
  for (const t of transfer) {
    if (ticket.stops === t) return true;
  }
});

const sorted = result.sort((a, b) => a.stops - b.stops);

console.log(sorted);
