import { ChakraProvider, ColorModeScript, extendTheme, ThemeConfig } from '@chakra-ui/react';
import type { AppProps } from 'next/app';

const theme = extendTheme({
  components: {
    Text: {
      baseStyle: {
        my: 2,
      },
    },
  },
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: false,
  } as ThemeConfig,
  styles: {
    global: () => ({
      body: {
        bg: 'gray.800',
        color: 'white',
        fontSize: 'lg',
      },
    }),
  },
});

function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default App;
