import React, { useState, useEffect } from "react";
import Hero from "../components/modules/Hero";

const Post = () => {
  const [isLoaded, setIsLoaded] = useState(true);
  const [title, setTitle] = useState("My Hero");

  useEffect(() => {
    setTitle("My Hero 2");
    setIsLoaded(true);
  }, [isLoaded]);

  return (
    <React.Fragment>
      <Hero isLoaded={isLoaded} title={title} />
    </React.Fragment>
  );
};

export default Post;
