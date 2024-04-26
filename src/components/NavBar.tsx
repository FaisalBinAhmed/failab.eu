"use client";

import * as React from "react";
import Link from "next/link";

import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
	navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu";
import { appsData } from "@/data/apps";
import Image from "next/image";

export function NavBar() {
	return (
		<div className="p-4 flex flex-row-reverse justify-between">
			<NavMenu />
			<Link href="/" legacyBehavior passHref>
				<img className="w-12 cursor-pointer" src="/assets/failab_angled.svg" />
			</Link>
		</div>
	);
}

function NavMenu() {
	return (
		<NavigationMenu orientation="vertical">
			<NavigationMenuList>
				<NavigationMenuItem>
					<Link href="/" legacyBehavior passHref>
						<NavigationMenuLink className={navigationMenuTriggerStyle()}>
							Home
						</NavigationMenuLink>
					</Link>
				</NavigationMenuItem>

				<NavigationMenuItem>
					<NavigationMenuTrigger>Apps</NavigationMenuTrigger>
					<NavigationMenuContent>
						<ul className="grid gap-2 p-2 md:w-[400px] z-5 lg:w-[500px] lg:grid-cols-[1fr_1fr]">
							{appsData.map((app) => (
								<li key={app.id}>
									<NavigationMenuLink asChild>
										<Link
											className="flex h-full w-full select-none flex-col justify-end rounded-md bg-[#121212] p-6 no-underline outline-none hover:bg-[#051812] focus:shadow-md"
											href={`/app/${app.id}`}>
											<Image
												src={app.icon}
												alt={`${app.title} logo`}
												width={32}
												height={32}
											/>
											<div className="mb-2 mt-4 text-lg font-medium">
												{app.title}
											</div>
											<p className="text-sm leading-tight text-muted-foreground">
												{app.description}
											</p>
										</Link>
									</NavigationMenuLink>
								</li>
							))}
						</ul>
					</NavigationMenuContent>
				</NavigationMenuItem>
				<NavigationMenuItem>
					<Link href="/contact" legacyBehavior passHref>
						<NavigationMenuLink className={navigationMenuTriggerStyle()}>
							Contact
						</NavigationMenuLink>
					</Link>
				</NavigationMenuItem>

				<NavigationMenuItem>
					<Link href="/about" legacyBehavior passHref>
						<NavigationMenuLink className={navigationMenuTriggerStyle()}>
							About
						</NavigationMenuLink>
					</Link>
				</NavigationMenuItem>
			</NavigationMenuList>
		</NavigationMenu>
	);
}
