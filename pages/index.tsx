import {
  Box,
  Button,
  Container,
  Text,
  UnorderedList,
  VStack,
  Stack,
  HStack,
  Link as ChakraLink,
} from '@chakra-ui/react';
import ContentGroup from 'components/ContentGroup';
import Head from 'next/head';
import Logo from 'components/Logo';
import ListItemWrap from 'components/ListItemWrap';
import Link from 'next/link';
import {
  IconBrandGithub,
  IconBrandX,
  IconBuilding,
  IconCake,
  IconCode,
  IconHammer,
  IconHeartCode,
  IconLocation,
  IconMapPin,
} from '@tabler/icons-react';
import DinamicShadowImage from 'components/DinamicShadowImage';
import { FC, useEffect, useState } from 'react';
import ServerStats from 'components/ServerStats';
import type { Stats } from 'types';

const Home: FC = () => {
  const [statsList, setStats] = useState<{ [key: string]: Stats } | undefined>();
  const hosts = statsList ? Object.keys(statsList) : [];
  hosts.sort();

  useEffect(() => {
    if (process.env.NODE_ENV === 'development') return;

    let timerId: NodeJS.Timeout;

    const fetchStats = async () => {
      const res = await fetch('/api/getStats');
      const data = await res.json();
      setStats(data);
      timerId = setTimeout(fetchStats, 5000);
    };

    fetchStats();

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
                  Itta Funahashi{' '}
                  <Text textColor="gray.400" as="span">
                    (@itta611)
                  </Text>
                </Text>
                <VStack spacing={2} textColor="teal.200" alignItems="start">
                  <HStack>
                    <IconCake size={18} />
                    <Text as="span" ml={2} textColor="white" fontSize="sm" fontWeight="semibold">
                      2008/6/11 (15 さい)
                    </Text>
                  </HStack>
                  <HStack>
                    <IconMapPin size={18} />
                    <Text as="span" ml={2} textColor="white" fontSize="sm" fontWeight="semibold">
                      Aichi, Japan
                    </Text>
                  </HStack>
                  <HStack>
                    <IconHeartCode size={18} />
                    <Text as="span" ml={2} textColor="white" fontSize="sm" fontWeight="semibold">
                      Web Frontend, UI Design
                    </Text>
                  </HStack>
                  <HStack>
                    <IconHammer size={18} />
                    <Text as="span" ml={2} textColor="white" fontSize="sm" fontWeight="semibold">
                      TypeScript / React / Next.js / Blender
                    </Text>
                  </HStack>
                </VStack>
              </Box>
              <DinamicShadowImage src="/img/icon.png" width={201} height={200} alt="Icon" />
            </Stack>
          </ContentGroup>
          <ContentGroup title="What I am doing">
            <Text>
              革新的なインターフェースがどういったユーザー体験を与えるのか考えています。
              <br />
              たとえば、僕が中学の時に作った、{' '}
              <ChakraLink href="https://chokokucad.itta.dev" target="_blank">
                Chokoku CAD
              </ChakraLink>{' '}
              という作品がありますが、これはモデリングソフトの複雑な機能とUIを一つの一般化されたものに置き換えて、直感的でありながら幅広い操作ができるようにするというものです。
              <br />
              僕はこの作品がきっかけでUIに興味を持つようになりました。
              <br />
            </Text>
            <Text>
              今も、同じコンセプトで LLM を使って複雑な GUI
              を自然言語による指示に置き換えるようなアプリケーションを作っています。
              <br />
              ゆくゆくはこれをもう一度 Chokoku CAD に取り入れるというのが目標です。
            </Text>
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
            <Text>
              自宅のラズパイクラスタサーバーの温度です。わざわざここに載せる意味は... 特にないです。
            </Text>
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
