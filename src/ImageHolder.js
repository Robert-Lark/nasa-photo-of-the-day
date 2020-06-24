import React from "react";

const ImageHolder = (props) => {
	return (
		<div>
			<img
				style={({ width: "100vw" }, { height: "100vh" })}
				src={props.src}
				alt="default"
				className="ofTheDayImg"
			/>
		</div>
	);
};

export default ImageHolder;
