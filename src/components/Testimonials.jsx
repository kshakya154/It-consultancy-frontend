import React from "react";
import Slider from "react-slick";

const testimonials = [
  {
    name: "John Doe",
    role: "CEO at TechCorp",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    text: "Extern Labs helped us elevate our web presence to the next level. Their team was professional and responsive!",
  },
  {
    name: "Jane Smith",
    role: "Product Manager at Startly",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    text: "Fantastic service and delivery. Our mobile app turned out just how we envisioned, with great user feedback.",
  },
  {
    name: "David Johnson",
    role: "CTO at DevSolutions",
    image: "https://randomuser.me/api/portraits/men/85.jpg",
    text: "They understood our needs perfectly and delivered a scalable platform. Highly recommend!",
  },
];

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
  };

  return (
    <section className="py-16 px-4 bg-gray-100">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">What Our Clients Say</h2>

        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-8 mx-4"
            >
              <div className="flex justify-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-20 h-20 rounded-full border-4 border-orange-400"
                />
              </div>
              <p className="text-lg italic text-gray-700 mb-4">"{testimonial.text}"</p>
              <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
              <span className="text-sm text-gray-500">{testimonial.role}</span>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonials;
