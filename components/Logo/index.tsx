"use client";

// cf. ../interfaces/Header.tsx

import lottie, { AnimationItem } from "lottie-web";
import { FC, useEffect, useRef } from "react";
import kawaiiLogoHammer from "./kawaii-logo-hammer.json";
import kawaiiLogoHammerShadow from "./kawaii-logo-hammer-shadow.json";
import LogoWithoutHammer from "./LogoWithoutHammer";

const Logo: FC = () => {
	const player = useRef<AnimationItem | null>(null);
	const shadowPlayer = useRef<AnimationItem | null>(null);
	const containerRef = useRef<HTMLDivElement>(null);
	const shadowContainerRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (!containerRef.current || !shadowContainerRef.current) return;

		player.current = lottie.loadAnimation({
			container: containerRef.current,
			renderer: "svg",
			autoplay: true,
			loop: false,
			animationData: kawaiiLogoHammer,
		});

		shadowPlayer.current = lottie.loadAnimation({
			container: shadowContainerRef.current,
			renderer: "svg",
			autoplay: true,
			loop: false,
			animationData: kawaiiLogoHammerShadow,
			path: "/lottie/kawaii-logo-hammer-shadow.json",
		});

		return () => {
			player.current?.destroy();
			shadowPlayer.current?.destroy();
		};
	});

	const handleClick = () => {
		if (player.current && shadowPlayer.current) {
			player.current.goToAndPlay(0);
			shadowPlayer.current.goToAndPlay(0);
		}
	};

	return (
		<button
			className="relative mx-auto cursor-pointer"
			type="button"
			onClick={handleClick}
		>
			<div ref={shadowContainerRef} className="w-full" />
			<LogoWithoutHammer className="h-full absolute w-full top-0" />
			<div className="w-full absolute top-0 left-0" ref={containerRef} />
		</button>
	);
};

export default Logo;
