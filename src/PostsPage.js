import React, { useEffect, useState } from "react";
import "./Page";
import Page from "./Page.js";
import Axios from "axios";

const PostsPage = () => {
	const [image, setImage] = useState([]);

	useEffect(() => {
		Axios.get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`)
			.then((results) => {
				console.log("Results from useEffect of NasaAPI", results);
				setImage(results.data);
				console.log(results.data);
			})
			.catch((err) => {
				console.log("Error occured in useEffect of NasaAPI: ", err);
			});
	}, []);

	return (
		<div className="postPage">
			<Page page={image} />
		</div>
	);
};
export default PostsPage;
