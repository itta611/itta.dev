import { Box, Button, Container, Text, UnorderedList, VStack } from '@chakra-ui/react';
import ContentGroup from 'components/ContentGroup';
import type { NextPage } from 'next';
import Head from 'next/head';
import Logo from 'components/Logo';
import ListItemWrap from 'components/ListItemWrap';
import Link from 'next/link';
import { IconBrandGithub, IconBrandTwitter, IconCode } from '@tabler/icons';

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
            <Text fontWeight="bold" mb={5}>
              船橋一汰 Itta Funahashi
            </Text>
            <Text>14 y/o</Text>
            <Text>
              Reactを書いています。 Rust勉強中です...
              <br />
              UI/UXに興味があります。
            </Text>
            <Text mt={3}>chottodekiru: TS / React / Next.js / Blender</Text>
          </ContentGroup>
          <ContentGroup title="Certificates / Awards">
            <UnorderedList>
              <ListItemWrap>英検２級</ListItemWrap>
              <ListItemWrap>
                U-22 プログラミング・コンテスト 2020 経済産業省商務政策局長賞 受賞
              </ListItemWrap>
              <ListItemWrap>U-22 プログラミング・コンテスト 2021 経済産業大臣賞 受賞</ListItemWrap>
            </UnorderedList>
          </ContentGroup>
          <ContentGroup title="Links">
            <VStack>
              <Link href="https://github.com/itta611">
                <Button leftIcon={<IconBrandGithub />}>@itta611</Button>
              </Link>
              <Link href="https://twitter.com/IttaFunahashi">
                <Button leftIcon={<IconBrandTwitter />}>@IttaFunahashi</Button>
              </Link>
              <Link href="https://github.com/itta611/itta-portfolio">
                <Button leftIcon={<IconCode />}>Source Code</Button>
              </Link>
            </VStack>
          </ContentGroup>
        </Box>
      </Container>
    </Box>
  );
};

export default Home;
