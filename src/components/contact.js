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
      {contactState === ContactStates.UNSUBMITTED ? (
        <form class="bg-white px-8 pt-6 pb-8 mb-4">
          <div class="mb-4">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="username"
            >
              Email Address
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="text"
              placeholder=""
            />
          </div>
          <div class="mb-6">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="password"
            >
              How Can I Help?
            </label>
            <textarea
              rows="4"
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="description"
              placeholder=""
            />
          </div>
          <div class="flex items-center justify-between">
            <button
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={() => {
                //TODO: actually do something
                setContactState(ContactStates.SUCCESS);
              }}
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
