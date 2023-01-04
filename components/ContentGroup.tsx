import { Box, ChakraProps, Heading } from '@chakra-ui/react';
import { FC, ReactNode } from 'react';

export interface ContentGroupProps extends ChakraProps {
  title: string;
  children: ReactNode;
}

const ContentGroup: FC<ContentGroupProps> = ({ title, children, ...chakraProps }) => {
  return (
    <Box as="article" position="relative" mt={10} {...chakraProps}>
      <Heading as="h2" fontWeight="extrabold" fontSize="3xl" mb={3}>
        {title}
      </Heading>
      {children}
    </Box>
  );
};

export default ContentGroup;
