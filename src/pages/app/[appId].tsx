import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious
} from "@/components/ui/carousel";
import { appsData } from "@/data/apps";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

export default function AppDetails() {
	const router = useRouter();
	const { appId } = router.query;

	const app = appsData.find((app) => app.title.toLowerCase() === appId);

	if (!app) return <div>App not found</div>;

	return (
		<div className="flex flex-row w-full p-8">
			<div className="w-1/2 flex flex-col gap-4">
				<Image
					src={app.icon}
					alt={`${app.title} logo`}
					width={128}
					height={128}
				/>
				<div className="mt-2 text-xl font-medium text-gray-800">
					{app.title}
				</div>
				<div
					// style={{ backgroundColor: app.color }}
					className={`flex flex-col gap-2 justify-center w-full`}>
					<p
						// style={{ color: app.fontColor ?? "white" }}
						className="text-m">
						{app.description}
					</p>
					<Link href={`/app/${app.title.toLowerCase()}`}>
						<p
							// style={{ color: app.fontColor ?? "white" }}
							className="text-m underline">
							Learn More
						</p>
					</Link>
					<div className="flex space-x-4 pt-4">
						{app.storeLinks.map((store) => (
							<Link
								key={store.storeType}
								href={store.link}
								className="text-sm text-blue-600">
								<img
									src={`/assets/${store.storeType}.png`}
									alt={`${store.storeType} logo`}
									className="max-h-16 object-cover"
								/>
							</Link>
						))}
					</div>
				</div>
			</div>

			<div className="flex items-center flex-1 px-24">
				<Carousel className="w-full">
					<CarouselContent>
						{app.screenshots.map((screenshot) => (
							<CarouselItem key={screenshot.path}>
								<div className="">
									<img
										src={screenshot.path}
										alt={screenshot.description}
										className="object-contain h-96 w-full"
									/>
								</div>
							</CarouselItem>
						))}
					</CarouselContent>
					<CarouselPrevious />
					<CarouselNext />
				</Carousel>
			</div>
		</div>
	);
}
