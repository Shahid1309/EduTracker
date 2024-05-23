// Profile.js
import React from 'react';
import Footer from './Footer';




const Profile = () => {
  return (
    
    <>
  <div className="container mx-auto ">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
      <div>
        <div className="bg-white rounded-lg shadow-md p-6 ml-4">
          <h4 className="text-lg font-bold mb-4">Edit Profile</h4>
          <form>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              <div>
                <label className="block mb-2">Username</label>
                <input
                  defaultValue="John324"
                  className="form-input w-full bg-gray-100 border border-gray-300 p-2 rounded"
                  placeholder="Username"
                  type="text"
                />
              </div>
              <div>
                <label className="block mb-2">Email address</label>
                <input
                  className="form-input w-full bg-gray-100 border border-gray-300 p-2 rounded"
                  placeholder="Email"
                  type="email"
                />
              </div>
              <div>
                <label className="block mb-2">First Name</label>
                <input
                  defaultValue="John"
                  className="form-input w-full bg-gray-100 border border-gray-300 p-2 rounded"
                  placeholder="First Name"
                  type="text"
                />
              </div>
              <div>
                <label className="block mb-2">Last Name</label>
                <input
                  defaultValue="Doe"
                  className="form-input w-full bg-gray-100 border border-gray-300 p-2 rounded"
                  placeholder="Last Name"
                  type="text"
                />
              </div>
              <div>
                <label className="block mb-2">Country</label>
                <input
                  defaultValue="India"
                  className="form-input w-full bg-gray-100 border border-gray-300 p-2 rounded"
                  placeholder="Country"
                  type="text"
                />
              </div>
              <div>
                <label className="block mb-2">City</label>
                <input
                  defaultValue="New Delhi"
                  className="form-input w-full bg-gray-100 border border-gray-300 p-2 rounded"
                  placeholder="City"
                  type="text"
                />
              </div>
              <div>
                <label className="block mb-2">Postal Code</label>
                <input
                  defaultValue="110025"
                  className="form-input w-full bg-gray-100 border border-gray-300 p-2 rounded"
                  placeholder="Postal Code"
                  type="text"
                />
              </div>
              {/* <div className="col-span-2">
                <label className="block mb-2">About Me</label>
                <textarea
                  defaultValue="I am John Doe and I love to code."
                  className="form-textarea w-full bg-gray-100 border border-gray-300 p-2 rounded"
                  placeholder="About Me"
                  rows="4"
                ></textarea>
              </div> */}
            </div>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
              type="submit"
            >
              Update Profile
            </button>
          </form>
        </div>
      </div>
      
    </div>
  </div>

  <div className="mt-6">
  <Footer/>
  </div>
 
</>

  );
};

export default Profile;



