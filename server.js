const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Константы AmoCRM
const ACCESS_TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjBlNWI5MDc0MGNhZmUyMWZmNzlkNTBmOGI4OTEzZjU5ZDYxNjI2YWRjYTU4ZmJhMmNiZWUwMDQzZDkyOTdhMDM2ZTMzNTJiY2EyMDRjOGNiIn0.eyJhdWQiOiJkNDdkNzYxNS0zNDBhLTQ1ODYtOWYwMS0wMjJjODA5ZTNiMTgiLCJqdGkiOiIwZTViOTA3NDBjYWZlMjFmZjc5ZDUwZjhiODkxM2Y1OWQ2MTYyNmFkY2E1OGZiYTJjYmVlMDA0M2Q5Mjk3YTAzNmUzMzUyYmNhMjA0YzhjYiIsImlhdCI6MTc0Mzc1MzA0MywibmJmIjoxNzQzNzUzMDQzLCJleHAiOjE3NDYwNTc2MDAsInN1YiI6IjExODI5NDAyIiwiZ3JhbnRfdHlwZSI6IiIsImFjY291bnRfaWQiOjMyMzMwNzc0LCJiYXNlX2RvbWFpbiI6ImFtb2NybS5ydSIsInZlcnNpb24iOjIsInNjb3BlcyI6WyJjcm0iLCJmaWxlcyIsImZpbGVzX2RlbGV0ZSIsIm5vdGlmaWNhdGlvbnMiLCJwdXNoX25vdGlmaWNhdGlvbnMiXSwiaGFzaF91dWlkIjoiMzllYTI5NzYtMDU4Mi00ZGY4LWI5NWUtYzFiOWQ5ZWQ0NzcyIiwiYXBpX2RvbWFpbiI6ImFwaS1iLmFtb2NybS5ydSJ9.A_w92KFKZDuAdR7E7RcD8_egjS21TppaaAMaVag9bpEec58cuGgNr2CjvFInILjOPJpQd4JNpZhxERbPhW9nRpZMMPiZBg7uzB4Fd6nwB6dFV89Z9ogI4QL0LPBtfVTvG-3W9le5wsBWLIGirrgpEV7Rwce6T19WwQY35TRgPkp-kynprOnkX4_bw09BMUSjhpw57ejOdBrVL0l3zbKF3rpKuy5dzeTjGvT6_Q7zTHvk5caFOaqVex6d4IiH341YwfvJAKmQJQ4MnbYFvr1vYRyCiLSbEGxm0ZqBJgt7BDCFoFrbpqSRCOVv0WYcFNL-NS_wL-2XpRLUDi0ZM1zeig';
const SUBDOMAIN = 'a002mp';

app.get('/users', async (req, res) => {
  try {
    const response = await axios.get(`https://${SUBDOMAIN}.amocrm.ru/api/v4/users`, {
      headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`
      }
    });

    res.json(response.data);
  } catch (error) {
    console.error(error.response?.data || error.message);
    res.status(500).json({ error: 'Ошибка при получении пользователей' });
  }
});

app.listen(PORT, () => {
  console.log(`Proxy server running on port ${PORT}`);
});
