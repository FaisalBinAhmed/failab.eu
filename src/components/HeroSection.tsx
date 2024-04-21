import { Button } from "@/components/ui/button";
import Link from "next/link";

const HeroSection = () => {
	return (
		<div className="flex w-full flex-col items-center justify-center">
			<img className="w-32" src="/assets/failab.webp" />
			<div className="flex flex-col gap-4 items-center m-8">
				<p className="bg-clip-text text-6xl text-transparent bg-gradient-to-r from-[#ff5649] to-[#019ee3]">
					Failab
				</p>
				<p className="text-2xl text-center">
					Hobby projects with commercial app quality
				</p>
				<div className="flex gap-4">
					<Button
						onClick={() => {
							window.open("https://twitter.com/failab_eu", "_blank noreferer");
						}}>
						Follow Us
					</Button>
					<Button variant="secondary" asChild>
						<Link href="/contact">Contact</Link>
					</Button>
				</div>
			</div>
		</div>
	);
};

export default HeroSection;

const FanncyButton = ({ title }: { title: string }) => {
	return (
		<button className="p-[3px] relative">
			<div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
			<div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
				{title}
			</div>
		</button>
	);
};
