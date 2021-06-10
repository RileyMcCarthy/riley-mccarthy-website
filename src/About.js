import React, {useEffect} from "react";

function About() {
  useEffect(() => {
    document.title = "Riley McCarthy - About"
  },[]);
  return (<a>About</a>);
}export default About;
