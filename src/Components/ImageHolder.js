import React from "react";

const ImageHolder = (props) => {
	return (
		<div className="artComp">
			<h2 className="ofTheDayH2">props.tool</h2>
			<h2 className="ofTheDayH2">props.info</h2>
			<img
				src="props.image"
				alt="Picture of the universe"
				className="ofTheDayImg"
			/>
		</div>
	);
};

export default ImageHolder;
