import React from 'react';

const AboutUs = () => {
  return (
    <div className="p-6 md:p-12 lg:p-24 bg-[#F4F7FB] min-h-[calc(100vh-120px)] text-slate-700"> {/* Added basic styling for layout */}
      <h1 className="text-4xl font-bold mb-6">About Quick.ai</h1>
      <p className="text-lg mb-4">
        Welcome to Quick.ai, your ultimate partner in content creation! We leverage cutting-edge Artificial Intelligence to provide you with a powerful suite of tools designed to streamline and enhance your creative workflow.
      </p>
      <p className="text-lg mb-4">
        Our mission is to empower individuals and businesses to produce high-quality, engaging content faster and more efficiently than ever before. Whether you're a blogger, marketer, student, or just curious about AI, Quick.ai offers intuitive solutions that adapt to your needs.
      </p>
      <p className="text-lg">
        Explore our AI-powered article writer, blog title generator, image generation, background and object removal, and resume review tools. We're constantly evolving to bring you the best of AI technology.
      </p>
      <p className="mt-8 text-md text-gray-600">
        Thank you for choosing Quick.ai!
      </p>
    </div>
  );
};

export default AboutUs;