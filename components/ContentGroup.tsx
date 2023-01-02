import { Box, Heading } from '@chakra-ui/react';
import { FC, ReactNode } from 'react';

export interface ContentGroupProps {
  title: string;
  children: ReactNode;
}

export const ContentGroup: FC<ContentGroupProps> = ({ title, children }) => {
  return (
    <Box as="article" position="relative">
      <Heading as="h2" fontWeight="extrabold" fontSize="3xl" mb={3}>
        {title}
      </Heading>
      {children}
    </Box>
  );
};
