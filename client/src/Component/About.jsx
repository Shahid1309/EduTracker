// About.js
import React from 'react';
import Footer from './Footer';

const About = () => {
  return (
    <div>
       <>
    <div className="bg-gray-50 min-h-screen p-4">
      <main className="container mx-auto py-8">
        <section className="flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2 lg:pr-8 mb-4 lg:mb-0">
            <h2 className="text-2xl font-bold mb-4">Our Story</h2>
            <p className="text-gray-800">
              Edutrackar is a revolutionary platform designed to transform
              education tracking and management. Our journey began with a simple
              idea: to create a user-friendly, comprehensive tool that empowers
              educators, students, and parents alike. Since our inception, we
              have been committed to innovation and excellence in education.
            </p>
          </div>
          <div className="lg:w-1/2 flex items-center justify-center">
            <img
              src="https://fastly.picsum.photos/id/140/2448/2448.jpg?hmac=zQCgUWz77YSeT2F-IBV7cf_D25TabaB4l4tZChoyRI0"
              alt="Teamwork"
              className="rounded-lg"
              style={{ maxWidth: "75%", height: "300px" }}
            />
          </div>
        </section>

        <section className="flex flex-col lg:flex-row items-center justify-between mt-8">
          <div className="lg:w-1/2 flex justify-center items-center">
            <img
              src="https://picsum.photos/id/20/367/267"
              alt="Education"
              className="rounded-lg"
              style={{ maxWidth: "60%", height: "320px" }}
            />
          </div>
          <div className="lg:w-1/2 lg:pl-8 mt-4 lg:mt-0">
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="text-gray-800">
              Our mission at Edutrackar is to revolutionize the way education
              is managed and tracked. We strive to provide a seamless
              experience for educators, students, and parents, enabling them to
              easily monitor progress, track achievements, and collaborate
              effectively. Through cutting-edge technology and a dedicated
              team, we aim to empower individuals and institutions to achieve
              their full potential.
            </p>
          </div>
        </section>
      </main>
    </div>
    <Footer />
    </>
     
    </div>
  );
};

export default About;
