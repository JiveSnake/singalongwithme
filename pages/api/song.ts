import { NextApiRequest, NextApiResponse } from 'next'
import { getSong } from '../../lib/db'
import { Song } from '../../types/song'

let activeSong = "1hRVjiXFLqLd7sN5QpJQ"

export default async (req: NextApiRequest, res: NextApiResponse<Song>) => {
  if (req.method === 'POST') {
    activeSong = req.body.activeSong
  }
  res.status(200).json(await getSong(activeSong))
}