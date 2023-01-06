/* eslint-disable @next/next/no-page-custom-font */

import { Box } from '@chakra-ui/react';
import GraphQLPlayground from 'components/GraphQLPlayground';
import { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <Box overflow="hidden">
      <GraphQLPlayground endpoint={process.env.NEXT_PUBLIC_API_URL} />
    </Box>
  );
};

export default Home;
