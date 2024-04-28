import Link from "next/link";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
	return (
		<div className="flex grow  bg-black rounded-xl m-4 md:m-8 mb-16 flex-row gap-4">
			<div className="flex flex-col justify-center m-8 gap-8 md:mr-32 p-2">
				<div className="text-2xl md:text-4xl lg:text-5xl font-bold text-white">
					Want To
				</div>
				<div className="text-2xl md:text-4xl -mt-8 lg:text-5xl font-bold text-emerald-500">
					Reach Us?
				</div>
				<div className="flex flex-col md:flex-row gap-4">
					<Button
						className="rounded"
						variant="outline"
						onClick={() => {
							window.open("https://twitter.com/failab_eu", "_blank noreferer");
						}}>
						Follow Us
					</Button>
					<Button className="rounded" variant="outline" asChild>
						<Link href="/contact">Contact</Link>
					</Button>
				</div>
			</div>
			<div>
				<img
					className="h-48 w-48 md:w-96 md:h-96 md:-mt-16"
					src="/assets/failab_angled.svg"
				/>
			</div>
		</div>
	);
};

export default ContactSection;
