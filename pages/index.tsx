import {
  Box,
  Button,
  Container,
  Text,
  UnorderedList,
  VStack,
  Stack,
  HStack,
} from '@chakra-ui/react';
import ContentGroup from 'components/ContentGroup';
import Head from 'next/head';
import Logo from 'components/Logo';
import ListItemWrap from 'components/ListItemWrap';
import Link from 'next/link';
import { IconBrandGithub, IconBrandX, IconCode } from '@tabler/icons-react';
import DinamicShadowImage from 'components/DinamicShadowImage';
import { FC, useEffect, useState } from 'react';
import ServerStats from 'components/ServerStats';
import type { Stats } from 'types';

const Home: FC = () => {
  const [statsList, setStats] = useState<{ [key: string]: Stats } | undefined>();
  const hosts = statsList ? Object.keys(statsList) : [];
  hosts.sort();

  useEffect(() => {
    const timerId = setInterval(() => {
      const fetchStats = async () => {
        const res = await fetch('/api/getStats');
        const data = await res.json();
        setStats(data);
      };
      fetchStats();
    }, 5000);

    return () => {
      clearInterval(timerId);
    };
  }, []);

  return (
    <Box bg="gray.800" color="white" minH="100vh">
      <Container maxW="container.md" pb={15}>
        <Head>
          <title>Itta&apos;s Portfolio</title>
          <link rel="icon" href="/favicon.ico" />
          <meta name="description" content="Itta's Portfolio Site" />
        </Head>
        <Box display="flex" alignItems="center" as="header" mx={11} h={72}>
          <Logo mx="auto" />
        </Box>
        <Box as="main" mt={9}>
          <ContentGroup title="About">
            <Stack
              justifyContent="space-between"
              flexDir={{ md: 'row', base: 'column-reverse' }}
              gap={11}
              alignItems="center"
            >
              <Box w={{ base: 'full', md: 'auto' }}>
                <Text fontWeight="bold" mb={6}>
                  船橋一汰 Itta Funahashi
                </Text>
                <Text>15 y/o</Text>
                <Text>
                  Reactを書いています。 Rust勉強中です...
                  <br />
                  UI/UXに興味があります。
                </Text>
                <Text mt={4}>chottodekiru: TypeScript / React / Next.js / Blender</Text>
              </Box>
              <DinamicShadowImage src="/img/icon.png" width={201} height={200} alt="Icon" />
            </Stack>
          </ContentGroup>
          <ContentGroup title="What I am doing">
            <Box>
              既存のアプリケーションと大きく差別化を図るようなユーザー体験をつくっています。
              <br />
              「一つのテーマを持って、それを作り続ける」ことも大切だと言われますが、せっかく私は学生なのですから、興味のある技術を手当たり次第に学ぶことにも重きを置いています。
            </Box>
          </ContentGroup>
          <ContentGroup title="Certificates / Awards">
            <UnorderedList>
              <ListItemWrap>基本情報技術者試験 (FE)</ListItemWrap>
              <ListItemWrap>英検２級</ListItemWrap>
              <ListItemWrap>
                U-22 プログラミング・コンテスト 2020 経済産業省商務政策局長賞
              </ListItemWrap>
              <ListItemWrap>U-22 プログラミング・コンテスト 2021 経済産業大臣賞</ListItemWrap>
            </UnorderedList>
          </ContentGroup>
          <ContentGroup title="Server Stats">
            <HStack spacing={5}>
              {statsList &&
                hosts.map((hostname) => (
                  <ServerStats
                    temperature={statsList[hostname].temperature}
                    cpuUsage={statsList[hostname].cpuUsage}
                    memoryUsage={statsList[hostname].usedMem}
                    totalMemory={statsList[hostname].totalMem}
                    hostname={hostname}
                    key={hostname}
                  />
                ))}
            </HStack>
          </ContentGroup>
          <ContentGroup title="Links">
            <VStack>
              <Link href="https://github.com/itta611">
                <Button leftIcon={<IconBrandGithub />}>GitHub: @itta611</Button>
              </Link>
              <Link href="https://twitter.com/IttaFunahashi">
                <Button leftIcon={<IconBrandX />}>Twitter(X): @IttaFunahashi</Button>
              </Link>
              <Link href="https://github.com/itta611/itta.dev">
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
