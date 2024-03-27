import Link from "next/link";

const About = () => {
	return (
		<div className="flex flex-col gap-4 p-8 lg:px-96">
			<h1 className="text-lg font-bold">About Failab</h1>
			<p>
				Failab is the home for projects I make during my weekends and holidays.
				Failab is NOT a registered trade entity. The dream is to convert it to
				my own company in the future. Hopefully, one day it will generate enough
				revenue for that.
			</p>
			<p>
				I am currently based in Munich, Germany. I am the sole developer behind
				these apps. Most of my apps are completely free. Failab apps never
				collect any data or show ads.
			</p>
			<p>
				The apps were created out of my own necessities. As I work full time and
				have a big wish list for new apps, I do not have enough time to revisit
				individual apps quite often. That is why I make sure the first
				release(s) have the most features and the least bugs. Nonetheless, I
				keep my apps up-to-date. The changelogs are the testament to that.
			</p>
			<p>
				I love hearing your feedback. As I do not get much revenue from the
				apps, your feedback and kind words are the fuel that keeps me going. If
				you have anything to share, feel free to{" "}
				<Link className="underline text-blue-500" href="/contact">
					contact me.
				</Link>{" "}
				As always, reviews/ratings on the app stores are highly appreciated.
			</p>
			<p>
				In case you feel extra generous, you can send me some coffee or beer
				money at my{" "}
				<Link
					className="underline text-blue-500"
					href="https://paypal.me/FaisalDE"
					target="_blank">
					Paypal
				</Link>{" "}
				or{" "}
				<Link
					className="underline text-blue-500"
					href="https://www.buymeacoffee.com/faisalbin"
					target="_blank">
					Buy Me a Coffee
				</Link>{" "}
				thing. :){" "}
			</p>
			<p>
				If you want to keep updated and learn about new apps being released, you
				can also{" "}
				<Link
					className="underline text-blue-500"
					href="https://twitter.com/faisalbahmed"
					target="_blank">
					follow me on Twitter
				</Link>{" "}
				and other <a href="/contact">social networks</a>.
			</p>
			<h4>Love, Faisal</h4>
		</div>
	);
};

export default About;
