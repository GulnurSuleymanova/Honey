import React from "react";
import bgImage from "../assets/slider4.webp"; // Yol doğrudursa və fayl ordadırsa

const About = () => {
  return (
    <div>
      <section
        className="h-[400px] bg-cover bg-center -mt-30"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
<h1 className="text-center">About us</h1>      </section>
    </div>
  );
};

export default About;
