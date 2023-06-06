import React from "react";

function Filter({ setFilteredHogs, hogs, filteredHogs }) {
    function handleSubmit(e) {
        e.preventDefault();
        filterHogs(e.target.firstChild.nextSibling.value);
    }

    function filterHogs(filter) {
		setFilteredHogs(filteredHogs.filter(hog => {
			if (filter === "allPigs") {
				return true;
			} else {
				return hog.greased.toString() === filter ? true : false
			}
		}))
	}

	return (
		<form onSubmit={handleSubmit}>
            <label>Choose a filter: </label>
            <select id="dropdown" name="filters">
                <option value="allPigs">All Pigs</option>
                <option value={true}>Greased</option>
                <option value={false}>Not Greased</option>
            </select>
            <button>Filter</button>
        </form>
	);
}

export default Filter;
