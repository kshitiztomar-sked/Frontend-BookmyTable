import React from "react";
import "./Hero.css";

const images = [
  "https://i.pinimg.com/736x/15/8c/9f/158c9f7458a75d6dd5568b5affb6be82.jpg",
  "https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTEwL3dvcmxkZmFjZXNsYWJfZGVsaWNpb3VzX3BpenphX2FuZF9mbHlpbmdfaW5ncmVkaWVudHNfaXNvbGF0ZWRfb19iOWY1NzQ5My1mNmFjLTRkNjgtOTVkYy01NzFlZDFlZjM5YzFfMS5qcGc.jpg",
  "https://static.vecteezy.com/system/resources/previews/062/180/108/non_2x/indian-food-with-rice-vegetables-and-spices-on-yellow-background-photo.jpeg",
  "https://img.freepik.com/premium-photo/curry-flatlay-vibrant-indian-dishes-yellow-background_899449-29188.jpg",
  "https://media.istockphoto.com/id/638240858/photo/pumpkin-salad.jpg?s=612x612&w=0&k=20&c=ad8YEabHQhKoxKVkPZHjBA2PF7jaVx6oXw6Y6dYdXPo=",
  "https://media.istockphoto.com/id/1156736532/photo/salmon-steak-with-vegetables.jpg?s=612x612&w=0&k=20&c=rAZcKAd2YF94cp-tHtWJQtnapo50r6LmI9MIl6jqCGI=",
  "https://thumbs.dreamstime.com/b/traditional-indian-dishes-top-view-green-background-table-cuisine-india-overhead-variety-including-curry-tandoori-chicken-394925435.jpg",
  "https://static.vecteezy.com/system/resources/thumbnails/052/114/982/small/idli-with-sambar-in-bowl-on-green-background-indian-dish-south-indian-favourite-food-rava-idli-or-semolina-idly-or-rava-idly-served-with-sambar-and-green-coconut-chutney-photo.jpg"
];

const Hero = () => {
  return (
    <section className="hero-grid">
      <div className="hero-overlay">
        <div className="hero-text">
          <h1>🍽️ BookmyTable</h1>
          <p>Reserve your table or pre-order gourmet meals with ease.</p>
          <div className="hero-buttons">
            <a href="/booking" className="btn primary-btn">Book a Table</a>
            <a href="/menu" className="btn secondary-btn">Pre-order Food</a>
          </div>
        </div>
      </div>

      <div className="grid-container">
        {images.map((img, index) => (
          <div
            key={index}
            className="grid-item"
            style={{ backgroundImage: `url(${img})` }}
          ></div>
        ))}
      </div>
    </section>
  );
};

export default Hero;
