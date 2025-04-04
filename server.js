const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Константы AmoCRM
const ACCESS_TOKEN = 'f3c01ef4c6f83a78dd3cf6195428980f50797563';
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
