import React from "react";
import { FaStar } from "react-icons/fa";

const Card = ({ icon, title, description = "" }) => {
  return (
    <div className="flex flex-col items-center gap-4 bg-white shadow-sm p-6 rounded-lg">
      <div className="flex justify-center items-center bg-blue-500 rounded-md w-12 h-12">
        {icon}
      </div>
      <h3 className="font-semibold text-2xl">{title}</h3>
      <div className="text-slate-500">{description}</div>
    </div>
  );
};

export default Card;
