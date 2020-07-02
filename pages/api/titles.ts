import { NextApiRequest, NextApiResponse } from 'next'
import { getTitles } from '../../lib/db'

export default async (req: NextApiRequest, res: NextApiResponse<String[]>) => {
  if (req.method === 'POST') {

  }
  const titles = await getTitles()

  res.status(200).json(titles)
}