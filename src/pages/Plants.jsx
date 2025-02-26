import React from 'react';
import { Leaf, Flower, Sun } from 'lucide-react';
import { Link } from 'react-router-dom';
import '../index.css';

const Plants = () => {
  const plants = [
    {
      icon: Leaf,
      name: "Ficus Plant",
      description: "A resilient indoor plant that brings freshness and vibrancy to your home.",
      image: "/images/ficus.jpg"
    },
    {
      icon: Flower,
      name: "Sunflower",
      description: "A bright and cheerful flower that symbolizes positivity and warmth.",
      image: "images/sunflower.jpg"
    },
    {
      icon: Sun,
      name: "Cactus",
      description: "A hardy desert plant that thrives in dry conditions and adds a modern touch.",
      image: "images/cactus.jpg"
    },
    {
      icon: Leaf,
      name: "Ficus Plant",
      description: "A resilient indoor plant that brings freshness and vibrancy to your home.",
      image: "/images/ficus.jpg"
    },
    {
      icon: Flower,
      name: "Sunflower",
      description: "A bright and cheerful flower that symbolizes positivity and warmth.",
      image: "images/sunflower.jpg"
    },
    {
      icon: Sun,
      name: "Cactus",
      description: "A hardy desert plant that thrives in dry conditions and adds a modern touch.",
      image: "images/cactus.jpg"
    },
    {
      icon: Leaf,
      name: "Ficus Plant",
      description: "A resilient indoor plant that brings freshness and vibrancy to your home.",
      image: "/images/ficus.jpg"
    },
    {
      icon: Flower,
      name: "Sunflower",
      description: "A bright and cheerful flower that symbolizes positivity and warmth.",
      image: "images/sunflower.jpg"
    },
    {
      icon: Sun,
      name: "Cactus",
      description: "A hardy desert plant that thrives in dry conditions and adds a modern touch.",
      image: "images/cactus.jpg"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="plants-section py-5">
  <div className="container">
    <div className="services-content text-center text-white w-50 float-end">
      <h3 className="display-5 fw-bold slide-text">Our Plants</h3>
      <p className="lead fw-bold slide-text">
      Explore our range of plants perfect for any landscape
      </p>
    </div>
  </div>
</section>

      {/* Plants Grid */}
      <section className="py-5">
        <div className="container">
          <div className="row g-4">
            {plants.map((plant, index) => (
              <div key={index} className="col-md-4 col-lg-4">
                <div className="card h-100 border-0 shadow-sm">
                  <img
                    src={plant.image}
                    className="card-img-top"
                    alt={plant.name}
                    style={{ height: '300px', objectFit: 'cover' }}
                  />
                  <div className="card-body">
                    <div className="d-flex align-items-center mb-3">
                      <plant.icon className="text-color me-2" size={24} />
                      <h3 className="h5 card-title mb-0">{plant.name}</h3>
                    </div>
                    <p className="card-text text-muted">{plant.description}</p>
                    <Link to="/contact" className="btn btn-outline" onClick={() => window.scrollTo(0, 0)}>Inquire Now</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Plants;


