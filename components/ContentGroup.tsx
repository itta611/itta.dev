import { Box, Button, ChakraProps, Heading, IconButton } from '@chakra-ui/react';
import { IconApi, IconApiOff } from '@tabler/icons';
import { createContext, FC, ReactNode, useState } from 'react';

const ContentApiModeContext = createContext<boolean>(false);

export interface ContentGroupProps {
  title: string;
  children: ReactNode;
}

export const ContentGroup: FC<ContentGroupProps> = ({ title, children }) => {
  const [apiMode, setApiMode] = useState(false);

  return (
    <ContentApiModeContext.Provider value={apiMode}>
      <Box as="article" position="relative">
        <IconButton
          aria-label="API"
          variant="outline"
          position="absolute"
          top={2}
          right={2}
          onClick={() => setApiMode(!apiMode)}
        >
          {apiMode ? <IconApiOff /> : <IconApi />}
        </IconButton>
        <Heading as="h2" fontWeight="extrabold" fontSize="3xl" mb={3}>
          {title}
        </Heading>
        {children}
      </Box>
    </ContentApiModeContext.Provider>
  );
};

export interface NormalContentProps extends ChakraProps {
  children: ReactNode;
}

export const NormalContent: FC<NormalContentProps> = ({ children, ...props }) => {
  return <Box {...props}>{children}</Box>;
};

export interface APIContentProps extends ChakraProps {
  children: ReactNode;
}

export const APIContent: FC<APIContentProps> = ({ children, ...props }) => {
  return <Box {...props}>{children}</Box>;
};
