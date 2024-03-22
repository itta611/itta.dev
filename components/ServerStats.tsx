import { Box, HStack, Text, VStack } from '@chakra-ui/react';
import { IconCpu, IconRuler3 } from '@tabler/icons-react';
import { FC } from 'react';

interface Props {
  temperature: number;
  cpuUsage: number;
  memoryUsage: number;
  totalMemory: number;
  hostname: string;
}

const ServerStats: FC<Props> = ({ temperature, cpuUsage, memoryUsage, totalMemory, hostname }) => (
  <Box w={28} color="gray.400">
    <VStack spacing={-1} py={2}>
      <Box fontWeight="bold" fontSize="3xl" color={temperature < 50 ? 'yellow.400' : 'red.400'}>
        {temperature}
      </Box>
      <Box marginTop={0}>{hostname}</Box>
    </VStack>
    <Box borderTop="1px" borderColor="gray.500" width="full" />
    <VStack p={2} spacing={1} alignItems="start">
      <HStack alignItems="center" spacing={2}>
        <IconCpu size={20} strokeWidth={1.5} />
        <Text fontSize="sm">{cpuUsage}%</Text>
      </HStack>
      <HStack alignItems="center" spacing={2}>
        <IconRuler3 size={20} strokeWidth={1.5} style={{ transform: 'rotate(180deg)' }} />
        <Text fontSize="sm">
          {memoryUsage} / {totalMemory}GB
        </Text>
      </HStack>
    </VStack>
  </Box>
);

export default ServerStats;
