import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/index.css";
import { Client } from "./client/client";
import { Editor } from "./editor/editor";

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/editor" element={<Editor />} />
				<Route path="/" element={<Client />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
