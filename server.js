const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());

app.get('/', (req, res) => {
  res.send('Backend is running');
});

app.get('/api/kyc', (req, res) => {
  const data = {
    total: 3456,
    newKYC: { count: 3000, change: 12 },
    modifiedKYC: { count: 456, change: -10 },
    barData: [
      { name: 'Individual', today: 350, yesterday: 280 },
      { name: 'Non Individual', today: 300, yesterday: 240 }
    ],
    status: [
      { label: 'KYC Initiated', value: 234 },
      { label: 'Under Process', value: 45 },
      { label: 'Registered', value: 350 },
      { label: 'Validated', value: 654 },
      { label: 'Hold', value: 269 },
      { label: 'Docs Pending', value: 100 }
    ],
    circleData: {
      total: 3456,
      received: 400,
      consumed: 250,
      pending: 256
    }
  };
  res.json(data);
});

app.listen(5000, () => {
  console.log('Backend running on http://localhost:5000');
});
