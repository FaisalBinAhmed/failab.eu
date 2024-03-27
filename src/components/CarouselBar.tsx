import * as React from "react";

import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

import { appsData } from "@/data/apps";
import Image from "next/image";
import Link from "next/link";

export function CarouselBar() {
	return (
		<div className="px-24 py-8 w-full">
			<Carousel
				plugins={[
					Autoplay({
						delay: 5000
					})
				]}>
				<CarouselContent>
					{appsData.map((app) => (
						<CarouselItem key={app.id}>
							<div className="flex flex-col md:flex-row items-center justify-between h-96 border border-gray-200 rounded-md shadow-md">
								<div className="flex flex-col w-1/2 justify-center items-center p-4">
									<Image
										src={app.icon}
										alt={`${app.title} logo`}
										width={128}
										height={128}
									/>
									<div className="mt-2 text-xl font-medium text-gray-800">
										{app.title}
									</div>
								</div>
								<div
									style={{ backgroundColor: app.color }}
									className={`flex flex-col gap-2 justify-center h-1/2 md:h-full md:w-1/2 p-4`}>
									<p
										style={{ color: app.fontColor ?? "white" }}
										className="text-m">
										{app.description}
									</p>
									<Link href={`/app/${app.title.toLowerCase()}`}>
										<p
											style={{ color: app.fontColor ?? "white" }}
											className="text-m underline">
											Learn More
										</p>
									</Link>
									<div className="flex space-x-4">
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
						</CarouselItem>
					))}
				</CarouselContent>
				<CarouselPrevious />
				<CarouselNext />
			</Carousel>
		</div>
	);
}
