import React from 'react';
import { Leaf, Users, Award, ThumbsUp, Banknote} from 'lucide-react';
import '../index.css'

function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero position-relative" style={{
        backgroundImage: 'url("/images/hero.jpg")',
        loading: 'lazy',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        marginTop: '56px'
      }}>
        <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-25"></div>
        <div className="container position-relative h-100">
          <div className="row h-100 align-items-center">
            <div className="col-lg-8 text-white text-center text-lg-start">
              <h1 className="display-3 fw-bold mb-4">Turning Your Garden Ideas Into Reality</h1>
              <p className="lead mb-4">Create your dream garden with EdenGardenscapes. Professional landscaping services tailored to your vision.</p>
              <a href="/contact" className="btn btn-custom btn-lg">Get Started</a>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-5 position-relative bg-light">
  <div className="container">
  <h2 className="text-center mb-5 text-with-lines">About Us</h2>
    <div className="row align-items-center">
      
      {/* Image Section with Overlapping Effect */}
      <div className="col-lg-6 position-relative">
        <div className="image-container">
          <img 
            src="images/welcome.jpg" 
            loading="lazy"
            alt="Greenery" 
            className="img-fluid rounded-2 shadow-lg main-img opacity-75"
          />
          <img 
            src="/images/welcome.jpg" 
            loading="lazy"
            alt="Greenery" 
            className="img-fluid rounded-2 shadow-sm overlay-img"
          />
        </div>
      </div>

      {/* Text Content */}
      <div className="col-lg-6">
        <h2 className="display-5 mb-4 mt-5">Welcome to EdenGardenscapes</h2>
        <p className="lead">We bring your landscaping dreams to life with expert design, quality materials, and sustainable practices.</p>
        
        <div className="d-flex align-items-center mt-3">
          <Leaf className="icon-style me-3 text-color" size={28} />
          <div>
            <h5 className="mb-0">Innovative Landscaping</h5>
            <p className="mb-0">Tailored designs that blend beauty and functionality.</p>
          </div>
        </div>

        <div className="d-flex align-items-center mt-3">
          <Award className="icon-style me-3 text-color" size={28} />
          <div>
            <h5 className="mb-0">Quality & Expertise</h5>
            <p className="mb-0">A team of seasoned professionals at your service.</p>
          </div>
        </div>

        <div className="d-flex align-items-center mt-3">
          <Banknote className="icon-style me-3 text-color" size={28} />
          <div>
            <h5 className="mb-0">Affordable Excellence</h5>
            <p className="mb-0">Premium landscaping solutions within your budget.</p>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>


      {/* Featured Services */}
      <section className="bg-light py-5">
        <div className="container">
          <h2 className="text-center mb-5 text-with-lines">Our Services</h2>
          <div className="row g-4">
            {[
              {
                title: "Garden Maintenance",
                image: "/images/garden_maintenance.jpg",
                description: "Transform your garden into a thriving oasis with our expert maintenance services. From lush lawns to beautifully crafted walkways, we ensure your outdoor space stays vibrant, welcoming throughout the seasons."
              },
              {
                title: "Vertical Garden",
                image: "/images/vertical_garden.jpg",
                description: "Maximize your space with stunning vertical gardens that bring nature to new heights. Perfect for urban living, our innovative designs add greenery and charm to walls, balconies, and small spaces."
              },
              {
                title: "Lawn Care & Supply",
                image: "/images/lawn_care.jpg",
                description: "Achieve a lush, green lawn with our expert lawn care services and premium supplies. From fertilization to pest control, we provide everything you need to maintain a vibrant, healthy lawn year-round."
              },
              {
                title: "Drip Irrigation",
                image: "/images/drip_irrigation.jpg",
                description: "Efficiently water your plants with our drip irrigation systems, delivering a precise flow of water directly to the roots. Save water, reduce waste, and promote healthier, greener gardens with this eco-friendly solution."
              },
              {
                title: " Balcony Garden",
                image: "/images/balcony_garden.jpg",
                description: "Turn your balcony into a peaceful retreat with vibrant plants and flowers. Our balcony gardens are designed to maximize limited space, creating a serene environment that blends nature with your outdoor living area."
              },
              {
                title: "Plants Supply",
                image:"/images/plants_supply.jpg",
                description: "Bring nature to your doorstep with our wide range of indoor and outdoor plants. Whether you're looking to add life to your home or garden, we provide healthy, high-quality plants to suit every space and style."
              }
            ].map((service, index) => (
              <div key={index} className="col-md-4">
                <div className="card h-100 border-0 shadow-sm">
                  <img src={service.image} className="card-img-top" loading="lazy" alt={service.title} style={{height: '200px', objectFit: 'cover'}} />
                  <div className="card-body">
                    <h5 className="card-title">{service.title}</h5>
                    <p className="card-text">{service.description}</p>
                    <a href="/services" className="btn btn-outline">Know More</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
              <div className="text-center mt-5">
                 <a href="/services" className="btn btn-custom btn-lg"> More Services</a>
                 </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-5">
        <div className="container">
        <h2 className="text-center mb-5 text-with-lines">Why Choose Us</h2>
          <div className="row text-center g-4">
            {[
              { icon: Users, title: "Happy Clients", value: "100+",},
              { icon: Award, title: "Years Experience", value: "10+" },
              { icon: ThumbsUp, title: "Projects Completed", value: "50+" }
            ].map((stat, index) => (
              <div key={index} className="col-md-4">
                <div className="p-4 rounded-3 bg-card">
                  <stat.icon size={40} className="text-color mb-3" />
                  <h3 className="h2 mb-2">{stat.value}</h3>
                  <p className="text-muted mb-0">{stat.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-5" style={{ 
  backgroundImage: 'url("/images/why_bg.jpg")', 
  loading:'lazy',
  backgroundSize: 'cover', 
  backgroundPosition: 'center', 
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center'
}}>
  <div className="container">
    <h2 className="text-center mb-5">What Our Clients Say</h2>
    <div className="row">
      <div className="col-md-4 mb-3">
        <div className="card border-0 shadow-sm">
          <div className="card-body bg-color">
            <p className="card-text text-white">"EdenGardenscapes transformed my backyard into a beautiful garden. Their attention to detail is remarkable!"</p>
            <footer className="blockquote-footer text-white">Srinivas, Homeowner</footer>
          </div>
        </div>
      </div>
      <div className="col-md-4 mb-3">
        <div className="card border-0 shadow-sm">
          <div className="card-body bg-color">
            <p className="card-text text-white">"The team at EdenGardenscapes provided excellent service and helped me achieve my dream garden!"</p>
            <footer className="blockquote-footer text-white">Kalpana, Garden Enthusiast</footer>
          </div>
        </div>
      </div>
      <div className="col-md-4 mb-3">
        <div className="card border-0 shadow-sm">
          <div className="card-body bg-color">
            <p className="card-text text-white">"Professional, reliable, and always bringing new ideas. Couldn't be happier with the result!"</p>
            <footer className="blockquote-footer text-white">Dinesh, Business Owner</footer>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section className="py-5 bg-light">
  <div className="container">
  <h2 className="text-center mb-5 text-with-lines">Our Work Gallery</h2>
  <div id="galleryCarousel" className="carousel slide" data-bs-ride="carousel" data-bs-interval="1000">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="/images/work2.jpg" loading="lazy" alt="Gallery Image 1" className="d-block w-100 img-fluid rounded shadow object-fit-cover" />
        </div>
        <div className="carousel-item">
          <img src="/images/work5.jpg" loading="lazy" alt="Gallery Image 2" className="d-block w-100 img-fluid rounded shadow object-fit-cover" />
        </div>
        <div className="carousel-item">
          <img src="/images/work10.jpg" loading="lazy" alt="Gallery Image 3" className="d-block w-100 img-fluid rounded shadow" />
        </div>
        <div className="carousel-item">
          <img src="/images/work12.jpg" loading="lazy" alt="Gallery Image 4" className="d-block w-100 img-fluid rounded shadow" />
        </div>
        <div className="carousel-item">
          <img src="/images/work13.jpg" loading="lazy" alt="Gallery Image 5" className="d-block w-100 img-fluid rounded shadow" />
        </div>
        <div className="carousel-item">
          <img src="/images/work14.jpg" loading="lazy" alt="Gallery Image 6" className="d-block w-100 img-fluid rounded shadow" />
        </div>
        <div className="carousel-item">
          <img src="/images/work17.jpg" loading="lazy" alt="Gallery Image 6" className="d-block w-100 img-fluid rounded shadow" />
        </div>
        <div className="carousel-item">
          <img src="/images/work18.jpg" loading="lazy" alt="Gallery Image 6" className="d-block w-100 img-fluid rounded shadow" />
        </div>
        <div className="carousel-item">
          <img src="/images/work22.jpg" loading="lazy" alt="Gallery Image 6" className="d-block w-100 img-fluid rounded shadow" />
        </div>
        <div className="carousel-item">
          <img src="/images/work27.jpg" loading="lazy" alt="Gallery Image 6" className="d-block w-100 img-fluid rounded shadow" />
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#galleryCarousel" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#galleryCarousel" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  </div>
</section>




    </div>
  );
}

export default Home;

