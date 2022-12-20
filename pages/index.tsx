import { Box, Code, Container, Text } from '@chakra-ui/react';
import { ContentGroup, NormalContent, APIContent } from 'components/ContentGroup';
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
          <ContentGroup title="About">
            <NormalContent>
              <Text fontWeight="bold" mb={5}>
                船橋一汰 Itta Funahashi
              </Text>
              <Text>14 y/o</Text>
              <Text>
                Reactを書いています。 Rust勉強中です...
                <br />
                UI/UXに興味があります。
              </Text>
            </NormalContent>
            <Text mt={3}>chottodekiru: TS / React / Next.js / Blender</Text>
            <APIContent display="hidden">
              <Code>https://itta.dev/api/profile</Code>
            </APIContent>
          </ContentGroup>
        </Box>
      </Container>
    </Box>
  );
};

export default Home;
