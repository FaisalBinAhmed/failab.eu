import { cn } from "@/lib/utils";
import { TypewriterEffect } from "./ui/typewriter-effect";

export const Highlight = ({
	children,
	className
}: {
	children: React.ReactNode;
	className?: string;
}) => {
	return (
		<span
			className={cn(
				"font-bold bg-emerald-700/[0.2] text-emerald-500 px-1 py-0.5",
				className
			)}>
			{children}
		</span>
	);
};

type ReviewCardProps = {
	id: number;
	content: React.ReactNode;
	name: string;
	designation: string;
};

const ReviewCard = ({ id, content, name, designation }: ReviewCardProps) => {
	return (
		<div
			key={id}
			className=" bg-black max-w-96 md:w-96 rounded-3xl p-4 shadow-xl border border-white/[0.1]  shadow-white/[0.05] flex flex-col justify-between"
			style={{
				transformOrigin: "top center"
			}}>
			<div className="font-normal text-neutral-200">{content}</div>
			<div>
				<p className="font-medium text-white mt-2">{name}</p>
				<p className="font-normal text-neutral-500">{designation}</p>
			</div>
		</div>
	);
};

const words = [
	{
		text: "What"
	},
	{
		text: "people"
	},
	{
		text: "are"
	},
	{
		text: "saying"
	}
];

const ReviewSection = () => {
	return (
		<div className="flex flex-col items-center bg-black bg-dot-white/[0.2] w-full py-8">
			{/* <div className="text-2xl mx-4 md:text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500">
				What people are saying
			</div> */}
			<TypewriterEffect words={words} />
			<div className="flex flex-row flex-wrap justify-center gap-4 p-4 mt-8">
				<ReviewCard
					id={1}
					name="Jan Kara"
					designation="KeyTrails"
					content={
						<p>
							I've been looking for an app that shows the actual output of the
							pressed keys for a long time. This app shows e.g. the € symbol
							pressing the key combination alt-E (German layout). What I know{" "}
							<Highlight>no other app can do</Highlight>, is to display the
							output of uppercase and lowercase letters. This app does that. A
							fantastic app. The developer responds quickly and 100% to requests
							and suggestions. I can't recommend this app highly enough...
						</p>
					}
				/>
				<ReviewCard
					id={2}
					name="Stephen"
					designation="Tabius"
					content={
						<p>
							Incredible extension. I tried other auto grouping extensions such
							as Mark Tab Manager, but my browser became a mess as it tried to
							group already opened tabs and windows, and it did not play well
							with The Marvellous Suspender, which is a must have for me to
							reduce my memory footprint since I open LOTS of tabs.{" "}
							<Highlight>
								{" "}
								With Tabius, it's a totally different beast!
							</Highlight>{" "}
							The philosophy is very different...
						</p>
					}
				/>
				<ReviewCard
					id={3}
					name="grnts"
					designation="Scaler"
					content={
						<p>
							I used MenuMeters for many years (with only up/down speeds
							showing). Moving to a new M1 Mac I didn't want to install Rosetta
							just for this feature. Scaler Bandwidth Monitor does exactly what
							I want and does it beautifully. Minimal design and a modern app.
							Fantastic.{" "}
							<Highlight>
								I give it 5-Stars because it is pretty much perfect
							</Highlight>{" "}
							...
						</p>
					}
				/>
			</div>
		</div>
	);
};

export default ReviewSection;
