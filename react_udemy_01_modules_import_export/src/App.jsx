import piriquito, { func1, func2 } from "./module";
import * as AnotherModule from "./AnotherModule";

function App() {
	return (
		<div>
			<h1>Hello There</h1>
			<p>{piriquito}</p>
			{func1()}
			{func2()}
      {AnotherModule.oneFunc01()}
      {AnotherModule.anotherFunc()}
		</div>
	);
}

export default App;
