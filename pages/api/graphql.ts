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
    profile: () =>
      "14 y/o, who interested in UI Design! I'm a student at a high school in Japan. I'm currently learning Rust, React, Next.js, and GraphQL.",
    isSleeping: () => new Date().getHours() > 22 || new Date().getHours() < 6,
    links: () => links,
    latestCommits: async (_parent, args: { count?: number | null }, _context, _info) =>
      (
        await fetch(
          `https://api.github.com/users/itta611/events?per_page=${args.count ?? 10}`
        ).then((res) => res.json())
      )
        .filter((event: any) => event.type === 'PushEvent')
        .map((event: any) => event.payload.commits)
        .reduce((commits: any, currentValue: [any]) => commits.concat(currentValue), []),
  },
};

const apolloServer = new ApolloServer({ typeDefs, resolvers, introspection: true });

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
