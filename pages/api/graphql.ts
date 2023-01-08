import { NextApiRequest, NextApiResponse } from 'next';
import { ApolloServer } from 'apollo-server-micro';
import { readFileSync } from 'fs';
import { join } from 'path';

import { Resolvers } from '../../graphql/dist/generated-server';

const path = join(process.cwd(), 'graphql', 'schema.graphql');
const typeDefs = readFileSync(path).toString('utf-8');

const links = [
  {
    name: 'GitHub',
    url: 'https://github.com/itta611',
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com/IttaFunahashi',
  },
  {
    name: 'AtCoder',
    url: 'https://atcoder.jp/users/Itta',
  },
];

const resolvers: Resolvers = {
  Query: {
    height: () => 171,
    weight: () => 47,
    age: () => 14,
    isSleeping: () => new Date().getHours() > 22 || new Date().getHours() < 6,
    links: (name: string) => (name ? links.find((link) => link.name === name) : links),
    latestCommits: async (count: number) =>
      (
        await fetch(
          `https://api.github.com/users/itta611/events?per_page=${count ?? 10}`
        ).then((res) => res.json())
      )
        .filter((event: any) => event.type === 'PushEvent')
        .map((event: any) => event.payload.commits)
        .reduce((commits: any, currentValue: [any]) => commits.concat(currentValue), []),
  },
};

const apolloServer = new ApolloServer({ typeDefs, resolvers });

const startServer = apolloServer.start();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await startServer;
  await apolloServer.createHandler({
    path: '/api/graphql',
  })(req, res);
}

export const config = {
  api: {
    bodyParser: false,
  },
};
