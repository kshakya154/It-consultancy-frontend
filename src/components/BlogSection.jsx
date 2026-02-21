import React, { useState } from "react";

const blogData = {
  recents: [
    {
      title: "AI Tools for Everyone",
      category: "AI",
      image: "/assets/blog-ai.jpg",
    },
    {
      title: "Web Dev Trends in 2025",
      category: "Web Development",
      image: "/assets/blog-web.jpg",
    },
    {
      title: "Design with Purpose",
      category: "UI/UX",
      image: "/assets/blog-uiux.jpg",
    },
  ],
  popular: [
    {
      title: "eCommerce In 2023",
      category: "Digital Marketing",
      image: "/assets/blog-ecommerce.jpg",
    },
    {
      title: "Develop an LGBTQ Dating App",
      category: "Software Development",
      image: "/assets/blog-dating.jpg",
    },
    {
      title: "Develop a Mental Health App",
      category: "UX design",
      image: "/assets/blog-mental.jpg",
    },
  ],
};

export default function BlogsSection() {
  const [activeTab, setActiveTab] = useState("popular");

  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <p className="text-blue-500 font-medium">Read</p>
          <h2 className="text-4xl font-bold">Our Blogs</h2>
        </div>
        <button className="border border-blue-500 text-blue-500 px-4 py-2 rounded hover:bg-blue-100 transition">
          View Details →
        </button>
      </div>

      {/* Tabs */}
      <div className="flex space-x-2 mb-6">
        {["recents", "popular"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-md transition ${
              activeTab === tab
                ? "bg-blue-500 text-white"
                : "bg-gray-100 text-gray-800 hover:bg-gray-200"
            }`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      {/* Blog Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {blogData[activeTab].map((blog, index) => (
          <div
            key={index}
            className="relative rounded-lg overflow-hidden shadow-lg group cursor-pointer"
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/80 to-transparent text-white">
              <span className="bg-cyan-400 px-2 py-1 text-sm rounded font-medium inline-block mb-2 text-black">
                {blog.category}
              </span>
              <h3 className="text-lg font-semibold">{blog.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
