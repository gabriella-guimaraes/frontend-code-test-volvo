// o next entende os arquivos dentro desta pasta (api) como uma API e cada arquivo seria um endpoint

import { NextApiRequest, NextApiResponse } from "next";
import data from '../../public/api/cars.json';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    res.status(200).json(data);
}