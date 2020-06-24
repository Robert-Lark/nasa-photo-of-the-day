import React from "react";

const Header = (props) => {
	return (
		<div className="header">
			<h2 className="ofTheDayH2">{props.title}</h2>
		</div>
	);
};

export default Header;
