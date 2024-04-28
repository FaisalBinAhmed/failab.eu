import { Inter } from "next/font/google";
import Feedbacks from "@/components/Feedbacks";
import HeroSection from "@/components/sections/HeroSection";
import MacosSection from "@/components/sections/MacosSection";
import MobileAppSection from "@/components/sections/MobileAppSection";
import ReviewSection from "@/components/sections/ReviewSection";
import ContactSection from "@/components/sections/ContactSection";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
	return (
		<main
			className={`flex min-h-screen flex-col items-center justify-between ${inter.className} bg-[#121212]`}>
			<HeroSection />
			<MobileAppSection />
			<MacosSection />
			<ReviewSection />
			<ContactSection />
		</main>
	);
}
