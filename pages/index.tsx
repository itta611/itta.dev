import { Box, Container, Heading } from '@chakra-ui/react';
import type { NextPage } from 'next';
import Head from 'next/head';
import Logo from 'components/Logo';

const Home: NextPage = () => {
  return (
    <Container maxW="container.lg">
      <Head>
        <title>Itta&apos;s Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box as={'header'}>
        <Logo mx="auto" />
      </Box>
    </Container>
  );
};

export default Home;
