// Import React
import React from "react";

// Import Style
import "../style/AboutMe.scss";

//Code
const AboutMe = function() {
  return (
    <section className="aboutMe">
      <h3 className="aboutMe__title title">
        about me
      </h3>
      <div className="aboutMe__text text">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur ducimus qui consectetur doloribus veniam? Ea, fugiat! Aliquam dicta dignissimos atque, neque, perspiciatis quos possimus voluptates animi quis provident magnam sapiente.
      </div>
    </section>
  )
}

export default AboutMe;