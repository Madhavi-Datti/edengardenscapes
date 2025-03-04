import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css';

const Plants = () => {
  const plants = [
    {
      name: "Philodendron Melinonii Plant",
      category: "Outdoor Plants",
      image: "/images/philodendron-melinonii.jpg"
    },
    {
      name: "Sapota Plant(Chiku)",
      category: "Outdoor Plants",
      image: "/images/sapota_plant.jpg"
    },
    {
      name: "Kesar Mango Plant",
      category: "Outdoor Plants",
      image: "/images/kesar_mango.jpg"
    },
    {
      name: "Song of India Plant",
      category: "Outdoor Plants",
      image: "/images/song_of_india.jpg"
    },
    {
      name: "Jade Plant",
      category: "Indoor Plants",
      image: "/images/jade_plant.jpg"
    },
    {
      name: "Money Plant",
      category: "Indoor Plants",
      image: "/images/money_plant.jpg"
    },
    {
      name: "Bamboo Plant",
      category: "Indoor Plants",
      image: "/images/bambo_plant.jpg"
    },
    {
      name: "Areca Palm Plant",
      category: "Indoor Plants",
      image: "/images/Areca_palm.jpg"
    },
    {
      name: "Lucky Bamboo Plant",
      category: "Indoor Plants",
      image: "/images/Lucky_bamboo.jpg"
    },
    {
      name: "Brazilian Wood Plant",
      category: "Indoor Plants",
      image: "/images/Brazilian_wood.jpg"
    },
    {
      name: "Monstera Deliciosa Plant",
      category: "Indoor Plants",
      image: "/images/Monstera_deliciosa.jpg"
    },
    {
      name: "Peperomia Green Plant",
      category: "Indoor Plants",
      image: "/images/Peperomia.jpg"
    },
    {
      name: "Gifting Plant",
      category: "Gifting Plants",
      image: "/images/gift1.jpg"
    },
    {
      name: "Gifting Plant",
      category: "Gifting Plants",
      image: "/images/gift2.jpg"
    },
    {
      name: "Gifting Plant",
      category: "Gifting Plants",
      image: "/images/gift3.jpg"
    },
    {
      name: "Gifting Plant",
      category: "Gifting Plants",
      image: "/images/gift4.jpg"
    },
    {
      name: "Gifting Plant",
      category: "Gifting Plants",
      image: "/images/gift5.jpg"
    },
    {
      name: "Gifting Plant",
      category: "Gifting Plants",
      image: "/images/gift6.jpg"
    },
    {
      name: "Gifting Plant",
      category: "Gifting Plants",
      image: "/images/gift7.jpg"
    },
    {
      name: "Gifting Plant",
      category: "Gifting Plants",
      image: "/images/gift8.jpg"
    },
    {
      name: "Peace Lily Plant",
      category: "Flowering Plants",
      image: "/images/Peace_lilly.jpg"
    },
    {
      name: "   Kalanchoe Plant",
      category: "Flowering Plants",
      image: "/images/Kalanchoe_plant.jpg"
    },
    {
      name: "Ixora (Rugmini) Plant",
      category: "Flowering Plants",
      image: "/images/Ixora_plant.jpg"
    },
    {
      name: "Anthurium Red Plant",
      category: "Flowering Plants",
      image: "/images/Anthurium_red.jpg"
    },
    {
      name: "Christmas Cactus",
      category: "Flowering Plants",
      image: "/images/Christmas_cactus.jpg"
    },
    {
      name: "Aglaonema Snow White Plant",
      category: "Flowering Plants",
      image: "/images/Aglaonema_snow_white.jpg"
    },
    {
      name: "Bird of Paradise Plant",
      category: "Flowering Plants",
      image: "/images/Bird_of_paradise.jpg"
    }
  ];

  // Group plants by category
  const categories = [
    "Outdoor Plants",
    "Indoor Plants",
    "Gifting Plants",
    "Avenue Plants",
    "Flowering Plants"
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="plants-section py-5">
        <div className="container">
          <div className="services-content text-center text-white w-50 float-end mx-auto text-wrap">
            <h6 className="display-6 fw-bold slide-text">Our Plants</h6>
            <p className="fw-bold slide-text">
              Explore our range of plants perfect for any landscape
            </p>
          </div>
        </div>
      </section>

      {/* Plants by Category */}
      <section className="py-5">
        <div className="container">
          {categories.map((category, index) => {
            const filteredPlants = plants.filter(plant => plant.category === category);

            if (filteredPlants.length === 0) return null;

            return (
              <div key={index} className="mb-5">
                <h2 className="fw-bold text-center mb-4">{category}</h2>
                <div className="row g-4">
                  {filteredPlants.map((plant, idx) => (
                    <div key={idx} className="col-md-4 col-lg-3">
                      <div className="card h-100 border-0 shadow-sm">
                        <img
                          src={plant.image}
                          className="card-img-top"
                          alt={plant.name}
                          style={{ height: '200px', objectFit: 'cover' }}
                        />
                        <div className="card-body">
                          <div className="d-flex align-items-center mb-3">
                            <h3 className="h5 card-title mb-0">{plant.name}</h3>
                          </div>
                          {/* <Link to="/contact" className="btn btn-outline" onClick={() => window.scrollTo(0, 0)}>Inquire Now</Link> */}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Plants;
