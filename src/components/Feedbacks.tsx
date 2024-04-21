import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const items = [
	{
		quote:
			"This is exactly the extension I needed, an extension that would auto-group tabs with Chrome's Tab Groups feature. I love the function where it groups tabs based on the same opening tab. Life-saver. Thanks for making this extension!",
		name: "Benjamin -> Tabius",
		title: "Software Engineer"
	},
	{
		quote:
			"Simple, customizable and functional for reading HN! Amazing first release! (:",
		name: "Jue Fei -> Trilby",
		title: "Frontend Developer"
	},
	{
		quote:
			"Discovered the tool via Reddit. Simple and informative. Just the way I want it to be.",
		name: "Klunkstein -> Scaler",
		title: "Designer"
	},
	{
		quote:
			"This is app just happens to be the perfect solution for my youtube tutorials. It's easy to set up and looks beautiful. It has a lot of customizations but also good looking predefined themes available, that you can just start typing right away.",
		name: "Throvn -> KeyTrails",
		title: "Content Creator"
	}
];

const Feedbacks = () => {
	return (
		<InfiniteMovingCards
			className="w-full"
			direction="right"
			items={items}
			speed="slow"
		/>
	);

	// return (
	// 	<div className="flex flex-col w-full bg-[#fff2e9] p-4">
	// 		<h2 className="m-auto text-xl pb-4">Testimonials</h2>
	// 		<div className="flex flex-col md:flex-row overflow-x-scroll gap-4">
	// 			<FeedbackCard
	// 				name="Benjamin -> Tabius"
	// 				stars={5}
	// 				review="This is exactly the extension I needed, an extension that would auto-group tabs with Chrome's Tab Groups feature. I love the function where it groups tabs based on the same opening tab. Life-saver. Thanks for making this extension!"
	// 			/>
	// 			<FeedbackCard
	// 				name="Jue Fei -> Trilby"
	// 				stars={5}
	// 				review="Simple, customizable and functional for reading HN! Amazing first release! (:"
	// 			/>
	// 			<FeedbackCard
	// 				name="Klunkstein -> Scaler"
	// 				stars={5}
	// 				review="Discovered the tool via Reddit. Simple and informative. Just the way I want it to be."
	// 			/>
	// 			<FeedbackCard
	// 				name="Throvn -> KeyTrails"
	// 				stars={5}
	// 				review="This is app just happens to be the perfect solution for my youtube tutorials. It's easy to set up and looks beautiful. It has a lot of customizations but also good looking predefined themes available, that you can just start typing right away."
	// 			/>
	// 		</div>
	// 	</div>
	// );
};

export default Feedbacks;

interface FeedbackProp {
	name: string;
	stars: 1 | 2 | 3 | 4 | 5;
	review: string;
}

const FeedbackCard: React.FC<FeedbackProp> = ({ name, stars, review }) => {
	return (
		<div className="flex flex-col p-8 min-w-80 bg-white rounded">
			<div className="flex justify-between">
				<div className="text-gray-500">{name}</div>
				<div className="text-yellow-500">
					{[...Array(stars)].map((item) => "★")}
				</div>
			</div>
			<div className="mt-4">{review}</div>
		</div>
	);
};
