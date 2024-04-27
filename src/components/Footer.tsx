import Link from "next/link";
import { Button } from "./ui/button";

const Footer = () => {
	const date = new Date().getFullYear();

	function openLink(link: string) {
		window.open(link, "_blank noreferer");
	}

	return (
		<div className="flex flex-col bg-black gap-4 text-neutral-500">
			<div className="flex flex-col md:flex-row md:justify-between items-center h-96 w-full p-8">
				<div className="flex flex-col items-center md:items-start text-center md:text-left">
					<div className="flex flex-row gap-2 my-8">
						<Button className="rounded" variant="outline" asChild>
							<Link target="_blank" href="https://twitter.com/failab_eu">
								@failab_eu
							</Link>
						</Button>
						<Button className="rounded" variant="outline" asChild>
							<Link target="_blank" href="https://buymeacoffee.com/faisalbin">
								Buy Me a Coffee
							</Link>
						</Button>
					</div>
					<p>© Failab {date}</p>
					<p>Made with ♥ in Munich</p>
				</div>
				<div className="flex flex-col justify-end h-full">
					<img className="mb-8 h-32" src="/assets/munich.svg" />
				</div>
			</div>
		</div>
	);
};

export default Footer;
