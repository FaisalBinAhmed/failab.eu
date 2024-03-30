import { Button } from "@/components/ui/button";
import { appsData } from "@/data/apps";
import Link from "next/link";
import { useRouter } from "next/router";

const Privacy = () => {
	const router = useRouter();
	const { appId } = router.query;

	const app = appsData.find((app) => app.id.toLowerCase() === appId);

	if (!app) return <div>App not found</div>;

	return (
		<div className="flex flex-col gap-4 p-8 max-w-4xl h-lvh">
			<h1 className="text-lg font-bold">Privacy Policy for {app.title}</h1>
			<p className="">{app?.privacyInfo?.data}</p>
			<div>
				<p className="text-m font-bold">Last Updated:</p>
				<p>{app?.privacyInfo?.lastDate}</p>
			</div>

			<Button variant="secondary" asChild>
				<Link href={`/app/${app.id}`}>
					<p>Back to {app.title}</p>
				</Link>
			</Button>
		</div>
	);
};

export default Privacy;
