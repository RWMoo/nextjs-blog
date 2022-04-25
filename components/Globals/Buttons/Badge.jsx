import React from "react";

const Badge = ({name}) => {
  return (
    <div className="font-display inline-block px-2 text-xs py-1 rounded-md bg-gray-100 capitalize">
      <p>{name}</p>
    </div>
  );
};

export default Badge;
