import { NextApiRequest, NextApiResponse } from 'next';
import { Stats } from 'types';

function toCamelCase(obj: any): { [key: string]: Stats } {
  return Object.keys(obj).reduce((newObj, key) => {
    const newKey = key.replace(/(_\w)/g, (match) => match[1].toUpperCase());
    newObj[newKey] = toCamelCase(obj[key]) as Stats;
    return newObj;
  }, {});
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  let statsList = (await (await fetch(process.env.API_ENDPOINT!)).json()).data;
  statsList = toCamelCase(statsList);

  res.status(200).json(statsList);
}
