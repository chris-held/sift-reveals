import React from 'react';

const Mission = () => (
  <div
    className="max-w-full bg-no-repeat bg-cover p-8"
    style={{ backgroundImage: 'url(https://picsum.photos/1200/400)' }}
  >
    <div className="m-20 p-12 max-w-xl text-center bg-white40">
      <h1 className="uppercase mb-6">Sift</h1>
      <p className="italic text-xl">verb</p>
      <p className="italic my-4 text-xl">
        to isolate that which is most important or useful
      </p>

      <p>
        My mission is to redesign and organize spaces on a thoughtful budget
        while focusing on low environmental impacts. Zero cost design and using
        what you already own in a new and creative way simulates the senses and
        brings peace to a home. Keep the joy, sift out the rest.
      </p>
    </div>
  </div>
);

export default Mission;
