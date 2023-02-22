import "./App.css";
import lamenPic from "./images/lamen.jpg";
import feijoadaPic from "./images/feijoada.jpeg";

const imgLoremPicsum = "https://picsum.photos/100";

function App() {
	return (
		<div>
			<h1>Hello World</h1>
			<h1 className="heading">My favorite food</h1>
			<div>
				<img src={lamenPic} alt="lamen" className="favorite-food-img"/>
				<img src={feijoadaPic} alt="feijoada" className="favorite-food-img"/>
        <img src={imgLoremPicsum} alt="lorempicsum"/>
			</div>
		</div>
	);
}

export default App;
