import React from 'react';

const Services = () => (
  <div className="mx-auto mt-10" style={{ maxWidth: 1520 }}>
    <h2 className="text-center">Sift Services</h2>
    <div class="grid grid-cols-3 gap-4 p-10 pb-0">
      <div class="col-span-3 md:col-span-1 text-center bg-lightblue">
        <img
          src="https://i.picsum.photos/id/9/600/500.jpg"
          className="w-full"
        />
        <div className="p-10">
          <h3 className="my-4">Consultation</h3>
          <p className="mb-10">
            Lets get together for a free consultation where we can make a plan
            and view the spaces that need a redesign.
          </p>
        </div>
      </div>
      <div class="col-span-3 md:col-span-1 text-center bg-lightblue">
        <img
          src="https://i.picsum.photos/id/1073/600/500.jpg"
          className="w-full"
        />
        <div className="p-10">
          <h3 className="my-4">Organization Services</h3>
          <p className="mb-10">
            Together we will identify the things that should be kept and those
            that can be re-purposed or donated.
          </p>
        </div>
      </div>
      <div class="col-span-3 md:col-span-1 text-center bg-lightblue">
        <img
          src="https://i.picsum.photos/id/529/600/500.jpg"
          className="w-full"
        />
        <div className="p-10">
          <h3 className="my-4">Design Services</h3>
          <p className="mb-10">
            Floor plans and 3D drawings made to suit your needs with creative
            touches that will delight your senses.
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default Services;
