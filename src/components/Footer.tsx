import Link from "next/link";

const Footer = () => {
	const date = new Date().getFullYear();

	function openLink(link: string) {
		window.open(link, "_blank noreferer");
	}

	return (
		<div className="flex flex-col gap-4 bg-[#121212] text-gray-400">
			<div className="flex flex-col md:flex-row md:justify-between items-center h-96 w-full p-8">
				<div className="flex flex-col items-center md:items-start text-center md:text-left">
					<div className="flex flex-row gap-2">
						<img
							onClick={() => openLink("https://twitter.com/failab_eu")}
							src="/assets/twitter.svg"
							className="cursor-pointer"
						/>
						<img
							onClick={() => openLink("https://paypal.me/FaisalDE")}
							src="/assets/paypal.svg"
							className="cursor-pointer"
						/>
					</div>
					<div className="flex gap-2 mb-16">
						<Link href="/about">About</Link>
						<Link href="/contact">Contact</Link>
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
