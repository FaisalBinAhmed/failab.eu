import { cn } from "@/lib/utils";
import Link from "next/link";
import { Button } from "./button";

export const BentoGrid = ({
	className,
	children
}: {
	className?: string;
	children?: React.ReactNode;
}) => {
	return (
		<div
			className={cn(
				"grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
				className
			)}>
			{children}
		</div>
	);
};

export const BentoGridItem = ({
	className,
	title,
	description,
	header,
	icon,
	link,
	color
}: {
	className?: string;
	title?: string | React.ReactNode;
	description?: string | React.ReactNode;
	header?: React.ReactNode;
	icon?: React.ReactNode;
	link?: string;
	color?: string;
}) => {
	return (
		<div
			// style={{ backgroundColor: color }}
			className={cn(
				"row-span-1 rounded-3xl shadow-xl border border-white/[0.1]  shadow-white/[0.05] group/bento hover:shadow-xl transition duration-200 shadow-none p-4 bg-black justify-between flex flex-col space-y-4",
				className
			)}>
			{header}
			<div className="group-hover/bento:translate-x-2 transition duration-200 ">
				{icon}
				<div className="font-sans font-bold text-neutral-200 mb-2 mt-2">
					{title}
				</div>
				<div className="font-sans font-normal  text-xs text-neutral-300">
					{description}
				</div>
				{link && (
					<div className="flex flex-1 mt-2 flex-row-reverse">
						{/* <Button className="rounded" variant="ghost" asChild>
							<Link href={link}>Download</Link>
						</Button> */}
						<Button className="rounded" variant="ghost" asChild>
							<Link href={link}>Learn More</Link>
						</Button>
					</div>
				)}
			</div>
		</div>
	);
};
