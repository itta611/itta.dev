import { FC, useEffect, useRef } from 'react';
import { chakra, ChakraProps } from '@chakra-ui/react';
import lottie, { AnimationItem } from 'lottie-web';
import LogoWithoutHammer from './LogoWithoutHammer';
import kawaiiLogoHammer from './kawaii-logo-hammer.json';
import kawaiiLogoHammerShadow from './kawaii-logo-hammer-shadow.json';

const Logo: FC<ChakraProps> = (props) => {
  const player = useRef<AnimationItem | null>(null);
  const shadowPlayer = useRef<AnimationItem | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const shadowContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !shadowContainerRef.current) return;

    player.current = lottie.loadAnimation({
      container: containerRef.current,
      renderer: 'svg',
      autoplay: true,
      loop: false,
      animationData: kawaiiLogoHammer,
    });

    shadowPlayer.current = lottie.loadAnimation({
      container: shadowContainerRef.current,
      renderer: 'svg',
      autoplay: true,
      loop: false,
      animationData: kawaiiLogoHammerShadow,
      path: '/lottie/kawaii-logo-hammer-shadow.json',
    });

    return () => {
      player.current?.destroy();
      shadowPlayer.current?.destroy();
    };
  }, []);

  const handleClick = () => {
    if (player.current && shadowPlayer.current) {
      player.current.goToAndPlay(0);
      shadowPlayer.current.goToAndPlay(0);
    }
  };

  return (
    <chakra.div position="relative" onClick={handleClick} {...props}>
      <chakra.div ref={shadowContainerRef} width={562.5} height={220} />
      <LogoWithoutHammer position="absolute" top={0} left={0} />
      <chakra.div
        position="absolute"
        top={0}
        left={0}
        width={562.5}
        height={220}
        ref={containerRef}
      />
    </chakra.div>
  );
};

export default Logo;
