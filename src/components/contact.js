import React, { useState } from 'react';

const ContactStates = Object.freeze({
  UNSUBMITTED: 0,
  SUBMITTING: 1,
  SUCCESS: 2,
  ERROR: 3,
});

const Contact = () => {
  const [contactState, setContactState] = useState(ContactStates.UNSUBMITTED);
  return (
    <div className="mx-auto mt-10 max-w-3xl">
      <p className="text-center mb-4 text-lg">
        Ready to take the next step, or have a question? Feel free to reach out!
      </p>
      <div className="flex justify-center">
        <a
          href="https://www.instagram.com/sift_reveals/"
          target="_blank"
          className="w-8"
        >
          <svg
            width="24"
            height="24"
            data-name="instagram"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 64 64"
          >
            <title>instagram icon</title>
            <path
              data-name="icon"
              d="M21.34,32A10.67,10.67,0,1,1,32,42.67,10.67,10.67,0,0,1,21.34,32m-5.77,0A16.43,16.43,0,1,0,32,15.57,16.42,16.42,0,0,0,15.57,32M45.24,14.92a3.84,3.84,0,1,0,3.84-3.84h0a3.84,3.84,0,0,0-3.84,3.84M19.07,58.05A17.61,17.61,0,0,1,13.13,57a10.08,10.08,0,0,1-3.68-2.4,9.73,9.73,0,0,1-2.39-3.68A17.74,17.74,0,0,1,6,44.93C5.8,41.56,5.77,40.55,5.77,32s0-9.56.18-12.93a17.8,17.8,0,0,1,1.11-5.94A9.85,9.85,0,0,1,9.45,9.45a9.75,9.75,0,0,1,3.68-2.4A17.61,17.61,0,0,1,19.07,6c3.38-.15,4.39-.19,12.93-.19s9.56,0,12.93.19a17.87,17.87,0,0,1,5.94,1.1,10,10,0,0,1,3.69,2.4A9.77,9.77,0,0,1,57,13.13a17.55,17.55,0,0,1,1.1,5.94c.15,3.37.19,4.38.19,12.93s0,9.56-.19,12.93A17.55,17.55,0,0,1,57,50.87,10.59,10.59,0,0,1,50.87,57a17.55,17.55,0,0,1-5.94,1.1c-3.37.15-4.38.18-12.93.18s-9.56,0-12.93-.18M18.81.19A23.59,23.59,0,0,0,11,1.68,15.67,15.67,0,0,0,5.37,5.37,15.67,15.67,0,0,0,1.68,11,23.59,23.59,0,0,0,.19,18.81C0,22.22,0,23.31,0,32s0,9.78.19,13.19A23.59,23.59,0,0,0,1.68,53,16.34,16.34,0,0,0,11,62.32a23.64,23.64,0,0,0,7.77,1.49C22.22,64,23.31,64,32,64s9.78,0,13.19-.19A23.59,23.59,0,0,0,53,62.32,16.34,16.34,0,0,0,62.32,53a23.59,23.59,0,0,0,1.49-7.77C64,41.78,64,40.69,64,32s0-9.78-.19-13.19A23.59,23.59,0,0,0,62.32,11a15.75,15.75,0,0,0-3.69-5.67A15.75,15.75,0,0,0,53,1.68,23.58,23.58,0,0,0,45.2.19C41.78,0,40.69,0,32,0S22.22,0,18.81.19"
            ></path>
          </svg>
        </a>
        <a
          href="https://www.facebook.com/Sift-Reveals-110133473810018/?modal=admin_todo_tour"
          target="_blank"
          className="w-8 ml-4"
        >
          <svg
            width="24"
            height="24"
            data-name="facebook"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 33.24 64"
          >
            <title>facebook icon</title>
            <path
              data-name="icon"
              d="M21.57,64V34.81h9.8l1.47-11.38H21.57V16.17c0-3.3.92-5.54,5.64-5.54h6V.45A80.21,80.21,0,0,0,24.46,0C15.77,0,9.82,5.3,9.82,15v8.39H0V34.81H9.82V64Z"
            ></path>
          </svg>
        </a>
      </div>
      {contactState === ContactStates.UNSUBMITTED ? (
        <form
          className="bg-white px-8 pt-6 pb-8 mb-4"
          name="contact"
          method="post"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <input type="hidden" name="form-name" value="contact" />
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="username"
            >
              Email Address
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              name="email"
              type="email"
              placeholder=""
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              How Can I Help?
            </label>
            <textarea
              name="message"
              rows="4"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="description"
              placeholder=""
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
              // onClick={() => {
              //   //TODO: actually do something
              //   setContactState(ContactStates.SUCCESS);
              // }}
            >
              Submit
            </button>
          </div>
        </form>
      ) : null}
      {contactState === ContactStates.SUCCESS ? (
        <div className="pb-10">
          <p className="m-8 text-center">
            Thanks for your interest! I'll contact you within 24 hours.
          </p>
        </div>
      ) : null}
    </div>
  );
};

export default Contact;
