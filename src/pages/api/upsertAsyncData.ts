import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  data: any;
  msg: string;
};

export default async function (req: NextApiRequest, res: NextApiResponse<Data>) {
  const { projectId, config } = req.body;
  const authorization = req.headers.authorization?.replace('Bearer ', '');

  if (!authorization) {
    res.status(401).json({ data: null, msg: 'Missing authorization header.' });
  }
  axios.defaults.headers.common['Authorization'] = ``;
  try {
    const response = await axios.post(
      `https://spoon.dapp.works/api/upsertAsyncData`,
      {
        projectId,
        config,
      },
      {
        headers: {
          Authorization: `Bearer ${authorization}`,
        },
      },
    );
    res.status(200).json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ data: null, msg: error.message });
  }
}
