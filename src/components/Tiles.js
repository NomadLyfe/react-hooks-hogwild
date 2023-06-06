import React from "react";

const Nav = ({ hogs, showDetails, setShowDetails }) => {
    

    function handleClick(event) {
        setShowDetails((showDetails) => {
            const newArray = {...showDetails, [parseInt(event.target.getAttribute("tileid"))]: !showDetails[parseInt(event.target.getAttribute("tileid"))]}
            return newArray;
        });
    }

    let details = [];
    const hogTiles = hogs.map((hog, i) => {
        const hogDetails = (
            <div className="details" key={hog.name} tileid={i}>
                <div className="weight subtleText" tileid={i}>{hog.weight} lbs</div>
                <div className="specialty" tileid={i}>{hog.name}'s specialty is {hog.specialty.toLowerCase()}.</div>
                <div className="greased" tileid={i}>{hog.name} is {hog.greased ? "greased" : "not greased"}.</div>
                <div className="medal achievementText" tileid={i}>Highest Achieved Medal: {hog["highest medal achieved"]}.</div>
            </div>
        )
        details = [...details, hogDetails]
        return (
            <div className="pigTile ui eight wide column" onClick={handleClick} key={hog.name} tileid={i}>
                <div className="image" tileid={i}>
                    <img src={hog.image} tileid={i}></img>
                </div>
                <div className="hoggyText" tileid={i}>
                    <h3 className="name" tileid={i}>{hog.name}</h3>
                    {showDetails[i] ? details[i] : null}
                </div>
            </div>
        )
    });

	return (
		<div className="ui grid container">
			<span>{hogTiles}</span>
		</div>
	);
};

export default Nav;
