import {
  chakra,
  Box,
  Button,
  Container,
  Text,
  UnorderedList,
  VStack,
  Stack,
} from '@chakra-ui/react';
import ContentGroup from 'components/ContentGroup';
import type { NextApiRequest } from 'next';
import Head from 'next/head';
import Logo from 'components/Logo';
import ListItemWrap from 'components/ListItemWrap';
import Link from 'next/link';
import { IconBrandGithub, IconBrandTwitter, IconCode } from '@tabler/icons';
import DinamicShadowImage from 'components/DinamicShadowImage';
import { FC } from 'react';

interface HomePageProps {
  hideTwitter: boolean;
}

const Home: FC<HomePageProps> = ({ hideTwitter }) => {
  return (
    <Box bg="gray.800" color="white" minH="100vh">
      <Container maxW="container.md" pb={14}>
        <Head>
          <title>Itta&apos;s Portfolio</title>
          <link rel="icon" href="/favicon.ico" />
          <meta name="description" content="Itta's Portfolio Site" />
        </Head>
        <Box display="flex" alignItems="center" as="header" mx={10} h={72}>
          <Logo mx="auto" />
        </Box>
        <Box as="main" mt={8}>
          <ContentGroup title="About">
            <Stack
              justifyContent="space-between"
              flexDir={{ md: 'row', base: 'column-reverse' }}
              gap={10}
              alignItems="center"
            >
              <Box w={{ base: 'full', md: 'auto' }}>
                <Text fontWeight="bold" mb={5}>
                  船橋一汰 Itta Funahashi
                </Text>
                <Text>14 y/o</Text>
                <Text>
                  Reactを書いています。 Rust勉強中です...
                  <br />
                  UI/UXに興味があります。
                </Text>
                <Text mt={3}>chottodekiru: TypeScript / React / Next.js / Blender</Text>
              </Box>
              <DinamicShadowImage src="/img/icon.jpg" width={170} height={170} alt="Icon" />
            </Stack>
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
                <Button leftIcon={<IconBrandGithub />}>GitHub: @itta611</Button>
              </Link>
              {hideTwitter && (
                <Link href="https://twitter.com/IttaFunahashi">
                  <Button leftIcon={<IconBrandTwitter />}>Twitter: @IttaFunahashi</Button>
                </Link>
              )}
              <Link href="https://github.com/itta611/itta.dev">
                <Button leftIcon={<IconCode />}>Source Code</Button>
              </Link>
            </VStack>
          </ContentGroup>
          <ContentGroup title="GraphQL Playground">
            <chakra.iframe w="full" h={500} src="/playground/" />
          </ContentGroup>
        </Box>
      </Container>
    </Box>
  );
};

export async function getServerSideProps({ req }: { req: NextApiRequest }) {
  const ip = req.headers['x-real-ip'] || req.connection.remoteAddress;
  const hideTwitter = process.env.HIDE_IP === ip;

  return {
    props: {
      hideTwitter,
    },
  };
}

export default Home;
