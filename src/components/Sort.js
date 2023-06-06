import React from "react";

const Sort = ({ hogs, setFilteredHogs }) => {
    function handleSubmit(e) {
        e.preventDefault();
        sortPigs(e.target.firstChild.nextSibling.value);
    }

    function sortPigs(sortMethod) {
        if (sortMethod === "name") {
            setFilteredHogs((hogs) => {
                const newHogs = [...hogs.sort((a, b) => {
                    const fa = a.name.toLowerCase();
                    const fb = b.name.toLowerCase();
                    if (fa < fb) {
                        return -1;
                    }
                    if (fa > fb) {
                        return 1;
                    }
                    return 0;
                })];
                return newHogs;
            });
        } else if (sortMethod === "weightUp") {
            setFilteredHogs((hogs) => {
                const newHogs = [...hogs.sort((a, b) => a.weight - b.weight)];
                return newHogs;
            });
        } else if (sortMethod === "weightDn") {
            setFilteredHogs((hogs) => {
                const newHogs = [...hogs.sort((a, b) => b.weight - a.weight)];
                return newHogs;
            });
        }
    }

	return (
		<form onSubmit={handleSubmit}>
            <label>Choose sorting method: </label>
            <select id="sortDropdown" name="sortTypes">
                <option value="name">Alphabetical</option>
                <option value="weightUp">Lightest to Heaviest</option>
                <option value="weightDn">Heaviest to Lightest</option>
            </select>
            <button>Sort</button>
        </form>
	);
};

export default Sort;