import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

// Replace with your MockAPI URL
const MOCKAPI_URL = 'https://66fd3bcfc3a184a84d199197.mockapi.io/api/v1/nexus_ai';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const response = await fetch(MOCKAPI_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(req.body),
      });

      if (!response.ok) {
        throw new Error('Failed to send data to MockAPI');
      }

      const data = await response.json();
      return res.status(200).json({ success: true, data });
    } catch (error) {
      return res.status(500).json({ success: false, message: error.message });
    }


  } else {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }
};

axios.get('/some-endpoint')
  .then(response => {
    console.log(response.data);
  })
  .catch((error) => {
    if (axios.isAxiosError(error)) {
      // Access error properties specific to Axios
      console.error('Axios error:', error.response?.data);
    } else if (error instanceof Error) {
      // Handle non-Axios error (generic errors)
      console.error('Generic error:', error.message);
    } else {
      console.error('Unknown error occurred');
    }
  });
