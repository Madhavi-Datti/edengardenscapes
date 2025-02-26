import React from 'react';
import { Heart, Leaf, Shield, Users, Palette, TreePine,  Banknote, Hammer} from 'lucide-react';
import '../index.css'

const About = () => {
  return (
    <div className="pt-5 bg-sandal">
      {/* Hero Section */}
      <section>
  <div className="container">
    <div className="row">
      <div className="col-lg-6">
        <h1 className="display-4 mb-4">About Eden GardenScapes</h1>
        <p className="lead">Creating Beautiful Garden Spaces Since 2014</p>
        <p className="mb-4 text-justify">
          At Eden GardenScapes, we specialize in transforming gardens into breathtaking landscapes that seamlessly blend beauty and functionality. Whether it's a cozy garden nook or a grand outdoor space, our expert landscapers and designers craft stunning gardenscaping solutions tailored to your style and needs. With a passion for horticulture and design, we've been shaping extraordinary green spaces since 2014. Our attention to detail ensures that every element, from plant selection to layout, contributes to a harmonious and welcoming environment.
        </p>
        <div className="row mb-3 mt-5 text-left text-md-left">
          <div className="col-6 col-md-3">
            <TreePine className="mb-4 text-color" size={24} />
            <h6>Expert Designers</h6>
          </div>
          <div className="col-6 col-md-3">
            <Hammer className="mb-4 text-color" size={24} />
            <h6>End-to-End Services</h6>
          </div>
          <div className="col-6 col-md-3">
            <Palette className="mb-4 text-color" size={24} />
            <h6>Custom Designs</h6>
          </div>
          <div className="col-6 col-md-3">
            <Banknote className="mb-4 text-color" size={24} />
            <h6>Budget Friendly</h6>
          </div>
        </div>
        <br />
        <br />
        <p>
          <em>Let Eden GardenScapes turn your garden into a personal oasis - a place where nature's beauty flourishes, and you can escape into serenity. Trust us to create the garden of your dreams, a space that you'll cherish for years to come.</em>
        </p>
      </div>

      <div className="col-lg-6">
        <img
          src="/images/girl.jpg"
          loading="lazy"
          alt="Our Team"
          className="img-fluid rounded-3 shadow"
        />
      </div>
    </div>
  </div>
</section>

      {/* Vision & Mission */}
      <section className="py-5">
        <div className="container">
          <div className="row g-4">
            <div className="col-md-6">
              <div className="card h-100 border-0 shadow-sm ">
                <div className="card-body p-4 ">
                  <Heart className="text-color mb-3" size={40} />
                  <h3 className="card-title">Our Vision</h3>
                  <p className="card-text ">To be the premier provider of sustainable and innovative gardenscaping solutions, transforming spaces into lush, vibrant retreats that inspire and connect people with nature.</p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card h-100 border-0 shadow-sm ">
                <div className="card-body p-4 ">
                  <Leaf className="text-color mb-3" size={40} />
                  <h3 className="card-title">Our Mission</h3>
                  <p className="card-text">To deliver exceptional gardenscaping services that exceed client expectations while promoting environmental stewardship and sustainable practices.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-light py-5">
        <div className="container">
          <h2 className="text-center mb-5">Our Core Values</h2>
          <div className="row g-4">
            {[
              {
                icon: Shield,
                title: "Quality",
                description: "We never compromise on the quality of our work and materials."
              },
              {
                icon: Users,
                title: "Customer Focus",
                description: "Your satisfaction is our top priority in every project we undertake."
              },
              {
                icon: Leaf,
                title: "Sustainability",
                description: "We implement eco-friendly practices in all our landscaping solutions."
              }
            ].map((value, index) => (
              <div key={index} className="col-md-4">
                <div className="card h-100 border-0 shadow-sm text-white rounded-4">
                  <div className="card-body p-4 text-center bg-color rounded-4">
                    <value.icon className="text-white mb-3" size={40} />
                    <h4 className="card-title">{value.title}</h4>
                    <p className="card-text">{value.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

     {/* Our Journey */}
     <section className="bg-sandal py-5">
        <div className="container">
          <h2 className="text-center mb-5">Our Journey</h2>
          <p className="text-center">Since our inception in 2014, Eden GardenScapes has been dedicated to enhancing outdoor spaces with a perfect blend of creativity and sustainability. Starting as a small team of passionate horticulturists, we have grown into a full-fledged landscaping firm, serving numerous satisfied clients. Over the years, we have expanded our services to incorporate modern designs, innovative techniques, and environmentally friendly solutions.</p>
        </div>
        {/* Step 3: Steps Timeline */}
        <div className="container">
  <div className="row justify-content-center text-center">
    
    {[
      { year: "2014", text: "Founded with a passion for horticulture." },
      { year: "2016", text: "Adopted modern landscaping techniques." },
      { year: "2018", text: "Integrated sustainable, eco-friendly solutions." },
      { year: "2020", text: "Expanded with a strong client base." },
      { year: "2023", text: "Introduced innovative outdoor designs." },
      { year: "Present", text: "Always striving for excellence in landscaping." }
    ].map((item, index) => (
      <div className="col-6 col-sm-4 col-md-2" key={index}>
        <div className="rounded-circle bg-color text-white d-flex align-items-center justify-content-center mx-auto round" style={{ width: "80px", height: "80px", fontSize: "20px", boxShadow: "0px 0px 15px rgba(3, 3, 3, 0.99); " }}>
          {item.year}
        </div>
        <p className="mt-2">{item.text}</p>
      </div>
    ))}

  </div>
    </div>
      </section>
    </div>
  );
};

export default About;
