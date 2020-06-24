import React from "react";
import Header from "./Header.js";
import "./Header.js";
import "./ParagraphMaker.js";
import ParagraphMaker from "./ParagraphMaker.js";
import "./ImageHolder";
import ImageHolder from "./ImageHolder";

const Page = (props) => {
	return (
		<div>
			<Header title={props.page.title} />
			<ParagraphMaker data={props.page.date} />
			<ImageHolder image={props.page.url} />
			<ParagraphMaker data={props.page.explanation} />
		</div>
	);
};

export default Page;
