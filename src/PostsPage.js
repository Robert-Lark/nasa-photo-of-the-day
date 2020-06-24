import React, { useEffect, useState } from "react";
import Page from "./Page.js";
import Axios from "axios";

const PostsPage = () => {
	const [image, setImage] = useState({});

	useEffect(() => {
		Axios.get(
			`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY`
		)
			.then((results) => {
				///getting an array of object Keys.
				const goodImages = results.data.photos;
				//generating a random #
				const number = Math.random() * goodImages.length;
				let indexNumber = Math.floor(number);
				//assigning that random # as a key in the object
				const objectID = goodImages[indexNumber];
				console.log(objectID);

				setImage(objectID);
			})
			.catch((err) => {
				console.log("oh no!, ", err);
			});

		// Axios.get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`)
		// 	.then((results) => {
		// 		console.log("Results from useEffect of NasaAPI", results);
		// 		setImage(results.data);
		// 		console.log(results.data);
		// 	})
		// 	.catch((err) => {
		// 		console.log("Error occured in useEffect of NasaAPI: ", err);
		// 	});
	}, []);

	return (
		<div className="postPage">
			<Page image={image} />
		</div>
	);
};
export default PostsPage;
