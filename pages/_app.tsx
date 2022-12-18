import type { AppProps } from 'next/app';
import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  fonts: {
    heading: `Futura 'Open Sans', sans-serif`,
  },
});

function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} theme={theme} />;
}

export default App;
