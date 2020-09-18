import React, { useState, useEffect } from "react";
import Hero from "../components/modules/Hero";

const Single = () => {
  const [isLoaded, setIsLoaded] = useState(true);
  const [title, setTitle] = useState("My Hero");

  useEffect(() => {
    setTitle("My Hero 1");
    setIsLoaded(true);
  });

  return (
    <React.Fragment>
      <Hero isLoaded={isLoaded} title={title} />
    </React.Fragment>
  );
};

export default Single;
