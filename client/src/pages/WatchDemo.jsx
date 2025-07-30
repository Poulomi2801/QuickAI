import React from 'react';

const WatchDemo = () => {
  // Use the CORRECT YouTube embed URL
  const youtubeEmbedUrl = "https://www.youtube.com/embed/tH8ioPNpeZI"; 

  return (
    <div className="p-6 md:p-12 lg:p-24 bg-[#F4F7FB] min-h-[calc(100vh-120px)] text-slate-700 flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-6 text-center">Quick.ai Demo</h1>
      <p className="text-lg mb-8 text-center max-w-2xl">
        See how Quick.ai's powerful AI tools can transform your content creation workflow.
      </p>

      <div className="relative w-full max-w-4xl" style={{ paddingTop: '56.25%' }}> {/* 16:9 Aspect Ratio Container */}
        <iframe
          width="560" // Standard width from your embed code
          height="315" // Standard height from your embed code
          src={youtubeEmbedUrl} // <--- THIS IS THE FINAL CORRECT URL
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin" 
          allowFullScreen
          className="absolute top-0 left-0 w-full h-full rounded-lg shadow-xl" // Tailwind for styling
        ></iframe>
      </div>

      <p className="mt-8 text-center text-md text-gray-600">
        Ready to start creating? Log in or sign up today!
      </p>
    </div>
  );
};

export default WatchDemo;