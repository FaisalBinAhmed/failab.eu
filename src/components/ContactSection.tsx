import Link from "next/link";
import { Button } from "./ui/button";

const ContactSection = () => {
	return (
		<div className="flex grow flex-col bg-black rounded-xl m-4 md:m-8 mb-16 md:flex-row gap-4 p-4">
			<div className="flex flex-col justify-center m-8 gap-8 md:mr-32">
				<div className="text-2xl md:text-4xl lg:text-5xl font-bold text-white">
					Want to
				</div>
				<div className="text-2xl md:text-4xl -mt-8 lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500">
					Reach us?
				</div>
				<div className="flex gap-4">
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
			<div className="">
				<img
					className="h-0 w-96 md:h-96 md:-mt-16"
					src="/assets/failab_angled.svg"
				/>
			</div>
		</div>
	);
};

export default ContactSection;
