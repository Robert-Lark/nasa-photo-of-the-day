import React from "react";
import Header from "./Header.js";
import ParagraphMaker from "./ParagraphMaker.js";
import ImageHolder from "./ImageHolder";

const Page = (props) => {
	return (
		<div>
			<Header title={props.image.title} />
			<ParagraphMaker data={props.image.date} />
			<ImageHolder src={props.image.hdurl} />
			<ParagraphMaker data={props.image.explanation} />
		</div>
	);
};

export default Page;
