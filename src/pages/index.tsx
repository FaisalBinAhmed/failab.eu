import { Inter } from "next/font/google";
import { CarouselBar } from "@/components/CarouselBar";
import Feedbacks from "@/components/Feedbacks";
import HeroSection from "@/components/HeroSection";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
	return (
		<main
			className={`flex min-h-screen flex-col items-center justify-between ${inter.className} bg-[#121212]`}>
			<HeroSection />
			<CarouselBar />
			<Feedbacks />
		</main>
	);
}
