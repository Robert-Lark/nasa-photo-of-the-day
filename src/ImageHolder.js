import React from "react";

const ImageHolder = (props) => {
	return (
		<div>
			<img src={props.url} alt="" className="ofTheDayImg" />
		</div>
	);
};

export default ImageHolder;
