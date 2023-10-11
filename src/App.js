import "./App.css";
import Dashboard from "./components/Dashboard";
import Navbar from "./components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "./actions/action";
import { useEffect } from "react";

const App = () => {
	const dispatch = useDispatch();
	const { tickets } = useSelector((state) => state.dataSlice);

	useEffect(() => {
		dispatch(fetchData());
	}, [dispatch]);

	return tickets ? (
		<div className="main">
			<Navbar />
			<Dashboard />
		</div>
	) : (
		console.error("Something went wrong in app-js")
	);
};

export default App;
