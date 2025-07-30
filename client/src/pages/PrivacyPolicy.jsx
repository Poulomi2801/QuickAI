import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="p-6 md:p-12 lg:p-24 bg-[#F4F7FB] min-h-[calc(100vh-120px)] text-slate-700"> {/* Added basic styling for layout */}
      <h1 className="text-4xl font-bold mb-6">Privacy Policy for Quick.ai</h1>
      <p className="text-lg mb-4">
        At Quick.ai, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website Quick.ai (the "Site") and use our services.
      </p>
      <h2 className="text-2xl font-semibold mb-4 mt-6">Information We Collect</h2>
      <p className="mb-4">
        We collect personal information that you voluntarily provide to us when you register on the Site, express an interest in obtaining information about us or our products and services, when you participate in activities on the Site, or otherwise when you contact us.
      </p>
      <p className="mb-4">
        The personal information that we collect depends on the context of your interactions with us and the Site, the choices you make, and the products and features you use. The personal information we collect may include the following:
      </p>
      <ul className="list-disc list-inside mb-4 ml-4">
        <li>Email address</li>
        <li>Name (if provided)</li>
        <li>Usage data related to your interactions with our AI tools</li>
      </ul>
      <h2 className="text-2xl font-semibold mb-4 mt-6">How We Use Your Information</h2>
      <p className="mb-4">
        We use information collected via our Site for various business purposes described below:
      </p>
      <ul className="list-disc list-inside mb-4 ml-4">
        <li>To facilitate account creation and logon process.</li>
        <li>To send you marketing and promotional communications.</li>
        <li>To respond to your inquiries and offer support.</li>
        <li>To improve our website and services.</li>
      </ul>
      <h2 className="text-2xl font-semibold mb-4 mt-6">Disclosure of Your Information</h2>
      <p className="mb-4">
        We may share your information with third parties that perform services for us or on our behalf, including data analysis, email delivery, hosting services, customer service, or marketing assistance.
      </p>
      <h2 className="text-2xl font-semibold mb-4 mt-6">Your Privacy Rights</h2>
      <p className="mb-4">
        You have the right to request access to the personal information we collect from you, change that information, or delete it. To request to review, update, or delete your personal information, please contact us at poulomidas2801@gmail.com.
      </p>
      <p className="mb-4">
        This privacy policy was last updated on July 30, 2025.
      </p>
    </div>
  );
};

export default PrivacyPolicy;