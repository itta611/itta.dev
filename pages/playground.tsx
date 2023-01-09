/* eslint-disable @next/next/no-page-custom-font */

import { Box } from '@chakra-ui/react';
import GraphQLPlayground from 'components/GraphQLPlayground';
import { NextPage } from 'next';

const configString = `{
  "editor.cursorShape": "line",
  "editor.fontFamily": "'Source Code Pro', 'Consolas', 'Inconsolata', 'Droid Sans Mono', 'Monaco', monospace",
  "editor.fontSize": 12,
  "editor.reuseHeaders": true,
  "editor.theme": "dark",
  "general.betaUpdates": false,
  "prettier.printWidth": 80,
  "prettier.tabWidth": 2,
  "prettier.useTabs": false,
  "request.credentials": "omit",
  "request.globalHeaders": {},
  "schema.disableComments": true,
  "schema.polling.enable": true,
  "schema.polling.endpointFilter": "*localhost*",
  "schema.polling.interval": 2000,
  "tracing.hideTracingResponse": true,
  "tracing.tracingSupported": true
}`;

const defaultQuery = `# You can get my height, weight etc...
# Check the "DOCS" drawer on the right side.

query moreDatas {
  height
  age
  isSleeping
  latestCommits {
    message
  }
}`;

const Home: NextPage = () => {
  return (
    <Box overflow="hidden">
      <GraphQLPlayground endpoint={process.env.NEXT_PUBLIC_API_URL} configString={configString} />
    </Box>
  );
};

export default Home;
