import React, { useState } from "react";
import Nav from "./Nav";
import Tiles from "./Tiles";
import Filter from "./Filter";
import Sort from "./Sort";

import hogs from "../porkers_data";

function App() {
	const [filteredHogs, setFilteredHogs] = useState(hogs);
	const [showDetails, setShowDetails] = useState(Array(filteredHogs.length).fill(false));
	
	console.log(filteredHogs)
	return (
		<div className="App">
			<Nav />
			<Filter hogs={hogs} filteredHogs={filteredHogs} setFilteredHogs={setFilteredHogs}/>
			<Sort hogs={filteredHogs} setFilteredHogs={setFilteredHogs}/>
			<br></br>
			<Tiles hogs={filteredHogs} showDetails={showDetails} setShowDetails={setShowDetails}/>
		</div>
	);
}

export default App;
