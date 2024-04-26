import { appsData } from "@/data/apps";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";

const AppHeader = ({ thumb }: { thumb: string }) => {
	return (
		<div className="flex flex-1 w-full h-full min-h-[6rem] justify-center rounded-xl">
			<img className="w-full " src={thumb} />
		</div>
	);
};

const MacosSection = () => {
	const macApps = appsData.filter((app) => app.tag === "Mac");

	const items = macApps.map((app) => ({
		title: app.title,
		description: app.description,
		header: <AppHeader thumb={app.heroThumb} />,
		className: "col-span-1",
		icon: app.icon,
		link: `/app/${app.id}`,
		color: app.color
	}));

	return (
		<div className="flex flex-col items-center justify-center p-4 my-8">
			<div className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-emerald-500">
				Best in class
			</div>
			<div className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-white pb-8">
				MacOS Apps
			</div>
			<BentoGrid className="max-w-6xl mx-auto md:auto-rows-[20rem]">
				{items.map((item, i) => (
					<BentoGridItem
						key={i}
						title={item.title}
						description={item.description}
						header={item.header}
						className={item.className}
						link={item.link}
						color={item.color}
						// icon={item.icon}
					/>
				))}
			</BentoGrid>
		</div>
	);
};

export default MacosSection;
