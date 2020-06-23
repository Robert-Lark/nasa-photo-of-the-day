import React from "react";
import ParagraphMaker from "src/Components/ParagraphMaker.js"
import ImageHolder from "./ImageHolder";


const PostsPage = () => {

  const [image, setImage] = useState([]);

  useEffect(() => {
    axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`)
      .then(res => {
        console.log("Res from useEffect of NasaAPI", res);
        setFilms(res.data);
      })
      .catch(err => {
        console.log("Error occured in useEffect of NasaAPI: ", err);
      });
  }, []);

  return (
    <div>
      <ImageHolder />
      <ParagraphMaker />;
      <ParagraphMaker />;
      <ParagraphMaker />;
      <ParagraphMaker />;
    </div>
  );
};

export default PostsPage;
