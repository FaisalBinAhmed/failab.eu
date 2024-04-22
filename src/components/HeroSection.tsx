import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { HeroHighlight, Highlight } from "./ui/hero-highlight";

// const HeroSection = () => {
// 	return (
// 		<div className="flex w-full flex-col items-center justify-center">
// 			<img className="w-32" src="/assets/failab.webp" />
// 			<div className="flex flex-col gap-4 items-center m-8">
// 				<p className="bg-clip-text text-6xl text-transparent bg-gradient-to-r from-[#ff5649] to-[#019ee3]">
// 					Failab
// 				</p>
// 				<p className="text-2xl text-center">
// 					Hobby projects with commercial app quality
// 				</p>
// 				<div className="flex gap-4">
// 					<Button
// 						className="rounded"
// 						onClick={() => {
// 							window.open("https://twitter.com/failab_eu", "_blank noreferer");
// 						}}>
// 						Follow Us
// 					</Button>
// 					<Button className="rounded" variant="secondary" asChild>
// 						<Link href="/contact">Contact</Link>
// 					</Button>
// 				</div>
// 			</div>
// 		</div>
// 	);
// };

// export default HeroSection;

export function HeroSection() {
	return (
		<HeroHighlight containerClassName="bg-[#121212]">
			<motion.h1
				initial={{
					opacity: 0,
					y: 20
				}}
				animate={{
					opacity: 1,
					y: [20, -5, 0]
				}}
				transition={{
					duration: 0.5,
					ease: [0.4, 0.0, 0.2, 1]
				}}
				className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto ">
				Hobby projects with commercial app quality{" "}
				<Highlight className="text-black dark:text-white">
					made in Munich
				</Highlight>
			</motion.h1>
		</HeroHighlight>
	);
}

export default HeroSection;
