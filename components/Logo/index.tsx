import { FC, useRef } from 'react';
import { chakra, ChakraProps } from '@chakra-ui/react';
import { Player } from '@lottiefiles/react-lottie-player';
import LogoWithoutHammer from './LogoWithoutHammer';

const Logo: FC<ChakraProps> = (props) => {
  const player = useRef<Player>(null);
  const shadowPlayer = useRef<Player>(null);
  const handleClick = () => {
    if (player.current && shadowPlayer.current) {
      player.current.setSeeker(0);
      shadowPlayer.current.setSeeker(0);
      player.current.play();
      shadowPlayer.current.play();
    }
  };

  return (
    <chakra.div position="relative" onClick={handleClick} {...props}>
      <chakra.div>
        <Player
          ref={shadowPlayer}
          autoplay={true}
          loop={false}
          keepLastFrame
          src="/lottie/kawaii-logo-hammer-shadow.json"
          style={{ height: '220px', width: '562.5px' }}
        ></Player>
      </chakra.div>
      <LogoWithoutHammer position="absolute" top={0} left={0} />
      <chakra.div position="absolute" top={0} left={0}>
        <Player
          ref={player}
          autoplay={true}
          loop={false}
          keepLastFrame
          src="/lottie/kawaii-logo-hammer.json"
          style={{ height: '220px', width: '562.5px' }}
        ></Player>
      </chakra.div>
    </chakra.div>
  );
};

export default Logo;
