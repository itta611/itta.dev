import { NextApiRequest, NextApiResponse } from 'next';

function toCamelCase(obj: any): any {
  if (Array.isArray(obj)) {
    return obj.map((v) => toCamelCase(v));
  }

  if (obj === null || typeof obj !== 'object') {
    return obj;
  }

  return Object.keys(obj).reduce((newObj: any, key) => {
    const newKey = key.replace(/(_\w)/g, (match) => match[1].toUpperCase());
    newObj[newKey] = toCamelCase(obj[key]);
    return newObj;
  }, {});
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  let statsList = (await (await fetch(process.env.API_ENDPOINT!)).json()).data;
  statsList = toCamelCase(statsList);

  res.status(200).json(statsList);
}
