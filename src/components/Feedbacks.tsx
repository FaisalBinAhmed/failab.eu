const Feedbacks = () => {
	return (
		<div className="flex flex-col w-full bg-[#f0dbb0] p-8">
			<h2 className="m-auto text-lg font-bold pb-4">What people are saying</h2>
			<div className="flex flex-col">
				<FeedbackCard
					name="Benjamin -> Tabius"
					stars={5}
					review="This is exactly the extension I needed, an extension that would auto-group tabs with Chrome's Tab Groups feature. I love the function where it groups tabs based on the same opening tab. Life-saver. Thanks for making this extension!"
				/>
				<FeedbackCard
					name="Jue Fei -> Trilby"
					stars={5}
					review="Simple, customizable and functional for reading HN! Amazing first release! (:"
				/>
			</div>
			<div className="flex flex-col">
				<FeedbackCard
					name="Klunkstein -> Scaler"
					stars={5}
					review="Discovered the tool via Reddit. Simple and informative. Just the way I want it to be."
				/>
				<FeedbackCard
					name="Throvn -> KeyTrails"
					stars={5}
					review="This is app just happens to be the perfect solution for my youtube tutorials. It's easy to set up and looks beautiful. It has a lot of customizations but also good looking predefined themes available, that you can just start typing right away."
				/>
			</div>
		</div>
	);
};

export default Feedbacks;

interface FeedbackProp {
	name: string;
	stars: 1 | 2 | 3 | 4 | 5;
	review: string;
}

const FeedbackCard: React.FC<FeedbackProp> = ({ name, stars, review }) => {
	return (
		<div className="flex flex-col p-8 m-4 md:w-2/5 bg-white md:even:self-end rounded">
			<div className="flex justify-between">
				<div style={{ color: "grey" }}>{name}</div>
				<div>{[...Array(stars)].map((item) => "★")}</div>
			</div>
			<div className="mt-4">{review}</div>
		</div>
	);
};
