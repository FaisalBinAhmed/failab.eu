import { HoverEffect } from "@/components/ui/card-hover-effect";
import { appsData } from "@/data/apps";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

export default function AppDetails() {
	const router = useRouter();
	const { appId } = router.query;

	const app = appsData.find((app) => app.id.toLowerCase() === appId);

	if (!app) return <div>App not found</div>;

	return (
		<div className="w-full p-2 bg-[#121212]">
			<div className="flex flex-col md:flex-row w-full p-8">
				<div className="flex-1 min-w-72 flex flex-col gap-4">
					<Image
						src={app.icon}
						alt={`${app.title} logo`}
						width={128}
						height={128}
					/>
					<div className="mt-2 text-xl font-medium text-gray-100">
						{app.title}
					</div>
					<div className={`flex flex-col gap-2 justify-center w-full`}>
						<p className="text-m">{app.description}</p>
						<div className="flex gap-4 pt-4 flex-wrap">
							{app.storeLinks.map((store) => (
								<Link
									key={store.storeType}
									href={store.link}
									className="text-sm text-blue-600">
									<img
										src={`/assets/${store.storeType}.png`}
										alt={`${store.storeType} logo`}
										className="h-16 object-cover"
									/>
								</Link>
							))}
						</div>
					</div>
				</div>

				<div className="flex w-full md:w-2/3  items-center py-8 overflow-x-scroll">
					<div className="flex gap-2">
						{app.screenshots.map((screenshot) => (
							<img
								src={screenshot.path}
								alt={screenshot.description}
								className="object-contain h-96 w-full"
							/>
						))}
					</div>
				</div>
			</div>
			{app.featurelist && <HoverEffect items={app.featurelist} />}
		</div>
	);
}
