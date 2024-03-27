import Link from "next/link";

const Contact = () => {
	return (
		<div className="flex flex-col gap-4 p-8 ">
			<h1 className="text-lg font-bold">Contact</h1>
			<h2 className="text-md font-bold">App Support:</h2>
			<p>
				Please contact dev@faisalbin.com for any kind of support, feedback,
				feature requests or criticism :){" "}
			</p>
			<h2 className="text-md font-bold">Social links:</h2>
			<p>
				<Link
					className="underline text-blue-500"
					href="https://twitter.com/faisalbahmed"
					target="_blank">
					Twitter
				</Link>{" "}
				(Author)
			</p>
			<p>
				<Link
					className="underline text-blue-500"
					href="https://linkedin.com/in/faisalbin"
					target="_blank">
					LinkedIn
				</Link>
			</p>
			<p>
				<Link
					className="underline text-blue-500"
					href="https://faisalbin.com"
					target="_blank">
					Personal Portfolio
				</Link>
			</p>
			<p>
				<Link
					className="underline text-blue-500"
					href="https://github.com/faisalbinahmed"
					target="_blank">
					Github
				</Link>
			</p>

			<h2 className="text-md font-bold">Donate:</h2>
			<p>
				<Link
					className="underline text-blue-500"
					href="https://www.buymeacoffee.com/faisalbin"
					target="_blank">
					Buy Me a Coffee
				</Link>
			</p>
			<p>
				<Link
					className="underline text-blue-500"
					href="https://paypal.me/FaisalDE"
					target="_blank">
					Paypal
				</Link>{" "}
				(Personal)
			</p>
		</div>
	);
};

export default Contact;
