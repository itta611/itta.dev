/* eslint-disable @next/next/no-page-custom-font */

import { Box } from '@chakra-ui/react';
import GraphQLPlayground from 'components/GraphQLPlayground';
import { NextPage } from 'next';

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
      <GraphQLPlayground endpoint={process.env.NEXT_PUBLIC_API_URL} defaultQuery={defaultQuery} />
    </Box>
  );
};

export default Home;
