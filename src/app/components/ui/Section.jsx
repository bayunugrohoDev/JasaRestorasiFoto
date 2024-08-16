import React from "react";

const Section = ({ title, subtitle, children }) => {
  return (
    <div className="mx-auto px-6 pt-4 text-center container">
      <h2 className="mb-2 font-bold text-3xl text-center">{title}</h2>
      <div className="mb-14 text-slate-500">{subtitle}</div>
      {children}
    </div>
  );
};

export default Section;
