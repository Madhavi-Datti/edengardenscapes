import React from 'react';
import { Shovel, Sprout, TreePine, Hammer, Droplets, Home, Columns, ForkKnife, Sun, Grid} from 'lucide-react';
import { Link } from 'react-router-dom';
import '../index.css';

const Services = () => {
  const services = [
    {
      icon: Hammer,
      title: "Garden Maintenance ",
      description: "A well-maintained garden enhances the beauty and health of your outdoor space. Our expert team provides regular trimming, pruning, weeding, and soil enrichment. We ensure proper plant growth by monitoring pest control and fertilization. Seasonal care and maintenance schedules keep your garden lush year-round. We also offer mulching and composting for soil nourishment. Our service helps prevent plant diseases and promotes sustainable gardening. We customize maintenance plans to suit your garden’s specific needs. Enjoy a vibrant and green space with our professional garden maintenance services.",
      image: "/images/garden_maintenance_service.jpg"
    },
    {
      icon: Shovel,
      title: "Lawn Care",
      description: "A beautiful, well-kept lawn improves your home’s curb appeal and provides a refreshing outdoor area. We offer professional lawn mowing, aeration, and dethatching to enhance grass health. Our experts use organic and chemical fertilizers based on soil conditions. We ensure proper irrigation management to maintain hydration levels. Weed control and pest management keep your lawn clean and thriving. Seasonal lawn treatments help prevent dryness or waterlogging. Regular maintenance ensures lush, green, and even grass growth. Enjoy a perfect lawn with our specialized care and expertise.",
      image: "/images/lawn_care.jpg"
    },
    {
      icon: Columns,
      title: "Vertical Garden",
      description: "Make the most of limited space with a stunning vertical garden. We design and install customized green walls for homes, offices, and commercial spaces. Vertical gardens improve air quality and act as natural insulation. We use a variety of plants suited for indoor and outdoor environments. Our irrigation system ensures plants receive the right amount of water. These gardens require minimal maintenance and offer aesthetic appeal. We help you choose plants that enhance your space and climate conditions. Experience the beauty and benefits of greenery with a modern vertical garden.",
      image: "/images/vertical_garden.jpg"
    },
    {
      icon: Droplets,
      title: "Drip Irrigation",
      description: "Save water and keep your plants hydrated with an efficient drip irrigation system. Our system provides slow, steady water flow directly to plant roots. This prevents over watering and reduces water wastage. We customize irrigation setups based on your garden size and plant needs. Automated systems ensure hassle-free watering and time efficiency. Drip irrigation promotes healthier plant growth by maintaining moisture balance. It minimizes weed growth and prevents soil erosion. Experience a cost-effective and eco-friendly watering solution with our expert services.",
      image: "/images/drip_irrigation.jpg"
    },
    {
      icon: Home,
      title: "Home Garden",
      description: "Create a peaceful green space in your home with our customized home garden services. We design gardens that blend with your interiors and available space. Whether you need potted plants, indoor gardens, or decorative arrangements, we have you covered. Our experts select plants that thrive in home environments with minimal care. We offer guidance on watering schedules, light requirements, and plant nutrition. Home gardens improve air quality and add aesthetic value to your space. Choose from herbs, flowering plants, or decorative greens to enhance your interiors. Enjoy nature within your home with our professional gardening solutions.",
      image: "/images/home_garden.jpg"
    },
    {
      icon: ForkKnife,
      title: "Kitchen Garden",
      description: "Grow fresh and organic vegetables right at home with a personalized kitchen garden. We help you set up raised beds, pots, or hydroponic systems for easy cultivation. Our experts guide you in choosing the best vegetables and herbs for your region. We provide organic soil, compost, and fertilizers for chemical-free growth. Kitchen gardens reduce grocery expenses and promote a healthy lifestyle. Our team assists in pest control and seasonal planting schedules. Enjoy the satisfaction of growing and harvesting your own food. Experience the joy of farm-to-table freshness with our kitchen garden services.",
      image: "/images/kitchen_garden.jpg"
    },
    {
      icon: Grid,
      title: "Balcony Garden ",
      description: "Transform your balcony into a green oasis with our innovative gardening solutions. We maximize small spaces with vertical planters, railing gardens, and hanging pots. Our team selects low-maintenance and climate-friendly plants for your balcony. We ensure proper sunlight exposure and ventilation for plant health. Balcony gardens add a refreshing touch to apartments and urban homes. We integrate stylish pots, wooden planters, and decorative elements for a modern look. Our irrigation solutions make maintenance simple and efficient. Enjoy a peaceful retreat in your home with a customized balcony garden.",
      image: "/images/balcony_garden.jpg"
    },
    {
      icon: Sun,
      title: "Terrace Garden",
      description: "Utilize your rooftop to create a beautiful, eco-friendly terrace garden. We design layouts based on your space, sunlight, and preferences. Our team installs soil beds, containers, and vertical gardens for maximum greenery. Terrace gardens reduce heat absorption and improve air quality. We offer solutions for water drainage and irrigation to maintain plant health. Choose from ornamental plants, flowering species, or organic vegetable gardens. We provide lightweight soil mixes and composting options for sustainable gardening. Enjoy fresh air and a private green space with our terrace garden services.",
      image: "/images/terrace_garden.jpg"
    },
    {
      icon: TreePine,
      title: "Lawn & Plants Supply",
      description: "We provide high-quality plants and lawns to enhance your landscape. Our nursery offers a variety of grass types, ornamental plants, and flowering shrubs. We help you choose plants suited for your climate and soil conditions. Our team provides planting, fertilization, and aftercare guidance. We supply disease-resistant and healthy plants for long-lasting beauty. Our lawn options include natural grass and easy-maintenance artificial turf. Whether for home gardens or large landscapes, we provide the best greenery solutions. Get lush lawns and vibrant plants delivered to your doorstep with our supply services.",
      image: "/images/plants_supply.jpg"
    },
    {
      icon: Sprout,
      title: "Vegetable Garden",
      description: "Start your own homegrown vegetable garden with our expert assistance. We help you select seasonal vegetables that thrive in your climate. Our team provides organic soil, fertilizers, and composting techniques for healthy produce. We design raised beds, container gardens, or vertical vegetable patches. Pest control and companion planting ensure a chemical-free harvest. Regular maintenance and watering schedules keep plants fresh and productive. Experience the joy of growing your own fresh vegetables. Enjoy nutritious, homegrown food with our professional vegetable garden services.",
      image: "/images/vegitable_garden.jpg"
    },
    {
      icon: Home,
      title: "Villa Garden",
      description:"Transform your villa into a lush green retreat with our premium villa garden services. We create stunning landscapes that complement your villa’s architecture and outdoor space. Whether it's a vibrant flower garden, a serene meditation corner, or a fully customized backyard oasis, we bring your vision to life. Our experts carefully select plants that thrive in your climate and require minimal upkeep. We provide tailored solutions, including lawn care, irrigation systems, and seasonal plant maintenance. Enhance your villa’s beauty with elegant greenery, water features, and garden decor. Experience the luxury of nature right at your doorstep with our expert gardening solutions." ,
      image: "/images/villa_garden.jpg"
    }
  ];

  return (
    <div>
<section className="services-section py-5">
  <div className="container">
    <div className="services-content text-center text-white w-50 float-end mx-auto text-wrap">
      <h6 className="display-6 fw-bold slide-text">Our Services</h6>
      <p className="fw-bold slide-text">
        We don’t just build gardens – we create living experiences
      </p>
    </div>
  </div>
</section>

        {/* Alternating Services Section */}
        <section className="py-5 bg-sandal">
        <div className="container">
          {services.map((service, index) => (
            <div key={index} className="row align-items-center mb-5">
              {/* For large screens, alternate the order */}
              <div className={`col-12 col-md-6 mb-3 ${index % 2 === 0 ? '' : 'order-md-2'}`}>
                <div className="d-flex align-items-center mb-2">
                  <service.icon size={32} className="me-2 text-color" />
                  <h3 className="h4">{service.title}</h3>
                </div>
                <p className="text-muted text-justify">{service.description}</p>
                <Link to="/contact" className="btn btn-outline mb-3">Get Quote</Link>
              </div>

              {/* Image will always come after text */}
              <div className="col-12 col-md-6 mb-3">
                <img 
                  src={service.image} 
                  className="img-fluid rounded shadow-sm"
                  alt={service.title}
                  style={{ height: '300px', objectFit: 'cover', width: '100%',}}
                />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Services;