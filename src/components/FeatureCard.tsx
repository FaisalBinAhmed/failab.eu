import { Feature } from "@/data/apps";

interface FeatureType {
	index: number;
	color?: string;
}

const FeatureCard: React.FC<FeatureType & Feature> = ({
	index,
	title,
	description,
	color = "#FFB764"
}) => {
	return (
		<div>
			<div>
				<p style={{ color: color }}>{index}. &nbsp;</p>
				<h2 className="font-bold"> {title}</h2>
			</div>
			<p>{description}</p>
		</div>
	);
};

export default FeatureCard;
