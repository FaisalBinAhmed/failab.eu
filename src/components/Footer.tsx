import Link from "next/link";

const Footer = () => {
	const date = new Date().getFullYear();

	function openLink(link: string) {
		window.open(link, "_blank noreferer");
	}

	return (
		<div className="flex flex-col gap-4 bg-[#121212] h-96 w-full items-center text-gray-400">
			<div className="flex flex-row gap-4 pt-8">
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
			<div className="flex gap-2">
				<Link href="/about">About</Link>
				<Link href="/contact">Contact</Link>
			</div>
			<div className="flex flex-col md:flex-row md:justify-between items-center w-full p-8">
				<div className=" text-center md:text-left">
					<p>© Failab {date}</p>
					<p>Made with ♥ in Munich</p>
				</div>
				<img src="/assets/munich.png" />
			</div>
		</div>
	);
};

export default Footer;
