import React from 'react';
import im1 from '../assets/image4.jpg';
import im3 from '../assets/image3.jpg';
import im2 from '../assets/image2.jpg';

const Home = () => {
  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Welcome to my react app :)</h1>
      <div id="carouselExample" className="carousel slide shadow-lg rounded" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={im1} className="d-block w-100" alt="Slide 1" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Slide 1 Title</h5>
              <p>Captivating description for slide 1.</p>

              
            </div>
          </div>
          <div className="carousel-item">
            <img src={im2} className="d-block w-100" alt="Slide 2" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Slide 2 Title</h5>
              <p>Some more engaging text for slide 2.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={im3} className="d-block w-100" alt="Slide 3" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Slide 3 Title</h5>
              <p>Wrap it up with a final slide message!</p>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Home;
