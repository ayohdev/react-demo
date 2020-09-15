import React, { useState } from "react";
import axios from "axios";

const Axios = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [posts, setPosts] = useState([]);

  axios
    .get("https://admin.react-press.net/wp-json/wp/v2/posts")
    .then((res) => {
      setPosts(res.data);
      setIsLoaded(true);
    })
    .catch((err) => {
      console.log(err);
    });
  if (isLoaded) {
    return <h1>{posts[0].title.rendered}</h1>;
  }
  return <h3>Loading...</h3>;
};

export default Axios;
