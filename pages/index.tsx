import { Box, Container, Heading, Text } from '@chakra-ui/react';
import type { NextPage } from 'next';
import Head from 'next/head';
import Logo from 'components/Logo';

const Home: NextPage = () => {
  return (
    <Box bg="gray.800" color="white" minH="100vh">
      <Container maxW="container.md">
        <Head>
          <title>Itta&apos;s Portfolio</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Box display="flex" alignItems="center" as="header" h={72}>
          <Logo mx="auto" />
        </Box>
        <Box as="main" mt={8}>
          <Heading as="h2" fontWeight="extrabold" fontSize="3xl" mb={2}>
            About
          </Heading>
          <Text fontWeight="bold">船橋一汰 Itta Funahashi</Text>
          <Text>
            14 y/o
            <br />
            <br />
            <br />
            UI/UXに興味があります。
          </Text>
          <Text mt={2}>chottodekiru: TS / React / Next.js / Blender / Rust</Text>
        </Box>
      </Container>
    </Box>
  );
};

export default Home;
