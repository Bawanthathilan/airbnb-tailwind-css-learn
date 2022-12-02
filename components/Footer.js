import React from "react";

const Footer = () => {
  return (
    <div className=" bg-gray-200 py-10">
      <div className="flex items-center justify-center">
        <h1 className="text-lg">
          {new Date().getFullYear()} Copyright / Airbnb
        </h1>
      </div>
    </div>
  );
};

export default Footer;
