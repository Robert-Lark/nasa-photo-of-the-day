import React from "react";

const ImageHolder = (props) => {
	return (
		<div>
			<img src={props.src} alt="default" className="ofTheDayImg" />
		</div>
	);
};

export default ImageHolder;
