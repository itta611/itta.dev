import { Box, Container, Heading } from '@chakra-ui/react';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';

const Home: NextPage = () => {
  return (
    <Box>
      <Head>
        <title>Itta&apos;s Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container maxW="container.lg">
        <Heading>Itta&apos;s Portfolio</Heading>
      </Container>
    </Box>
  );
};

export default Home;
