import React, { useState } from "react";

const Nav = ({ hogs }) => {
    const [showDetails, setShowDetails] = useState(Array(hogs.length).fill(false));

    function handleClick(event) {
        setShowDetails((showDetails) => {
            const newArray = {...showDetails, [parseInt(event.target.getAttribute("tileid"))]: !showDetails[parseInt(event.target.getAttribute("tileid"))]}
            console.log(event.target.id)
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
        console.log(showDetails[i])
        return (
            <div className="pigTile" onClick={handleClick} key={hog.name} tileid={i}>
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
		<div className="tileSectionWrapper">
			<span>{hogTiles}</span>
		</div>
	);
};

export default Nav;
