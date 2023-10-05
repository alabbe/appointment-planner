import React from "react";

export const Tile = (props) => {

  const tile = Object.values(props.description).map((value, index) => (
    <p key={index} className="tile">
      {value}
    </p>
  ));

  return (
    <div className="tile-container">
      <p className="tile-title">{props.name}</p>
      {tile}
    </div>
  );
};
