/** @format */

import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
	const [count, setCount] = useState(0);

	return (
		<div className="App">
			<h1 className="text-3xl font-bold underline">Burger world!</h1>
			<textarea id="editor"></textarea>
			<div id="preview"></div>
		</div>
	);
}

export default App;
