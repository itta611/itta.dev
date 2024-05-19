import { FC } from 'react';
import { chakra, ChakraProps } from '@chakra-ui/react';
import { Player } from '@lottiefiles/react-lottie-player';
import LogoWithoutHammer from './LogoWithoutHammer';

const Logo: FC<ChakraProps> = (props) => {
  return (
    <chakra.div position="relative" {...props}>
      <chakra.div position="absolute" top={0} left={0}>
        <Player
          autoplay={true}
          controls={true}
          loop={false}
          src="/lottie/kawaii-logo-hammer-shadow.json"
          style={{ height: '176px', width: '450px' }}
        ></Player>
      </chakra.div>
      <LogoWithoutHammer />
      <chakra.div position="absolute" top={0} left={0}>
        <Player
          autoplay={true}
          controls={true}
          loop={false}
          src="/lottie/kawaii-logo-hammer.json"
          style={{ height: '176px', width: '450px' }}
        ></Player>
      </chakra.div>
    </chakra.div>
  );
};

export default Logo;
