import { Box, Heading } from '@chakra-ui/react';
import { FC, ReactNode } from 'react';

interface Props {
  title: string;
  children: ReactNode;
}

const ContentGroup: FC<Props> = ({ title, children }) => {
  return (
    <Box as="article">
      <Heading as="h2" fontWeight="extrabold" fontSize="3xl" mb={3}>
        About
      </Heading>
      {children}
    </Box>
  );
};

export default ContentGroup;
