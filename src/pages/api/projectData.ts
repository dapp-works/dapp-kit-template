import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  config: string;
};

export default async function (req: NextApiRequest, res: NextApiResponse<any>) {
  try {
    if(!process.env.NEXT_PUBLIC_PROJECT_ID){
      res.status(500).json('Please set your project id in process.env.NEXT_PUBLIC_PROJECT_ID');
      return
    }
    const { forceUpdate } = req.query;
    delete axios.defaults.headers.common['Authorization'];
    const response = await axios.get(`https://api.smartgraph.one/api/rest/test/${process.env.NEXT_PUBLIC_PROJECT_ID}`);
    if (forceUpdate) {
      res.status(200).json(response.data.project[0]?.config ?? {});
      return 
    }
    res
      .status(200)
      .setHeader('cache-control', 'public, s-maxage=60, stale-while-revalidate=60')
      .json(response.data.project[0]?.config ?? {});
  } catch (error) {
    console.error(error);
    res.status(500).json(error.message);
  }
}
