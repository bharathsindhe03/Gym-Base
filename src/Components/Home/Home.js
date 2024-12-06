import React from "react";
import "./Home.css"; // Importing the CSS file
import sec1 from "../../assets/section1.png";
import Footer from "../Footer/Footer";

export default function Home() {
  return (
    <>
      
      <div className="container">
        {/* Main Section */}
        <section className="mainSection">
          <h2 className="mainTitle">FUEL YOUR</h2>
          <h1>BODY FITNESS</h1>
          <p className="mainDescription">
            When we created Gym Base, we knew we wanted to be more than just a simple gym. Having worked in traditional gyms in the past, we knew we needed to create a concept that would provide our members with the most effective tools for success.
          </p>
        </section>
      </div>

      {/* Services Section */}
      <section className="aboutSection">
        <h2 className="aboutTitle">SERVICE WE PROVIDE</h2>
        <h3 className="aboutSubtitle">OUR SERVICES</h3>
        <p className="aboutDescription">
          At Gym Base, we offer a range of specialized equipment to suit different needs. Whether you are looking for strength training or cardio, our state-of-the-art equipment is designed to help you achieve your fitness goals.
        </p>

        {/* Service Items */}
        <div className="serviceWrapper">
          {/* Left Side Services */}
          <div className="serviceContainer left">
            <div className="serviceItem">
              <h4>STRENGTH EQUIPMENT</h4>
              <p>
                Our strength equipment is designed to help you build muscle, increase endurance, and develop strength. Whether you're a beginner or an advanced user, we have the right tools for you.
              </p>
            </div>

            <div className="serviceItem">
              <h4>HEALTH EQUIPMENT</h4>
              <p>
                We provide specialized health equipment that focuses on improving cardiovascular health, flexibility, and mobility. Our machines are suitable for people of all fitness levels.
              </p>
            </div>

            <div className="serviceItem">
              <h4>ENERGY EQUIPMENT</h4>
              <p>
                Our energy equipment includes machines that boost your energy levels, increase stamina, and improve overall vitality. These machines are perfect for high-intensity training.
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="serviceImageWrapper">
            <img src={sec1} alt="section1-img" className="sec1Image" />
          </div>

          {/* Right Side Services */}
          <div className="serviceContainer right">
            <div className="serviceItem">
              <h4>GYM EQUIPMENT</h4>
              <p>
                We offer a wide variety of gym equipment designed for strength training, cardio, and flexibility. From dumbbells to elliptical machines, we have everything you need for a complete workout.
              </p>
            </div>

            <div className="serviceItem">
              <h4>WEIGHT EQUIPMENT</h4>
              <p>
                Our weight equipment is ideal for anyone looking to increase muscle mass or improve strength. We offer a range of machines and free weights to cater to different levels of experience.
              </p>
            </div>

            <div className="serviceItem">
              <h4>ENERGY EQUIPMENT</h4>
              <p>
                Our energy-focused equipment will help you recover, recharge, and feel energized. These machines are great for increasing performance and endurance during your workouts.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </>
  );
}
