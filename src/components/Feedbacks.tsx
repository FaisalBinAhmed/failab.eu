import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

const items = [
	{
		quote:
			"This is exactly the extension I needed, an extension that would auto-group tabs with Chrome's Tab Groups feature. I love the function where it groups tabs based on the same opening tab. Life-saver. Thanks for making this extension!",
		name: "Benjamin",
		title: "Tabius"
	},
	{
		quote:
			"Simple, customizable and functional for reading HN! Amazing first release! (:",
		name: "Jue Fei",
		title: "Trilby"
	},
	{
		quote:
			"Discovered the tool via Reddit. Simple and informative. Just the way I want it to be.",
		name: "Klunkstein",
		title: "Scaler"
	},
	{
		quote:
			"This is app just happens to be the perfect solution for my youtube tutorials. It's easy to set up and looks beautiful. It has a lot of customizations but also good looking predefined themes available, that you can just start typing right away.",
		name: "Throvn",
		title: "KeyTrails"
	}
];

const Feedbacks = () => {
	return (
		<InfiniteMovingCards
			className="w-full py-8"
			direction="right"
			items={items}
			speed="slow"
		/>
	);
};

export default Feedbacks;
