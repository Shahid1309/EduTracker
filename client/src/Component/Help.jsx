import React from 'react';
import Footer from './Footer';

const Help = () => {
  return (<>
    <div className="container mx-auto px-4 py-8 bg-gray-50">
      <h1 className="text-4xl font-serif font-bold mb-8 text-center text-gray-900">Need Help?</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-serif font-semibold mb-4 text-gray-900">Frequently Asked Questions (FAQs)</h2>
        <div className="space-y-6">
          <div className="border rounded-lg p-4 bg-white">
            <h3 className="text-lg font-serif font-semibold mb-2">How do I reset my password?</h3>
            <p className="text-base font-serif text-gray-800">To reset your password, go to the login page and click on the "Forgot Password" link. Follow the instructions to reset your password.</p>
          </div>
          <div className="border rounded-lg p-4 bg-white">
            <h3 className="text-lg font-serif font-semibold mb-2">How can I contact support?</h3>
            <p className="text-base font-serif text-gray-800">You can contact our support team by sending an email to <span className="italic">support@edutrackr.com</span> or by filling out the contact form on our website.</p>
          </div>
          <div className="border rounded-lg p-4 bg-white">
            <h3 className="text-lg font-serif font-semibold mb-2">Can I customize my dashboard?</h3>
            <p className="text-base font-serif text-gray-800">Yes, you can customize your dashboard by clicking on the "Customize Dashboard" button. From there, you can choose which widgets to display and rearrange them as needed.</p>
          </div>
          {/* Add more FAQs as needed */}
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-serif font-semibold mb-4 text-gray-900">Contact Information</h2>
        <p className="text-lg font-serif text-gray-800">If you have any further questions or need assistance, please feel free to contact us:</p>
        <ul className="list-disc ml-6 text-base font-serif text-gray-800">
          <li>Email: <span className="italic">support@edutrackr.com</span></li>
          <li>Phone: <span className="italic">1-800-123-4567</span></li>
          <li>Address: <span className="italic">123 Main Street, Anytown, USA</span></li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-serif font-semibold mb-4 text-gray-900">Feedback</h2>
        <p className="text-lg font-serif text-gray-800">We value your feedback! If you have any suggestions for improving our platform or would like to report a bug, please let us know.</p>
        <p className="text-lg font-serif text-gray-800">You can submit feedback through our website or by emailing us directly at <span className="italic">feedback@edutrackr.com</span>.</p>
      </section>

    </div>
    <Footer />
    </>
  );
};

export default Help;


