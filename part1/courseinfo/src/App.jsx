const Header = (props) => {
	return <h1>{props.course}</h1>;
};

const Part = (props) => {
	return (
		<p>
			{props.name} {props.exerciseCount}
		</p>
	);
};

const Content = (props) => {
	return (
		<div>
			<Part name={props.course1Name} exerciseCount={props.course1Count} />
			<Part name={props.course2Name} exerciseCount={props.course2Count} />
			<Part name={props.course3Name} exerciseCount={props.course3Count} />
		</div>
	);
};

const Total = (props) => {
	return <p>Number of exercises {props.count}</p>;
};

function App() {
	const course = "Half Stack application development";
	const part1 = "Fundamentals of React";
	const exercises1 = 10;
	const part2 = "Using props to pass data";
	const exercises2 = 7;
	const part3 = "State of a component";
	const exercises3 = 14;

	return (
		<div>
			<Header course={course} />
			<Content
				course1Name={part1}
				course1Count={exercises1}
				course2Name={part2}
				course2Count={exercises2}
				course3Name={part3}
				course3Count={exercises3}
			/>
			<Total count={exercises1 + exercises2 + exercises3} />
		</div>
	);
}

export default App;
