import { appsData } from "@/data/apps";
import Link from "next/link";

const AppsReel = () => {
	return (
		<div className="w-full overflow-x-scroll">
			<div className="flex grow justify-center">
				{appsData.map((app) => (
					<Link
						href={`/app/${app.id}`}
						className="w-[128px] my-8 mx-1 grayscale hover:grayscale-0 cursor-pointer">
						<img src={app.icon} alt={`${app.title} logo`} />
					</Link>
				))}
			</div>
		</div>
	);
};

export default AppsReel;
