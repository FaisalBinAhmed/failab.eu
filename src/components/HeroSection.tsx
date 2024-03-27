import { Button } from "@/components/ui/button";
import Link from "next/link";

const HeroSection = () => {
	return (
		<div className="flex w-full flex-col items-center justify-center">
			<img className="w-32" src="/assets/failab.webp" />
			<div className="flex flex-col gap-4 items-center m-8">
				<p className="bg-clip-text text-6xl text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
					Failab
				</p>
				<p className="text-2xl">Hobby projects + commercial app quality</p>
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
