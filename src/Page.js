import React from "react";
import Header from "./Header.js";
import ParagraphMaker from "./ParagraphMaker.js";
import ImageHolder from "./ImageHolder";

const Page = (props) => {
	return (
		<div>
			<h1 style={{ textAlign: "center" }}>MARS ROVER PHOTO OF THE DAY</h1>
			<Header title={props.image.full_name} />
			<ParagraphMaker data={props.image.earth_date} />
			<ImageHolder src={props.image.img_src} />
			{/* <ParagraphMaker data={props.image.explanation} /> */}
		</div>

		// <div>
		// 	<h1 style={{ textAlign: "center" }}>NASA PHOTO OF THE DAY</h1>
		// 	<Header title={props.image.title} />
		// 	<ParagraphMaker data={props.image.date} />
		// 	<ImageHolder src={props.image.hdurl} />
		// 	<ParagraphMaker data={props.image.explanation} />
		// </div>
	);
};

export default Page;
