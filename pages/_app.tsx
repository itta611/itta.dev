import { ChakraProvider, extendTheme, ThemeConfig } from '@chakra-ui/react';
import { Analytics } from '@vercel/analytics/react';
import 'styles/playground-styles.css';
import type { AppProps } from 'next/app';

const theme = extendTheme({
  components: {
    Text: {
      baseStyle: {
        my: 2,
      },
    },
    Link: {
      baseStyle: {
        color: 'teal.200',
        textDecoration: 'underline',
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
      <Analytics />
    </ChakraProvider>
  );
}

export default App;
