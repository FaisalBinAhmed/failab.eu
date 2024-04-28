import { AppsDataItem, appsData } from "@/data/apps";
import Link from "next/link";
import { BackgroundGradient } from "../ui/background-gradient";
import { Button } from "../ui/button";

const MobileAppSection = () => {
	const trilby = appsData.filter((app) => app.id === "trilby");
	const listCalc = appsData.filter((app) => app.id === "listcalculation");

	return (
		<div className="flex flex-col bg-black w-full items-center py-16">
			<div className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-emerald-500">
				Mobile apps with focus on
			</div>
			<div className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-white mb-8">
				Performance and UI
			</div>
			<div className="flex grow flex-col md:flex-row flex-wrap gap-4 p-4 max-w-5xl">
				<MobileAppCard app={trilby[0]} />
				<MobileAppCard app={listCalc[0]} />
			</div>
		</div>
	);
};

export default MobileAppSection;

const MobileAppCard = ({ app }: { app: AppsDataItem }) => {
	return (
		<div className="flex-1">
			<BackgroundGradient className="rounded-[22px] bg-black p-4 bg-opacity-90 flex flex-col md:flex-row justify-between">
				{/* <div
				// style={{ backgroundColor: app.color }}
				className="flex flex-col bg-[linear-gradient(110deg,#333_0.6%,#222)] flex-1 md:flex-row rounded-xl justify-between"> */}
				<img
					src={app.heroThumb}
					alt={`${app.title} logo`}
					className="object-contain h-96 p-4"
				/>
				<div className={`flex flex-1 flex-col gap-2 justify-between p-4`}>
					<img
						src={app.icon}
						alt={`${app.title} logo`}
						className=" h-0 md:h-32 md:w-32"
					/>

					<div
						// style={{ color: app.fontColor ?? "white" }}
						className="mt-2 text-xl font-medium ">
						{app.title}
					</div>
					<p
						// style={{ color: app.fontColor ?? "white" }}
						className="text-m">
						{app.description}
					</p>
					<div className="mt-4">
						<Button className="rounded" variant="outline" asChild>
							<Link href={`/app/${app.id}`}>Learn More</Link>
						</Button>
					</div>
					{/* <Link href={`/app/${app.id}`}>
						<p className="font-normal my-1 text-xs text-neutral-400">
							Learn More
						</p>
					</Link> */}
				</div>
			</BackgroundGradient>
		</div>
	);
};
